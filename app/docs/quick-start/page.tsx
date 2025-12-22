
import type { Metadata } from "next";
import React from "react";
import type { SVGProps } from "react";
import CodeBlock from "../../components/code-block";


const pageUrl = "https://opsorch.com/docs/quick-start";

export const metadata: Metadata = {
    title: "Quick Start Guide",
    description:
        "Experience OpsOrch as an operations control plane in 10 minutes. Visualize your entire stack in one place.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "OpsOrch Quick Start Guide",
        description:
            "Get started with OpsOrch in 10 minutes using Docker and mock adapters. No production credentials needed.",
    },
};

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <h2 className={`text-3xl font-bold tracking-tight text-white md:text-4xl ${className}`}>{children}</h2>;
}

function SectionText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <p className={`text-lg leading-relaxed text-slate-300 ${className}`}>{children}</p>;
}

function StepHeading({ children, step }: { children: React.ReactNode; step: number }) {
    return (
        <h3 className="flex items-center gap-4 text-2xl font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                {step}
            </span>
            {children}
        </h3>
    );
}

function TimeTag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
            {children}
        </span>
    );
}

type IconProps = SVGProps<SVGSVGElement>;

const Icons = {
    Docker: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.938-.089 2.844-.266a11.94 11.94 0 003.766-1.456c1.127-.665 2.086-1.57 2.85-2.691a9.596 9.596 0 001.428-2.55 5.32 5.32 0 001.57.237c.915 0 1.756-.363 2.36-1.02.313-.345.549-.75.704-1.204l.077-.236-.134-.2c-.146-.219-.326-.417-.533-.58z" />
        </svg>
    ),
    Clock: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
        </svg>
    ),
    Terminal: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <polyline points="4,17 10,11 4,5" />
            <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
    ),
    ExternalLink: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15,3 21,3 21,9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    ),
    Check: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
};

