import Link from "next/link";
import type { Metadata } from "next";
import type { SVGProps } from "react";

const pageUrl = "https://opsorch.com/about";

export const metadata: Metadata = {
    title: "About OpsOrch",
    description:
        "Understand the OpsOrch philosophy: unify fractured operations, introduce a safe control plane for AI, and treat ops as a substrate built for platform teams.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "About OpsOrch",
        description:
            "Why OpsOrch exists, what problem it solves, and who it is built for across platform, SRE, and AI-ops teams.",
    },
};

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <h2 className={`text-3xl font-bold tracking-tight text-white md:text-4xl ${className}`}>{children}</h2>;
}

function SectionText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`text-lg leading-relaxed text-slate-300 ${className}`}>{children}</p>;
}

// Inline SVGs for lightweight visuals
type IconProps = SVGProps<SVGSVGElement>;

const Icons = {
    PagerDuty: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    Chart: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
    ),
    Logs: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    ),
    Ticket: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <path d="M14 9h4" />
            <path d="M14 15h4" />
        </svg>
    ),
    Message: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    Robot: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
    ),
    Check: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
    Cross: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
    Layers: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    ),
};

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
                                    "Details on OpsOrch's mission to unify incidents, logs, metrics, tickets, messaging, and services.",
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
            <div className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
                <div className="relative mx-auto max-w-5xl text-center">
                    <p className="opsorch-tag mx-auto mb-6 w-max rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 backdrop-blur-md">
                        Our Mission
                    </p>
                    <h1 className="bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
                        The Control Plane <br className="hidden sm:block" />
                        for Operations
                    </h1>
                    <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
                        Orchestrate the systems you already run so humans, automation, and AI can work through the same typed
                        interface without handing production access to another product.
                    </p>
                </div>
                {/* Background glow effects */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[100px]" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}></div>
            </div>

            <div className="mx-auto max-w-6xl space-y-24 px-4 pb-32 sm:px-6 lg:px-10">

                {/* Fragmented Reality Section (Bento Grid) */}
                <section>
                    <div className="mb-12 md:text-center">
                        <SectionHeading>Modern operations are fragmented</SectionHeading>
                        <SectionText className="mt-4 max-w-3xl md:mx-auto">
                            Now teams are expected to bolt AI onto this mess. OpsOrch starts from this uncomfortable
                            reality. No slogans. Just the truth of dispersed tools.
                        </SectionText>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Incidents", desc: "Sit isolated in PagerDuty", icon: Icons.PagerDuty, color: "text-red-400" },
                            { title: "Metrics", desc: "Live in Prometheus or Datadog", icon: Icons.Chart, color: "text-purple-400" },
                            { title: "Logs", desc: "Queried somewhere else entirely", icon: Icons.Logs, color: "text-blue-400" },
                            { title: "Tickets", desc: "Exist in Jira, disconnected", icon: Icons.Ticket, color: "text-blue-500" },
                            { title: "Decisions", desc: "Coordination happens in Slack", icon: Icons.Message, color: "text-green-400" },
                            { title: "Automation", desc: "Hidden inside brittle scripts", icon: Icons.Robot, color: "text-orange-400" },
                        ].map((item) => (
                            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-highlight)] p-6 transition-all hover:border-[var(--accent)] hover:shadow-lg">
                                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black/40 ${item.color}`}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-2 text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Missing Control Plane */}
                <section className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <SectionHeading>The missing control plane</SectionHeading>
                        <SectionText>
                            The industry does not lack tools. It lacks a <span className="text-[var(--accent)] font-semibold">control plane</span>.
                            There is no trustworthy layer that can reason across your stack with clear safety guarantees.
                        </SectionText>
                        <SectionText>
                            Every system speaks a different language. Every workflow is stitched together with glue code.
                            OpsOrch exists to make this missing layer explicit.
                        </SectionText>

                        <div className="pt-4">
                            <h3 className="text-lg font-semibold text-white">AI Needs:</h3>
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                {["Evidence, not guesses", "Boundaries, not keys", "Approvals, not blind acts", "Typed interfaces"].map((req) => (
                                    <li key={req} className="flex items-center gap-2 text-slate-300">
                                        <Icons.Check className="h-5 w-5 text-[var(--accent)]" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative rounded-3xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)] p-8 shadow-2xl">
                        {/* Abstract Visual of the Control Plane */}
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="flex w-full justify-between gap-4 px-4 opacity-50">
                                <Icons.PagerDuty className="h-10 w-10 text-slate-600" />
                                <Icons.Chart className="h-10 w-10 text-slate-600" />
                                <Icons.Logs className="h-10 w-10 text-slate-600" />
                            </div>
                            <div className="h-8 w-px border-l border-dashed border-slate-600"></div>

                            {/* The Hub */}
                            <div className="relative z-10 flex h-32 w-full max-w-xs items-center justify-center rounded-xl border border-[var(--accent)] bg-[var(--surface)] text-center shadow-[0_0_30px_rgba(114,224,224,0.15)]">
                                <div>
                                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--background)]">
                                        <Icons.Layers className="h-6 w-6" />
                                    </div>
                                    <span className="font-bold text-white">OpsOrch Control Plane</span>
                                </div>
                            </div>

                            <div className="h-8 w-px border-l border-dashed border-slate-600"></div>
                            <div className="flex gap-8 text-slate-300">
                                <span className="rounded bg-slate-800 px-3 py-1 text-sm">Validates</span>
                                <span className="rounded bg-slate-800 px-3 py-1 text-sm">Logs</span>
                                <span className="rounded bg-slate-800 px-3 py-1 text-sm">Routes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operations as Substrate */}
                <section className="relative overflow-hidden rounded-3xl border border-[#23444b] bg-gradient-to-br from-[#0c1f24] to-[#0d1416] px-8 py-16 text-center shadow-2xl md:px-16">
                    <div className="relative z-10 mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold text-[#72e0e0] md:text-5xl">Operations as a substrate</h2>
                        <SectionText className="mt-6">
                            OpsOrch treats operations as a <span className="font-semibold text-white">substrate</span>, not a product surface.
                            It is the layer where humans investigate and decide, automation executes, and AI assists through
                            the same interfaces.
                        </SectionText>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            {["Typed Actions", "Auditable Interactions", "Composable Workflows"].map((tag) => (
                                <span key={tag} className="rounded-full border border-slate-700 bg-slate-900/50 px-6 py-2 text-sm text-slate-300 backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Built for / Not built for */}
                <section className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-card)] p-8 text-[var(--text-dark)] shadow-xl">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <Icons.Check className="h-5 w-5" />
                            </div>
                            Who OpsOrch is for
                        </h3>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Platform engineering teams building robust internal tools",
                                "SREs and infrastructure leads needing safety at scale",
                                "Teams building AI-assisted operational systems",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-lg font-medium text-slate-700">
                                    <Icons.Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-slate-400">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-200">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                                <Icons.Cross className="h-5 w-5" />
                            </div>
                            Not built for
                        </h3>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Plug-and-play SaaS replacements for your entire stack",
                                "Teams unwilling to own their own automation logic",
                                "Organizations without foundational operational rigor",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-lg text-slate-400">
                                    <Icons.Cross className="mt-1 h-5 w-5 shrink-0 text-rose-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold text-white">Ready to take control?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                        If today&rsquo;s tooling feels fragmented, unsafe, or incomplete, OpsOrch is the substrate built for that future.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/docs/quick-start"
                            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-bold text-[var(--background)] transition-transform hover:scale-105"
                        >
                            Get Started
                            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
