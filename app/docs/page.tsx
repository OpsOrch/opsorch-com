import Link from "next/link";

export default function DocsPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
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
                        Get up and running with OpsOrch in minutes
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl bg-[#0d1416] p-4">
                            <p className="text-sm text-slate-400">1. Clone OpsOrch Core</p>
                            <pre className="mt-2 overflow-x-auto text-sm text-[#72e0e0]">
                                <code>git clone https://github.com/OpsOrch/opsorch-core.git</code>
                            </pre>
                        </div>
                        <div className="rounded-xl bg-[#0d1416] p-4">
                            <p className="text-sm text-slate-400">2. Install dependencies</p>
                            <pre className="mt-2 overflow-x-auto text-sm text-[#72e0e0]">
                                <code>cd opsorch-core && go mod download</code>
                            </pre>
                        </div>
                        <div className="rounded-xl bg-[#0d1416] p-4">
                            <p className="text-sm text-slate-400">3. Run with mock adapters</p>
                            <pre className="mt-2 overflow-x-auto text-sm text-[#72e0e0]">
                                <code>OPSORCH_INCIDENT_PROVIDER=incidentmock go run ./cmd/opsorch</code>
                            </pre>
                        </div>
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
                            <p className="mt-2 text-sm text-slate-400">opsorch-console</p>
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                <li>• Next.js operator UI</li>
                                <li>• Incident & ticket management</li>
                                <li>• Copilot integration</li>
                                <li>• Real-time updates</li>
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
                                OpsOrch exposes unified APIs for incidents, logs, metrics, tickets, messaging, and services.
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
                                Adapters map these to their native query languages for consistent cross-provider filtering.
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
                    </div>
                </section>

                {/* Building Adapters */}
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

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
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
