
import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/docs/security";

export const metadata: Metadata = {
    title: "Security & Tenancy | OpsOrch Documentation",
    description: "Learn how OpsOrch ensures security, tenancy, and AI safety in your operations.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Security & Tenancy | OpsOrch Documentation",
        description: "Built-in safety controls for the AI-native control plane.",
    },
};

export default function SecurityPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Security & Tenancy",
                        description: "Built-in safety controls for the AI-native control plane.",
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
                        Security & Tenancy
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Built-in safety controls for the AI-native control plane.
                    </p>
                </header>

                {/* Authentication */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Authentication</h2>
                    <p className="mt-4 text-slate-300">
                        OpsOrch supports industry-standard authentication protocols to ensure only authorized operators can access the control plane.
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex gap-4">
                            <div className="shrink-0 h-1.5 w-1.5 mt-2 rounded-full bg-[#72e0e0]"></div>
                            <div>
                                <strong className="text-white">API Tokens</strong>
                                <p className="text-slate-400 mt-1">
                                    Scoped tokens for CI/CD pipelines and external automation.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Safe Control Plane */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Safe Control Plane</h2>
                    <p className="mt-4 text-slate-300">
                        A core design principle of OpsOrch is that the control plane itself must be safe by default.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                            <h3 className="font-semibold text-white mb-2">Read-Only Defaults</h3>
                            <p className="text-sm text-slate-400">
                                Global &quot;Observer&quot; mode can be enforced to prevent any write actions (restarts, rollbacks) from the Console.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                            <h3 className="font-semibold text-white mb-2">Audit Logs</h3>
                            <p className="text-sm text-slate-400">
                                Every action - whether by a human click or AI Copilot execution - is logged with identity, timestamp, and inputs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI Safety */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">AI Safety & Sandboxing</h2>
                    <p className="mt-4 text-slate-300">
                        When using OpsOrch Copilot, you are granting an AI agent access to your infrastructure. We take this seriously.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0] mb-2">1. Human-in-the-Loop for Write Actions</h3>
                            <p className="text-slate-300 text-sm">
                                The Copilot can <strong>plan</strong> destructive actions (e.g., &quot;Rollback service X&quot;), but it cannot <strong>execute</strong> them without explicit user confirmation in the UI.
                                The &quot;Execute&quot; button is physically separate and protected.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0] mb-2">2. Tool Sandboxing (MCP)</h3>
                            <p className="text-slate-300 text-sm">
                                The AI does not have direct SSH access or database credentials. It can only call specific, typed tools exposed by the MCP server (e.g., `list_incidents`, `restart_service`).
                                You define exactly what tools are available.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0] mb-2">3. Zero Data Retention</h3>
                            <p className="text-slate-300 text-sm">
                                OpsOrch Core does not train on your data. Context retrieved for RAG (Retrieval Augmented Generation) is transient and exists only for the duration of the request.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 mt-8">
                    <p className="text-blue-200 text-center">
                        <strong>Security is not an afterlife.</strong> It is baked into the contract-first architecture.
                    </p>
                </section>

            </div>
        </div>
    );
}
