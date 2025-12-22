
import type { Metadata } from "next";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/copilot";

export const metadata: Metadata = {
    title: "OpsOrch Copilot | OpsOrch Documentation",
    description: "Learn about the AI-powered operational assistant. Architecture, deployment, and example investigation flows.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "OpsOrch Copilot | OpsOrch Documentation",
        description: "AI-powered operational assistant that orchestrates reasoning, tool execution, and evidence gathering.",
    },
};

export default function CopilotPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Copilot",
                        description: "AI-powered operational assistant that orchestrates reasoning, tool execution, and evidence gathering.",
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
                        Copilot
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        AI-powered operational assistant that orchestrates reasoning, tool execution, and evidence gathering.
                    </p>
                </header>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">How it Works</h2>
                    <p className="mt-4 text-slate-300">
                        OpsOrch Copilot is not just a chatbot. It is a reasoning engine that invokes <strong>Tools</strong> exposed by the MCP server.
                    </p>
                    <div className="mt-6 aspect-video w-full rounded-xl border border-slate-700 bg-[#0d1416] p-4 flex items-center justify-center text-slate-500 text-sm">
                        {/* Placeholder for architecture diagram if we had mermaid support rendered here, using text for now or valid react component if possible */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded border border-white/20 bg-white/5 px-4 py-2 text-white">User Question</div>
                            <div className="text-lg">↓</div>
                            <div className="rounded border border-[#72e0e0]/50 bg-[#72e0e0]/10 px-4 py-2 text-[#72e0e0] font-bold">Planning Loop (LLM)</div>
                            <div className="flex gap-8">
                                <span className="text-lg">↙</span>
                                <span className="text-lg">↘</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="rounded border border-slate-600 bg-slate-800 px-3 py-1 text-xs">Method: query_incidents</div>
                                <div className="rounded border border-slate-600 bg-slate-800 px-3 py-1 text-xs">Method: query_metrics</div>
                            </div>
                            <div className="text-lg">↓</div>
                            <div className="rounded border border-white/20 bg-white/5 px-4 py-2 text-white">Comprehensive Answer</div>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Reasoning Engine</h2>
                    <p className="mt-4 text-slate-300">
                        The Copilot uses an iterative <strong>Plan-Act-Observe</strong> loop to solve complex operational problems.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#72e0e0]/20 flex items-center justify-center text-[#72e0e0] font-bold shrink-0">1</div>
                            <div>
                                <h3 className="font-semibold text-white">Planning</h3>
                                <p className="text-sm text-slate-400">The LLM analyzes your question (&quot;Why is checkout slow?&quot;) and breaks it down into required data steps.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#72e0e0]/20 flex items-center justify-center text-[#72e0e0] font-bold shrink-0">2</div>
                            <div>
                                <h3 className="font-semibold text-white">Tool Execution</h3>
                                <p className="text-sm text-slate-400">It invokes read-only tools via MCP (e.g., <code>query-metrics</code>, <code>query-logs</code>) to gather evidence.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#72e0e0]/20 flex items-center justify-center text-[#72e0e0] font-bold shrink-0">3</div>
                            <div>
                                <h3 className="font-semibold text-white">Synthesis &amp; Iteration</h3>
                                <p className="text-sm text-slate-400">It observes the results. If the data is insufficient (e.g., no logs found), it iterates with a new plan to expand the time window or check a different service.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Capabilities</h2>
                    <ul className="mt-6 space-y-3 text-slate-300">
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">•</span>
                            <span><strong>Contextual Analysis:</strong> Retrieve and summarize incidents with full context (metrics, logs, tickets).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">•</span>
                            <span><strong>Correlation:</strong> Connect spikes in metrics to recent deployments or log error bursts.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">•</span>
                            <span><strong>Investigation:</strong> Run multi-step investigations to find root causes across systems.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">•</span>
                            <span><strong>Answer with Evidence:</strong> Provides citations and deep links to source data in the Console.</span>
                        </li>
                    </ul>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Safety &amp; Resilience</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Read-Only by Default</h3>
                            <p className="text-sm text-slate-300">
                                The Copilot is designed to be safe. It prioritizes &quot;Read&quot; operations. Any &quot;Write&quot; operation (e.g., restarting a pod) requires explicit user confirmation via a Human-in-the-Loop flow.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Resilience Patterns</h3>
                            <p className="text-sm text-slate-300">
                                The engine handles API failures gracefully with:
                            </p>
                            <ul className="list-disc pl-5 text-sm text-slate-400 mt-2">
                                <li><strong>Exponential Backoff:</strong> Retries failed provider calls automatically.</li>
                                <li><strong>Window Expansion:</strong> Automatically widens time ranges if metrics are empty.</li>
                                <li><strong>Circuit Breaking:</strong> Stops calling down providers to prevent latency.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Deployment</h2>
                    <p className="mt-4 text-slate-300">
                        To enable Copilot in your self-hosted instance, you must provide an LLM API key.
                    </p>
                    <div className="mt-6">
                        <h3 className="font-semibold text-white mb-2">Supported Models</h3>
                        <ul className="list-disc pl-5 text-sm text-slate-400 mb-6 space-y-1">
                            <li>OpenAI GPT-4o / GPT-4 Turbo</li>
                            <li>Anthropic Claude 3.5 Sonnet</li>
                            <li>AWS Bedrock (Claude / Titan)</li>
                        </ul>

                        <h3 className="font-semibold text-white mb-2">Configuration</h3>
                        <CodeBlock language="bash">
                            {`# In your opsorch-copilot env or secrets:
LLM_PROVIDER="openai" # or "anthropic", "bedrock"
OPENAI_API_KEY="sk-..." 

# Optional: Specialized Model Selection
LLM_MODEL_PLANNER="gpt-4o"
LLM_MODEL_FAST="gpt-3.5-turbo"`}
                        </CodeBlock>
                    </div>
                </section>

                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Example Flow</h2>
                    <p className="mt-4 text-slate-300">
                        A typical investigation flow looks like this:
                    </p>
                    <div className="mt-6 space-y-6">
                        <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-4">
                            <div className="font-semibold text-white mb-1">User:</div>
                            <div className="text-slate-300 italic">&quot;Why is the payment service returning 500s?&quot;</div>
                        </div>

                        <div className="pl-8 border-l-2 border-slate-700 space-y-4">
                            <div className="text-xs uppercase text-slate-500 font-bold">Step 1: Planning</div>
                            <div className="text-sm text-slate-300">Strategy: Check service health, recent logs, and active incidents.</div>

                            <div className="text-xs uppercase text-slate-500 font-bold">Step 2: Tool Execution</div>
                            <div className="font-mono text-xs text-[#72e0e0]">
                                CodeBlock.invoke(&quot;query_incidents&quot;, &#123;&quot;service&quot;: &quot;payment&quot;&#125;)<br />
                                CodeBlock.invoke(&quot;query_logs&quot;, &#123;&quot;query&quot;: &quot;service:payment status:500&quot;&#125;)
                            </div>

                            <div className="text-xs uppercase text-slate-500 font-bold">Step 3: Synthesis</div>
                            <div className="text-sm text-slate-300">Found correlation: 500s started 5 mins ago, coincident with Deployment #123.</div>
                        </div>

                        <div className="rounded-lg border border-[#72e0e0]/30 bg-[#72e0e0]/10 p-4">
                            <div className="font-semibold text-white mb-1">Copilot Answer:</div>
                            <div className="text-slate-300">
                                The <strong>payment-service</strong> is experiencing a 15% error rate starting at 14:30 UTC.
                                This correlates with <a href="#" className="underline decoration-dotted">Deployment #123</a> which finished 2 minutes prior.
                                There is an active P1 incident <a href="#" className="underline decoration-dotted">#INC-404</a>.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
