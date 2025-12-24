
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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/docs/quick-start" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Quick Start</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Get the complete OpsOrch stack running in under a minute with Docker Compose.
                        </p>
                    </Link>

                    <Link href="/docs/architecture" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Architecture</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Deep dive into OpsOrch Core, MCP, Copilot, and Console layers.
                        </p>
                    </Link>

                    <Link href="/docs/concepts" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Core Concepts</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Learn about the Unified API, Adapter architecture, and QueryScopes.
                        </p>
                    </Link>

                    <Link href="/docs/adapters" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Adapters</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Explore production adapters and verify permissions/scopes.
                        </p>
                    </Link>

                    <Link href="/docs/api" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Unified API</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Reference for the <code>/query</code> API surface and resource schemas.
                        </p>
                    </Link>

                    <Link href="/docs/copilot" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Copilot</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Understand how the AI operational assistant orchestrates reasoning.
                        </p>
                    </Link>

                    <Link href="/docs/console" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Console</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            User guide for the unified operational dashboard.
                        </p>
                    </Link>

                    <Link href="/docs/installation" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Installation</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Production deployment guide for Kubernetes, Helm, and configuration.
                        </p>
                    </Link>

                    <Link href="/docs/building-with-adapters" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Building with Adapters</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Build OpsOrch with your adapter stack. Jira, Prometheus, PagerDuty, and more.
                        </p>
                    </Link>

                    <Link href="/docs/security" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Security</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Auth models, RBAC, audit logging, and AI safety controls.
                        </p>
                    </Link>

                    <Link href="/docs/troubleshooting" className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]">
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Troubleshooting</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            FAQ and solutions for common startup and configuration issues.
                        </p>
                    </Link>

                    <Link
                        href="https://github.com/orgs/OpsOrch/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-[#2c4c52] bg-[#0d1416]/50 p-6 transition hover:border-[#72e0e0] hover:bg-[#0d1416]"
                    >
                        <h2 className="text-xl font-semibold text-white group-hover:text-[#72e0e0]">Community</h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Join the discussion on GitHub. Ask questions and share feedback.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
