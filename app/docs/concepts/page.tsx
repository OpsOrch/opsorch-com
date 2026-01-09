
import type { Metadata } from "next";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/concepts";

export const metadata: Metadata = {
    title: "Core Concepts | OpsOrch Documentation",
    description: "Understand the fundamental concepts of OpsOrch: Unified API, Adapters, QueryScope, Structured Queries, Deep Links, and Orchestration.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Core Concepts | OpsOrch Documentation",
        description: "Understand the fundamental concepts of OpsOrch: Unified API, Adapters, QueryScope, Structured Queries, Deep Links, and Orchestration.",
    },
};

export default function ConceptsPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Core Concepts",
                        description: "Understand the fundamental concepts of OpsOrch: Unified API, Adapters, QueryScope, Structured Queries, Deep Links, and Orchestration.",
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
                        Core Concepts
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Fundamental building blocks of the OpsOrch platform.
                    </p>
                </header>

                <div className="space-y-12">
                    {/* Unified API Layer */}
                    <section className="opsorch-card p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-white">1. Unified API Layer</h2>
                            <p className="mt-4 text-slate-300">
                                OpsOrch exposes unified REST APIs for incidents, alerts, logs, metrics, tickets, messaging, services, teams, deployments, and orchestration.
                                Instead of typical GET list endpoints, OpsOrch uses a powerful <code className="text-[#72e0e0]">POST .../query</code> pattern
                                for all collections to support complex filtering.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                                <h3 className="mb-2 text-sm font-semibold text-[#72e0e0]">Normalized Resource</h3>
                                <p className="mb-4 text-xs text-slate-400">
                                    Regardless of the backend (PagerDuty, OpsGenie, etc.), an incident always looks like this:
                                </p>
                                <CodeBlock language="json">
                                    {`{
  "id": "inc-123",
  "title": "Database connection timeout",
  "status": "TRIGGERED",
  "severity": "HIGH",
  "service": { "id": "payment-api" },
  "providerMetadata": {
     "source": "pagerduty",
     "externalId": "P12345",
     "url": "https://pagerduty.com/..."
  }
}`}
                                </CodeBlock>
                            </div>
                            <div className="flex items-center justify-center rounded-xl bg-[#0d1416] p-6 text-center text-sm text-slate-400 border border-slate-800">
                                <p>
                                    This normalization allows building generic UI components and automation logic that survive vendor migrations.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Adapter Architecture */}
                    <section className="opsorch-card p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-white">2. Adapter Architecture</h2>
                            <p className="mt-4 text-slate-300">
                                OpsOrch Core contains no provider-specific logic. It defines <strong>Interfaces</strong> (Contracts) that
                                <strong> Adapters</strong> implement. This dependency inversion is what makes OpsOrch vendor-agnostic.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-700 bg-[#0d1416] p-8">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                {/* Core */}
                                <div className="flex-1 w-full rounded-lg border border-blue-500/30 bg-blue-500/5 p-4 text-center">
                                    <div className="font-bold text-white">OpsOrch Core</div>
                                    <div className="mt-1 text-xs text-blue-300">Defines Interface</div>
                                    <div className="mt-2 rounded bg-blue-900/40 px-2 py-1 text-xs font-mono text-blue-200">
                                        interface IncidentProvider
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="text-slate-500 font-mono hidden md:block">Calls -&gt;</div>
                                <div className="text-slate-500 font-mono md:hidden">↓</div>

                                {/* Adapter */}
                                <div className="flex-1 w-full rounded-lg border border-[#72e0e0]/30 bg-[#72e0e0]/5 p-4 text-center">
                                    <div className="font-bold text-white">Adapter</div>
                                    <div className="mt-1 text-xs text-[#72e0e0]">Implements Logic</div>
                                    <div className="mt-2 rounded bg-[#72e0e0]/10 px-2 py-1 text-xs font-mono text-[#72e0e0]">
                                        func Query()
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="text-slate-500 font-mono hidden md:block">Req -&gt;</div>
                                <div className="text-slate-500 font-mono md:hidden">↓</div>

                                {/* Vendor */}
                                <div className="flex-1 w-full rounded-lg border border-slate-600 bg-slate-800 p-4 text-center">
                                    <div className="font-bold text-white">Vendor API</div>
                                    <div className="mt-1 text-xs text-slate-400">External System</div>
                                    <div className="mt-2 rounded bg-slate-700 px-2 py-1 text-xs font-mono text-slate-300">
                                        GET /incidents
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* QueryScope */}
                    <section className="opsorch-card p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-white">3. QueryScope</h2>
                            <p className="mt-4 text-slate-300">
                                Instead of learning JQL, PromQL, and Lucene simultaneously, you use a shared
                                <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-sm font-mono text-[#72e0e0]">QueryScope</code>
                                object. Adapters translate this generic intent into native query languages.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                                <h3 className="mb-2 text-sm font-semibold text-[#72e0e0]">Generic Intent</h3>
                                <CodeBlock language="json">
                                    {`// What the UI or API Client sends:
{
  "service": ["payment-api"],
  "environment": "production",
  "limit": 10
}`}
                                </CodeBlock>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-lg border border-slate-700 bg-slate-900/30 p-4">
                                    <div className="mb-2 text-xs font-semibold text-slate-500 uppercase">Jira Adapter Translation</div>
                                    <div className="font-mono text-sm text-yellow-200">
                                        project = OPS AND text ~ &quot;payment-api&quot; AND env = &quot;prod&quot;
                                    </div>
                                </div>
                                <div className="rounded-lg border border-slate-700 bg-slate-900/30 p-4">
                                    <div className="mb-2 text-xs font-semibold text-slate-500 uppercase">Datadog Adapter Translation</div>
                                    <div className="font-mono text-sm text-purple-300">
                                        service:payment-api env:production
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Structured Queries */}
                    <section className="opsorch-card p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-white">4. Structured Queries</h2>
                            <p className="mt-4 text-slate-300">
                                For advanced filtering where a simple scope isn&rsquo;t enough, OpsOrch uses a recursive logic expression structure.
                                This enables building powerful visual query builders that work across all providers.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                            <CodeBlock language="json">
                                {`{
  "operator": "AND",
  "filters": [
    { 
       "field": "severity", 
       "operator": "EQ", 
       "value": "error" 
    },
    { 
       "field": "message", 
       "operator": "CONTAINS", 
       "value": "timeout" 
    }
  ]
}`}
                            </CodeBlock>
                        </div>
                    </section>

                    {/* Provider Deep Links */}
                    <section className="opsorch-card p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-white">5. Provider Deep Links</h2>
                            <p className="mt-4 text-slate-300">
                                Normalized resources can carry optional <code className="text-[#72e0e0]">url</code> fields that point back to the source system.
                                OpsOrch passes these through without modification so operators can jump directly to the vendor UI for details.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                            <CodeBlock language="json">
                                {`{
  "id": "alert-891",
  "title": "High error rate",
  "status": "open",
  "severity": "critical",
  "url": "https://datadog.com/monitors/123"
}`}
                            </CodeBlock>
                        </div>
                    </section>

                    {/* Orchestration */}
                    <section className="opsorch-card p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-white">6. Orchestration: Plans and Runs</h2>
                            <p className="mt-4 text-slate-300">
                                Runbooks and workflows are treated as first-class operational data. OpsOrch exposes plans (templates) and runs (live executions),
                                allowing clients to launch runs and complete manual steps without talking directly to the upstream system.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                            <CodeBlock language="json">
                                {`{
  "id": "release-checklist",
  "name": "Release Checklist",
  "steps": [
    { "id": "verify", "type": "verify", "title": "Check error budget" },
    { "id": "approve", "type": "manual", "title": "Ops approval" }
  ]
}`}
                            </CodeBlock>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
