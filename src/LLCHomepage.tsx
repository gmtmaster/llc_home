import React from "react";
import {
  ArrowUpRight,
  Dot,
  Mail,
  MapPin,
  Sparkles,
  Boxes,
  Layers3,
  Activity,
  Shield,
} from "lucide-react";

interface Project {
  name: string;
  status: string;
  description: string;
  tag: string;
}

const projects: Project[] = [
  {
    name: "Trace",
    status: "In validation",
    description:
      "An outreach software product focused on Reddit prospecting, DM workflow design, and scalable lead generation systems.",
    tag: "Outreach SaaS",
  },
  {
    name: "BrewNotes",
    status: "Active build",
    description:
      "A brewery operations platform for recipes, planning, fermentation tracking, and production visibility.",
    tag: "Vertical software",
  },
  {
    name: "Uplinked",
    status: "Built",
    description:
      "A creator infrastructure product exploring profile systems, subscriptions, lightweight publishing, and monetization.",
    tag: "Creator tools",
  },
  {
    name: "Labs",
    status: "R&D",
    description:
      "A stream of smaller software bets, internal tools, and niche product experiments with long-term upside.",
    tag: "Experimental systems",
  },
];

const pillars = [
  {
    icon: Layers3,
    title: "Focused products",
    text: "Small surface area, clear positioning, and category-specific execution.",
  },
  {
    icon: Activity,
    title: "Built to compound",
    text: "Each product is designed as a durable software asset, not a one-off project.",
  },
  {
    icon: Shield,
    title: "Independent by default",
    text: "Bootstrapped, design-conscious, and optimized for long-term control.",
  },
];

const notes = [
  "Design-led product development",
  "Clear categories over feature sprawl",
  "Neutral systems with selective brand accents",
  "Built to scale without losing taste",
];

export default function LLCHomepageDraft(): JSX.Element {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(214,195,161,0.10),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:68px_68px]" />

        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8 xl:px-10">
          <header className="flex items-center justify-between border-b border-white/10 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-medium text-[var(--accent)]">
                GL
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.18em] text-[var(--text)]">
                  Greyline Labs
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Umbrella company for software products
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-[var(--text-soft)] md:flex">
              <a href="#projects" className="transition hover:text-[var(--text)]">
                Projects
              </a>
              <a href="#platform" className="transition hover:text-[var(--text)]">
                Platform
              </a>
              <a href="#approach" className="transition hover:text-[var(--text)]">
                Approach
              </a>
              <a href="#contact" className="transition hover:text-[var(--text)]">
                Contact
              </a>
            </nav>
          </header>

          <section className="grid min-h-[calc(100vh-88px)] items-center gap-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] lg:gap-16">
            <div className="max-w-[720px]">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[var(--text-soft)] backdrop-blur">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                Software products, systems, and long-term digital assets
              </div>

              <h1 className="max-w-[760px] text-[3.2rem] font-medium leading-[0.92] tracking-[-0.05em] text-[var(--text)] md:text-[5.5rem] xl:text-[6.3rem]">
                Building focused
                <span className="block text-[var(--text-muted)]">technology products</span>
                <span className="block text-[var(--accent)]">with long-term brand value.</span>
              </h1>

              <div className="mt-8 max-w-[620px] space-y-4 text-base leading-8 text-[var(--text-soft)] md:text-lg">
                <p>
                  Greyline Labs is a small independent company building niche software,
                  product infrastructure, and experimental systems under one roof.
                </p>
                <p>
                  We prefer sharp positioning, clean execution, and products that feel modern without becoming noisy.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
                >
                  Explore projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-white/[0.07]"
                >
                  Get in touch
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-[var(--text-muted)]">Model</p>
                  <p className="mt-3 text-xl font-medium tracking-tight">Independent</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-[var(--text-muted)]">Focus</p>
                  <p className="mt-3 text-xl font-medium tracking-tight">Software assets</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-[var(--text-muted)]">Approach</p>
                  <p className="mt-3 text-xl font-medium tracking-tight">Design + systems</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-[var(--accent-soft)] blur-3xl lg:block" />
              <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-4 shadow-[var(--shadow)] backdrop-blur md:p-5">
                <div className="rounded-[28px] border border-white/10 bg-[#10100f]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Boxes className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Product portfolio</p>
                        <p className="text-xs text-[var(--text-muted)]">Live company snapshot</p>
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[var(--text-muted)]">
                      Internal
                    </div>
                  </div>

                  <div className="grid gap-3 p-4">
                    {projects.slice(0, 3).map((project) => (
                      <div
                        key={project.name}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--accent-border)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-[var(--text-muted)]">
                              {project.tag}
                            </div>
                            <h3 className="mt-3 text-lg font-medium">{project.name}</h3>
                          </div>
                          <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] text-[var(--accent)]">
                            {project.status}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-2">
                    <div className="bg-[#10100f] px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                        Structure
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-soft)]">
                        Umbrella company for products, experiments, and software IP.
                      </p>
                    </div>
                    <div className="bg-[#10100f] px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                        Direction
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-soft)]">
                        Calm brand language, technical execution, selective ambition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="platform" className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-px bg-white/10 px-6 md:px-8 xl:px-10 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-[var(--bg)] px-0 py-0">
                <div className="h-full px-6 py-8 md:px-8">
                  <Icon className="h-5 w-5 text-[var(--accent)]" />
                  <h3 className="mt-5 text-xl font-medium tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--text-soft)] md:text-base">
                    {pillar.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-8 md:py-24 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Selected projects
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              A portfolio of focused software bets.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-8 text-[var(--text-soft)]">
              Different categories, same philosophy: clear problem framing, lean product design, and room to grow.
            </p>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group grid gap-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[var(--accent-border)] hover:bg-white/[0.05] md:grid-cols-[88px_minmax(0,1fr)] md:p-7"
              >
                <div className="text-sm text-[var(--text-muted)]">0{index + 1}</div>

                <div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent)]">
                        {project.tag}
                      </div>
                      <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-[2rem]">
                        {project.name}
                      </h3>
                    </div>

                    <div className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[var(--text-muted)]">
                      {project.status}
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-soft)] md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm text-[var(--text)]">
                    Project overview
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto w-full max-w-[1280px] px-6 py-4 md:px-8 md:py-8 xl:px-10">
        <div className="grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.035] p-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Approach</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Less noise. More signal.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[var(--text-soft)]">
            <p>
              This is not positioned as a large agency with endless services. It is a home for software products,
              experiments, and digital infrastructure built under one operating umbrella.
            </p>
            <p>
              The visual language stays restrained, the technology stays modern, and the products are allowed to carry the story.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-8 md:py-24 xl:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {notes.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5 text-sm text-[var(--text-soft)]"
            >
              <div className="mb-3 h-1 w-10 rounded-full bg-[var(--accent)]/70" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-14 md:px-8 md:py-20 xl:grid-cols-[1fr_auto] xl:items-end xl:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Interested in the company,
              <span className="block text-[var(--text-muted)]">the products, or what comes next?</span>
            </h2>
          </div>

          <div className="space-y-4 text-sm text-[var(--text-soft)]">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[var(--accent)]" />
              <span>adam@greyline.me</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[var(--accent)]" />
              <span>Sheridan, WY</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
