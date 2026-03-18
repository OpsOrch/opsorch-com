import Link from "next/link";
import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/blog";
const postHref = "/blog/operations-are-fragmented";
const publishedAt = "2026-03-18";

export const metadata: Metadata = {
  title: "OpsOrch Blog",
  description:
    "Writing from OpsOrch on operational workflows, incident response, orchestration, and building a control plane for engineering teams.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "OpsOrch Blog",
    description:
      "Writing from OpsOrch on operational workflows, incident response, orchestration, and building a control plane for engineering teams.",
  },
};

export default function BlogPage() {
  const publishedLabel = new Date(`${publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "OpsOrch Blog",
            description:
              "Writing from OpsOrch on operational workflows, incident response, orchestration, and building a control plane for engineering teams.",
            url: pageUrl,
          }),
        }}
      />

      <div className="mx-auto max-w-6xl space-y-14">
        <header className="relative overflow-hidden rounded-[2rem] border border-[#234046] bg-[linear-gradient(135deg,rgba(17,41,47,0.9),rgba(9,16,19,0.92))] px-8 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:px-12 md:py-14">
          <div
            className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(114,224,224,0.55) 0%, transparent 72%)" }}
          />
          <div className="relative max-w-4xl space-y-5">
            <p className="opsorch-tag">Blog</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Writing about how operational work actually happens
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Essays from OpsOrch on fragmented operations, decision-making under pressure, orchestration, and building systems that
              connect the work between tools.
            </p>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_18rem]">
          <article className="opsorch-card border-[#234046] p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              <span className="text-[#72e0e0]">Featured Post</span>
              <span aria-hidden className="text-slate-600">
                /
              </span>
              <time dateTime={publishedAt}>{publishedLabel}</time>
              <span aria-hidden className="text-slate-600">
                /
              </span>
              <span>5 min</span>
            </div>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              <Link href={postHref} className="transition hover:text-[#72e0e0]">
                Operations Are Fragmented
              </Link>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              An alert fires in Datadog. Investigation moves to Grafana. Decisions happen in Slack. The rollback runs through Argo.
              Follow-up lands in Jira. Every tool works. The process between them does not.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={postHref}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14454e]"
              >
                Read the post
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          <aside className="rounded-[1.75rem] border border-[#1f3c43] bg-[#0b1113]/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72e0e0]">Focus</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p>Fragmentation across alerts, observability, chat, deployment, and ticketing.</p>
              <p>Operational context that lives between tools instead of inside them.</p>
              <p>Why a control plane matters more than another dashboard.</p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
