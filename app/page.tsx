import Image from "next/image";
import Link from "next/link";
import DemoCTA from "./components/demo-cta";

const GITHUB_ORG_URL = "https://github.com/OpsOrch";
const DEMO_URL = "/opsorch-demo.mp4";
const BLOG_POST_HREF = "/blog/operations-are-fragmented";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="opsorch-card flex flex-col gap-8 border-[#2c4c52] p-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-3">
              <Image src="/OpsOrch.png" alt="OpsOrch logo" width={56} height={56} className="rounded-2xl" priority />
              <p className="opsorch-tag">Operations Orchestrator</p>
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">The operational control plane for modern engineering teams</h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Coordinate releases, incidents, and operational workflows across your existing tools - with context, approvals, and
              traceability.
            </p>
            <div className="flex flex-wrap gap-4">
              <DemoCTA videoSrc={DEMO_URL} label="Watch the OpsOrch demo" />
              <Link
                href="/docs/quick-start"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14454e]"
              >
                Quick Start
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14454e]"
              >
                View on GitHub
                <span aria-hidden>↗</span>
              </Link>
            </div>
            <p className="text-sm text-slate-400">Runs locally. No production credentials required.</p>
          </div>
        </header>

        <section className="opsorch-card border-[#1f3c43] p-8">
          <div className="max-w-3xl space-y-3">
            <p className="opsorch-tag">What It Does</p>
            <h2 className="text-3xl font-semibold text-white">Ops work doesn&apos;t live in one tool</h2>
            <p className="text-base text-slate-300">
              Releases, incidents, investigations, and routine checks all require decisions across multiple systems. OpsOrch coordinates
              these workflows without replacing the tools you already use.
            </p>
          </div>
        </section>

        <section className="opsorch-card border-[#2c4c52] p-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div className="space-y-2 text-base text-slate-200">
              <p>Signals (logs / metrics / alerts)</p>
              <p aria-hidden className="text-2xl text-[#72e0e0]">
                ↓
              </p>
              <p className="text-lg font-semibold text-white">OpsOrch (context + decisions)</p>
              <p aria-hidden className="text-2xl text-[#72e0e0]">
                ↓
              </p>
              <p>Actions (runbooks / approvals)</p>
              <p aria-hidden className="text-2xl text-[#72e0e0]">
                ↓
              </p>
              <p>Back to tools (Grafana, Datadog, Jira, Argo)</p>
            </div>
            <p className="text-sm font-semibold text-slate-400">One control plane. Many tools.</p>
          </div>
        </section>

        <section className="opsorch-card border-[#1f3c43] p-8">
          <div className="max-w-3xl space-y-4">
            <p className="opsorch-tag">Designed For Real Work</p>
            <h2 className="text-3xl font-semibold text-white">Designed for real operational work</h2>
            <ul className="space-y-2 text-base text-slate-300">
              <li>Default views load with real data</li>
              <li>Copilot answers are inspectable and traceable</li>
              <li>Actions run through explicit workflows, not blind automation</li>
            </ul>
          </div>
        </section>

        <section className="opsorch-card border-[#2c4c52] p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="opsorch-tag">Example</p>
              <h2 className="text-3xl font-semibold text-white">A typical flow</h2>
              <p className="text-lg text-slate-200">&quot;Why did latency spike after the last change?&quot;</p>
              <div className="space-y-2 text-base text-slate-300">
                <p>Copilot correlates signals and shows evidence</p>
                <p>A vetted runbook is suggested</p>
                <p>The action runs with approvals and checkpoints</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#1f3c43] bg-[#0b1113]">
              <Image
                src="/opsorch-copilot-screen.jpg"
                alt="OpsOrch Copilot view showing correlated signals and recommended action"
                width={960}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="opsorch-card opsorch-card--light p-8">
          <div className="max-w-3xl space-y-3">
            <p className="opsorch-tag text-[#3d8f92]">Open</p>
            <h2 className="text-3xl font-semibold text-slate-900">Open by default</h2>
            <p className="text-base text-slate-700">
              OpsOrch is built in the open. Core APIs, adapters, Console, MCP, and Copilot are open source.{" "}
              <Link href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="opsorch-link text-[#0f3b42]">
                Browse the repos ↗
              </Link>
            </p>
          </div>
        </section>

        <section className="opsorch-card border-[#2c4c52] p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl space-y-4">
              <p className="opsorch-tag">From The Blog</p>
              <h2 className="text-3xl font-semibold text-white">Operations Are Fragmented</h2>
              <p className="text-base leading-7 text-slate-300">
                An alert fires in Datadog. Investigation moves to Grafana. Decisions happen in Slack. The rollback runs through Argo.
                Follow-up lands in Jira. Every tool works. The process between them does not.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href={BLOG_POST_HREF}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14454e]"
              >
                Read the post
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#2c4c52] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-[#55cfd0] hover:text-white"
              >
                Browse blog
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#2c4c52] bg-[#0d1416]/50 px-6 py-8 text-center">
          <div className="space-y-3">
            <p className="opsorch-tag">Next Step</p>
            <h2 className="text-3xl font-semibold text-white">See how ops workflows look when they&apos;re first-class</h2>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <DemoCTA videoSrc={DEMO_URL} label="Watch the OpsOrch demo" />
              <Link
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14454e]"
              >
                Browse the repo
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="text-center pb-4">
          <Link href="/about" className="text-sm text-slate-500 hover:text-[#72e0e0] transition">
            About OpsOrch
          </Link>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://opsorch.com/#organization",
                name: "OpsOrch",
                url: "https://opsorch.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://opsorch.com/OpsOrch.png",
                  width: 512,
                  height: 512,
                },
                sameAs: ["https://github.com/OpsOrch"],
              },
              {
                "@type": "SoftwareApplication",
                name: "OpsOrch",
                description:
                  "Unified Ops Platform that stitches together telemetry, incident response, and automation.",
                applicationCategory: "DevOpsTool",
                operatingSystem: "Linux, macOS, Windows",
                url: "https://opsorch.com",
                author: {
                  "@id": "https://opsorch.com/#organization",
                },
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
