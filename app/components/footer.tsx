import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Product",
            links: [
                { label: "OpsOrch Core", href: "https://github.com/OpsOrch/opsorch-core" },
                { label: "OpsOrch Console", href: "https://github.com/OpsOrch/opsorch-console" },
                { label: "OpsOrch Copilot", href: "https://github.com/OpsOrch/opsorch-copilot" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", href: "/blog" },
                { label: "Documentation", href: "/docs" },
                { label: "GitHub", href: "https://github.com/OpsOrch" },
                { label: "License", href: "/license" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ];

    return (
        <footer className="border-t border-white/10 bg-[#0d1416]/50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-white">OpsOrch</h3>
                        <p className="mt-2 text-sm text-slate-400">
                            Unified operations platform for resilient teams.
                        </p>
                    </div>

                    {/* Links Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#72e0e0]">
                                {section.title}
                            </h4>
                            <ul className="mt-4 space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-400 transition hover:text-[#72e0e0]"
                                            {...(link.href.startsWith("http") && {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            })}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                    <p className="text-center text-xs text-slate-500">
                        © {currentYear} OpsOrch. Licensed under Apache 2.0.
                    </p>
                </div>
            </div>
        </footer>
    );
}
