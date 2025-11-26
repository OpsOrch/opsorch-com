import Image from "next/image";
import Link from "next/link";
import DemoCTA from "./components/demo-cta";

const GITHUB_ORG_URL = "https://github.com/OpsOrch";
const DEMO_URL = "/opsorch-demo.mp4";

const repositories = [
  {
    name: "opsorch-core",
    description: "Stateless orchestration layer exposing unified incident, log, metric, ticket, and messaging APIs while loading adapters on demand.",
    focus: "Runtime",
  },
  {
    name: "opsorch-adapter",
    description: "Adapter starter kit with sample providers, plugin entrypoints, and guidance for wiring any external system into OpsOrch.",
    focus: "Starter",
  },
  {
    name: "opsorch-mock-adapters",
    description: "In-process mock providers that seed incidents, logs, metrics, tickets, messaging, services, and secrets for demos and tests.",
    focus: "Mocks",
  },
  {
    name: "opsorch-pagerduty-adapter",
    description: "Production-ready PagerDuty adapter that integrates with PagerDuty REST API v2 for creating, querying, and managing incidents, and discovering services.",
    focus: "PagerDuty",
  },
  {
    name: "opsorch-jira-adapter",
    description: "Production-ready Jira ticket adapter that integrates with Atlassian Jira REST API v3 for creating, querying, and updating issues.",
    focus: "Jira",
  },
  {
    name: "opsorch-mcp",
    description: "Model Context Protocol server that exposes OpsOrch Core HTTP APIs as MCP tools for agents and IDE copilots.",
    focus: "MCP",
  },
];

const pillars = [
  {
    title: "Observe",
    body: "Aggregate telemetry from incidents, logs, and metrics with shared context so responders see the whole picture immediately.",
    metric: "6+ data planes",
  },
  {
    title: "Decide",
    body: "Sort signal from noise, understand impact, and determine the right course of action before anything escalates.",
    metric: "1 source of truth",
  },
  {
    title: "Automate",
    body: "Trigger service owners, create tickets, and kick off remediation steps through adapter integrations and MCP tools.",
    metric: "Minutes to action",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <header className="opsorch-card flex flex-col gap-8 border-[#2c4c52] p-8 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-3">
                <Image src="/OpsOrch.png" alt="OpsOrch logo" width={56} height={56} className="rounded-2xl" priority />
                <p className="opsorch-tag">Unified Ops Platform</p>
              </div>
              <h1 className="text-4xl font-semibold text-white md:text-5xl">Run resilient operations with OpsOrch</h1>
              <p className="max-w-2xl text-lg text-slate-200">
                OpsOrch stitches together telemetry, incident response, and automation so teams can see, decide, and act with
                confidence. It brings every signal and every action point into one calm, cohesive surface where operators can move from detection to resolution without breaking flow.
              </p>
              <div className="flex flex-wrap gap-4">
                <DemoCTA videoSrc={DEMO_URL} />
                <Link
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14454e]"
                >
                  Visit GitHub Org
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          </header>

          <section className="opsorch-grid lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="opsorch-card border-[#1f3c43] p-6">
                <p className="text-sm font-semibold text-[#72e0e0]">{pillar.metric}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{pillar.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{pillar.body}</p>
              </div>
            ))}
          </section>

          <section className="opsorch-card opsorch-card--light p-8">
            <div className="flex flex-col gap-3 border-b border-black/10 pb-6 text-slate-800 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="opsorch-tag text-[#3d8f92]">GitHub</p>
                <h2 className="text-3xl font-semibold text-slate-900">Explore the OpsOrch repositories</h2>
                <p className="text-sm text-slate-600">Everything is open on GitHub-adapt the stack to your own operations.</p>
              </div>
              <Link
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#1f3c43]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0f1c20] shadow-sm transition hover:bg-white"
              >
                github.com/OpsOrch
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {repositories.map((repo) => (
                <Link
                  key={repo.name}
                  href={`${GITHUB_ORG_URL}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 text-left text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#3d8f92] hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">{repo.name}</h3>
                    <span className="rounded-full border border-[#3d8f92] bg-[#e2f8f8] px-3 py-1 text-xs font-semibold text-[#0f1c20]">
                      {repo.focus}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{repo.description}</p>
                  <span className="opsorch-link text-sm text-[#0f3b42]">Open on GitHub ↗</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-[#122328]/70 px-6 py-5 text-center text-sm text-slate-200">
            <p>
              OpsOrch Console and OpsOrch Copilot are still cooking in our private repos—stay tuned.
            </p>
          </section>

          <footer className="text-center text-xs text-slate-400">
            © {currentYear} OpsOrch. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
