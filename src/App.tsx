import { useEffect, useSyncExternalStore } from "react";
import MaestralHomepage from "./LLCHomepage";
import PrivacyNotice from "./PrivacyNotice";
import "./App.css";

function subscribeToLocation(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}
function isPrivacyLocation() {
  return window.location.hash.startsWith("#privacy-");
}
export default function App() {
  const privacy = useSyncExternalStore(
    subscribeToLocation,
    isPrivacyLocation,
    () => false,
  );
  useEffect(() => {
    document.title = privacy
      ? "Privacy Policy — Maestral Technologies"
      : "Maestral Technologies — Products & Systems";
    const anchor = window.location.hash.slice(1);
    const target = document.getElementById(anchor);
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [privacy]);
  return privacy ? <PrivacyNotice /> : <MaestralHomepage />;
}
