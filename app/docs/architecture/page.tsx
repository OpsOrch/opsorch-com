
import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/docs/architecture";

export const metadata: Metadata = {
    title: "OpsOrch Architecture | OpsOrch Documentation",
    description: "Learn how the OpsOrch control plane architecture works, including Core, MCP, Copilot, and Console layers.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "OpsOrch Architecture | OpsOrch Documentation",
        description: "Learn how the OpsOrch control plane architecture works, including Core, MCP, Copilot, and Console layers.",
    },
};

export default function ArchitecturePage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "OpsOrch Architecture",
                        description: "Learn how the OpsOrch control plane architecture works.",
                        url: pageUrl,
                        author: {
                            "@type": "Organization",
                            name: "OpsOrch",
                        },
                    }),
                }}
            />
            <div className="mx-auto max-w-4xl space-y-16">
                <header>
                    <p className="opsorch-tag">Documentation</p>
                    <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                        Architecture
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        OpsOrch consists of four main layers working together to provide a unified operational experience.
                    </p>
                </header>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">System Overview</h2>
                    <div className="mt-6 flex flex-col items-center gap-8 rounded-xl bg-[#0d1416]/50 p-6 md:p-10">
                        {/* Experience Layer */}
                        <div className="w-full text-center">
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Experience Layer</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-4">
                                    <div className="font-semibold text-white">OpsOrch Console</div>
                                    <div className="text-xs text-slate-400">Next.js UI</div>
                                </div>
                                <div className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-4">
                                    <div className="font-semibold text-white">OpsOrch Copilot</div>
                                    <div className="text-xs text-slate-400">LLM Planning Runtime</div>
                                </div>
                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="flex w-full justify-around px-20">
                            <span className="text-slate-600">↓ HTTP</span>
                            <span className="text-slate-600">↓ MCP</span>
                        </div>

                        {/* Tools/Core Layer */}
                        <div className="w-full text-center">
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Orchestration & Tools</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="col-span-1 rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                                    <div className="font-semibold text-white">OpsOrch Core</div>
                                    <div className="text-xs text-slate-400">Go Service • REST APIs • Routing</div>
                                </div>
                                <div className="col-span-1 rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                                    <div className="font-semibold text-white">OpsOrch MCP</div>
                                    <div className="text-xs text-slate-400">MCP Server • Typed Tools</div>
                                </div>
                            </div>
                            {/* Inner connection arrow */}
                            <div className="mt-2 text-xs text-slate-600">
                                ↖ MCP talks to Core HTTP ↗
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-600">↓ Registry Lookup & Plugin Loading</div>

                        {/* Adapter Layer */}
                        <div className="w-full text-center">
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Adapter Layer</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="rounded-lg border border-slate-700 bg-slate-800 p-3">
                                    <div className="text-sm font-medium text-white">In-Process</div>
                                    <div className="text-xs text-slate-500">Go Registry</div>
                                </div>
                                <div className="rounded-lg border border-slate-700 bg-slate-800 p-3">
                                    <div className="text-sm font-medium text-white">Plugins</div>
                                    <div className="text-xs text-slate-500">JSON-RPC / stdio</div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-600">↓ External API Calls</div>

                        {/* Systems Layer */}
                        <div className="w-full text-center">
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">External Systems</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["PagerDuty", "Jira", "GitHub", "Datadog", "Prometheus", "Elasticsearch", "Slack", "Vault"].map(sys => (
                                    <span key={sys} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                                        {sys}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                        <h3 className="text-xl font-semibold text-[#72e0e0]">1. API Substrate</h3>
                        <p className="mt-2 text-sm text-slate-400">OpsOrch Core</p>
                        <ul className="mt-3 space-y-1 text-sm text-slate-300">
                            <li>• Stateless Go orchestration service</li>
                            <li>• Unified REST APIs</li>
                            <li>• Provider/plugin loading</li>
                            <li>• Secret management</li>
                            <li>• Zero data storage</li>
                            <li>• Orchestration plans & runs</li>
                        </ul>
                    </div>

                    <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                        <h3 className="text-xl font-semibold text-[#72e0e0]">2. MCP Tools Layer</h3>
                        <p className="mt-2 text-sm text-slate-400">opsorch-mcp</p>
                        <ul className="mt-3 space-y-1 text-sm text-slate-300">
                            <li>• TypeScript MCP server</li>
                            <li>• Typed tools for LLMs</li>
                            <li>• stdio & HTTP transports</li>
                            <li>• 15+ operational tools</li>
                        </ul>
                    </div>

                    <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                        <h3 className="text-xl font-semibold text-[#72e0e0]">3. Ops Copilot</h3>
                        <p className="mt-2 text-sm text-slate-400">opsorch-copilot</p>
                        <ul className="mt-3 space-y-1 text-sm text-slate-300">
                            <li>• LLM-driven planning runtime</li>
                            <li>• Multi-step reasoning</li>
                            <li>• Human-in-the-loop</li>
                            <li>• Evidence-based answers</li>
                            <li>• Runbook recommendations</li>
                        </ul>
                    </div>

                    <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                        <h3 className="text-xl font-semibold text-[#72e0e0]">4. Control Plane</h3>
                        <p className="mt-2 text-sm text-slate-400">opsorch-console (Open Source)</p>
                        <ul className="mt-3 space-y-1 text-sm text-slate-300">
                            <li>• Unified incident, alert & ticket management</li>
                            <li>• Advanced log & metric visualization</li>
                            <li>• Service catalog & dependency mapping</li>
                            <li>• Team management & organizational structure</li>
                            <li>• AI-powered Copilot chat</li>
                            <li>• Runbook execution & step tracking</li>
                        </ul>
                    </div>
                </div>

                <section className="opsorch-card p-8">
                    <h2 className="text-2xl font-semibold text-white">Design Principles</h2>
                    <ul className="mt-6 space-y-4">
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Single API Surface</strong>
                                <p className="text-slate-400 mt-1">One unified API for incidents, alerts, timelines, logs, metrics, tickets, messaging, services, teams, deployments, and orchestration.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Config-driven Routing</strong>
                                <p className="text-slate-400 mt-1">Providers are selected per capability via environment variables, allowing easy swapping of backend tools without code changes.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Zero Operational Data Storage</strong>
                                <p className="text-slate-400 mt-1">OpsOrch Core does not store your operational data. It routes queries to your source-of-truth systems in real-time.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Deep-linkable Evidence</strong>
                                <p className="text-slate-400 mt-1">Normalized resources carry provider URLs so UIs can jump directly to the original tool without copying data.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Runbook-first Orchestration</strong>
                                <p className="text-slate-400 mt-1">Plans and runs stay in your workflow engine while OpsOrch surfaces execution state and manual steps.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Security-first</strong>
                                <p className="text-slate-400 mt-1">Pluggable secret backends (Vault, KMS), environment-scoped queries, and comprehensive audit logs.</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