export default function QuickStartGuidePage() {
    return (
        <div className="min-h-screen">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "OpsOrch Quick Start Guide",
                        description: "Experience OpsOrch as an operations control plane in 10 minutes",
                        totalTime: "PT10M",
                        supply: [
                            { "@type": "HowToSupply", name: "Docker" },
                            { "@type": "HowToSupply", name: "Docker Compose" }
                        ],
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Start the OpsOrch stack",
                                text: "Clone the repository and start the local stack with mock adapters"
                            },
                            {
                                "@type": "HowToStep",
                                name: "Open the Console",
                                text: "Access the OpsOrch Console at http://localhost:3000"
                            },
                            {
                                "@type": "HowToStep",
                                name: "Explore your infrastructure",
                                text: "Navigate to Services or Deployments to see correlated tickets, logs, and metrics"
                            },
                            {
                                "@type": "HowToStep",
                                name: "Observe the differences",
                                text: "Notice typed responses, correlated data, and control plane interactions"
                            }
                        ]
                    }),
                }}
            />

            {/* Hero Section */}
            <div className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <TimeTag>
                            <Icons.Clock className="h-4 w-4 mr-1" />
                            10 minutes
                        </TimeTag>
                    </div>
                    <h1 className="bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                        Quick Start Guide
                    </h1>
                    <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
                        Experience OpsOrch as an operations control plane by visualizing your entire stack
                        and seeing unified, correlated data.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                        <span>✓ No production credentials needed</span>
                        <span>✓ Runs entirely locally</span>
                        <span>✓ Uses mock adapters</span>
                    </div>
                </div>
                {/* Background glow effects */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[100px]" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}></div>
            </div>

            <div className="mx-auto max-w-4xl space-y-16 px-4 pb-32 sm:px-6 lg:px-10">

                {/* Goal Section */}
                <section className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-highlight)] p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">What you&rsquo;ll do</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            "Start OpsOrch locally",
                            "Open the Console",
                            "Explore your infrastructure",
                            "See correlated data"
                        ].map((item, index) => (
                            <div key={item} className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--background)] text-xs font-bold">
                                    {index + 1}
                                </span>
                                <span className="text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-slate-400">
                        This is the smallest action that shows why OpsOrch exists.
                    </p>
                </section>

                {/* Prerequisites */}
                <section>
                    <SectionHeading className="mb-6">Prerequisites</SectionHeading>
                    <TimeTag>30 seconds</TimeTag>
                    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/50 p-6">
                        <p className="text-slate-300 mb-4">You need:</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 p-4">
                                <Icons.Docker className="h-8 w-8 text-blue-400" />
                                <div>
                                    <div className="font-semibold text-white">Docker</div>
                                    <div className="text-sm text-slate-400">Container runtime</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 p-4">
                                <Icons.Terminal className="h-8 w-8 text-green-400" />
                                <div>
                                    <div className="font-semibold text-white">Docker Compose</div>
                                    <div className="text-sm text-slate-400">Multi-container orchestration</div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-slate-400">Nothing else.</p>
                    </div>
                </section>

                {/* Step 1: Start the Stack */}
                <section>
                    <div className="mb-6">
                        <StepHeading step={1}>Start the OpsOrch stack</StepHeading>
                        <TimeTag>3 minutes</TimeTag>
                    </div>

                    <SectionText className="mb-6">
                        Download the docker-compose file and start the local stack with mock adapters:
                    </SectionText>

                    <div className="space-y-4">
                        <CodeBlock>
                            {`curl -O https://raw.githubusercontent.com/OpsOrch/.github/main/profile/docker-compose.yml
docker compose up -d`}
                        </CodeBlock>
                    </div>

                    <div className="mt-6 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                        <h4 className="font-semibold text-white mb-2">This starts:</h4>
                        <ul className="space-y-1 text-slate-300">
                            <li>• OpsOrch Core (control plane)</li>
                            <li>• OpsOrch MCP server</li>
                            <li>• OpsOrch Console</li>
                            <li>• Mock providers for incidents, metrics, logs, tickets, and services</li>
                        </ul>
                        <p className="mt-4 text-sm text-slate-400">
                            Wait until all containers are healthy.
                        </p>
                    </div>
                </section>

                {/* Step 2: Open Console */}
                <section>
                    <div className="mb-6">
                        <StepHeading step={2}>Open the Console</StepHeading>
                        <TimeTag>30 seconds</TimeTag>
                    </div>

                    <SectionText className="mb-6">
                        Open your browser:
                    </SectionText>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                            <span className="text-slate-400">URL:</span>
                            <a
                                href="http://localhost:3000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-mono text-[var(--accent)] hover:underline"
                            >
                                http://localhost:3000
                                <Icons.ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 rounded-lg border border-slate-600 bg-slate-800/30 p-4">
                        <p className="text-slate-300">
                            You should see the OpsOrch Console with seeded operational data.
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                            At this point, nothing magical has happened yet. That&rsquo;s intentional.
                        </p>
                    </div>
                </section>

                {/* Step 3: Explore Infrastructure */}
                <section>
                    <div className="mb-6">
                        <StepHeading step={3}>Explore your infrastructure</StepHeading>
                        <TimeTag>2 minutes</TimeTag>
                    </div>

                    <div className="space-y-6">
                        <SectionText>
                            Navigate to the <strong>Services</strong> or <strong>Deployments</strong> views.
                        </SectionText>

                        <SectionText>
                            You will immediately see all correlated operational data in one place:
                        </SectionText>

                        <div className="grid gap-4 sm:grid-cols-1">
                            {[
                                "Related Tickets and Incidents",
                                "Relevant Logs and Metrics",
                                "Recent CI/CD Deployments"
                            ].map((item) => (
                                <div key={item} className="rounded-lg border border-slate-600 bg-slate-800/30 p-4">
                                    <span className="text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                            <p className="text-amber-200">
                                <strong>No queries required.</strong> OpsOrch automatically correlates this context for you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Step 4: Observe Differences */}
                <section>
                    <div className="mb-6">
                        <StepHeading step={4}>Observe what&rsquo;s different</StepHeading>
                        <TimeTag>2 minutes</TimeTag>
                    </div>

                    <SectionText className="mb-6">
                        Notice the following:
                    </SectionText>

                    <div className="grid gap-4">
                        {[
                            {
                                title: "Results come back typed, not free-form",
                                desc: "Structured data you can act on, not just text"
                            },
                            {
                                title: "Data is correlated across systems, not siloed",
                                desc: "Incidents, services, metrics, and logs connected"
                            },
                            {
                                title: "Evidence links point back to the original tools",
                                desc: "No data copying, just intelligent routing"
                            },
                            {
                                title: "No data was copied or re-stored",
                                desc: "Live queries to your actual systems"
                            },
                            {
                                title: "No direct access to vendor APIs was required",
                                desc: "Safe, controlled interactions through adapters"
                            }
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 rounded-lg border border-slate-700 bg-slate-900/30 p-4">
                                <Icons.Check className="h-6 w-6 text-[var(--accent)] mt-0.5 shrink-0" />
                                <div>
                                    <div className="font-semibold text-white">{item.title}</div>
                                    <div className="text-sm text-slate-400 mt-1">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-6 text-center">
                        <p className="text-lg font-semibold text-white">
                            You are not looking at a dashboard. You are interacting with a control plane.
                        </p>
                        <p className="mt-2 text-[var(--accent)]">
                            This is OpsOrch&rsquo;s core idea.
                        </p>
                    </div>
                </section>

                {/* What Just Happened */}
                <section className="rounded-3xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)] p-8">
                    <SectionHeading className="mb-6">What just happened</SectionHeading>

                    <SectionText className="mb-6">
                        You did not replace any tools. You did not sync data into a new system.
                        You did not grant broad credentials to an AI.
                    </SectionText>

                    <SectionText className="mb-6">Instead:</SectionText>

                    <div className="space-y-4">
                        {[
                            "OpsOrch reasoned across operational systems",
                            "Actions and queries flowed through typed contracts",
                            "Control stayed with the operator"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div>
                                <span className="text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xl font-semibold text-[var(--accent)]">
                            This is what &quot;operations as a substrate&quot; feels like in practice.
                        </p>
                    </div>
                </section>

                {/* What to Try Next */}
                <section>
                    <SectionHeading className="mb-6">What to try next</SectionHeading>
                    <SectionText className="mb-6">If you want to go one step further:</SectionText>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            "Explore how actions require explicit execution",
                            "Inspect the MCP tools exposed by OpsOrch",
                            "Replace a mock adapter with a real provider",
                            "Connect an AI agent via MCP"
                        ].map((item) => (
                            <div key={item} className="rounded-lg border border-slate-600 bg-slate-800/30 p-4">
                                <span className="text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 rounded-lg border border-slate-600 bg-slate-800/30 p-4">
                        <p className="text-slate-400">
                            But none of that is required to understand the core value.
                        </p>
                    </div>
                </section>

                {/* Where to Go From Here */}
                <section>
                    <SectionHeading className="mb-6">Where to go from here</SectionHeading>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Architecture Overview", desc: "Understand how OpsOrch works", href: "/docs/architecture" },
                            { title: "Provider Adapters", desc: "Connect your real systems", href: "/docs/adapters" },
                            { title: "Demo Video", desc: "Watch the full walkthrough", href: "/docs/quick-start" },
                            { title: "Real Workflow", desc: "Integrate into production", href: "/docs/concepts" },
                            { title: "AI Integration", desc: "Connect agents via MCP", href: "/docs/copilot" },
                            { title: "Community", desc: "Join other operators", href: "/contact" }
                        ].map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="group rounded-lg border border-slate-600 bg-slate-800/30 p-4 transition-all hover:border-[var(--accent)] hover:bg-slate-800/50"
                            >
                                <div className="font-semibold text-white group-hover:text-[var(--accent)]">
                                    {item.title}
                                </div>
                                <div className="text-sm text-slate-400 mt-1">{item.desc}</div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-400">Or stop here.</p>
                        <p className="mt-2 text-lg text-white">
                            If this page made sense, OpsOrch is likely relevant to how you think about operations.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
