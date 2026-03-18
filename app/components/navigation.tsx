"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
        { href: "/docs", label: "Docs" },
        { href: "/license", label: "License" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1416]/95 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
                        <Image
                            src="/OpsOrch.png"
                            alt="OpsOrch logo"
                            width={36}
                            height={36}
                            className="rounded-lg"
                        />
                        <span className="text-lg font-semibold text-white">OpsOrch</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 transition hover:text-[#72e0e0]"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://github.com/OpsOrch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[#55cfd0] bg-[#10333a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14454e]"
                        >
                            GitHub
                            <span aria-hidden>↗</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden rounded-lg p-2 text-slate-300 hover:bg-white/5"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="border-t border-white/10 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium text-slate-300 transition hover:text-[#72e0e0]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="https://github.com/OpsOrch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-[#55cfd0] bg-[#10333a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14454e]"
                            >
                                GitHub
                                <span aria-hidden>↗</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
