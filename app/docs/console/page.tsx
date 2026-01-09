
import Image from "next/image";
import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/docs/console";

export const metadata: Metadata = {
    title: "Console Guide | OpsOrch Documentation",
    description: "User guide for the OpsOrch Console. Learn how to navigate incidents, services, and use the Copilot.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Console Guide | OpsOrch Documentation",
        description: "The unified control plane for your operations.",
    },
};

export default function ConsolePage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Console Guide",
                        description: "The unified control plane for your operations.",
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
                        Console Guide
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        The unified control plane for your operations.
                    </p>
                </header>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Interface Overview</h2>
                    <p className="mt-4 text-slate-300">
                        The Console is designed to be your primary workspace during active operations (on-call, debugging, deployment tracking).
                    </p>
                    <div className="mt-6 aspect-[16/9] w-full rounded-xl border border-slate-700 bg-slate-900 p-2 flex items-center justify-center text-slate-500 relative overflow-hidden">
                        <Image
                            src="/opsorch-copilot-screen.jpg"
                            alt="OpsOrch Console with Copilot Interface"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                        />
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Navigation & Capabilities</h2>

                    <div className="mt-6 space-y-8">
                        {/* Incidents */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Incidents</h3>
                            <p className="text-sm text-slate-300 mt-1 mb-2">
                                Centralized feed of alerts and incidents from PagerDuty, OpsGenie, etc.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-slate-400">
                                <li><strong>Status Board:</strong> Filter by urgency and assignee.</li>
                                <li><strong>Unified Timeline:</strong> See status changes, notes, and alerts in one linear view.</li>
                                <li><strong>Mapped to:</strong> <code>IncidentAdapter</code> (OPSORCH_INCIDENT_PROVIDER)</li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Services</h3>
                            <p className="text-sm text-slate-300 mt-1 mb-2">
                                The Service Catalog is the backbone of OpsOrch correlation.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-slate-400">
                                <li><strong>Catalog:</strong> List of all registered microservices.</li>
                                <li><strong>Dependency Graph:</strong> Visualizes upstreams and downstreams.</li>
                                <li><strong>Golden Signals:</strong> Embeds key metrics (Latency, Errors) directly on the service card.</li>
                                <li><strong>Mapped to:</strong> <code>ServiceAdapter</code> (Often populated via Catalog import or inferred).</li>
                            </ul>
                        </div>

                        {/* Orchestration */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Orchestration (Runbooks)</h3>
                            <p className="text-sm text-slate-300 mt-1 mb-2">
                                Browse operational runbooks, launch runs, and track step execution in one place.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-slate-400">
                                <li><strong>Plan Browser:</strong> Search runbooks by service, tags, or owner.</li>
                                <li><strong>Run Tracking:</strong> Monitor active runs with real-time status.</li>
                                <li><strong>Manual Steps:</strong> Complete approvals and checkpoints from the UI.</li>
                                <li><strong>Mapped to:</strong> <code>OrchestrationAdapter</code> (OPSORCH_ORCHESTRATION_PROVIDER)</li>
                            </ul>
                        </div>

                        {/* Copilot */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Copilot (Enterprise)</h3>
                            <p className="text-sm text-slate-300 mt-1 mb-2">
                                AI assistant always available in the right-hand drawer or via <kbd className="rounded border border-slate-600 bg-slate-800 px-1 text-xs">Cmd+K</kbd>.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-slate-400">
                                <li><strong>Context Aware:</strong> Knows what page you are looking at.</li>
                                <li><strong>History:</strong> Remembers previous queries in the session.</li>
                                <li><strong>Action Links:</strong> Suggests runbooks and deep links to filtered views.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Deep Links &amp; Shareable Views</h2>
                    <p className="mt-4 text-slate-300">
                        Every primary view supports URL-based filtering so you can share the exact slice of data with your team.
                        Copilot responses and reference panels attach these filters automatically.
                    </p>
                    <ul className="mt-6 list-disc pl-5 text-sm text-slate-400">
                        <li><strong>URL Filters:</strong> Service, environment, status, and query parameters are encoded in the URL.</li>
                        <li><strong>Evidence Links:</strong> Click through to the provider UI using the normalized deep links.</li>
                        <li><strong>Runbook Links:</strong> Copilot action cards jump straight into the plan detail page.</li>
                    </ul>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Common User Flows</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                            <h3 className="font-semibold text-white mb-2">On-Call Response</h3>
                            <ol className="list-decimal pl-4 text-sm text-slate-400 space-y-1">
                                <li>Receive Page</li>
                                <li>Open Incident in Console</li>
                                <li>Review &quot;Correlated Alerts&quot; to see what triggered it</li>
                                <li>Use Copilot to &quot;Investigate root cause&quot;</li>
                                <li>Ack & Resolve</li>
                            </ol>
                        </div>
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                            <h3 className="font-semibold text-white mb-2">Deployment Monitoring</h3>
                            <ol className="list-decimal pl-4 text-sm text-slate-400 space-y-1">
                                <li>Navigate to Service</li>
                                <li>Click &quot;Deployments&quot; tab</li>
                                <li>Watch live logs stream</li>
                                <li>Check metrics for regression</li>
                            </ol>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
