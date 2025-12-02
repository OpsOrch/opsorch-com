import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const pageUrl = "https://opsorch.com/license";

export const metadata: Metadata = {
    title: "OpsOrch Enterprise License",
    description: "Review the enterprise license terms that govern commercial use of the OpsOrch platform.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "OpsOrch Enterprise License",
        description: "Read the enterprise terms for deploying OpsOrch in regulated or commercial environments.",
    },
};

export default async function LicensePage() {
    const licensePath = path.join(process.cwd(), "LICENSE-ENTERPRISE");
    let licenseContent = "";

    try {
        licenseContent = await fs.promises.readFile(licensePath, "utf-8");
    } catch (error) {
        console.error("Error reading license file:", error);
        licenseContent = "Error loading license content.";
    }

    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                name: "OpsOrch Enterprise License",
                                description: "Review the OpsOrch license text for enterprise deployments.",
                                url: pageUrl,
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
                                        name: "Enterprise License",
                                        item: pageUrl,
                                    },
                                ],
                            },
                        ],
                    }),
                }}
            />
            <div className="mx-auto flex max-w-4xl flex-col gap-10">
                <header className="flex flex-col gap-6 border-b border-[#2c4c52] pb-8">
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <Image
                                src="/OpsOrch.png"
                                alt="OpsOrch logo"
                                width={48}
                                height={48}
                                className="rounded-xl transition hover:opacity-80"
                            />
                        </Link>
                        <Link href="/" className="text-xl font-semibold text-white hover:text-[#55cfd0] transition">
                            OpsOrch
                        </Link>
                    </div>
                    <h1 className="text-3xl font-semibold text-white">Enterprise License</h1>
                </header>

                <main className="opsorch-card border-[#1f3c43] bg-[#0f1c20] p-6 sm:p-8">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300 overflow-x-auto">
                        {licenseContent}
                    </pre>
                </main>

                <footer className="text-center text-xs text-slate-400">
                    © {currentYear} OpsOrch. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
