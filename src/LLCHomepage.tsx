import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  PanelsTopLeft,
  FlaskConical,
} from "lucide-react";
import ProjectShowcase from "./ProjectShowcase";

const capabilities = [
  {
    icon: Code2,
    title: "Products with a purpose",
    text: "Web platforms and useful tools, built around what people actually need to get done.",
  },
  {
    icon: Layers3,
    title: "Systems that connect",
    text: "Backends, APIs, and connected devices that turn separate pieces into a working whole.",
  },
  {
    icon: PanelsTopLeft,
    title: "Interfaces with care",
    text: "Clear websites and thoughtful interfaces, with attention to the small details along the way.",
  },
  {
    icon: FlaskConical,
    title: "Product exploration",
    text: "New product concepts, developed through working prototypes, practical testing, and focused iteration.",
  },
];
export default function MaestralHomepage() {
  return (
    <div className="maestral-site">
      <header className="site-header">
        <div className="page-width header-inner">
          <a
            href="#top"
            className="brand"
            aria-label="Maestral Technologies home"
          >
            <span className="brand-mark" aria-hidden="true">
              m<span>.</span>
            </span>
            <span>Maestral Technologies</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">
              Contact <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="top">
        <section className="studio-hero">
          <div className="page-width hero-layout">
            <div className="hero-copy">
              <p className="studio-eyebrow">
                <span /> Maestral Technologies · Software & systems
              </p>
              <h1>
                Digital products.
                <br />
                Built with <em>purpose.</em>
              </h1>
              <p className="hero-description">
                Maestral Technologies builds digital products and connected
                systems. From wedding platforms and creator tools to brewery
                management and wearable technology — thoughtful design meets
                practical engineering.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="studio-button primary">
                  Explore the projects{" "}
                  <ArrowDownRight size={19} aria-hidden="true" />
                </a>
                <a href="#contact" className="text-link">
                  Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
              <p className="maker-note">
                <span className="maker-avatar" aria-hidden="true">
                  m.
                </span>
                Built by Maestral. Designed for real use.
              </p>
            </div>
            <figure className="hero-photograph">
              <img
                src="/images/city-perspective.jpg"
                alt="Glass towers framing the Gherkin in London's skyline"
                width="1024"
                height="683"
                fetchPriority="high"
              />
              <figcaption>
                <span>Maestral Technologies</span>
                <b>A broader perspective.</b>
              </figcaption>
              <span className="photo-spark" aria-hidden="true">
                ✳
              </span>
            </figure>
          </div>
        </section>
        <ProjectShowcase />
        <section id="capabilities" className="studio-capabilities">
          <div className="page-width section-space">
            <div className="capabilities-heading architectural-heading">
              <img
                src="/images/architecture.jpg"
                alt=""
                width="854"
                height="1280"
                loading="lazy"
                aria-hidden="true"
              />
              <div className="architectural-copy">
                <p className="section-kicker">Capabilities</p>
                <h2>
                  From “what if”
                  <br />
                  to <em>“here it is.”</em>
                </h2>
                <p>Design, development, and the work that connects them.</p>
              </div>
            </div>
            <div className="capability-cards">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article key={title} className="capability-card">
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="studio-contact">
          <div className="page-width contact-layout">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>
                Have something
                <br />
                <em>in mind?</em>
              </h2>
              <p>
                For product development, technical partnerships, or a project
                worth exploring, get in touch with Maestral Technologies.
              </p>
            </div>
            <a
              className="contact-email"
              href="mailto:business@maestraltech.com"
            >
              <span>Get in touch</span>
              <b>business@maestraltech.com</b>
              <ArrowUpRight size={26} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="studio-footer">
        <div className="page-width footer-inner">
          <div>
            <a href="#top" className="footer-brand">
              Maestral Technologies<span>.</span>
            </a>
            <p>Digital products. Connected systems. Built by Maestral.</p>
          </div>
          <div className="footer-details">
            <a href="#privacy-policy" className="footer-privacy-link">
              Privacy Policy
            </a>
            <p>© {new Date().getFullYear()} Maestral Technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
