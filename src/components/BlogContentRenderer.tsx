"use client";

import Link from "next/link";

export function slugify(text: string) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

export function extractHeadings(content: string) {
    const lines = content.split('\n');
    const headings: { id: string; text: string; level: number }[] = [];
    
    lines.forEach((line) => {
        if (line.startsWith('#### ')) {
            const text = line.replace('#### ', '');
            headings.push({ id: slugify(text), text, level: 4 });
        } else if (line.startsWith('### ')) {
            const text = line.replace('### ', '');
            headings.push({ id: slugify(text), text, level: 3 });
        } else if (line.startsWith('## ')) {
            const text = line.replace('## ', '');
            headings.push({ id: slugify(text), text, level: 2 });
        }
    });
    
    return headings;
}

interface BlogContentRendererProps {
    content: string;
    className?: string;
}

/**
 * Reusable component for rendering blog content with markdown-like syntax.
 * Updated for the dark-themed redesign with heading IDs for standard scroll-spying TOCs.
 */
export default function BlogContentRenderer({ content, className = "" }: BlogContentRendererProps) {
    const renderText = (text: string) => {
        // Parse bold text and links
        const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
        return parts.map((part, i) => {
            // Bold text
            if (part.startsWith("**") && part.endsWith("**")) {
                return (
                    <strong key={i} className="text-white font-semibold">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            // Links
            if (part.startsWith("[") && part.includes("](")) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                    const label = match[1];
                    const url = match[2];
                    const isExternal = url.startsWith("http");
                    return (
                        <Link
                            key={i}
                            href={url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="text-[#00adef] font-medium hover:underline transition-all"
                        >
                            {label}
                        </Link>
                    );
                }
            }
            return part;
        });
    };

    const lines = content.split('\n');

    // Helper: parse a pipe-delimited row into cell strings
    const parseTableRow = (line: string): string[] => {
        return line
            .replace(/^\|/, '')
            .replace(/\|$/, '')
            .split('|')
            .map(cell => cell.trim());
    };

    // Helper: check if a line is a table separator row (e.g. | --- | --- |)
    const isSeparatorRow = (line: string): boolean => {
        const cells = parseTableRow(line);
        return cells.every(cell => /^[-:\s]+$/.test(cell));
    };

    // Pre-process: group consecutive | lines into table blocks
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Detect start of a table (line starts with |)
        if (line.trim().startsWith('|')) {
            // Collect all consecutive | lines
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                tableLines.push(lines[i].trim());
                i++;
            }

            // Need at least 2 rows (header + separator) to be a valid table
            if (tableLines.length >= 2 && isSeparatorRow(tableLines[1])) {
                const headerCells = parseTableRow(tableLines[0]);
                const dataRows = tableLines.slice(2).map(row => parseTableRow(row));

                elements.push(
                    <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-[#2a2f36]">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-[#1a1f25]">
                                    {headerCells.map((cell, ci) => (
                                        <th
                                            key={ci}
                                            className="px-5 py-3.5 text-left text-[#e5e7eb] font-semibold border-b border-[#2a2f36] whitespace-nowrap"
                                        >
                                            {renderText(cell)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataRows.map((row, ri) => (
                                    <tr
                                        key={ri}
                                        className={`${ri % 2 === 0 ? 'bg-[#15181c]' : 'bg-[#12151a]'} hover:bg-[#1e2430] transition-colors`}
                                    >
                                        {row.map((cell, ci) => (
                                            <td
                                                key={ci}
                                                className="px-5 py-3.5 text-[#d1d5db] border-b border-[#2a2f36]/50"
                                            >
                                                {renderText(cell)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            } else {
                // Not a valid table, render as regular lines
                tableLines.forEach((tl, ti) => {
                    elements.push(<p key={`tl-${i}-${ti}`} className="text-[#d1d5db]">{renderText(tl)}</p>);
                });
            }
            continue;
        }

        // H4 Headers (check before H3 since #### starts with ###)
        if (line.startsWith('#### ')) {
            const rawText = line.replace('#### ', '');
            elements.push(
                <h4 id={slugify(rawText)} key={i} className="text-xl font-serif text-[#e5e7eb] mt-8 mb-3 scroll-mt-24">
                    {rawText}
                </h4>
            );
            i++;
            continue;
        }
        // H3 Headers (check before H2 since ### starts with ##)
        if (line.startsWith('### ')) {
            const rawText = line.replace('### ', '');
            elements.push(
                <h3 id={slugify(rawText)} key={i} className="text-2xl font-serif text-white mt-10 mb-4 scroll-mt-24">
                    {rawText}
                </h3>
            );
            i++;
            continue;
        }
        // H2 Headers
        if (line.startsWith('## ')) {
            const rawText = line.replace('## ', '');
            elements.push(
                <h2 id={slugify(rawText)} key={i} className="text-3xl font-serif text-white mt-12 mb-5 scroll-mt-24">
                    {rawText}
                </h2>
            );
            i++;
            continue;
        }
        // Bullet points
        if (line.startsWith('- ')) {
            elements.push(
                <div key={i} className="flex gap-3 ml-4">
                    <span className="text-[#00adef] font-bold">•</span>
                    <p className="text-[#d1d5db]">{renderText(line.replace('- ', ''))}</p>
                </div>
            );
            i++;
            continue;
        }
        // Images
        if (line.startsWith('![')) {
            const match = line.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
                const alt = match[1];
                const src = match[2];
                elements.push(
                    <div key={i} className="my-8 space-y-2 flex flex-col items-center">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full max-w-[700px] h-auto max-h-[400px] object-cover rounded-xl border border-[#2a2f36] shadow-2xl"
                        />
                        {alt && (
                            <p className="text-center text-sm text-[#6b7280] italic max-w-[400px]">
                                {alt}
                            </p>
                        )}
                    </div>
                );
                i++;
                continue;
            }
        }
        // Empty lines
        if (line.trim() === '') {
            elements.push(<div key={i} className="h-4" />);
            i++;
            continue;
        }
        // Regular paragraphs
        elements.push(<p key={i} className="text-[#d1d5db]">{renderText(line)}</p>);
        i++;
    }

    return (
        <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
            <div className="text-[#d1d5db] leading-relaxed font-sans space-y-4">
                {elements}
            </div>
        </div>
    );
}
