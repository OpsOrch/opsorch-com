
import Link from "next/link";
import type { Metadata } from "next";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/adapters";

export const metadata: Metadata = {
    title: "Adapters | OpsOrch Documentation",
    description: "Production-ready adapters for PagerDuty, Datadog, Jira, Prometheus, Slack, and more. Learn how to configure and build custom adapters.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Adapters | OpsOrch Documentation",
        description: "Production-ready adapters for PagerDuty, Datadog, Jira, Prometheus, Slack, and more.",
    },
};

export default function AdaptersPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Adapters",
                        description: "Production-ready adapters for PagerDuty, Datadog, Jira, Prometheus, Slack, and more.",
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
                        Adapters
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Connect OpsOrch to your existing tools with production-ready adapters.
                    </p>
                </header>

                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-3xl font-semibold text-white">Production Adapters</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <Link
                            href="https://github.com/OpsOrch/opsorch-pagerduty-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">PagerDuty</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Incidents & Services</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Scopes:</strong> <code>incidents:read</code>, <code>services:read</code>
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-datadog-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">Datadog</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Metrics, Logs, Alerts, Incidents</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Scopes:</strong> <code>metrics_read</code>, <code>logs_read</code>
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-jira-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">Jira</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Tickets</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Scopes:</strong> <code>read:jira-work</code>
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-prometheus-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">Prometheus</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Metrics</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Auth:</strong> No auth or Basic Auth
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-slack-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">Slack</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Messaging</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Scopes:</strong> <code>channels:read</code>, <code>chat:write</code>
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-elastic-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">Elasticsearch</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Logs</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Auth:</strong> API Key or Basic Auth
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-github-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">GitHub</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Teams</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Scopes:</strong> <code>read:org</code>
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/OpsOrch/opsorch-vault-adapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-[#1f3c43] bg-[#0d1416]/50 p-5 transition hover:-translate-y-1 hover:border-[#55cfd0]"
                        >
                            <h3 className="text-lg font-semibold text-white">Vault</h3>
                            <p className="mt-1 text-xs text-[#72e0e0]">Secrets</p>
                            <div className="mt-3 text-xs text-slate-400">
                                <strong>Role:</strong> Read-only to specific secrets mount
                            </div>
                        </Link>
                    </div>
                </section>

                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-2xl font-semibold text-slate-900">Configuration</h2>
                    <p className="mt-4 text-slate-700">
                        Adapters are configured via environment variables following the pattern:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                        <li><code className="font-mono text-[#0f766e]">OPSORCH_&lt;CAP&gt;_PROVIDER</code>: The registered name (e.g. `jira`)</li>
                        <li><code className="font-mono text-[#0f766e]">OPSORCH_&lt;CAP&gt;_CONFIG</code>: JSON configuration payload</li>
                    </ul>
                    <div className="mt-6 overflow-x-auto">
                        <table className="min-w-full text-sm text-slate-800">
                            <thead>
                                <tr className="border-b border-slate-200 text-left">
                                    <th className="px-3 py-2">Capability</th>
                                    <th className="px-3 py-2">Env Config Key</th>
                                    <th className="px-3 py-2">Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-3 py-2">Incident</td>
                                    <td className="px-3 py-2">OPSORCH_INCIDENT_CONFIG</td>
                                    <td className="px-3 py-2"><code className="text-xs">{`{"apiToken":"..."}`}</code></td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-2">Ticket</td>
                                    <td className="px-3 py-2">OPSORCH_TICKET_CONFIG</td>
                                    <td className="px-3 py-2"><code className="text-xs">{`{"apiToken":"...","email":"..."}`}</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Build Your Own Guide */}
                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-2xl font-semibold text-white">Build Your Own Adapter</h2>
                    <p className="mt-4 text-slate-300">
                        OpsOrch defines standard Go interfaces for each capability. You can implement these interfaces to create custom adapters.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">1. The Interface</h3>
                            <p className="text-sm text-slate-400 mb-2">
                                For example, to implement an <strong>Incident Provider</strong>, you must satisfy:
                            </p>
                            <CodeBlock language="go">
                                {`type IncidentProvider interface {
    // List returns a list of incidents matching the filter
    List(ctx context.Context, filter *IncidentFilter) ([]*Incident, error)
    
    // Get returns a single incident by ID
    Get(ctx context.Context, id string) (*Incident, error)
}`}
                            </CodeBlock>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">2. Testing</h3>
                            <p className="text-sm text-slate-400 mb-2">
                                We provide a testing harness in the <code>opsorch-core/testing</code> package.
                                You can use this to verify your adapter complies with the contract.
                            </p>
                            <CodeBlock language="go">
                                {`func TestMyAdapter(t *testing.T) {
    adapter := NewMyAdapter(config)
    // Run standard contract tests
    adaptertest.VerifyIncidentContract(t, adapter)
}`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-2xl font-semibold text-white">Custom Docker Images</h2>
                    <p className="mt-4 text-slate-300">
                        To use plugins (out-of-process adapters), you must build a custom Docker image that includes the binary.
                    </p>
                    <div className="mt-4">
                        <CodeBlock language="dockerfile">
                            {`FROM ghcr.io/opsorch/opsorch-core:latest
WORKDIR /opt/opsorch

# Download adapter binary
ADD https://github.com/OpsOrch/opsorch-jira-adapter/releases/download/v0.2.1/ticketplugin-linux-amd64 ./plugins/ticketplugin
RUN chmod +x ./plugins/*

# Configure to use plugin instead of in-process registry
ENV OPSORCH_TICKET_PLUGIN=/opt/opsorch/plugins/ticketplugin`}
                        </CodeBlock>
                    </div>
                </section>
            </div>
        </div>
    );
}
