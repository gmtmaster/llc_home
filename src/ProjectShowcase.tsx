const previewLabel = (
  <span className="preview-label">Illustrative concept · Sample content</span>
);

function WeddingPreview() {
  return (
    <div
      className="project-preview wedding-preview"
      role="img"
      aria-label="Illustrative wedding website and guest management interface, with sample content"
    >
      <div className="wedding-sheet">
        <div className="mock-topline">
          <span>A & J</span>
          <span>OUR DAY &nbsp; DETAILS &nbsp; RSVP</span>
        </div>
        <div className="wedding-ornament">✳</div>
        <p className="mock-eyebrow">TOGETHER WITH OUR FAMILIES</p>
        <p className="wedding-names">
          Anna <i>&</i> James
        </p>
        <p className="wedding-invite">
          A day to remember.
          <br />A place for every detail.
        </p>
        <div className="wedding-rule" />
        <p className="mock-eyebrow">12 JUNE 2027 · THE GARDEN HOUSE</p>
        <span className="mock-button">JOIN OUR CELEBRATION</span>
      </div>
      <div className="guest-panel">
        <div className="mock-topline">
          <b>Guest overview</b>
          <span>DEMO</span>
        </div>
        <p className="guest-count">
          86 <span>/ 120 confirmed</span>
        </p>
        <div className="mock-progress">
          <span />
        </div>
        <div className="guest-row">
          <span>Guest responses</span>
          <b>View all ↗</b>
        </div>
        <div className="guest-row">
          <span>Anna & Oliver</span>
          <span className="mock-status">Attending</span>
        </div>
        <div className="guest-row">
          <span>Sophie Martin</span>
          <span className="mock-status">Attending</span>
        </div>
      </div>
      {previewLabel}
    </div>
  );
}
function UplinkedPreview() {
  return (
    <a
      className="uplinked-showcase"
      href="/projects/uplinked/showcase.jpeg"
      target="_blank"
      rel="noreferrer"
      aria-label="Open full Uplinked showcase image"
    >
      <img
        src="/projects/uplinked/showcase.jpeg"
        alt="Uplinked creator profiles displayed across a collection of phone mockups"
        loading="lazy"
        width="1536"
        height="864"
      />
      <span className="uplinked-image-caption">
        Uplinked · Creator profiles <span aria-hidden="true">↗</span>
      </span>
    </a>
  );
}
function WearablePreview() {
  const screens = [
    {
      src: "today.png",
      title: "Daily overview",
      alt: "Wearable tracker daily overview with sleep, recovery and strain",
    },
    {
      src: "health.jpeg",
      title: "Health insights",
      alt: "Wearable tracker health overview and biomarkers",
    },
    {
      src: "trends.png",
      title: "Strain & recovery",
      alt: "Wearable tracker weekly strain and recovery trends",
    },
  ];
  return (
    <div className="wearable-gallery project-preview">
      <div className="wearable-screens">
        {screens.map((screen) => (
          <a
            key={screen.src}
            href={`/projects/wearable/${screen.src}`}
            target="_blank"
            rel="noreferrer"
            className="wearable-screen"
            aria-label={`Open ${screen.title} screenshot`}
          >
            <div className="phone-frame">
              <img
                src={`/projects/wearable/${screen.src}`}
                alt={screen.alt}
                loading="lazy"
                className={screen.src === "trends.png" ? "screen-trends" : ""}
              />
            </div>
            <span>
              {screen.title} <span aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
      </div>
      <span className="preview-label">
        Application screenshots · Select to view full image
      </span>
    </div>
  );
}
function BrewPreview() {
  return (
    <div className="project-preview brew-screenshots">
      <div className="brew-image-stack">
        <a
          className="brew-shot brew-shot-dashboard"
          href="/projects/brewos/dashboard.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open full BrewOS brewery dashboard screenshot"
        >
          <img
            src="/projects/brewos/dashboard.png"
            alt="BrewOS brewery dashboard with batches, production volumes, devices and recent brewing activity"
            loading="lazy"
            width="1909"
            height="921"
          />
        </a>
        <a
          className="brew-shot brew-shot-chart"
          href="/projects/brewos/fermentation.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open full BrewOS fermentation chart screenshot"
        >
          <img
            src="/projects/brewos/fermentation.png"
            alt="BrewOS fermentation chart tracking specific gravity, temperature and ABV over time"
            loading="lazy"
            width="1407"
            height="830"
          />
        </a>
      </div>
      <span className="preview-label">BrewOS · Production & fermentation</span>
    </div>
  );
}
export default function ProjectShowcase() {
  return (
    <section id="projects" className="border-b border-[#c6d2e0] bg-[#eef2f6]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected projects</p>
            <h2 className="mt-3 font-serif text-3xl text-[#14345a] sm:text-4xl">
              Products by Maestral.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#4d6076]">
            A portfolio of digital products and connected systems, developed by
            Maestral Technologies.
          </p>
        </div>
        <article
          id="project-wedding"
          className="featured-project project-card mt-10"
        >
          <WeddingPreview />
          <div className="featured-copy">
            <div className="project-index">
              <span>01 / A LITTLE CELEBRATION</span>
              <span>IN DEVELOPMENT</span>
            </div>
            <p className="section-kicker mt-8">Wedding platform</p>
            <h3 className="mt-3 font-serif text-4xl text-[#14345a]">
              Every detail.
              <br />
              One shared place.
            </h3>
            <p className="mt-5 text-[15px] leading-8 text-[#4b5f76]">
              A wedding platform bringing the celebration website, event
              details, and guest responses into a carefully structured
              experience for couples and their guests.
            </p>
            <ul className="feature-list">
              <li>Personal wedding websites</li>
              <li>Guest lists & RSVP workflows</li>
              <li>Event information in one place</li>
            </ul>
            <div className="project-tags">
              <span>Web platform</span>
              <span>Planning</span>
              <span>Guest experience</span>
            </div>
          </div>
        </article>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <article id="project-uplinked" className="project-card">
            <UplinkedPreview />
            <div className="p-6 sm:p-8">
              <div className="project-index">
                <span>02 / A PLACE TO SHARE</span>
              </div>
              <h3 className="mt-3 font-serif text-3xl text-[#14345a]">
                Uplinked
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-[#4b5f76]">
                A home for a creator’s links, content, and audience, with a
                product direction spanning publishing, memberships, and profile
                analytics.
              </p>
              <div className="project-tags">
                <span>Creator tools</span>
                <span>Publishing</span>
                <span>Analytics</span>
              </div>
            </div>
          </article>
          <article id="project-brewos" className="project-card">
            <BrewPreview />
            <div className="p-6 sm:p-8">
              <div className="project-index">
                <span>03 / SOMETHING BREWING</span>
              </div>
              <h3 className="mt-3 font-serif text-3xl text-[#14345a]">
                BrewOS
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-[#4b5f76]">
                Brewery management software bringing production workflows, batch
                tracking, and live fermentation monitoring into one operational
                workspace. RAPT Pill integration connects fermentation telemetry
                with the batch it belongs to.
              </p>
              <div className="project-tags">
                <span>Brewery management</span>
                <span>Batch tracking</span>
                <span>RAPT Pill</span>
                <span>Live fermentation</span>
              </div>
            </div>
          </article>
          <article id="project-wearable" className="project-card md:col-span-2">
            <WearablePreview />
            <div className="p-6 sm:p-8">
              <div className="project-index">
                <span>04 / EVERYDAY SIGNALS</span>
              </div>
              <h3 className="mt-3 font-serif text-3xl text-[#14345a]">
                Cloud-connected wearable
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-[#4b5f76]">
                A wearable data platform exploring device ingestion,
                physiological computation, and a Java / Spring Boot backend for
                cloud-based processing.
              </p>
              <div className="project-tags">
                <span>Java / Spring Boot</span>
                <span>Telemetry</span>
                <span>Cloud</span>
              </div>
            </div>
          </article>
        </div>
        <p className="mt-5 text-xs leading-6 text-[#52657a]">
          The wedding preview is an illustrative concept with sample data.
          Uplinked uses a product showcase image; BrewOS and the wearable
          tracker use application screenshots.
        </p>
      </div>
    </section>
  );
}
