import { test } from "node:test";
import assert from "node:assert/strict";
import { deliverContact, CONTACT_ENDPOINT } from "../src/contactDelivery.ts";
const message = () => {
  const data = new FormData();
  data.set("email", "test@example.test");
  data.set("message", "A test message, never transmitted.");
  return data;
};
test("posts to the configured endpoint with JSON response negotiation and abort support", async () => {
  const data = message(),
    signal = new AbortController().signal;
  const result = await deliverContact(data, signal, async (url, options) => {
    assert.equal(url, CONTACT_ENDPOINT);
    assert.equal(url, "https://formspree.io/f/moeelprg");
    assert.equal(options.method, "POST");
    assert.equal(options.body, data);
    assert.equal(options.signal, signal);
    assert.equal(options.headers.Accept, "application/json");
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  });
  assert.deepEqual(result, { ok: true });
});
test("maps server validation fields to safe visible messages", async () => {
  const result = await deliverContact(
    message(),
    new AbortController().signal,
    async () =>
      new Response(
        JSON.stringify({
          errors: [
            { field: "email", message: "provider detail" },
            { field: "unknown", message: "private detail" },
          ],
        }),
        { status: 422 },
      ),
  );
  assert.equal(result.ok, false);
  assert.ok(result.fields.email);
  assert.equal(result.fields.unknown, undefined);
  assert.equal(JSON.stringify(result).includes("private detail"), false);
});
test("rate limits are errors rather than false success", async () => {
  const r = await deliverContact(
    message(),
    new AbortController().signal,
    async () => new Response("{}", { status: 429 }),
  );
  assert.equal(r.ok, false);
  assert.match(r.message, /wait/i);
});
test("non-JSON error responses have a usable fallback", async () => {
  const r = await deliverContact(
    message(),
    new AbortController().signal,
    async () => new Response("<html>failure</html>", { status: 500 }),
  );
  assert.equal(r.ok, false);
  assert.match(r.message, /could not be sent/);
});
test("network errors propagate without automatic retries", async () => {
  let attempts = 0;
  await assert.rejects(
    deliverContact(message(), new AbortController().signal, async () => {
      attempts++;
      throw new TypeError("offline");
    }),
  );
  assert.equal(attempts, 1);
});
test("aborted requests propagate and are not reported as successful", async () => {
  const c = new AbortController();
  c.abort();
  await assert.rejects(
    deliverContact(message(), c.signal, async (_u, o) => {
      o.signal.throwIfAborted();
      return new Response("{}");
    }),
    { name: "AbortError" },
  );
});
