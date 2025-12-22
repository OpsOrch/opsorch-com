
import type { Metadata } from "next";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/api";

export const metadata: Metadata = {
    title: "Unified API | OpsOrch Documentation",
    description: "Reference for OpsOrch's Unified Operational API. Query incidents, metrics, logs, and more through a single surface.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Unified API | OpsOrch Documentation",
        description: "Reference for OpsOrch's Unified Operational API. Query incidents, metrics, logs, and more through a single surface.",
    },
};

export default function ApiPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Unified API",
                        description: "Reference for OpsOrch's Unified Operational API.",
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
                        Unified API
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        OpsOrch provides a single, consistent API surface for all your operational data.
                    </p>
                </header>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">The Query Pattern</h2>
                    <p className="mt-4 text-slate-300">
                        Most OpsOrch endpoints follow a <code className="text-[#72e0e0]">POST /query</code> pattern.
                        This allows for complex, structured filtering payloads that wouldn&rsquo;t fit in query parameters.
                    </p>
                    <div className="mt-6">
                        <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="rounded bg-purple-500/20 px-2 py-1 text-xs font-bold text-purple-200">POST</span>
                                <span className="font-mono text-sm text-white">/api/v1/incidents/query</span>
                            </div>
                            <CodeBlock language="json">
                                {`{
  "filter": {
    "status": ["TRIGGERED", "ACKNOWLEDGED"],
    "urgency": "HIGH"
  },
  "pagination": {
     "limit": 20,
     "cursor": "..."
  }
}`}
                            </CodeBlock>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Authentication</h2>
                    <p className="mt-4 text-slate-300">
                        All API requests must be authenticated. OpsOrch supports two modes:
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">Service-to-Service (API Token)</strong>
                                <p className="text-slate-400 mt-1">
                                    Use the <code className="text-xs bg-slate-800 p-1 rounded">X-OpsOrch-Token</code> header.
                                    (Currently for Enterprise / specific internal use cases).
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">User Session (Cookie)</strong>
                                <p className="text-slate-400 mt-1">
                                    The Console uses secure, HTTP-only session cookies managed by the Next.js backend.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Endpoint Reference</h2>
                    <div className="mt-6 space-y-6">

                        {/* Incidents */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Incidents</h3>
                            <div className="overflow-hidden rounded-lg border border-slate-700">
                                <table className="min-w-full text-sm text-slate-300">
                                    <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0] w-1/3">POST /incidents/query</td>
                                            <td className="px-4 py-3">List incidents matching filters</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0]">GET /incidents/:id</td>
                                            <td className="px-4 py-3">Get detailed incident by ID</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0]">POST /incidents/:id/update</td>
                                            <td className="px-4 py-3">Update status, assignee, or priority</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Metrics</h3>
                            <div className="overflow-hidden rounded-lg border border-slate-700">
                                <table className="min-w-full text-sm text-slate-300">
                                    <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0] w-1/3">POST /metrics/query</td>
                                            <td className="px-4 py-3">Query time-series data</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0]">GET /metrics/metadata</td>
                                            <td className="px-4 py-3">List available metric names/tags</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Logs */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Logs</h3>
                            <div className="overflow-hidden rounded-lg border border-slate-700">
                                <table className="min-w-full text-sm text-slate-300">
                                    <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0] w-1/3">POST /logs/query</td>
                                            <td className="px-4 py-3">Search logs with Lucene or structured filters</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                            <div className="overflow-hidden rounded-lg border border-slate-700">
                                <table className="min-w-full text-sm text-slate-300">
                                    <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0] w-1/3">POST /services/query</td>
                                            <td className="px-4 py-3">List services from catalog</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-mono text-[#72e0e0]">GET /services/:id/graph</td>
                                            <td className="px-4 py-3">Get dependency graph for a service</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
