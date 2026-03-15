import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./contact-form";

const pageUrl = "https://opsorch.com/contact";

export const metadata: Metadata = {
    title: "Contact OpsOrch",
    description: "Reach the OpsOrch team to discuss deployments, partnerships, or community contributions.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Contact OpsOrch",
        description: "Get in touch with OpsOrch for support, integrations, or to contribute to the project.",
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "ContactPage",
                                name: "Contact OpsOrch",
                                description: "Reach OpsOrch for platform demos, integrations, or support.",
                                url: pageUrl,
                                publisher: {
                                    "@type": "Organization",
                                    name: "OpsOrch",
                                    url: "https://opsorch.com",
                                },
                                mainEntity: {
                                    "@type": "ContactPoint",
                                    contactType: "customer support",
                                    url: pageUrl,
                                    areaServed: "Global",
                                    availableLanguage: ["English"],
                                },
                            },
                            {
                                "@type": "BreadcrumbList",
                                itemListElement: [
                                    {
                                        "@type": "ListItem",
                                        position: 1,
                                        name: "Home",
                                        item: "https://opsorch.com",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Contact",
                                        item: pageUrl,
                                    },
                                ],
                            },
                        ],
                    }),
                }}
            />
            <div className="mx-auto max-w-3xl space-y-12">
                {/* Header */}
                <header className="text-center">
                    <p className="opsorch-tag">Get in Touch</p>
                    <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-lg text-slate-300">
                        We&rsquo;d love to hear from you
                    </p>
                </header>

                {/* Contact Form */}
                <section className="opsorch-card border-[#2c4c52] p-8">
                    <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
                    <ContactForm />
                </section>

                {/* GitHub */}
                <section className="opsorch-card border-[#1f3c43] p-8 text-center">
                    <h2 className="text-2xl font-semibold text-white">Open Source on GitHub</h2>
                    <p className="mt-3 text-slate-300">
                        Explore our code, contribute, or open an issue
                    </p>
                    <div className="mt-6">
                        <Link
                            href="https://github.com/OpsOrch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-[#55cfd0] bg-[#10333a] px-6 py-3 font-semibold text-white transition hover:bg-[#14454e]"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Visit GitHub Organization
                            <span aria-hidden>↗</span>
                        </Link>
                    </div>
                </section>

                {/* Community */}
                <section className="opsorch-card opsorch-card--light p-8">
                    <h2 className="text-2xl font-semibold text-slate-900">Join the Community</h2>
                    <p className="mt-3 text-slate-700">
                        OpsOrch is built in the open. We welcome contributions, feedback, and discussions
                        from the community. Whether you&rsquo;re fixing a bug, building an adapter, or sharing
                        your use case. We&rsquo;d love to collaborate.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            href="https://github.com/OpsOrch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#3d8f92] transition hover:text-[#2c7375]"
                        >
                            Browse Repositories →
                        </Link>
                        <Link
                            href="/docs"
                            className="text-sm font-medium text-[#3d8f92] transition hover:text-[#2c7375]"
                        >
                            Read Documentation →
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
