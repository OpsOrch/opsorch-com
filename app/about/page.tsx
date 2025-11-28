import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-4xl space-y-12">
                {/* Header */}
                <header className="text-center">
                    <div className="mb-4 flex justify-center">
                        <Image
                            src="/OpsOrch.png"
                            alt="OpsOrch logo"
                            width={80}
                            height={80}
                            className="rounded-2xl"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-white md:text-5xl">About OpsOrch</h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Building the future of unified operations platforms
                    </p>
                </header>

                {/* Mission */}
                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-2xl font-semibold text-[#72e0e0]">Our Mission</h2>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        OpsOrch is an open, modular incident-operations platform that unifies incidents, logs,
                        metrics, tickets, messaging, and services behind one orchestration layer. We believe that
                        operators shouldn't have to context-switch between Jira, PagerDuty, Grafana, and Slack
                        during an outage.
                    </p>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Our mission is to eliminate tool sprawl by providing a single, cohesive surface where
                        every signal and every action flows together naturally. When you ask "Show me the last
                        two impactful incidents," OpsOrch retrieves incidents, alerts, tickets, and relevant
                        logs, all in one place, with correlated timelines and evidence.
                    </p>
                </section>

                {/* Why OpsOrch */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Why OpsOrch?</h2>
                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Eliminate Tool Sprawl</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                Stop juggling tabs between PagerDuty, Jira, Grafana, Slack, and Datadog. OpsOrch
                                provides a single cohesive interface that aggregates everything operators need during
                                an incident.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">API-First Design</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                Integrate in hours, not months. Every feature is accessible via REST APIs with SDKs,
                                Terraform provider, and CLI. If you can call an API, you can build on OpsOrch.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Adapter-Driven Architecture</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                A pluggable adapter system means you integrate with PagerDuty, Jira, Prometheus,
                                and more, without rewriting workflows. Load adapters in-process or as plugins. Build
                                custom adapters for your own tools.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">AI-Powered Copilot</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                Ask "What caused the severity escalation?" and get answers with evidence. Copilot
                                correlates incidents, logs, metrics, and tickets using MCP tools, providing cross-stack
                                intelligence that saves hours of manual investigation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Open Source Core</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                The core runtime and adapters are open source under Apache 2.0. Self-host in your
                                environment, audit the code, and contribute back. Build trust through transparency.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#72e0e0]">Zero Data Storage</h3>
                            <p className="mt-2 text-sm text-slate-300">
                                OpsOrch doesn't store your operational data. It orchestrates requests across your
                                existing systems and returns unified results. Your data stays where it belongs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-2xl font-semibold text-slate-900">Built by Operators, for Operators</h2>
                    <p className="mt-4 text-slate-700 leading-relaxed">
                        OpsOrch is developed by a team that has lived through the pain of fragmented tools
                        and late-night incidents. We understand the stakes and the stress, which is why we're
                        committed to building a platform that genuinely helps teams operate with confidence.
                    </p>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-6 py-3 font-semibold text-white transition hover:bg-[#14454e]"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
