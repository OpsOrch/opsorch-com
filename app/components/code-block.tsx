"use client";

import { useState } from "react";

interface CodeBlockProps {
    children: string;
    language?: string;
}

export default function CodeBlock({ children, language = "bash" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2">
                <span className="text-sm text-slate-400">{language}</span>
                <button 
                    onClick={handleCopy}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre className="overflow-x-auto p-4">
                <code className="text-sm text-slate-100">{children}</code>
            </pre>
        </div>
    );
}