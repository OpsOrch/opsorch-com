import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/about";

export const metadata: Metadata = {
    title: "About OpsOrch",
    description:
        "Why OpsOrch exists: an operational control plane for engineering teams.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "About OpsOrch",
        description:
            "Why OpsOrch exists, what it focuses on, and the operational workflows it supports.",
    },
};

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <h2 className={`text-3xl font-bold tracking-tight text-white md:text-4xl ${className}`}>{children}</h2>;
}

function SectionText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`text-lg leading-relaxed text-slate-300 ${className}`}>{children}</p>;
}

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "AboutPage",
                                name: "About OpsOrch",
                                description:
                                    "Details on OpsOrch's mission to unify investigation and coordination across operational tools.",
                                url: pageUrl,
                                isPartOf: {
                                    "@type": "WebSite",
                                    "@id": "https://opsorch.com/#website",
                                    name: "OpsOrch",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* Hero Section */}
            <div className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
                <div className="relative mx-auto max-w-4xl text-center">
                    <p className="opsorch-tag mx-auto mb-6 w-max rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 backdrop-blur-md">
                        About OpsOrch
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About OpsOrch</h1>
                    <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">
                        OpsOrch is an operational control plane for engineering teams.
                    </p>
                </div>
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[100px]"
                    style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
                ></div>
            </div>

            <div className="mx-auto max-w-5xl space-y-12 px-4 pb-24 sm:px-6 lg:px-10">
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <SectionText>
                        Modern operations span many systems: observability tools, ticketing systems, deployment platforms, and communication
                        channels. While these tools are individually powerful, operational work rarely fits cleanly inside any single one of
                        them.
                    </SectionText>
                    <SectionText className="text-slate-200">
                        OpsOrch exists to coordinate how these tools are used together.
                    </SectionText>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                        <div className="space-y-4">
                            <SectionHeading>What we focus on</SectionHeading>
                            <SectionText>OpsOrch is designed for operational workflows that require context, judgment, and traceability.</SectionText>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                "Production releases and verification",
                                "Incident investigation and response",
                                "Operational checks and recurring procedures",
                                "Post-incident analysis and audits",
                            ].map((item) => (
                                <div key={item} className="rounded-2xl border border-[#1f3c43] bg-[#0d1518] px-5 py-4 text-slate-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <SectionText className="mt-6">
                        These workflows differ in purpose, but they share the same underlying problem: decisions must be made across
                        multiple systems, often under time pressure, and must be explainable afterward.
                    </SectionText>
                </section>

                <section className="opsorch-card border-[#2c4c52] p-8">
                    <div className="space-y-4">
                        <SectionHeading>How OpsOrch approaches the problem</SectionHeading>
                        <SectionText>OpsOrch treats operational work as a first-class system, not as ad-hoc coordination between tools.</SectionText>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {[
                            "A provider-agnostic schema for operational data",
                            "An orchestration layer for workflows, runbooks, and approvals",
                            "Explicit boundaries between observation, reasoning, and action",
                        ].map((item) => (
                            <div key={item} className="rounded-2xl border border-[#1f3c43] bg-[#0b1113] px-5 py-4 text-slate-300">
                                {item}
                            </div>
                        ))}
                    </div>
                    <SectionText className="mt-6">
                        This allows teams to structure operational processes without centralizing or duplicating their data.
                    </SectionText>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                        <div className="space-y-4">
                            <SectionHeading>On automation and AI</SectionHeading>
                            <SectionText>OpsOrch uses AI to assist reasoning, not to bypass responsibility.</SectionText>
                        </div>
                        <div className="rounded-2xl border border-[#1f3c43] bg-[#0d1518] p-5 text-slate-300">
                            <p>
                                Copilot helps correlate signals, surface evidence, and suggest next steps. All conclusions are inspectable,
                                and all actions flow through explicit workflows with approvals and checkpoints.
                            </p>
                        </div>
                    </div>
                    <SectionText className="mt-6">OpsOrch does not execute uncontrolled changes or operate as a black box.</SectionText>
                </section>

                <section className="opsorch-card border-[#2c4c52] p-8">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
                        <div className="space-y-4">
                            <p className="opsorch-tag">Open Source</p>
                            <SectionHeading>Open source model</SectionHeading>
                            <SectionText>OpsOrch is built in the open.</SectionText>
                            <SectionText>
                                Core schemas, orchestration primitives, and adapter frameworks are open source and intended to be extended by
                                the community.
                            </SectionText>
                        </div>
                        <div className="rounded-2xl border border-[#1f3c43] bg-[#0d1518] p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Open components</p>
                            <div className="mt-4 space-y-3 text-slate-300">
                                {[
                                    "Console and Copilot",
                                    "Core APIs and orchestration",
                                    "Adapters and MCP integrations",
                                ].map((item) => (
                                    <div key={item} className="rounded-xl border border-[#1f3c43] bg-[#0b1113] px-4 py-3">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <SectionHeading>Who OpsOrch is for</SectionHeading>
                    <SectionText>OpsOrch is built for teams that:</SectionText>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {[
                            "Operate production systems at meaningful scale",
                            "Care about reliability and decision quality",
                            "Want stronger operational discipline without replacing existing tools",
                        ].map((item) => (
                            <div key={item} className="rounded-2xl border border-[#1f3c43] bg-[#0b1113] px-5 py-4 text-slate-300">
                                {item}
                            </div>
                        ))}
                    </div>
                    <SectionText className="mt-6">
                        It is not designed to replace observability platforms, ticketing systems, or deployment tools.
                    </SectionText>
                </section>

                <section className="opsorch-card border-[#2c4c52] p-8">
                    <SectionHeading>Our philosophy</SectionHeading>
                    <SectionText>Operational work should be:</SectionText>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {["Explicit rather than implicit", "Traceable rather than anecdotal", "Assistive rather than autonomous"].map((item) => (
                            <div key={item} className="rounded-2xl border border-[#1f3c43] bg-[#0d1518] px-5 py-4 text-slate-300">
                                {item}
                            </div>
                        ))}
                    </div>
                    <SectionText className="mt-6">
                        OpsOrch is an attempt to encode these principles into a system teams can build on.
                    </SectionText>
                </section>
            </div>
        </div>
    );
}
