
import type { Metadata } from "next";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/troubleshooting";

export const metadata: Metadata = {
    title: "Troubleshooting & FAQ | OpsOrch Documentation",
    description: "Solutions to common issues with adapters, MCP, and installation. Frequently asked questions about licensing and usage.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Troubleshooting & FAQ | OpsOrch Documentation",
        description: "Solutions to common issues with adapters, MCP, and installation.",
    },
};

export default function TroubleshootingPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Troubleshooting & FAQ",
                        description: "Solutions to common issues with adapters, MCP, and installation.",
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
                        Troubleshooting & FAQ
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Help with common errors and questions.
                    </p>
                </header>

                {/* Common Issues */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Common startup failures</h2>
                    <div className="mt-6 space-y-6">

                        <div>
                            <h3 className="font-semibold text-white mb-2">1. Connection Refused (Core)</h3>
                            <div className="rounded-lg bg-red-900/20 border border-red-900/50 p-4 text-sm text-red-200 font-mono mb-2">
                                dial tcp 127.0.0.1:8080: connect: connection refused
                            </div>
                            <p className="text-sm text-slate-400">
                                <strong>Cause:</strong> The Console cannot reach OpsOrch Core. <br />
                                <strong>Fix:</strong> Ensure `NEXT_PUBLIC_OPSORCH_CORE_URL` points to the correct location. If running in Docker Compose, use the service name `http://core:8080`.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white mb-2">2. Missing Provider Config</h3>
                            <div className="rounded-lg bg-red-900/20 border border-red-900/50 p-4 text-sm text-red-200 font-mono mb-2">
                                panic: failed to initialize adapter: config missing
                            </div>
                            <p className="text-sm text-slate-400">
                                <strong>Cause:</strong> You specified `OPSORCH_INCIDENT_PROVIDER=pagerduty` but did not provide `OPSORCH_INCIDENT_CONFIG`. <br />
                                <strong>Fix:</strong> Ensure the JSON config env var is set and valid.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Adapter Health</h2>
                    <p className="mt-4 text-slate-300">
                        Adapters report health status to the Core. You can query this via the health endpoint.
                    </p>
                    <div className="mt-4">
                        <CodeBlock language="bash">curl http://localhost:8080/health</CodeBlock>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">FAQ</h2>
                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Is OpsOrch Open Source?</h3>
                            <p className="text-slate-400 mt-2">
                                Yes. OpsOrch Core, Console, and standard Adapters are Apache 2.0 licensed.
                                The Copilot (AI) capabilities and certain Enterprise features (Audit Logs, SaaS hosting) are commercial.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Can I build my own adapter?</h3>
                            <p className="text-slate-400 mt-2">
                                Yes! See the <a href="/docs/adapters" className="text-[#72e0e0] hover:underline">Adapters Guide</a> for details on the Go interface and Plugin system.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Does OpsOrch store my data?</h3>
                            <p className="text-slate-400 mt-2">
                                No. OpsOrch is a &quot;stateless control plane&quot;. It queries your systems (PagerDuty, Datadog) in real-time.
                                It only stores configuration and (optionally) chat history if using Copilot.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
