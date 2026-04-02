(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CaseStudyShared.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaseStudyCTA",
    ()=>CaseStudyCTA,
    "NextCaseStudy",
    ()=>NextCaseStudy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function NextCaseStudy(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "c1f5d54e8059c0a7fbc57c2aaab78e856df8871e225370204247ab1c1c41177e") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1f5d54e8059c0a7fbc57c2aaab78e856df8871e225370204247ab1c1c41177e";
    }
    const { title, client, image, link } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-400 uppercase tracking-wider mb-4",
            children: "Next Case Study"
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== image || $[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full md:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: title,
                fill: true,
                sizes: "(max-width: 768px) 100vw, 192px",
                className: "object-cover group-hover:scale-105 transition-transform duration-500"
            }, void 0, false, {
                fileName: "[project]/src/components/CaseStudyShared.tsx",
                lineNumber: 37,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[2] = image;
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== client) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-primary font-semibold",
            children: client
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = client;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-1 text-xl md:text-2xl font-serif text-dark group-hover:text-primary transition-colors",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 24,
            className: "text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block"
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t2 || $[14] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center gap-6",
            children: [
                t2,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t5;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== link || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-light border-t border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link,
                        className: "group block",
                        children: t7
                    }, void 0, false, {
                        fileName: "[project]/src/components/CaseStudyShared.tsx",
                        lineNumber: 87,
                        columnNumber: 115
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CaseStudyShared.tsx",
                lineNumber: 87,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[16] = link;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_c = NextCaseStudy;
function CaseStudyCTA(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1f5d54e8059c0a7fbc57c2aaab78e856df8871e225370204247ab1c1c41177e") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1f5d54e8059c0a7fbc57c2aaab78e856df8871e225370204247ab1c1c41177e";
    }
    const { heading: t1 } = t0;
    const heading = t1 === undefined ? "Ready to start your project?" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            once: true
        };
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            0.25,
            1,
            0.5,
            1
        ];
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            duration: 0.6,
            ease: t5
        };
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== heading) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-serif text-white",
            children: heading
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[6] = heading;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact-us",
            className: "group mt-8 inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-200",
            children: [
                "Start Your Project",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    size: 20,
                    className: "group-hover:translate-x-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/src/components/CaseStudyShared.tsx",
                    lineNumber: 161,
                    columnNumber: 273
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-dark",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t2,
                    whileInView: t3,
                    viewport: t4,
                    transition: t6,
                    children: [
                        t7,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CaseStudyShared.tsx",
                    lineNumber: 168,
                    columnNumber: 97
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CaseStudyShared.tsx",
                lineNumber: 168,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CaseStudyShared.tsx",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c1 = CaseStudyCTA;
var _c, _c1;
__turbopack_context__.k.register(_c, "NextCaseStudy");
__turbopack_context__.k.register(_c1, "CaseStudyCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DKhushalbhaiJewellersCaseStudy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaseStudyShared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CaseStudyShared.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DKhushalbhaiJewellersCaseStudy() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "c4d3c4f69558f285dd04ed975b35a0d9371cdc5abd58dfe12fb4fa3637fed254") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4d3c4f69558f285dd04ed975b35a0d9371cdc5abd58dfe12fb4fa3637fed254";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80",
            alt: "",
            fill: true,
            className: "object-cover opacity-20",
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/case-studies",
            className: "inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 30,
                    columnNumber: 134
                }, this),
                "Back to Case Studies"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 20
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            duration: 0.6
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#D4AF37] font-semibold tracking-wider text-sm uppercase",
            children: "Jewellery • Shopify • eCommerce"
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t3,
            animate: t4,
            transition: t5,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-4 text-4xl md:text-6xl font-serif text-white leading-tight",
                    children: [
                        "Premium Jewellery Store ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 64,
                            columnNumber: 170
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#D4AF37] italic",
                            children: "Goes Digital"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 64,
                            columnNumber: 176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 64,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-xl text-gray-300 max-w-2xl",
                    children: "How D Khushalbhai Jewellers launched their complete eCommerce presence with Shopify, integrated payment gateways, and delivery partners."
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 64,
                    columnNumber: 240
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t10;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            y: 20
        };
        t9 = {
            opacity: 1,
            y: 0
        };
        t10 = {
            delay: 0.2,
            duration: 0.6
        };
        $[9] = t10;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-dark pt-32 pb-20 relative overflow-hidden",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 relative z-10",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl",
                            children: [
                                t7,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: t8,
                                    animate: t9,
                                    transition: t10,
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/10 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: "100%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 320
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400 mt-1",
                                                    children: "Online Presence"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 377
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 95,
                                            columnNumber: 315
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 453
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400 mt-1",
                                                    children: "Payment Gateways"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 507
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 95,
                                            columnNumber: 448
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: "5+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 584
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400 mt-1",
                                                    children: "Delivery Partners"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 639
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 95,
                                            columnNumber: 579
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-white",
                                                    children: "1000+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 717
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400 mt-1",
                                                    children: "Products Listed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 775
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 95,
                                            columnNumber: 712
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                    lineNumber: 95,
                                    columnNumber: 174
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 95,
                            columnNumber: 143
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 95,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            x: -30
        };
        t13 = {
            opacity: 1,
            x: 0
        };
        t14 = {
            once: true
        };
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-dark mb-4",
            children: "About Client"
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 leading-relaxed mb-8",
            children: "D Khushalbhai Jewellers is a trusted name in the jewellery industry, known for their exquisite collection of real gold jewellery, diamond jewellery, and silver jewellery. With decades of experience in traditional retail, they sought to expand their reach through a modern digital storefront while maintaining the premium experience their customers expect."
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
    } else {
        t12 = $[13];
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t12,
            whileInView: t13,
            viewport: t14,
            children: [
                t15,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium",
                            children: "Gold Jewellery"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 133,
                            columnNumber: 118
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium",
                            children: "Diamond Jewellery"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 133,
                            columnNumber: 231
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium",
                            children: "Silver Jewellery"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 133,
                            columnNumber: 347
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 133,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    let t19;
    let t20;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            opacity: 0,
            x: 30
        };
        t19 = {
            opacity: 1,
            x: 0
        };
        t20 = {
            once: true
        };
        $[19] = t18;
        $[20] = t19;
        $[21] = t20;
    } else {
        t18 = $[19];
        t19 = $[20];
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-dark mb-6",
            children: "The Requirements"
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                        size: 14,
                        className: "text-[#D4AF37]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                        lineNumber: 170,
                        columnNumber: 144
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 170,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-900",
                            children: "Complete eCommerce Store"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 170,
                            columnNumber: 208
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: "A premium-looking online store showcasing their entire jewellery collection."
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 170,
                            columnNumber: 281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 170,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                        size: 14,
                        className: "text-[#D4AF37]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                        lineNumber: 177,
                        columnNumber: 144
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 177,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-900",
                            children: "Payment Gateway Integration"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 177,
                            columnNumber: 206
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: "Secure payment processing for high-value jewellery transactions."
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 177,
                            columnNumber: 282
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 177,
                    columnNumber: 201
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-16 items-start",
                    children: [
                        t17,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: t18,
                            whileInView: t19,
                            viewport: t20,
                            className: "bg-gray-50 rounded-2xl p-8 border border-gray-100",
                            children: [
                                t21,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        t22,
                                        t23,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        size: 14,
                                                        className: "text-[#D4AF37]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 434
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 328
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-gray-900",
                                                            children: "Delivery Partner Integration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 491
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mt-1",
                                                            children: "Reliable and insured shipping for valuable jewellery items."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 568
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 486
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 184,
                                            columnNumber: 301
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                    lineNumber: 184,
                                    columnNumber: 265
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 184,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 184,
                    columnNumber: 78
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 184,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    let t26;
    let t27;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            opacity: 0,
            y: 20
        };
        t26 = {
            opacity: 1,
            y: 0
        };
        t27 = {
            once: true
        };
        $[26] = t25;
        $[27] = t26;
        $[28] = t27;
    } else {
        t25 = $[26];
        t26 = $[27];
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#D4AF37] font-semibold tracking-wider text-sm uppercase",
            children: "The Solution"
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t25,
            whileInView: t26,
            viewport: t27,
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-4 text-3xl md:text-4xl font-serif",
                    children: [
                        "Complete ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#D4AF37] italic",
                            children: "Shopify Store"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 221,
                            columnNumber: 185
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 221,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-gray-400",
                    children: "We built a stunning Shopify store that reflects the premium nature of D Khushalbhai Jewellers' brand with all essential integrations."
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 221,
                    columnNumber: 250
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-dark text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    t29,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: [
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"],
                                title: "Premium Shopify Theme",
                                description: "Custom-designed storefront with elegant product galleries, zoom functionality, and detailed product pages that showcase each piece beautifully."
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                                title: "Payment Gateways",
                                description: "Integrated multiple payment options including Razorpay, PayU, and bank transfers to provide flexibility for high-value purchases."
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                                title: "Delivery Partners",
                                description: "Connected with trusted delivery partners offering insured shipping for valuable jewellery items with real-time tracking."
                            }
                        ].map(_DKhushalbhaiJewellersCaseStudyAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                        lineNumber: 228,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 228,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-gray-50 border-b border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500",
                    children: [
                        "Shopify",
                        "Razorpay",
                        "PayU",
                        "Shiprocket",
                        "Delhivery"
                    ].map(_DKhushalbhaiJewellersCaseStudyAnonymous2)
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 247,
                    columnNumber: 114
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 247,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    let t32;
    let t33;
    let t34;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            opacity: 0,
            x: -30
        };
        t33 = {
            opacity: 1,
            x: 0
        };
        t34 = {
            once: true
        };
        $[33] = t32;
        $[34] = t33;
        $[35] = t34;
    } else {
        t32 = $[33];
        t33 = $[34];
        t34 = $[35];
    }
    let t35;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-serif text-dark mb-8",
            children: [
                "Delivered ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#D4AF37] italic",
                    children: "Results"
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 277,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[36] = t35;
    } else {
        t35 = $[36];
    }
    let t36;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "text-green-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                        lineNumber: 284,
                        columnNumber: 139
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 284,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-dark",
                            children: "Complete Digital Presence"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 284,
                            columnNumber: 187
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Full-fledged online store showcasing their entire jewellery collection with professional imagery."
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 284,
                            columnNumber: 261
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 284,
                    columnNumber: 182
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[37] = t36;
    } else {
        t36 = $[37];
    }
    let t37;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                        className: "text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                        lineNumber: 291,
                        columnNumber: 138
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 291,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-dark",
                            children: "Secure Payment Processing"
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 291,
                            columnNumber: 189
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Multiple payment gateway options enabling safe transactions for high-value jewellery purchases."
                        }, void 0, false, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 291,
                            columnNumber: 263
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 291,
                    columnNumber: 184
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[38] = t37;
    } else {
        t37 = $[38];
    }
    let t38;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t32,
            whileInView: t33,
            viewport: t34,
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        t36,
                        t37,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "text-purple-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                        lineNumber: 298,
                                        columnNumber: 241
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                    lineNumber: 298,
                                    columnNumber: 140
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-dark",
                                            children: "Nationwide Delivery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 298,
                                            columnNumber: 287
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Integrated delivery partners ensuring safe, insured shipping across India."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 298,
                                            columnNumber: 355
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                    lineNumber: 298,
                                    columnNumber: 282
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 298,
                            columnNumber: 112
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 298,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[39] = t38;
    } else {
        t38 = $[39];
    }
    let t39;
    let t40;
    let t41;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            opacity: 0,
            x: 30
        };
        t40 = {
            opacity: 1,
            x: 0
        };
        t41 = {
            once: true
        };
        $[40] = t39;
        $[41] = t40;
        $[42] = t41;
    } else {
        t39 = $[40];
        t40 = $[41];
        t41 = $[42];
    }
    let t42;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 p-8 opacity-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-9xl font-serif text-white",
                children: '"'
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 328,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[43] = t42;
    } else {
        t42 = $[43];
    }
    let t43;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl md:text-2xl text-white leading-relaxed italic",
            children: '"Innodify transformed our traditional jewellery business into a modern online store. The website beautifully showcases our gold, diamond, and silver collections. The payment and delivery integrations work flawlessly."'
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[44] = t43;
    } else {
        t43 = $[44];
    }
    let t44;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                t11,
                t24,
                t30,
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-16 items-center",
                            children: [
                                t38,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: t39,
                                    whileInView: t40,
                                    viewport: t41,
                                    className: "bg-dark rounded-3xl p-10 relative overflow-hidden",
                                    children: [
                                        t42,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                            className: "relative z-10",
                                            children: [
                                                t43,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                                    className: "mt-8 flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl",
                                                            children: "D"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 417
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-semibold",
                                                                    children: "Owner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 544
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "D Khushalbhai Jewellers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 597
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 539
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 368
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                            lineNumber: 342,
                                            columnNumber: 325
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                                    lineNumber: 342,
                                    columnNumber: 199
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                            lineNumber: 342,
                            columnNumber: 137
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                        lineNumber: 342,
                        columnNumber: 97
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 342,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaseStudyShared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextCaseStudy"], {
                    title: "Cloud-Based Transformation of Real Estate Operations",
                    client: "Mahalaxmi Group",
                    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
                    link: "/case-studies/mahalaxmi-real-estate"
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 342,
                    columnNumber: 728
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaseStudyShared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaseStudyCTA"], {
                    heading: "Ready to take your business online?"
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 342,
                    columnNumber: 951
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[45] = t44;
    } else {
        t44 = $[45];
    }
    return t44;
}
_c = DKhushalbhaiJewellersCaseStudy;
function _DKhushalbhaiJewellersCaseStudyAnonymous2(tech) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xl font-bold text-gray-400 flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                size: 18,
                className: "text-[#D4AF37]"
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 350,
                columnNumber: 95
            }, this),
            tech
        ]
    }, tech, true, {
        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
        lineNumber: 350,
        columnNumber: 10
    }, this);
}
function _DKhushalbhaiJewellersCaseStudyAnonymous(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            delay: index * 0.1
        },
        className: "bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                    className: "text-[#D4AF37]"
                }, void 0, false, {
                    fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                    lineNumber: 363,
                    columnNumber: 196
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 363,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold mb-3",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 363,
                columnNumber: 242
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 leading-relaxed",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
                lineNumber: 363,
                columnNumber: 302
            }, this)
        ]
    }, item.title, true, {
        fileName: "[project]/src/app/case-studies/dkhushalbhai-jewellers/Content.tsx",
        lineNumber: 353,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DKhushalbhaiJewellersCaseStudy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1cf490a9._.js.map