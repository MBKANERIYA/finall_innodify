(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BlogContentRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogContentRenderer,
    "extractHeadings",
    ()=>extractHeadings,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}
function extractHeadings(content) {
    const lines = content.split('\n');
    const headings = [];
    lines.forEach((line)=>{
        if (line.startsWith('#### ')) {
            const text = line.replace('#### ', '');
            headings.push({
                id: slugify(text),
                text,
                level: 4
            });
        } else if (line.startsWith('### ')) {
            const text = line.replace('### ', '');
            headings.push({
                id: slugify(text),
                text,
                level: 3
            });
        } else if (line.startsWith('## ')) {
            const text = line.replace('## ', '');
            headings.push({
                id: slugify(text),
                text,
                level: 2
            });
        }
    });
    return headings;
}
function BlogContentRenderer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "90427e6f0314898cc3b40b5893ef700f8a04ebb11e19e1886ea18303307c3feb") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "90427e6f0314898cc3b40b5893ef700f8a04ebb11e19e1886ea18303307c3feb";
    }
    const { content, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const renderText = _BlogContentRendererRenderText;
    let t2;
    let t3;
    let t4;
    if ($[1] !== className || $[2] !== content) {
        const lines = content.split("\n");
        t4 = `prose prose-invert prose-lg max-w-none ${className}`;
        t2 = "text-[#d1d5db] leading-relaxed font-sans space-y-4";
        let t5;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = ({
                "BlogContentRenderer[lines.map()]": (line, i_0)=>{
                    if (line.startsWith("#### ")) {
                        const rawText = line.replace("#### ", "");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            id: slugify(rawText),
                            className: "text-xl font-serif text-[#e5e7eb] mt-8 mb-3 scroll-mt-24",
                            children: rawText
                        }, i_0, false, {
                            fileName: "[project]/src/components/BlogContentRenderer.tsx",
                            lineNumber: 77,
                            columnNumber: 20
                        }, this);
                    }
                    if (line.startsWith("### ")) {
                        const rawText_0 = line.replace("### ", "");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            id: slugify(rawText_0),
                            className: "text-2xl font-serif text-white mt-10 mb-4 scroll-mt-24",
                            children: rawText_0
                        }, i_0, false, {
                            fileName: "[project]/src/components/BlogContentRenderer.tsx",
                            lineNumber: 81,
                            columnNumber: 20
                        }, this);
                    }
                    if (line.startsWith("## ")) {
                        const rawText_1 = line.replace("## ", "");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: slugify(rawText_1),
                            className: "text-3xl font-serif text-white mt-12 mb-5 scroll-mt-24",
                            children: rawText_1
                        }, i_0, false, {
                            fileName: "[project]/src/components/BlogContentRenderer.tsx",
                            lineNumber: 85,
                            columnNumber: 20
                        }, this);
                    }
                    if (line.startsWith("- ")) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 ml-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00adef] font-bold",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BlogContentRenderer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 63
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#d1d5db]",
                                    children: renderText(line.replace("- ", ""))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BlogContentRenderer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 114
                                }, this)
                            ]
                        }, i_0, true, {
                            fileName: "[project]/src/components/BlogContentRenderer.tsx",
                            lineNumber: 88,
                            columnNumber: 20
                        }, this);
                    }
                    if (line.startsWith("![")) {
                        const match_0 = line.match(/!\[(.*?)\]\((.*?)\)/);
                        if (match_0) {
                            const alt = match_0[1];
                            const src = match_0[2];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-8 space-y-2 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: alt,
                                        className: "w-full max-w-[700px] h-auto max-h-[400px] object-cover rounded-xl border border-[#2a2f36] shadow-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BlogContentRenderer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 91
                                    }, this),
                                    alt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm text-[#6b7280] italic max-w-[400px]",
                                        children: alt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BlogContentRenderer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 239
                                    }, this)
                                ]
                            }, i_0, true, {
                                fileName: "[project]/src/components/BlogContentRenderer.tsx",
                                lineNumber: 95,
                                columnNumber: 22
                            }, this);
                        }
                    }
                    if (line.trim() === "") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4"
                        }, i_0, false, {
                            fileName: "[project]/src/components/BlogContentRenderer.tsx",
                            lineNumber: 99,
                            columnNumber: 20
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#d1d5db]",
                        children: renderText(line)
                    }, i_0, false, {
                        fileName: "[project]/src/components/BlogContentRenderer.tsx",
                        lineNumber: 101,
                        columnNumber: 18
                    }, this);
                }
            })["BlogContentRenderer[lines.map()]"];
            $[6] = t5;
        } else {
            t5 = $[6];
        }
        t3 = lines.map(t5);
        $[1] = className;
        $[2] = content;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/BlogContentRenderer.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/BlogContentRenderer.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = BlogContentRenderer;
