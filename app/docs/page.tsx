import Link from "next/link";
import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/docs";

export const metadata: Metadata = {
    title: "OpsOrch Documentation",
    description:
        "Comprehensive documentation for OpsOrch: Quick Start, Architecture, Core Concepts, and API References.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "OpsOrch Documentation",
        description:
            "Dive into OpsOrch quick start guides, architecture overviews, and API references for adapters and automations.",
    },
};

export default function DocsPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "OpsOrch Documentation",
                        description: "Comprehensive documentation for OpsOrch: Quick Start, Architecture, Core Concepts, and API References.",
                        url: pageUrl,
                        breadcrumb: {
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://opsorch.com",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Documentation",
                                        item: pageUrl,
                                },
                            ],
                        },
                    }),
                }}
            />
            <div className="mx-auto max-w-6xl space-y-16">
                {/* Header */}
                <header>
                    <p className="opsorch-tag">Documentation</p>
                    <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                        OpsOrch Documentation
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Everything you need to integrate, extend, and operate with OpsOrch
                    </p>
                </header>

                {/* Quick Start */}
                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-3xl font-semibold text-white">Quick Start</h2>
                    <p className="mt-4 text-slate-300">
                        Get the complete OpsOrch stack running in under a minute with Docker Compose
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl bg-[#0d1416] p-4">
                            <p className="text-sm text-slate-400">1. Download Docker Compose configuration</p>
                            <pre className="mt-2 overflow-x-auto text-sm text-[#72e0e0]">
                                <code>curl -O https://raw.githubusercontent.com/OpsOrch/.github/main/profile/docker-compose.yml</code>
                            </pre>
                        </div>
                        <div className="rounded-xl bg-[#0d1416] p-4">
                            <p className="text-sm text-slate-400">2. Start the complete stack</p>
                            <pre className="mt-2 overflow-x-auto text-sm text-[#72e0e0]">
                                <code>docker-compose up -d</code>
                            </pre>
                        </div>
                        <div className="rounded-xl bg-[#0d1416] p-4">
                            <p className="text-sm text-slate-400">3. Access the services</p>
                            <pre className="mt-2 overflow-x-auto text-sm text-[#72e0e0]">
                                <code>open http://localhost:3000  # Console UI{'\n'}curl http://localhost:8080/health  # Core API</code>
                            </pre>
                        </div>
                    </div>
                    <div className="mt-6 rounded-xl border border-[#2c4c52] bg-[#0d1416]/30 p-4">
                        <p className="text-sm text-slate-300">
                            <strong className="text-white">What you get:</strong> Complete OpsOrch stack including:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-slate-400">
                            <li>• <strong className="text-white">OpsOrch Console OSS</strong> - Modern web UI for incidents, logs, metrics, and services</li>
                            <li>• <strong className="text-white">OpsOrch Core</strong> - API orchestration layer with mock adapters (demo data)</li>
                            <li>• <strong className="text-white">OpsOrch MCP</strong> - AI tools server for LLM integration</li>
                        </ul>
                        <p className="mt-2 text-sm text-slate-300">
                            Perfect for evaluation, development, and understanding the complete OpsOrch ecosystem.
                        </p>
                    </div>
                </section>

                {/* Architecture Overview */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-3xl font-semibold text-white">Architecture</h2>
                    <p className="mt-4 text-slate-300">
                        OpsOrch consists of four main layers working together to provide a unified operational experience
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                            <h3 className="text-xl font-semibold text-[#72e0e0]">1. API Substrate</h3>
                            <p className="mt-2 text-sm text-slate-400">OpsOrch Core</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• Stateless Go orchestration service</li>
                                <li>• Unified REST APIs</li>
                                <li>• Provider/plugin loading</li>
                                <li>• Secret management</li>
                                <li>• Zero data storage</li>
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
                                <li>• AI-powered Copilot chat (Enterprise)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Core Concepts */}
                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-3xl font-semibold text-slate-900">Core Concepts</h2>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-[#3d8f92]">Unified API Layer</h3>
                            <p className="mt-2 text-slate-700">
                                OpsOrch exposes unified APIs for incidents, logs, metrics, tickets, messaging, services, and teams.
                                All schemas are documented and evolving to support growing operational needs.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#3d8f92]">Adapter Architecture</h3>
                            <p className="mt-2 text-slate-700">
                                OpsOrch Core contains no provider logic. Adapters implement capability interfaces in separate
                                repositories and register with the registry. Load in-process or as out-of-process plugins.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#3d8f92]">QueryScope</h3>
                            <p className="mt-2 text-slate-700">
                                All queries accept a shared `QueryScope` filter with service, team, and environment fields.
                                Adapters map these to their native query languages for consistent cross-provider filtering. Team scoping enables organizational filtering across all operational data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#3d8f92]">Structured Queries</h3>
                            <p className="mt-2 text-slate-700">
                                OpsOrch uses structured expressions for logs and metrics instead of free-form strings,
                                ensuring validation and consistency across providers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Production Adapters */}
                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-3xl font-semibold text-white">Production Adapters</h2>
                    <p className="mt-4 text-slate-300">
                        Ready-to-use adapters for popular operational tools
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <Link
                            href="https://github.com/OpsOrch/opsorch-pagerduty-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">PagerDuty Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Incidents & Services</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• Create/query/update incidents</li>
                                <li>• Timeline support</li>
                                <li>• Service discovery</li>
                                <li>• Team filtering</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-datadog-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Datadog Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Metrics, Logs, Alerts, Incidents & Services</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• Official Datadog Go SDK v2</li>
                                <li>• Metrics, logs, monitors</li>
                                <li>• Incident management</li>
                                <li>• Service catalog integration</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-jira-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Jira Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Tickets</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• CRUD for Jira issues</li>
                                <li>• Labels, components, priorities</li>
                                <li>• JQL query generation</li>
                                <li>• Cloud & Server support</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-prometheus-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Prometheus Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Metrics</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• Query with structured expressions</li>
                                <li>• Raw PromQL support</li>
                                <li>• Metric discovery</li>
                                <li>• QueryScope mapping</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-slack-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Slack Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Messaging</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• Rich message composition</li>
                                <li>• Block Kit support</li>
                                <li>• Markdown rendering</li>
                                <li>• Channel & user targeting</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-elastic-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Elastic Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Logs</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• Full-text search</li>
                                <li>• Structured filtering</li>
                                <li>• Severity mapping</li>
                                <li>• Time-range queries</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-github-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">GitHub Teams Adapter</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">Teams</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• Query GitHub Teams with filters</li>
                                <li>• Get team members with roles</li>
                                <li>• Support for nested hierarchies</li>
                                <li>• Organizational structure mapping</li>
                            </ul>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-mock-adapters"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Mock Adapters</h3>
                                    <p className="mt-1 text-xs text-[#72e0e0]">All Capabilities</p>
                                </div>
                                <span className="text-slate-500">↗</span>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                <li>• In-memory demo data</li>
                                <li>• Perfect for local dev</li>
                                <li>• Pre-built plugins</li>
                                <li>• No external dependencies</li>
                            </ul>
                        </Link>
                    </div>
                </section>

                {/* Copilot Overview */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-3xl font-semibold text-white">OpsOrch Copilot</h2>
                    <p className="mt-4 text-slate-300">
                        AI-powered operational assistant that orchestrates reasoning and tool execution
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">What Copilot Can Do</h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                <li>• Retrieve and summarize recent incidents with full context</li>
                                <li>• Correlate incidents with PagerDuty alerts, Jira tickets, and logs</li>
                                <li>• Explain severity escalations and timeline changes</li>
                                <li>• Find patterns across similar incidents</li>
                                <li>• Correlate metric spikes with system events</li>
                                <li>• Query logs and surface dominant error patterns</li>
                                <li>• Identify team ownership and escalation paths</li>
                                <li>• Answer questions about organizational structure</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Architecture</h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                <li>• Multi-step agentic reasoning loop</li>
                                <li>• Configurable max iterations for complex problems</li>
                                <li>• Context-aware tool injection based on question patterns</li>
                                <li>• Service discovery with intelligent caching</li>
                                <li>• Conversation management with LRU eviction</li>
                                <li>• SQLite or in-memory storage</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Console Overview */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-3xl font-semibold text-white">OpsOrch Console</h2>
                    <p className="mt-4 text-slate-300">
                        Modern operator-focused web UI providing unified access to all operational data and AI assistance
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                            <h3 className="text-xl font-semibold text-[#72e0e0]">OSS Edition</h3>
                            <p className="mt-2 text-sm text-slate-400">Apache 2.0 Licensed</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• <strong>Incidents:</strong> Browse, search, filter with advanced queries</li>
                                <li>• <strong>Alerts:</strong> Real-time monitoring alerts from all providers</li>
                                <li>• <strong>Logs:</strong> Unified log search across multiple sources</li>
                                <li>• <strong>Metrics:</strong> Time-series visualization and querying</li>
                                <li>• <strong>Services:</strong> Service catalog and dependency mapping</li>
                                <li>• <strong>Teams:</strong> Team management and organizational structure</li>
                                <li>• <strong>Tickets:</strong> Integrated ticketing system management</li>
                                <li>• <strong>Settings:</strong> Configure Core and Copilot endpoints</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-6">
                            <h3 className="text-xl font-semibold text-[#72e0e0]">Enterprise Edition</h3>
                            <p className="mt-2 text-sm text-slate-400">Commercial License</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• <strong>All OSS features</strong> plus:</li>
                                <li>• <strong>AI Copilot Chat:</strong> Conversational operational assistant</li>
                                <li>• <strong>Chat History:</strong> Persistent conversation management</li>
                                <li>• <strong>Smart References:</strong> AI-generated filtered view links</li>
                                <li>• <strong>Multi-step Reasoning:</strong> Complex problem analysis</li>
                                <li>• <strong>Evidence-based Answers:</strong> Citations and data sources</li>
                                <li>• <strong>Context Awareness:</strong> Service and incident correlation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Key Features</h4>
                            <div className="mt-3 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                                <div>
                                    <strong className="text-white">Advanced Filtering:</strong>
                                    <ul className="mt-1 space-y-1 text-slate-400">
                                        <li>• URL-based query parameters for sharing</li>
                                        <li>• Multi-select status and severity filters</li>
                                        <li>• Service, environment, and team scoping</li>
                                        <li>• Free-text search across all fields</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-white">Real-time Updates:</strong>
                                    <ul className="mt-1 space-y-1 text-slate-400">
                                        <li>• Live incident status changes</li>
                                        <li>• Alert notifications and escalations</li>
                                        <li>• Metric threshold breaches</li>
                                        <li>• Service health monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Installation & Deployment</h4>
                            <div className="mt-3 space-y-3">
                                <div>
                                    <strong className="text-sm text-white">Docker (OSS Edition):</strong>
                                    <pre className="mt-1 overflow-x-auto rounded bg-[#0d1416] p-2 text-xs text-[#72e0e0]">
                                        <code>docker run -p 3000:3000 -e NEXT_PUBLIC_OPSORCH_CORE_URL=http://localhost:8080 ghcr.io/opsorch/opsorch-console:latest-oss</code>
                                    </pre>
                                </div>
                                <div>
                                    <strong className="text-sm text-white">Docker (Enterprise Edition):</strong>
                                    <pre className="mt-1 overflow-x-auto rounded bg-[#0d1416] p-2 text-xs text-[#72e0e0]">
                                        <code>docker run -p 3000:3000 -e NEXT_PUBLIC_COPILOT_URL=http://localhost:6060 ghcr.io/opsorch/opsorch-console:latest-enterprise</code>
                                    </pre>
                                </div>
                                <div>
                                    <strong className="text-sm text-white">Local Development:</strong>
                                    <pre className="mt-1 overflow-x-auto rounded bg-[#0d1416] p-2 text-xs text-[#72e0e0]">
                                        <code>git clone https://github.com/OpsOrch/opsorch-console.git{'\n'}cd opsorch-console && npm install{'\n'}npm run dev  # OSS edition{'\n'}npm run dev:enterprise  # Enterprise edition</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-[#2c4c52] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Configuration</h4>
                            <div className="mt-3 space-y-2 text-sm text-slate-300">
                                <div>
                                    <strong className="text-white">Environment Variables:</strong>
                                    <ul className="mt-1 space-y-1 text-slate-400">
                                        <li>• <code className="text-[#72e0e0]">NEXT_PUBLIC_OPSORCH_CORE_URL</code> - OpsOrch Core API endpoint</li>
                                        <li>• <code className="text-[#72e0e0]">NEXT_PUBLIC_COPILOT_URL</code> - OpsOrch Copilot endpoint (Enterprise)</li>
                                        <li>• <code className="text-[#72e0e0]">NEXT_PUBLIC_OPSORCH_EDITION</code> - Set to 'oss' or 'enterprise'</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-white">Runtime Configuration:</strong>
                                    <p className="mt-1 text-slate-400">
                                        Navigate to Settings (/settings) to configure endpoints without restarting the application.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/OpsOrch/opsorch-console"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#72e0e0] transition hover:text-[#55cfd0]"
                        >
                            View Console Repository →
                        </Link>
                    </div>
                </section>

                {/* API Examples */}
                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-3xl font-semibold text-slate-900">API Examples</h2>

                    <div className="mt-6 space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-900">Query Incidents</h4>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs">
                                <code>{`curl -X POST http://localhost:8080/incidents/query \\
  -H "Content-Type: application/json" \\
  -d '{
    "statuses": ["open"],
    "severities": ["critical", "high"],
    "scope": {"service": "api", "environment": "prod"}
  }'`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900">Query Metrics</h4>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs">
                                <code>{`curl -X POST http://localhost:8080/metrics/query \\
  -H "Content-Type: application/json" \\
  -d '{
    "expression": {
      "metricName": "http_requests_total",
      "aggregation": "sum",
      "filters": [{"label": "status", "operator": "=", "value": "500"}]
    },
    "start": "2024-01-01T00:00:00Z",
    "end": "2024-01-01T01:00:00Z",
    "step": 60
  }'`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900">Query Logs</h4>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs">
                                <code>{`curl -X POST http://localhost:8080/logs/query \\
  -H "Content-Type: application/json" \\
  -d '{
    "expression": {
      "search": "connection timeout",
      "severityIn": ["error", "critical"]
    },
    "scope": {"service": "gateway"}
  }'`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900">Query Teams</h4>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs">
                                <code>{`curl -X POST http://localhost:8080/teams/query \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "backend",
    "tags": {"type": "engineering"},
    "scope": {"service": "api"}
  }'`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900">Get Team Members</h4>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs">
                                <code>{`curl http://localhost:8080/teams/engineering/members`}</code>
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Docker Compose */}
                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-3xl font-semibold text-white">Docker Compose Configurations</h2>
                    <p className="mt-4 text-slate-300">
                        Pre-built Docker Compose configurations for different environments and use cases
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Demo/Evaluation</h4>
                            <p className="mt-2 text-xs text-slate-400">docker-compose.yml</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• Mock adapters with demo data</li>
                                <li>• Console OSS edition</li>
                                <li>• MCP server for AI tools</li>
                                <li>• Perfect for first-time users</li>
                            </ul>
                            <pre className="mt-3 overflow-x-auto rounded bg-[#0d1416] p-2 text-xs text-[#72e0e0]">
                                <code>curl -O https://raw.githubusercontent.com/OpsOrch/.github/main/profile/docker-compose.yml</code>
                            </pre>
                        </div>

                        <div className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Development</h4>
                            <p className="mt-2 text-xs text-slate-400">docker-compose.dev.yml</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• Both OSS & Enterprise consoles</li>
                                <li>• Debug logging enabled</li>
                                <li>• Copilot placeholder</li>
                                <li>• Development-friendly config</li>
                            </ul>
                            <pre className="mt-3 overflow-x-auto rounded bg-[#0d1416] p-2 text-xs text-[#72e0e0]">
                                <code>curl -O https://raw.githubusercontent.com/OpsOrch/.github/main/profile/docker-compose.dev.yml</code>
                            </pre>
                        </div>

                        <div className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5">
                            <h4 className="font-semibold text-[#72e0e0]">Production</h4>
                            <p className="mt-2 text-xs text-slate-400">docker-compose.prod.yml</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• Custom adapter builds</li>
                                <li>• Environment-driven config</li>
                                <li>• Real provider credentials</li>
                                <li>• Production-ready setup</li>
                            </ul>
                            <pre className="mt-3 overflow-x-auto rounded bg-[#0d1416] p-2 text-xs text-[#72e0e0]">
                                <code>curl -O https://raw.githubusercontent.com/OpsOrch/.github/main/profile/docker-compose.prod.yml</code>
                            </pre>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/OpsOrch/.github/blob/main/profile/DOCKER_COMPOSE.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#72e0e0] transition hover:text-[#55cfd0]"
                        >
                            View Complete Docker Compose Documentation →
                        </Link>
                    </div>
                </section>

                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-3xl font-semibold text-slate-900">Provider Configuration</h2>
                    <p className="mt-4 text-slate-700">
                        OpsOrch Core calls <code className="font-mono text-[#0f766e]">loadProviderConfig</code> (<Link
                            href="https://github.com/OpsOrch/opsorch-core/blob/main/api/provider_config_handler.go"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0f766e] hover:underline"
                        >
                            opsorch-core/api/provider_config_handler.go
                        </Link>) to hydrate each capability. Three environment variables drive every provider:
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                        <li><code className="font-mono text-[#0f766e]">OPSORCH_&lt;CAP&gt;_PROVIDER</code> – registered in-process adapter name (e.g., <code>jira</code>, <code>pagerduty</code>)</li>
                        <li><code className="font-mono text-[#0f766e]">OPSORCH_&lt;CAP&gt;_PLUGIN</code> – optional JSON-RPC plugin path that overrides the registry</li>
                        <li><code className="font-mono text-[#0f766e]">OPSORCH_&lt;CAP&gt;_CONFIG</code> – JSON payload forwarded verbatim to the adapter constructor</li>
                    </ul>
                    <p className="mt-3 text-sm text-slate-700">
                        Our Docker Compose templates ship with the following JSON payloads. Mirror these keys when you build your own images:
                    </p>
                    <div className="mt-4 overflow-x-auto">
                        <table className="min-w-full border-collapse text-sm text-slate-800">
                            <thead>
                                <tr className="text-left">
                                    <th className="border-b border-slate-200 px-3 py-2">Capability</th>
                                    <th className="border-b border-slate-200 px-3 py-2">Env Var</th>
                                    <th className="border-b border-slate-200 px-3 py-2">Example Config</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b border-slate-100 px-3 py-2">Incident (PagerDuty)</td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_INCIDENT_CONFIG</code></td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code>{`{"apiToken":"pd_token","serviceID":"PXXXXXX","fromEmail":"pd-user@example.com","apiURL":"https://api.pagerduty.com"}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-slate-100 px-3 py-2">Ticket (Jira)</td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_TICKET_CONFIG</code></td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code>{`{"apiToken":"jira_token","email":"user@example.com","apiURL":"https://your-domain.atlassian.net","projectKey":"OPS"}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-slate-100 px-3 py-2">Metric (Prometheus)</td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_METRIC_CONFIG</code></td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code>{`{"url":"http://prometheus:9090"}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-slate-100 px-3 py-2">Log (Elasticsearch)</td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_LOG_CONFIG</code></td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code>{`{"addresses":["http://elasticsearch:9200"],"username":"elastic","password":"changeme","indexPattern":"logs-*"}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-slate-100 px-3 py-2">Messaging (Slack)</td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_MESSAGING_CONFIG</code></td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code>{`{"token":"xoxb-your-slack-bot-token"}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-slate-100 px-3 py-2">Service (PagerDuty)</td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_SERVICE_CONFIG</code></td>
                                    <td className="border-b border-slate-100 px-3 py-2"><code>{`{"apiToken":"pd_token","apiURL":"https://api.pagerduty.com"}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2">Team (GitHub)</td>
                                    <td className="px-3 py-2"><code className="font-mono text-[#0f766e]">OPSORCH_TEAM_CONFIG</code></td>
                                    <td className="px-3 py-2"><code>{`{"token":"ghp_token","organization":"your-org"}`}</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-slate-700">
                        Additional adapters (GitHub Issues, Datadog, Prometheus alerts, deployments, etc.) document their own required JSON fields—drop those payloads into <code className="font-mono text-[#0f766e]">OPSORCH_&lt;CAP&gt;_CONFIG</code> and Core will pass them straight through.
                    </p>
                </section>

                {/* Deployment */}
                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-3xl font-semibold text-slate-900">Custom Deployment</h2>
                    <p className="mt-4 text-slate-700">
                        OpsOrch adapters publish pre-built binaries that you can mix and match to create custom Docker images.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-900">Custom Docker Image</h4>
                            <p className="mt-2 text-sm text-slate-600">
                                Create a `Dockerfile` that starts from `opsorch-core` and downloads the adapter binaries you need.
                                This example combines Jira, PagerDuty, and Slack adapters:
                            </p>
                            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-slate-300">
                                <code>{`FROM ghcr.io/opsorch/opsorch-core:latest
WORKDIR /opt/opsorch

# Download adapter binaries (linux-amd64)
ADD https://github.com/OpsOrch/opsorch-jira-adapter/releases/download/v0.2.1/ticketplugin-linux-amd64 ./plugins/ticketplugin
ADD https://github.com/OpsOrch/opsorch-pagerduty-adapter/releases/download/v0.1.5/incidentplugin-linux-amd64 ./plugins/incidentplugin
ADD https://github.com/OpsOrch/opsorch-slack-adapter/releases/download/v0.3.0/messagingplugin-linux-amd64 ./plugins/messagingplugin
ADD https://github.com/OpsOrch/opsorch-github-adapter/releases/download/v0.2.0/teamplugin-linux-amd64 ./plugins/teamplugin

# Make binaries executable
RUN chmod +x ./plugins/*

# Configure plugins via environment variables
ENV OPSORCH_TICKET_PLUGIN=/opt/opsorch/plugins/ticketplugin \\
    OPSORCH_INCIDENT_PLUGIN=/opt/opsorch/plugins/incidentplugin \\
    OPSORCH_MESSAGING_PLUGIN=/opt/opsorch/plugins/messagingplugin \\
    OPSORCH_TEAM_PLUGIN=/opt/opsorch/plugins/teamplugin`}</code>
                            </pre>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900">Running the Image</h4>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-xs">
                                <code>{`docker build -t my-opsorch:latest .

docker run --rm -p 8080:8080 \\
  -e OPSORCH_TICKET_CONFIG='{"apiToken":"...","email":"user@example.com","apiURL":"https://your-domain.atlassian.net","projectKey":"PROJ"}' \\
  -e OPSORCH_INCIDENT_CONFIG='{"apiToken":"...","serviceID":"PXXXXXX","fromEmail":"pagerduty-user@example.com","apiURL":"https://api.pagerduty.com"}' \\
  -e OPSORCH_MESSAGING_CONFIG='{"token":"xoxb-your-slack-bot-token"}' \\
  -e OPSORCH_TEAM_CONFIG='{"token":"ghp_...","organization":"your-org"}' \\
  my-opsorch:latest`}</code>
                            </pre>
                        </div>
                    </div>
                </section>


                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-3xl font-semibold text-white">Building Custom Adapters</h2>
                    <p className="mt-4 text-slate-300">
                        Create adapters for your own tools using our starter template
                    </p>

                    <div className="mt-6 space-y-3 text-sm text-slate-300">
                        <p><strong className="text-white">1. Clone the adapter template</strong></p>
                        <pre className="overflow-x-auto rounded-lg bg-[#0d1416] p-3 text-xs text-[#72e0e0]">
                            <code>git clone https://github.com/OpsOrch/opsorch-adapter.git</code>
                        </pre>

                        <p className="pt-3"><strong className="text-white">2. Update module path</strong></p>
                        <p className="text-slate-400">Edit `go.mod` to point to your repository</p>

                        <p className="pt-3"><strong className="text-white">3. Implement provider interfaces</strong></p>
                        <p className="text-slate-400">See `incident/example_provider.go` for a working example</p>

                        <p className="pt-3"><strong className="text-white">4. Register your provider</strong></p>
                        <pre className="overflow-x-auto rounded-lg bg-[#0d1416] p-3 text-xs text-[#72e0e0]">
                            <code>{`func init() {
  incident.RegisterProvider("myprovider", New)
}`}</code>
                        </pre>

                        <p className="pt-3"><strong className="text-white">5. Build and test</strong></p>
                        <pre className="overflow-x-auto rounded-lg bg-[#0d1416] p-3 text-xs text-[#72e0e0]">
                            <code>make test && make plugin</code>
                        </pre>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/OpsOrch/opsorch-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#72e0e0] transition hover:text-[#55cfd0]"
                        >
                            View Adapter Template →
                        </Link>
                    </div>
                </section>

                {/* MCP Tools */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-3xl font-semibold text-white">MCP Tools</h2>
                    <p className="mt-4 text-slate-300">
                        Model Context Protocol server exposing OpsOrch APIs as typed tools for AI agents
                    </p>

                    <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">
                        <div className="rounded-lg border border-[#2c4c52] bg-[#0d1416]/50 px-4 py-3">
                            <strong className="text-white">Incident Tools</strong>
                            <ul className="mt-2 space-y-1 text-slate-400">
                                <li>• query-incidents</li>
                                <li>• get-incident</li>
                                <li>• create-incident</li>
                                <li>• update-incident</li>
                                <li>• get-incident-timeline</li>
                                <li>• append-incident-timeline</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-[#2c4c52] bg-[#0d1416]/50 px-4 py-3">
                            <strong className="text-white">Ticket Tools</strong>
                            <ul className="mt-2 space-y-1 text-slate-400">
                                <li>• query-tickets</li>
                                <li>• create-ticket</li>
                                <li>• get-ticket</li>
                                <li>• update-ticket</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-[#2c4c52] bg-[#0d1416]/50 px-4 py-3">
                            <strong className="text-white">Log & Metric Tools</strong>
                            <ul className="mt-2 space-y-1 text-slate-400">
                                <li>• query-logs</li>
                                <li>• query-metrics</li>
                                <li>• describe-metrics</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-[#2c4c52] bg-[#0d1416]/50 px-4 py-3">
                            <strong className="text-white">Service Tools</strong>
                            <ul className="mt-2 space-y-1 text-slate-400">
                                <li>• query-services</li>
                                <li>• list-services</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-[#2c4c52] bg-[#0d1416]/50 px-4 py-3">
                            <strong className="text-white">Team Tools</strong>
                            <ul className="mt-2 space-y-1 text-slate-400">
                                <li>• query-teams</li>
                                <li>• get-team</li>
                                <li>• get-team-members</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/OpsOrch/opsorch-mcp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#72e0e0] transition hover:text-[#55cfd0]"
                        >
                            View MCP Server →
                        </Link>
                    </div>
                </section>

                {/* Resources */}
                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-3xl font-semibold text-slate-900">Additional Resources</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Link
                            href="https://github.com/OpsOrch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-black/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#3d8f92]"
                        >
                            <h3 className="font-semibold text-slate-900">GitHub Organization</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Browse all repositories, contribute, and open issues
                            </p>
                        </Link>

                        <Link
                            href="https://github.com/OpsOrch/opsorch-console"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-black/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#3d8f92]"
                        >
                            <h3 className="font-semibold text-slate-900">Console (Open Source)</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Next.js operator UI now available as open source
                            </p>
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-xl border border-black/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#3d8f92]"
                        >
                            <h3 className="font-semibold text-slate-900">About OpsOrch</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Learn about our mission and why we built OpsOrch
                            </p>
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-xl border border-black/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#3d8f92]"
                        >
                            <h3 className="font-semibold text-slate-900">Get in Touch</h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Questions? Reach out to our team
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
