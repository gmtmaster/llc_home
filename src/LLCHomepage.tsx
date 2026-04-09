export default function LLCCorporateHomepage() {
  const capabilities = [
    {
      title: "Digital Products",
      text: "Independent software products and tools developed with a focus on utility, structure, and long-term usability.",
    },
    {
      title: "Internal Systems",
      text: "Operational dashboards, workflows, and technical systems built to support real execution rather than presentation alone.",
    },
    {
      title: "Brand & Web Presence",
      text: "Clean digital identities, landing pages, and web experiences designed to communicate seriousness and clarity.",
    },
    {
      title: "Venture Buildout",
      text: "Selective incubation of private ideas, products, and commercial concepts with disciplined scope and clear direction.",
    },
  ];

  const projects = [
    {
      number: "01",
      name: "Trace",
      type: "Outreach Software",
      status: "Extension-first product",
      description:
        "A focused outreach tool built around Reddit messaging workflows, extension-first validation, and a more disciplined approach to outbound software.",
      tags: ["Product", "Automation", "Lead Generation"],
      accent: "red",
      visual: "trace",
    },
    {
      number: "02",
      name: "Uplinked",
      type: "Creator Platform",
      status: "SaaS platform",
      description:
        "A creator-facing platform centered on profile infrastructure, monetization, analytics, subscriptions, and digital publishing workflows.",
      tags: ["SaaS", "Payments", "Analytics"],
      accent: "blue",
      visual: "uplinked",
    },
    {
      number: "03",
      name: "Brew Notes",
      type: "Operational Software",
      status: "Internal product system",
      description:
        "A brewing operations system for batch tracking, process visibility, inventory flow, and production-oriented internal tooling.",
      tags: ["Operations", "Dashboard", "Workflow"],
      accent: "gold",
      visual: "brew",
    },
  ];

  function ProjectVisual({ type }) {
    if (type === "trace") {
      return (
        <div className="relative h-56 overflow-hidden border-b border-[#c9d5e3] bg-[linear-gradient(135deg,#163d6b_0%,#1d4d87_62%,#274f80_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,194,48,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(178,34,52,0.2),transparent_35%)]" />
          <div className="absolute left-6 top-6 w-[72%] border border-white/15 bg-white/10 p-4 backdrop-blur-[2px]">
            <div className="mb-3 h-2 w-24 bg-[#f4cf45]" />
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/70" />
              <div className="h-2 w-[88%] bg-white/45" />
              <div className="h-2 w-[72%] bg-white/25" />
            </div>
          </div>
          <div className="absolute bottom-6 right-6 w-[48%] border border-white/15 bg-[#102d4d]/85 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2 w-20 bg-white/60" />
              <div className="h-2 w-10 bg-[#b22234]" />
            </div>
            <div className="space-y-2">
              <div className="h-9 border border-white/10 bg-white/5" />
              <div className="h-9 border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      );
    }

    if (type === "uplinked") {
      return (
        <div className="relative h-56 overflow-hidden border-b border-[#c9d5e3] bg-[linear-gradient(135deg,#edf4fb_0%,#dce8f4_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,77,135,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(242,194,48,0.18),transparent_34%)]" />
          <div className="absolute left-7 top-7 w-[58%] rounded-[2px] border border-[#bdd0e2] bg-white p-4 shadow-[0_8px_24px_rgba(22,61,107,0.08)]">
            <div className="mb-4 flex gap-2">
              <div className="h-2 w-2 rounded-full bg-[#b22234]" />
              <div className="h-2 w-2 rounded-full bg-[#f2c230]" />
              <div className="h-2 w-2 rounded-full bg-[#1d4d87]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 bg-[#e9f0f7]" />
              <div className="h-16 bg-[#d8e6f4]" />
              <div className="h-16 bg-[#e9f0f7]" />
            </div>
            <div className="mt-3 h-2 w-[70%] bg-[#204d83]" />
            <div className="mt-2 h-2 w-[52%] bg-[#89a7c6]" />
          </div>
          <div className="absolute bottom-7 right-7 w-[34%] rounded-[2px] border border-[#bdd0e2] bg-white p-4 shadow-[0_8px_24px_rgba(22,61,107,0.08)]">
            <div className="h-20 bg-[linear-gradient(180deg,#1d4d87_0%,#335d91_100%)]" />
            <div className="mt-3 h-2 w-[76%] bg-[#204d83]" />
            <div className="mt-2 h-2 w-[54%] bg-[#9ab2cc]" />
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-56 overflow-hidden border-b border-[#c9d5e3] bg-[linear-gradient(135deg,#fffdf3_0%,#f7f1d6_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,34,52,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(22,61,107,0.16),transparent_34%)]" />
        <div className="absolute left-7 top-7 w-[62%] border border-[#e6d896] bg-white/90 p-4 shadow-[0_10px_28px_rgba(22,61,107,0.08)]">
          <div className="mb-3 flex gap-2">
            <div className="h-8 flex-1 bg-[#17375e]" />
            <div className="h-8 w-14 bg-[#f2c230]" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="h-14 bg-[#eef2f6]" />
            <div className="h-14 bg-[#dce6f0]" />
            <div className="h-14 bg-[#eef2f6]" />
            <div className="h-14 bg-[#dce6f0]" />
          </div>
        </div>
        <div className="absolute bottom-7 right-7 w-[42%] border border-[#e6d896] bg-[#17375e] p-4">
          <div className="space-y-2">
            <div className="h-2 w-[82%] bg-white/75" />
            <div className="h-2 w-[62%] bg-white/40" />
            <div className="mt-4 h-16 bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef2f6] text-[#1a2c44]">
      <div className="border-b border-[#294e7a] bg-[#163d6b] text-white">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <div>
              
              <p className="font-serif text-xl tracking-[0.04em] text-white">Maestral Technologies</p>
            </div>
          </div>

          <nav className="hidden items-center gap-0 md:flex">
            {[
              ["Home", "#top"],
              ["Projects", "#projects"],
              ["Capabilities", "#capabilities"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`px-5 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-[#1d4d87] ${index > 0 ? "border-l border-white/10" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-[4px] w-full bg-[#f2c230]" />
      </div>

      <main id="top">
        <section className="border-b border-[#c6d2e0] bg-white">
          <div className="mx-auto grid w-full max-w-[1280px] gap-0 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div className="py-16 pr-0 lg:border-r lg:border-[#d5deea] lg:py-20 lg:pr-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b22234]">
                Showcase • Systems • Product Direction
              </p>

              <h1 className="max-w-4xl font-serif text-4xl leading-[1.06] text-[#14345a] sm:text-5xl lg:text-6xl">
                A private company building digital products, operational systems, and focused web assets.
              </h1>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#4d6076]">
                This page presents selected project directions, current capabilities, and the overall operating style behind the company. The design stays formal, restrained, and intentionally American-corporate in tone.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center border border-[#163d6b] bg-[#163d6b] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#1d4d87]"
                >
                  View Selected Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-[#f2c230] bg-[#f7d252] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#17375e] transition hover:bg-[#f0c63a]"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="py-16 lg:py-20 lg:pl-14">
              <div className="border border-[#c9d5e3] bg-[#f7f9fc]">
                <div className="border-b border-[#c9d5e3] bg-[#163d6b] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4cf45]">Company Snapshot</p>
                </div>

                <div className="divide-y divide-[#d9e1ea]">
                  {[
                    ["Selected Work", "03 Active Project Directions"],
                    ["Core Model", "Private Build and Venture Development"],
                    ["Primary Output", "Products, Systems, and Digital Infrastructure"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[150px_1fr] gap-4 px-6 py-4">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1f4f89]">{label}</p>
                      <p className="text-[15px] leading-7 text-[#223a57]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-[#c6d2e0] bg-[#eef2f6]">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b22234]">Selected Projects</p>
              <h2 className="mt-3 font-serif text-3xl text-[#14345a] sm:text-4xl">A more visual showcase of current product and system directions.</h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#4d6076]">
                Instead of plain information rows, the projects are presented as structured showcase cards with preview panels, clearer hierarchy, and a more portfolio-like feel.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="overflow-hidden border border-[#c9d5e3] bg-white shadow-[0_8px_24px_rgba(20,52,90,0.05)]"
                >
                  <ProjectVisual type={project.visual} />

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4d87]">{project.type}</p>
                        <h3 className="mt-2 font-serif text-[30px] leading-none text-[#16365f]">{project.name}</h3>
                      </div>
                      <span className="text-sm font-semibold tracking-[0.18em] text-[#b22234]">{project.number}</span>
                    </div>

                    <div className="mt-5 border-t border-[#d9e1ea] pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4d87]">Status</p>
                      <p className="mt-2 text-[15px] leading-7 text-[#223a57]">{project.status}</p>
                    </div>

                    <p className="mt-5 text-[15px] leading-8 text-[#4b5f76]">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#ecd98e] bg-[#fff7d7] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#815d05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-b border-[#c6d2e0] bg-white">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b22234]">Capabilities</p>
              <h2 className="mt-3 font-serif text-3xl text-[#14345a] sm:text-4xl">The work is presented simply, without filler or startup theater.</h2>
            </div>

            <div className="mt-10 grid gap-0 border border-[#c9d5e3] md:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-[#f8fbfe] p-7 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""} border-[#c9d5e3]`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4d87]">Area {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-serif text-2xl text-[#16365f]">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#4b5f76]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#eef2f6]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b22234]">Contact</p>
              <h2 className="mt-3 font-serif text-3xl text-[#14345a] sm:text-4xl">Business inquiries and project discussions.</h2>
            </div>

            <div className="grid gap-0 border border-[#c9d5e3] bg-white">
              {[
                ["Office", "Maestral Technologies LLC"],
                ["Email", "business@maestraltech.com"],
                ["Focus", "Digital products, systems, and venture development"],
                ["Availability", "Direct inquiry only"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[160px_1fr] border-b border-[#d9e1ea] px-6 py-4 last:border-b-0">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1d4d87]">{label}</p>
                  <p className="text-[15px] leading-7 text-[#223a57]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f2c230] bg-[#163d6b] text-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#f4cf45]">Maestral Technologies LLC</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
              Private company showcase presented in a restrained American corporate visual language.
            </p>
          </div>

          <div className="grid gap-8 text-sm leading-7 text-white/88 sm:grid-cols-2 lg:text-left">
            <div>
              <p className="font-semibold uppercase tracking-[0.12em] text-[#f4cf45]">Business Contact</p>
              <p className="mt-2">business@maestraltech.com</p>
              <p>Direct inquiry only</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.12em] text-[#f4cf45]">Site Policies</p>
              <p className="mt-2">Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#102d4d]">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-4 text-xs leading-6 text-white/70 lg:px-10">
            © 2026 Maestral Technologies LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