function _BlogContentRendererRenderText(text) {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map(_BlogContentRendererRenderTextPartsMap);
}
function _BlogContentRendererRenderTextPartsMap(part, i) {
    if (part.startsWith("**") && part.endsWith("**")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "text-white font-semibold",
            children: part.slice(2, -2)
        }, i, false, {
            fileName: "[project]/src/components/BlogContentRenderer.tsx",
            lineNumber: 145,
            columnNumber: 12
        }, this);
    }
    if (part.startsWith("[") && part.includes("](")) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
            const label = match[1];
            const url = match[2];
            const isExternal = url.startsWith("http");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: url,
                target: isExternal ? "_blank" : undefined,
                rel: isExternal ? "noopener noreferrer" : undefined,
                className: "text-[#00adef] font-medium hover:underline transition-all",
                children: label
            }, i, false, {
                fileName: "[project]/src/components/BlogContentRenderer.tsx",
                lineNumber: 153,
                columnNumber: 14
            }, this);
        }
    }
    return part;
}
var _c;
__turbopack_context__.k.register(_c, "BlogContentRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BlogTableOfContents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogTableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BlogTableOfContents(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "d65818346396b6eb2157a4750c208a5506e8324cca0832061e9b611f6dc5f788") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d65818346396b6eb2157a4750c208a5506e8324cca0832061e9b611f6dc5f788";
    }
    const { title, headings } = t0;
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== headings) {
        t1 = ({
            "BlogTableOfContents[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    const visibleEntries = entries.filter(_BlogTableOfContentsUseEffectAnonymousEntriesFilter);
                    if (visibleEntries.length > 0) {
                        setActiveId(visibleEntries[0].target.id);
                    }
                }, {
                    rootMargin: "0px 0px -80% 0px",
                    threshold: 1
                });
                headings.forEach({
                    "BlogTableOfContents[useEffect() > headings.forEach()]": (heading)=>{
                        const element = document.getElementById(heading.id);
                        if (element) {
                            observer.observe(element);
                        }
                    }
                }["BlogTableOfContents[useEffect() > headings.forEach()]"]);
                return ()=>observer.disconnect();
            }
        })["BlogTableOfContents[useEffect()]"];
        t2 = [
            headings
        ];
        $[1] = headings;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "BlogTableOfContents[scrollToHeading]": (e, id)=>{
                e.preventDefault();
                const element_0 = document.getElementById(id);
                if (element_0) {
                    window.scrollTo({
                        top: element_0.offsetTop - 80,
                        behavior: "smooth"
                    });
                    setActiveId(id);
                }
            }
        })["BlogTableOfContents[scrollToHeading]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const scrollToHeading = t3;
    if (headings.length === 0) {
        return null;
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "text-sm font-semibold tracking-wider text-[#9ca3af] uppercase mb-4",
            children: "Table of Contents"
        }, void 0, false, {
            fileName: "[project]/src/components/BlogTableOfContents.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg text-white font-serif font-black leading-snug mb-6 border-b border-[#2a2f36] pb-4",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/BlogTableOfContents.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[6] = title;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== activeId || $[9] !== headings) {
        let t7;
        if ($[11] !== activeId) {
            t7 = ({
                "BlogTableOfContents[headings.map()]": (heading_0, i)=>{
                    const isActive = activeId === heading_0.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${heading_0.id}`,
                        onClick: {
                            "BlogTableOfContents[headings.map() > <a>.onClick]": (e_0)=>scrollToHeading(e_0, heading_0.id)
                        }["BlogTableOfContents[headings.map() > <a>.onClick]"],
                        className: `
                                py-2 pl-4 text-sm transition-all border-l-2
                                ${heading_0.level === 4 ? "ml-4" : ""}
                                ${isActive ? "border-[#00adef] text-[#00adef] font-medium bg-[#00adef]/10" : "border-transparent text-[#9ca3af] hover:text-white hover:border-[#4b5563]"}
                            `,
                        children: heading_0.text
                    }, i, false, {
                        fileName: "[project]/src/components/BlogTableOfContents.tsx",
                        lineNumber: 106,
                        columnNumber: 18
                    }, this);
                }
            })["BlogTableOfContents[headings.map()]"];
            $[11] = activeId;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        t6 = headings.map(t7);
        $[8] = activeId;
        $[9] = headings;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex flex-col gap-1",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/BlogTableOfContents.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t5 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "sticky top-24 mr-8 lg:w-72 hidden md:block self-start max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide pr-2",
            children: [
                t4,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlogTableOfContents.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s(BlogTableOfContents, "E4vlR+Iv9SgfU0gy03ZDfO+IPVY=");
_c = BlogTableOfContents;
function _BlogTableOfContentsUseEffectAnonymousEntriesFilter(entry) {
    return entry.isIntersecting;
}
var _c;
__turbopack_context__.k.register(_c, "BlogTableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/blog/[slug]/BlogPostContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogContentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlogContentRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogTableOfContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlogTableOfContents.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function BlogPostContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "56cd9c01df746eee251f7fafa2d3f5e2af7183a38baa8b752f6eb3ec219bcbd3") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "56cd9c01df746eee251f7fafa2d3f5e2af7183a38baa8b752f6eb3ec219bcbd3";
    }
    const { post, recommendedPosts } = t0;
    let t1;
    if ($[1] !== post.content) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogContentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractHeadings"])(post.content);
        $[1] = post.content;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const headings = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-20 -z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 44,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 44,
                    columnNumber: 168
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== headings || $[6] !== post.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogTableOfContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: post.title,
            headings: headings
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = headings;
        $[6] = post.title;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/blog",
            className: "inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#00adef] font-medium transition-colors mb-8 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                    size: 18,
                    className: "group-hover:-translate-x-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 60,
                    columnNumber: 149
                }, this),
                "Back to the Blogs"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            y: 30
        };
        t7 = {
            opacity: 1,
            y: 0
        };
        t8 = {
            duration: 0.8
        };
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
    }
    let t9;
    if ($[12] !== post.category) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block px-4 py-1.5 rounded-full bg-[#00adef]/10 text-[#00adef] text-sm font-semibold mb-6 tracking-wide",
            children: post.category
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[12] = post.category;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== post.title) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8",
            children: post.title
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[14] = post.title;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== post.author) {
        t11 = post.author.charAt(0);
        $[16] = post.author;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-full bg-gradient-to-br from-[#00adef] to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== post.author) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#e5e7eb] text-sm font-bold",
            children: post.author
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[20] = post.author;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6b7280] text-xs",
            children: "Author"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t12 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            size: 18,
            className: "text-[#00adef]"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== post.date) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                t17,
                post.date
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[29] = post.date;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            size: 18,
            className: "text-[#00adef]"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== post.readTime) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                t19,
                post.readTime
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[32] = post.readTime;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t18 || $[35] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 text-sm text-[#9ca3af] font-medium",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[34] = t18;
        $[35] = t20;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== t16 || $[38] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-6 mb-10 py-6 border-y border-[#2a2f36]",
            children: [
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t21;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== post.image || $[41] !== post.title) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-[#15181c] border border-[#2a2f36] shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: post.image,
                alt: post.title,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 202,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[40] = post.image;
        $[41] = post.title;
        $[42] = t23;
    } else {
        t23 = $[42];
    }
    let t24;
    if ($[43] !== post.content) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogContentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            content: post.content
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[43] = post.content;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#9ca3af] font-medium",
            children: "Share this article:"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 226,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 233,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 240,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        t26,
                        t27,
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                                lineNumber: 247,
                                columnNumber: 247
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                            lineNumber: 247,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 247,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[49] = t29;
    } else {
        t29 = $[49];
    }
    let t30;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 pt-12 border-t border-[#2a2f36] flex flex-col md:flex-row md:items-center justify-between gap-8",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/blog",
                    className: "inline-flex items-center gap-2 text-[#00adef] font-semibold hover:gap-3 transition-all",
                    children: [
                        "Read More Articles",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 20,
                            className: "rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                            lineNumber: 254,
                            columnNumber: 271
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 254,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== t10 || $[52] !== t22 || $[53] !== t23 || $[54] !== t24 || $[55] !== t9) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t6,
                    animate: t7,
                    transition: t8,
                    children: [
                        t9,
                        t10,
                        t22,
                        t23,
                        t24,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 261,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[51] = t10;
        $[52] = t22;
        $[53] = t23;
        $[54] = t24;
        $[55] = t9;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t31 || $[58] !== t4) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start",
            children: [
                t4,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[57] = t31;
        $[58] = t4;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-serif text-white mb-12",
            children: "Recommended for you"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    let t34;
    if ($[61] !== recommendedPosts) {
        t34 = recommendedPosts.map(_BlogPostContentRecommendedPostsMap);
        $[61] = recommendedPosts;
        $[62] = t34;
    } else {
        t34 = $[62];
    }
    let t35;
    if ($[63] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-32 pt-20 border-t border-[#2a2f36]",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: t34
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 297,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[63] = t34;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] !== t32 || $[66] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-screen bg-[#0e1012] py-24 overflow-clip selection:bg-[#00adef]/20",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 max-w-7xl relative z-10",
                    children: [
                        t32,
                        t35
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 305,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[65] = t32;
        $[66] = t35;
        $[67] = t36;
    } else {
        t36 = $[67];
    }
    return t36;
}
_c = BlogPostContent;
function _BlogPostContentRecommendedPostsMap(rPost, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/blog/${rPost.slug}`,
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video rounded-xl overflow-hidden mb-5 bg-[#15181c] shadow-sm border border-[#2a2f36]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: rPost.image,
                    alt: rPost.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                    lineNumber: 315,
                    columnNumber: 182
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 315,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold tracking-wide uppercase text-[#00adef]",
                children: rPost.category
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 315,
                columnNumber: 326
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-2 text-lg font-bold text-white group-hover:text-[#00adef] transition-colors line-clamp-2 leading-snug",
                children: rPost.title
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 315,
                columnNumber: 424
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[#9ca3af] text-sm line-clamp-2 leading-relaxed",
                children: rPost.excerpt
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
                lineNumber: 315,
                columnNumber: 563
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/blog/[slug]/BlogPostContent.tsx",
        lineNumber: 315,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BlogPostContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Share2
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }
    ],
    [
        "line",
        {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }
    ],
    [
        "line",
        {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }
    ]
];
const Share2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("share-2", __iconNode);
;
 //# sourceMappingURL=share-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Share2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Facebook
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8"
        }
    ]
];
const Facebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("facebook", __iconNode);
;
 //# sourceMappingURL=facebook.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Facebook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_55fcc0d6._.js.map