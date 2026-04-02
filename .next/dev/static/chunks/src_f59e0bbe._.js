(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBlogBySlug",
    ()=>fetchBlogBySlug,
    "fetchBlogs",
    ()=>fetchBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000") || 'http://localhost:5000';
async function fetchBlogs() {
    try {
        const res = await fetch(`${API_URL}/api/blogs`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            console.error('Failed to fetch blogs from backend');
            return [];
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}
async function fetchBlogBySlug(slug) {
    try {
        const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            if (res.status === 404) return null;
            console.error('Failed to fetch blog post from backend');
            return null;
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/actions/data:c806e0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBlog",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40402d5a555f387abd73543dc55893e5d9ca2cb792":"addBlog"},"src/actions/blogActions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40402d5a555f387abd73543dc55893e5d9ca2cb792", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addBlog");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZ0FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnQC9kYXRhL2Jsb2dzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCbG9nKG5ld0Jsb2c6IEJsb2dQb3N0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvZGF0YS9ibG9ncy50cycpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBlbmQgb2YgdGhlIGFycmF5XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKCddOycpO1xyXG5cclxuICAgICAgICBpZiAoYXJyYXlFbmRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB0aGUgZW5kIG9mIHRoZSBibG9ncyBhcnJheS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgbmV3IGJsb2cgb2JqZWN0IGFzIGEgc3RyaW5nXHJcbiAgICAgICAgLy8gV2UgdXNlIEpTT04uc3RyaW5naWZ5IGJ1dCB0aGVuIHJlbW92ZSB0aGUgb3V0ZXIgYnJhY2VzIHRvIGluc2VydCBpdCBjbGVhbmx5IGlmIG5lZWRlZCxcclxuICAgICAgICAvLyBvciBqdXN0IHJlbHkgb24gdGhlIGZhY3QgdGhhdCB2YWxpZCBKU09OIG9iamVjdCBzeW50YXggaXMgdmFsaWQgSlMgb2JqZWN0IHN5bnRheCAobW9zdGx5KS5cclxuICAgICAgICBjb25zdCBibG9nU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobmV3QmxvZywgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBvdGhlciBpdGVtcyB0byBhZGQgYSBjb21tYVxyXG4gICAgICAgIGNvbnN0IGluc2VydENvbnRlbnQgPSBgICAgICR7YmxvZ1N0cmluZ30sXFxuYDtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKDAsIGFycmF5RW5kSW5kZXgpICsgaW5zZXJ0Q29udGVudCArIGZpbGVDb250ZW50LnNsaWNlKGFycmF5RW5kSW5kZXgpO1xyXG5cclxuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIG5ld0NvbnRlbnQsICd1dGYtOCcpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGFkZCBibG9nOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2F2ZSBibG9nIHRvIGZpbGUuJyB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCbG9nKHNsdWc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2RhdGEvYmxvZ3MudHMnKTtcclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlTdGFydE1hcmtlciA9ICdleHBvcnQgY29uc3QgZGVmYXVsdEJsb2dzOiBCbG9nUG9zdFtdID0gWyc7XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRNYXJrZXIgPSAnXTsnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZmlsZUNvbnRlbnQuaW5kZXhPZihhcnJheVN0YXJ0TWFya2VyKTtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKGFycmF5RW5kTWFya2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBibG9ncyBhcnJheSBpbiB0aGUgZmlsZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJlZm9yZUFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoMCwgc3RhcnRJbmRleCArIGFycmF5U3RhcnRNYXJrZXIubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZnRlckFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoZW5kSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXggKyBhcnJheVN0YXJ0TWFya2VyLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG5cclxuICAgICAgICAvLyBSZWdleCB0byBtYXRjaCBpbmRpdmlkdWFsIGJsb2cgb2JqZWN0cyBpbiB0aGUgYXJyYXlcclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXHtbXFxzXFxTXSo/XFx9XFxzKig/PSx8XFxzKlxcXSkvZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gYXJyYXlDb250ZW50Lm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qga2VwdE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcihtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE1hdGNoIGJ5IHNsdWdcclxuICAgICAgICAgICAgY29uc3Qgc2x1Z01hdGNoID0gbWF0Y2gubWF0Y2goL1wic2x1Z1wiOlxccypcIihbXlwiXSspXCIvKSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gubWF0Y2goLydzbHVnJzpcXHMqJyhbXiddKyknLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC9zbHVnOlxccypcIihbXlwiXSspXCIvKSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gubWF0Y2goL3NsdWc6XFxzKicoW14nXSspJy8pO1xyXG4gICAgICAgICAgICByZXR1cm4gc2x1Z01hdGNoID8gc2x1Z01hdGNoWzFdICE9PSBzbHVnIDogdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXlDb250ZW50ID0gJ1xcbicgKyBrZXB0TWF0Y2hlcy5qb2luKCcsXFxuJykgKyAoa2VwdE1hdGNoZXMubGVuZ3RoID4gMCA/ICcsXFxuJyA6ICdcXG4nKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlQ29udGVudCA9IGJlZm9yZUFycmF5ICsgbmV3QXJyYXlDb250ZW50ICsgYWZ0ZXJBcnJheTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdGaWxlQ29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgYmxvZyBmcm9tIGZpbGUuJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZyhvbGRTbHVnOiBzdHJpbmcsIHVwZGF0ZWRCbG9nOiBCbG9nUG9zdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2RhdGEvYmxvZ3MudHMnKTtcclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlTdGFydE1hcmtlciA9ICdleHBvcnQgY29uc3QgZGVmYXVsdEJsb2dzOiBCbG9nUG9zdFtdID0gWyc7XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRNYXJrZXIgPSAnXTsnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZmlsZUNvbnRlbnQuaW5kZXhPZihhcnJheVN0YXJ0TWFya2VyKTtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKGFycmF5RW5kTWFya2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBibG9ncyBhcnJheSBpbiB0aGUgZmlsZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJlZm9yZUFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoMCwgc3RhcnRJbmRleCArIGFycmF5U3RhcnRNYXJrZXIubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZnRlckFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoZW5kSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXggKyBhcnJheVN0YXJ0TWFya2VyLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG5cclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXHtbXFxzXFxTXSo/XFx9XFxzKig/PSx8XFxzKlxcXSkvZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gYXJyYXlDb250ZW50Lm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsdWdNYXRjaCA9IG1hdGNoLm1hdGNoKC9cInNsdWdcIjpcXHMqXCIoW15cIl0rKVwiLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC8nc2x1Zyc6XFxzKicoW14nXSspJy8pIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaC5tYXRjaCgvc2x1ZzpcXHMqXCIoW15cIl0rKVwiLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC9zbHVnOlxccyonKFteJ10rKScvKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzbHVnTWF0Y2ggJiYgc2x1Z01hdGNoWzFdID09PSBvbGRTbHVnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodXBkYXRlZEJsb2csIG51bGwsIDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXlDb250ZW50ID0gJ1xcbicgKyB1cGRhdGVkTWF0Y2hlcy5qb2luKCcsXFxuJykgKyAodXBkYXRlZE1hdGNoZXMubGVuZ3RoID4gMCA/ICcsXFxuJyA6ICdcXG4nKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlQ29udGVudCA9IGJlZm9yZUFycmF5ICsgbmV3QXJyYXlDb250ZW50ICsgYWZ0ZXJBcnJheTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdGaWxlQ29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgYmxvZyBpbiBmaWxlLicgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNSQU1zQixvTEFBQSJ9
}),
"[project]/src/actions/data:744c74 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteBlog",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40bbe406ee49e6f40a708c0c65e9a74b7b8a965f2b":"deleteBlog"},"src/actions/blogActions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40bbe406ee49e6f40a708c0c65e9a74b7b8a965f2b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteBlog");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZ0FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnQC9kYXRhL2Jsb2dzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCbG9nKG5ld0Jsb2c6IEJsb2dQb3N0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvZGF0YS9ibG9ncy50cycpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBlbmQgb2YgdGhlIGFycmF5XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKCddOycpO1xyXG5cclxuICAgICAgICBpZiAoYXJyYXlFbmRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB0aGUgZW5kIG9mIHRoZSBibG9ncyBhcnJheS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgbmV3IGJsb2cgb2JqZWN0IGFzIGEgc3RyaW5nXHJcbiAgICAgICAgLy8gV2UgdXNlIEpTT04uc3RyaW5naWZ5IGJ1dCB0aGVuIHJlbW92ZSB0aGUgb3V0ZXIgYnJhY2VzIHRvIGluc2VydCBpdCBjbGVhbmx5IGlmIG5lZWRlZCxcclxuICAgICAgICAvLyBvciBqdXN0IHJlbHkgb24gdGhlIGZhY3QgdGhhdCB2YWxpZCBKU09OIG9iamVjdCBzeW50YXggaXMgdmFsaWQgSlMgb2JqZWN0IHN5bnRheCAobW9zdGx5KS5cclxuICAgICAgICBjb25zdCBibG9nU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobmV3QmxvZywgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBvdGhlciBpdGVtcyB0byBhZGQgYSBjb21tYVxyXG4gICAgICAgIGNvbnN0IGluc2VydENvbnRlbnQgPSBgICAgICR7YmxvZ1N0cmluZ30sXFxuYDtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKDAsIGFycmF5RW5kSW5kZXgpICsgaW5zZXJ0Q29udGVudCArIGZpbGVDb250ZW50LnNsaWNlKGFycmF5RW5kSW5kZXgpO1xyXG5cclxuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIG5ld0NvbnRlbnQsICd1dGYtOCcpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGFkZCBibG9nOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2F2ZSBibG9nIHRvIGZpbGUuJyB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCbG9nKHNsdWc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2RhdGEvYmxvZ3MudHMnKTtcclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlTdGFydE1hcmtlciA9ICdleHBvcnQgY29uc3QgZGVmYXVsdEJsb2dzOiBCbG9nUG9zdFtdID0gWyc7XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRNYXJrZXIgPSAnXTsnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZmlsZUNvbnRlbnQuaW5kZXhPZihhcnJheVN0YXJ0TWFya2VyKTtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKGFycmF5RW5kTWFya2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBibG9ncyBhcnJheSBpbiB0aGUgZmlsZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJlZm9yZUFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoMCwgc3RhcnRJbmRleCArIGFycmF5U3RhcnRNYXJrZXIubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZnRlckFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoZW5kSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXggKyBhcnJheVN0YXJ0TWFya2VyLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG5cclxuICAgICAgICAvLyBSZWdleCB0byBtYXRjaCBpbmRpdmlkdWFsIGJsb2cgb2JqZWN0cyBpbiB0aGUgYXJyYXlcclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXHtbXFxzXFxTXSo/XFx9XFxzKig/PSx8XFxzKlxcXSkvZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gYXJyYXlDb250ZW50Lm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qga2VwdE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcihtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE1hdGNoIGJ5IHNsdWdcclxuICAgICAgICAgICAgY29uc3Qgc2x1Z01hdGNoID0gbWF0Y2gubWF0Y2goL1wic2x1Z1wiOlxccypcIihbXlwiXSspXCIvKSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gubWF0Y2goLydzbHVnJzpcXHMqJyhbXiddKyknLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC9zbHVnOlxccypcIihbXlwiXSspXCIvKSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gubWF0Y2goL3NsdWc6XFxzKicoW14nXSspJy8pO1xyXG4gICAgICAgICAgICByZXR1cm4gc2x1Z01hdGNoID8gc2x1Z01hdGNoWzFdICE9PSBzbHVnIDogdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXlDb250ZW50ID0gJ1xcbicgKyBrZXB0TWF0Y2hlcy5qb2luKCcsXFxuJykgKyAoa2VwdE1hdGNoZXMubGVuZ3RoID4gMCA/ICcsXFxuJyA6ICdcXG4nKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlQ29udGVudCA9IGJlZm9yZUFycmF5ICsgbmV3QXJyYXlDb250ZW50ICsgYWZ0ZXJBcnJheTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdGaWxlQ29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgYmxvZyBmcm9tIGZpbGUuJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZyhvbGRTbHVnOiBzdHJpbmcsIHVwZGF0ZWRCbG9nOiBCbG9nUG9zdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2RhdGEvYmxvZ3MudHMnKTtcclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlTdGFydE1hcmtlciA9ICdleHBvcnQgY29uc3QgZGVmYXVsdEJsb2dzOiBCbG9nUG9zdFtdID0gWyc7XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRNYXJrZXIgPSAnXTsnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZmlsZUNvbnRlbnQuaW5kZXhPZihhcnJheVN0YXJ0TWFya2VyKTtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKGFycmF5RW5kTWFya2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBibG9ncyBhcnJheSBpbiB0aGUgZmlsZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJlZm9yZUFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoMCwgc3RhcnRJbmRleCArIGFycmF5U3RhcnRNYXJrZXIubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZnRlckFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoZW5kSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXggKyBhcnJheVN0YXJ0TWFya2VyLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG5cclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXHtbXFxzXFxTXSo/XFx9XFxzKig/PSx8XFxzKlxcXSkvZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gYXJyYXlDb250ZW50Lm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsdWdNYXRjaCA9IG1hdGNoLm1hdGNoKC9cInNsdWdcIjpcXHMqXCIoW15cIl0rKVwiLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC8nc2x1Zyc6XFxzKicoW14nXSspJy8pIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaC5tYXRjaCgvc2x1ZzpcXHMqXCIoW15cIl0rKVwiLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC9zbHVnOlxccyonKFteJ10rKScvKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzbHVnTWF0Y2ggJiYgc2x1Z01hdGNoWzFdID09PSBvbGRTbHVnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodXBkYXRlZEJsb2csIG51bGwsIDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXlDb250ZW50ID0gJ1xcbicgKyB1cGRhdGVkTWF0Y2hlcy5qb2luKCcsXFxuJykgKyAodXBkYXRlZE1hdGNoZXMubGVuZ3RoID4gMCA/ICcsXFxuJyA6ICdcXG4nKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlQ29udGVudCA9IGJlZm9yZUFycmF5ICsgbmV3QXJyYXlDb250ZW50ICsgYWZ0ZXJBcnJheTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdGaWxlQ29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgYmxvZyBpbiBmaWxlLicgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlSQW1Dc0IsdUxBQUEifQ==
}),
"[project]/src/actions/data:478047 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateBlog",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60de23e34e47ff1c90885a4b9f9e806b6b6add48b4":"updateBlog"},"src/actions/blogActions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60de23e34e47ff1c90885a4b9f9e806b6b6add48b4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateBlog");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZ0FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnQC9kYXRhL2Jsb2dzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCbG9nKG5ld0Jsb2c6IEJsb2dQb3N0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvZGF0YS9ibG9ncy50cycpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBlbmQgb2YgdGhlIGFycmF5XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKCddOycpO1xyXG5cclxuICAgICAgICBpZiAoYXJyYXlFbmRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB0aGUgZW5kIG9mIHRoZSBibG9ncyBhcnJheS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgbmV3IGJsb2cgb2JqZWN0IGFzIGEgc3RyaW5nXHJcbiAgICAgICAgLy8gV2UgdXNlIEpTT04uc3RyaW5naWZ5IGJ1dCB0aGVuIHJlbW92ZSB0aGUgb3V0ZXIgYnJhY2VzIHRvIGluc2VydCBpdCBjbGVhbmx5IGlmIG5lZWRlZCxcclxuICAgICAgICAvLyBvciBqdXN0IHJlbHkgb24gdGhlIGZhY3QgdGhhdCB2YWxpZCBKU09OIG9iamVjdCBzeW50YXggaXMgdmFsaWQgSlMgb2JqZWN0IHN5bnRheCAobW9zdGx5KS5cclxuICAgICAgICBjb25zdCBibG9nU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobmV3QmxvZywgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBvdGhlciBpdGVtcyB0byBhZGQgYSBjb21tYVxyXG4gICAgICAgIGNvbnN0IGluc2VydENvbnRlbnQgPSBgICAgICR7YmxvZ1N0cmluZ30sXFxuYDtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKDAsIGFycmF5RW5kSW5kZXgpICsgaW5zZXJ0Q29udGVudCArIGZpbGVDb250ZW50LnNsaWNlKGFycmF5RW5kSW5kZXgpO1xyXG5cclxuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIG5ld0NvbnRlbnQsICd1dGYtOCcpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGFkZCBibG9nOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2F2ZSBibG9nIHRvIGZpbGUuJyB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCbG9nKHNsdWc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2RhdGEvYmxvZ3MudHMnKTtcclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlTdGFydE1hcmtlciA9ICdleHBvcnQgY29uc3QgZGVmYXVsdEJsb2dzOiBCbG9nUG9zdFtdID0gWyc7XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRNYXJrZXIgPSAnXTsnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZmlsZUNvbnRlbnQuaW5kZXhPZihhcnJheVN0YXJ0TWFya2VyKTtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKGFycmF5RW5kTWFya2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBibG9ncyBhcnJheSBpbiB0aGUgZmlsZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJlZm9yZUFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoMCwgc3RhcnRJbmRleCArIGFycmF5U3RhcnRNYXJrZXIubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZnRlckFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoZW5kSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXggKyBhcnJheVN0YXJ0TWFya2VyLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG5cclxuICAgICAgICAvLyBSZWdleCB0byBtYXRjaCBpbmRpdmlkdWFsIGJsb2cgb2JqZWN0cyBpbiB0aGUgYXJyYXlcclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXHtbXFxzXFxTXSo/XFx9XFxzKig/PSx8XFxzKlxcXSkvZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gYXJyYXlDb250ZW50Lm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qga2VwdE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcihtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE1hdGNoIGJ5IHNsdWdcclxuICAgICAgICAgICAgY29uc3Qgc2x1Z01hdGNoID0gbWF0Y2gubWF0Y2goL1wic2x1Z1wiOlxccypcIihbXlwiXSspXCIvKSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gubWF0Y2goLydzbHVnJzpcXHMqJyhbXiddKyknLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC9zbHVnOlxccypcIihbXlwiXSspXCIvKSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gubWF0Y2goL3NsdWc6XFxzKicoW14nXSspJy8pO1xyXG4gICAgICAgICAgICByZXR1cm4gc2x1Z01hdGNoID8gc2x1Z01hdGNoWzFdICE9PSBzbHVnIDogdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXlDb250ZW50ID0gJ1xcbicgKyBrZXB0TWF0Y2hlcy5qb2luKCcsXFxuJykgKyAoa2VwdE1hdGNoZXMubGVuZ3RoID4gMCA/ICcsXFxuJyA6ICdcXG4nKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlQ29udGVudCA9IGJlZm9yZUFycmF5ICsgbmV3QXJyYXlDb250ZW50ICsgYWZ0ZXJBcnJheTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdGaWxlQ29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgYmxvZyBmcm9tIGZpbGUuJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZyhvbGRTbHVnOiBzdHJpbmcsIHVwZGF0ZWRCbG9nOiBCbG9nUG9zdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2RhdGEvYmxvZ3MudHMnKTtcclxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlTdGFydE1hcmtlciA9ICdleHBvcnQgY29uc3QgZGVmYXVsdEJsb2dzOiBCbG9nUG9zdFtdID0gWyc7XHJcbiAgICAgICAgY29uc3QgYXJyYXlFbmRNYXJrZXIgPSAnXTsnO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZmlsZUNvbnRlbnQuaW5kZXhPZihhcnJheVN0YXJ0TWFya2VyKTtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGZpbGVDb250ZW50Lmxhc3RJbmRleE9mKGFycmF5RW5kTWFya2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBibG9ncyBhcnJheSBpbiB0aGUgZmlsZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJlZm9yZUFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoMCwgc3RhcnRJbmRleCArIGFycmF5U3RhcnRNYXJrZXIubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhZnRlckFycmF5ID0gZmlsZUNvbnRlbnQuc2xpY2UoZW5kSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q29udGVudCA9IGZpbGVDb250ZW50LnNsaWNlKHN0YXJ0SW5kZXggKyBhcnJheVN0YXJ0TWFya2VyLmxlbmd0aCwgZW5kSW5kZXgpO1xyXG5cclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXHtbXFxzXFxTXSo/XFx9XFxzKig/PSx8XFxzKlxcXSkvZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gYXJyYXlDb250ZW50Lm1hdGNoKHJlZ2V4KSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsdWdNYXRjaCA9IG1hdGNoLm1hdGNoKC9cInNsdWdcIjpcXHMqXCIoW15cIl0rKVwiLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC8nc2x1Zyc6XFxzKicoW14nXSspJy8pIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaC5tYXRjaCgvc2x1ZzpcXHMqXCIoW15cIl0rKVwiLykgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoLm1hdGNoKC9zbHVnOlxccyonKFteJ10rKScvKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzbHVnTWF0Y2ggJiYgc2x1Z01hdGNoWzFdID09PSBvbGRTbHVnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodXBkYXRlZEJsb2csIG51bGwsIDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXlDb250ZW50ID0gJ1xcbicgKyB1cGRhdGVkTWF0Y2hlcy5qb2luKCcsXFxuJykgKyAodXBkYXRlZE1hdGNoZXMubGVuZ3RoID4gMCA/ICcsXFxuJyA6ICdcXG4nKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlQ29udGVudCA9IGJlZm9yZUFycmF5ICsgbmV3QXJyYXlDb250ZW50ICsgYWZ0ZXJBcnJheTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdGaWxlQ29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIGJsb2c6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgYmxvZyBpbiBmaWxlLicgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlSQThFc0IsdUxBQUEifQ==
}),
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
"[project]/src/app/blog/add/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddBlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-2.js [app-client] (ecmascript) <export default as Heading2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-3.js [app-client] (ecmascript) <export default as Heading3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading4$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-4.js [app-client] (ecmascript) <export default as Heading4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$c806e0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:c806e0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$744c74__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:744c74 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$478047__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/actions/data:478047 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogContentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlogContentRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function AddBlogPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Auth state
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginUsername, setLoginUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddBlogPage.useEffect": ()=>{
            const auth = sessionStorage.getItem("blog_admin_auth");
            if (auth === "true") {
                setIsAuthenticated(true);
            }
        }
    }["AddBlogPage.useEffect"], []);
    const handleLogin = (e)=>{
        e.preventDefault();
        if (loginUsername === "admin" && loginPassword === "admin123") {
            setIsAuthenticated(true);
            sessionStorage.setItem("blog_admin_auth", "true");
            setLoginError("");
        } else {
            setLoginError("Invalid username or password");
        }
    };
    const [editingSlug, setEditingSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("content");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("split");
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        author: "Innodify Admin",
        date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    });
    const handleChange = (e_0)=>{
        const { name, value } = e_0.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleKeywordsChange = (e_1)=>{
        const keywords = e_1.target.value.split(",").map((k)=>k.trim()).filter((k_0)=>k_0);
        setFormData((prev_0)=>({
                ...prev_0,
                keywords
            }));
    };
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddBlogPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlogs"])().then(setBlogs);
        }
    }["AddBlogPage.useEffect"], []);
    const filteredBlogs = searchQuery.length >= 2 ? blogs.filter((post)=>post.title.toLowerCase().includes(searchQuery.toLowerCase())) : blogs;
    const handleEdit = (post_0)=>{
        setFormData(post_0);
        setEditingSlug(post_0.slug);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const insertFormatting = (prefix, suffix = "")=>{
        const textarea = document.querySelector('textarea[name="content"]');
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        const selected = text.substring(start, end);
        const currentScrollTop = textarea.scrollTop;
        const newText = before + prefix + selected + suffix + after;
        setFormData((prev_1)=>({
                ...prev_1,
                content: newText
            }));
        setTimeout(()=>{
            textarea.focus();
            textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
            textarea.scrollTop = currentScrollTop;
        }, 0);
    };
    const handleImageUpload = async (e_2)=>{
        const file = e_2.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const formData_0 = new FormData();
        formData_0.append("file", file);
        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData_0
            });
            const data = await response.json();
            if (data.url) {
                setFormData((prev_2)=>({
                        ...prev_2,
                        image: data.url
                    }));
            } else {
                alert("Upload failed: " + (data.error || "Unknown error"));
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Upload failed. Please try again.");
        } finally{
            setUploading(false);
        }
    };
    const handleMarkdownImageUpload = async (e_3)=>{
        const file_0 = e_3.target.files?.[0];
        if (!file_0) return;
        const alt = prompt("Enter image description (alt text):") || "";
        const formData_1 = new FormData();
        formData_1.append("file", file_0);
        try {
            const response_0 = await fetch("/api/upload", {
                method: "POST",
                body: formData_1
            });
            const data_0 = await response_0.json();
            if (data_0.url) {
                insertFormatting(`![${alt}](${data_0.url})`);
            } else {
                alert("Upload failed: " + (data_0.error || "Unknown error"));
            }
        } catch (error_0) {
            console.error("Upload error:", error_0);
            alert("Upload failed.");
        }
        // Reset file input
        e_3.target.value = "";
    };
    const handleSubmit = async (e_4)=>{
        e_4.preventDefault();
        if (!formData.title || !formData.excerpt || !formData.category || !formData.content) {
            alert("Please fill in all required fields.");
            return;
        }
        const slug = (formData.title || "").toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        const newPost = {
            title: formData.title || "Untitled",
            slug: slug || "untitled",
            excerpt: formData.excerpt || "",
            content: formData.content || "",
            author: formData.author || "Innodify Admin",
            date: formData.date || new Date().toLocaleDateString(),
            readTime: formData.readTime || "5 min read",
            category: formData.category || "General",
            image: formData.image || "https://images.unsplash.com/photo-1499750310159-5254f4121c6d?w=600&q=80",
            imageAlt: formData.imageAlt,
            // SEO fields
            metaTitle: formData.metaTitle,
            metaDescription: formData.metaDescription,
            keywords: formData.keywords,
            canonicalUrl: formData.canonicalUrl
        };
        let result;
        if (editingSlug) {
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$478047__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateBlog"])(editingSlug, newPost);
        } else {
            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$c806e0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addBlog"])(newPost);
        }
        if (result.success) {
            alert(editingSlug ? "Blog post updated successfully!" : "Blog post added successfully!");
            if (editingSlug) {
                setEditingSlug(null);
                setFormData({
                    author: "Innodify Admin",
                    date: new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    })
                });
                router.refresh();
                window.location.reload();
            } else {
                router.push("/blog");
                router.refresh();
            }
        } else {
            alert("Failed to save blog post. " + result.error);
        }
    };
    const metaTitleLength = (formData.metaTitle || formData.title || "").length;
    const metaDescLength = (formData.metaDescription || formData.excerpt || "").length;
    // Login Screen
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-screen bg-[#0e1012] flex items-center justify-center overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/add/page.tsx",
                    lineNumber: 212,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-20 -z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/add/page.tsx",
                            lineNumber: 214,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/add/page.tsx",
                            lineNumber: 215,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/add/page.tsx",
                    lineNumber: 213,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "w-full max-w-md mx-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#15181c] rounded-2xl border border-[#2a2f36] p-8 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-full bg-[#00adef]/10 flex items-center justify-center mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "text-[#00adef]",
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-serif text-[#e5e7eb]",
                                        children: "Admin Login"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#6b7280] mt-2",
                                        children: "Sign in to manage blog posts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 227,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleLogin,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                children: "Username"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: loginUsername,
                                                onChange: (e_5)=>setLoginUsername(e_5.target.value),
                                                placeholder: "Enter username",
                                                required: true,
                                                className: "w-full px-4 py-3 text-base rounded-lg bg-[#0e1012] text-[#e5e7eb] placeholder:text-[#6b7280] border border-[#2a2f36] focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30 outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: loginPassword,
                                                onChange: (e_6)=>setLoginPassword(e_6.target.value),
                                                placeholder: "Enter password",
                                                required: true,
                                                className: "w-full px-4 py-3 text-base rounded-lg bg-[#0e1012] text-[#e5e7eb] placeholder:text-[#6b7280] border border-[#2a2f36] focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30 outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 29
                                    }, this),
                                    loginError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-400 text-sm text-center",
                                        children: loginError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full bg-[#00adef] text-[#0e1012] font-semibold py-3 rounded-lg hover:bg-[#00adef]/90 active:scale-[0.99] transition-all",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 234,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/add/page.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/add/page.tsx",
            lineNumber: 211,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen bg-[#0e1012] py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/blog/add/page.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 256,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 257,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/add/page.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        className: "inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#00adef] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 29
                                            }, this),
                                            "Back"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-serif text-[#e5e7eb]",
                                        children: editingSlug ? "Edit Post" : "Create New Post"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 25
                                    }, this),
                                    editingSlug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditingSlug(null);
                                            setFormData({
                                                author: "Innodify Admin"
                                            });
                                        },
                                        className: "text-sm text-red-400 hover:text-red-300 transition-colors",
                                        children: "Cancel Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 263,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-[#15181c] p-1 rounded-lg border border-[#2a2f36]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("edit"),
                                        className: `px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === "edit" ? "bg-[#00adef] text-[#0e1012]" : "text-[#9ca3af] hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 29
                                            }, this),
                                            " Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("split"),
                                        className: `px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === "split" ? "bg-[#00adef] text-[#0e1012]" : "text-[#9ca3af] hover:text-white"}`,
                                        children: "Split"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("preview"),
                                        className: `px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === "preview" ? "bg-[#00adef] text-[#0e1012]" : "text-[#9ca3af] hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 29
                                            }, this),
                                            " Preview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mb-6 border-b border-[#2a2f36]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("content"),
                                className: `pb-3 px-2 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${activeTab === "content" ? "border-[#00adef] text-[#00adef]" : "border-transparent text-[#9ca3af] hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 25
                                    }, this),
                                    " Content"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 297,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("seo"),
                                className: `pb-3 px-2 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${activeTab === "seo" ? "border-[#00adef] text-[#00adef]" : "border-transparent text-[#9ca3af] hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, this),
                                    " SEO & Metadata"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 296,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid gap-6 ${viewMode === "split" ? "lg:grid-cols-2" : "grid-cols-1"}`,
                                    children: [
                                        viewMode !== "preview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                activeTab === "content" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                    children: "Title *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "title",
                                                                    value: formData.title || "",
                                                                    placeholder: "Enter post title",
                                                                    onChange: handleChange,
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb] text-lg font-medium   placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                            children: "Author"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 335,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            name: "author",
                                                                            value: formData.author || "",
                                                                            placeholder: "Author name",
                                                                            onChange: handleChange,
                                                                            className: "w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]   placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                            children: "Category *"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 346,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            name: "category",
                                                                            value: formData.category || "",
                                                                            onChange: handleChange,
                                                                            required: true,
                                                                            className: "w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]   border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: "Select Category"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 353,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Development",
                                                                                    children: "Development"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 354,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "UX Design",
                                                                                    children: "UX Design"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 355,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Technology",
                                                                                    children: "Technology"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 356,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Marketing",
                                                                                    children: "Marketing"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 357,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Tutorial",
                                                                                    children: "Tutorial"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 358,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Performance",
                                                                                    children: "Performance"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 359,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Platforms",
                                                                                    children: "Platforms"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 360,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 349,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                            children: "Read Time"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 366,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            name: "readTime",
                                                                            value: formData.readTime || "",
                                                                            placeholder: "e.g. 5 min read",
                                                                            onChange: handleChange,
                                                                            className: "w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]   placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 369,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                    children: "Excerpt *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "excerpt",
                                                                    value: formData.excerpt || "",
                                                                    rows: 2,
                                                                    placeholder: "Brief summary of the post (also used as default meta description)",
                                                                    onChange: handleChange,
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]   placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all resize-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                    children: "Featured Image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 49
                                                                }, this),
                                                                formData.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative group rounded-xl overflow-hidden border border-[#2a2f36] bg-[#15181c]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: formData.image,
                                                                            alt: "Featured",
                                                                            className: "w-full h-48 object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 393,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "px-4 py-2 bg-[#00adef] text-[#0e1012] rounded-lg cursor-pointer font-medium text-sm hover:bg-[#00adef]/90 transition-all flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                            lineNumber: 396,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        uploading ? "Uploading..." : "Replace",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "file",
                                                                                            accept: "image/*",
                                                                                            onChange: handleImageUpload,
                                                                                            disabled: uploading,
                                                                                            className: "hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                            lineNumber: 398,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 395,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setFormData((prev_3)=>({
                                                                                                ...prev_3,
                                                                                                image: ""
                                                                                            })),
                                                                                    className: "px-4 py-2 bg-red-500/80 text-white rounded-lg font-medium text-sm hover:bg-red-500 transition-all flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                            lineNumber: 404,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        "Remove"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 400,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 394,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-black/60 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 border-3 border-[#00adef] border-t-transparent rounded-full animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                lineNumber: 409,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 71
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 67
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex flex-col items-center justify-center w-full h-48 rounded-xl border-2 border-dashed border-[#2a2f36] bg-[#15181c] hover:border-[#00adef]/50 hover:bg-[#15181c]/80 transition-all cursor-pointer group",
                                                                    children: [
                                                                        uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 border-3 border-[#00adef] border-t-transparent rounded-full animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 70
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-12 h-12 rounded-full bg-[#00adef]/10 flex items-center justify-center mb-3 group-hover:bg-[#00adef]/20 transition-all",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                                        className: "text-[#00adef]",
                                                                                        size: 22
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 414,
                                                                                        columnNumber: 69
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 413,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-[#9ca3af] font-medium",
                                                                                    children: "Click to upload featured image"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 416,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-[#6b7280] mt-1",
                                                                                    children: "PNG, JPG, WEBP up to 10MB"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 417,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            accept: "image/*",
                                                                            onChange: handleImageUpload,
                                                                            disabled: uploading,
                                                                            className: "hidden"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 62
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "imageAlt",
                                                                    value: formData.imageAlt || "",
                                                                    placeholder: "Enter alt text for the featured image (e.g. A laptop working on code)",
                                                                    onChange: handleChange,
                                                                    className: "w-full mt-3 px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]   placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium text-[#b6bcc6]",
                                                                            children: "Content *"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 430,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 bg-[#15181c] p-1 rounded-md border border-[#2a2f36]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>insertFormatting("## "),
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all",
                                                                                    title: "Heading 2 (H2)",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__["Heading2"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 435,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 434,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>insertFormatting("### "),
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all",
                                                                                    title: "Heading 3 (H3)",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__["Heading3"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 438,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 437,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>insertFormatting("#### "),
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all",
                                                                                    title: "Heading 4 (H4)",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading4$3e$__["Heading4"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 441,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 440,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-px h-4 bg-[#2a2f36] mx-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 443,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>insertFormatting("**", "**"),
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all",
                                                                                    title: "Bold",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 445,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 444,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>insertFormatting("- "),
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all",
                                                                                    title: "Bullet List",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 448,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 447,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all cursor-pointer flex items-center justify-center",
                                                                                    title: "Upload Image",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                            lineNumber: 451,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "file",
                                                                                            accept: "image/*",
                                                                                            onChange: handleMarkdownImageUpload,
                                                                                            className: "hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                            lineNumber: 452,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 450,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        const url = prompt("Enter URL (e.g. /services or https://google.com):");
                                                                                        if (url) {
                                                                                            insertFormatting("[", `](${url})`);
                                                                                        }
                                                                                    },
                                                                                    className: "p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all",
                                                                                    title: "Insert Link",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                        lineNumber: 460,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                                    lineNumber: 454,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "content",
                                                                    value: formData.content || "",
                                                                    rows: viewMode === "split" ? 20 : 16,
                                                                    placeholder: "Write the full blog post content here...",
                                                                    onChange: handleChange,
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]   placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all font-mono text-sm shadow-inner resize-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[#4b5563] mt-2 flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                                            size: 10
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 469,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        "Markdown: ## H2, ### H3, #### H4, **Bold**, - Bullet, ![Alt](URL) Image, [Text](URL) Link"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                activeTab === "seo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6 bg-[#15181c] rounded-xl p-6 border border-[#2a2f36]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                    className: "text-[#00adef]",
                                                                    size: 24
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-white",
                                                                            children: "SEO Settings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 479,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-[#6b7280]",
                                                                            children: "Optimize your post for search engines"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium text-[#b6bcc6]",
                                                                            children: "Meta Title"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 487,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs ${metaTitleLength > 60 ? "text-red-400" : metaTitleLength > 50 ? "text-yellow-400" : "text-green-400"}`,
                                                                            children: [
                                                                                metaTitleLength,
                                                                                "/60 characters"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "metaTitle",
                                                                    value: formData.metaTitle || "",
                                                                    placeholder: formData.title || "Uses post title if left empty",
                                                                    onChange: handleChange,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]   placeholder:text-[#4b5563] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[#4b5563] mt-1",
                                                                    children: "Recommended: 50-60 characters. This appears in search results as the page title."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium text-[#b6bcc6]",
                                                                            children: "Meta Description"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 504,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs ${metaDescLength > 160 ? "text-red-400" : metaDescLength > 140 ? "text-yellow-400" : "text-green-400"}`,
                                                                            children: [
                                                                                metaDescLength,
                                                                                "/160 characters"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 507,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "metaDescription",
                                                                    value: formData.metaDescription || "",
                                                                    rows: 3,
                                                                    placeholder: formData.excerpt || "Uses excerpt if left empty",
                                                                    onChange: handleChange,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]   placeholder:text-[#4b5563] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all resize-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[#4b5563] mt-1",
                                                                    children: "Recommended: 140-160 characters. This appears below the title in search results."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                    children: "Keywords"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "keywords",
                                                                    value: formData.keywords?.join(", ") || "",
                                                                    placeholder: "e.g. ecommerce, website, development",
                                                                    onChange: handleKeywordsChange,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]   placeholder:text-[#4b5563] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[#4b5563] mt-1",
                                                                    children: "Separate keywords with commas. Used for meta keywords tag."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-[#b6bcc6] mb-2",
                                                                    children: "Canonical URL (optional)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "url",
                                                                    name: "canonicalUrl",
                                                                    value: formData.canonicalUrl || "",
                                                                    placeholder: "https://innodify.com/blog/your-post",
                                                                    onChange: handleChange,
                                                                    className: "w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]   placeholder:text-[#4b5563] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[#4b5563] mt-1",
                                                                    children: "Use if this content exists elsewhere to avoid duplicate content issues."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 539,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 pt-6 border-t border-[#2a2f36]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-[#b6bcc6] mb-4",
                                                                    children: "Search Result Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white rounded-lg p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[#1a0dab] text-lg font-medium truncate",
                                                                            children: formData.metaTitle || formData.title || "Post Title"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 546,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[#006621] text-sm",
                                                                            children: [
                                                                                "innodify.com › blog › ",
                                                                                formData.title?.toLowerCase().replace(/\s+/g, "-").slice(0, 20) || "post-slug"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[#545454] text-sm line-clamp-2 mt-1",
                                                                            children: formData.metaDescription || formData.excerpt || "Post description will appear here..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 56
                                        }, this),
                                        (viewMode === "split" || viewMode === "preview") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-[#15181c] rounded-xl border border-[#2a2f36] overflow-hidden ${viewMode === "preview" ? "max-w-4xl mx-auto" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sticky top-0 bg-[#15181c] border-b border-[#2a2f36] px-4 py-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            size: 16,
                                                            className: "text-[#00adef]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-[#9ca3af]",
                                                            children: "Live Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 max-h-[calc(100vh-300px)] overflow-y-auto",
                                                    children: [
                                                        formData.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "aspect-[21/9] rounded-xl overflow-hidden mb-6 bg-[#0e1012]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: formData.image,
                                                                alt: formData.title || "Featured image",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 60
                                                        }, this),
                                                        formData.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-3 py-1 rounded-full bg-[#00adef]/10 text-[#00adef] text-xs font-medium mb-4",
                                                            children: formData.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 63
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-2xl lg:text-3xl font-serif text-white mb-4",
                                                            children: formData.title || "Untitled Post"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 text-sm text-[#6b7280] mb-6 pb-6 border-b border-[#2a2f36]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: formData.author || "Author"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: formData.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 45
                                                                }, this),
                                                                formData.readTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 581,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: formData.readTime
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                                            lineNumber: 582,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlogContentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            content: formData.content || "*Start writing to see your content here...*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/add/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 82
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full bg-[#00adef] text-[#0e1012] font-semibold py-4   rounded-lg hover:bg-[#00adef]/90 active:scale-[0.99]   transition-all flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 33
                                            }, this),
                                            editingSlug ? "Update Post" : "Publish Post"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 592,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/add/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/add/page.tsx",
                            lineNumber: 314,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 305,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        className: "mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-[#2a2f36] pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-serif text-[#e5e7eb]",
                                        children: "Manage Existing Posts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full md:w-64",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search by title...",
                                                value: searchQuery,
                                                onChange: (e_7)=>setSearchQuery(e_7.target.value),
                                                className: "w-full pl-10 pr-4 py-2 rounded-lg bg-[#15181c] text-[#e5e7eb]    placeholder:text-[#6b7280] border border-[#2a2f36]   focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30   outline-none transition-all text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]",
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 613,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: filteredBlogs.map((post_1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#15181c] p-4 rounded-lg border border-[#2a2f36] flex items-center justify-between group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-md bg-cover bg-center shrink-0",
                                                        style: {
                                                            backgroundImage: `url(${post_1.image})`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[#e5e7eb] font-medium line-clamp-1",
                                                                children: post_1.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-[#6b7280]",
                                                                children: [
                                                                    post_1.category,
                                                                    " • ",
                                                                    post_1.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(post_1),
                                                        className: "p-2 text-[#6b7280] hover:text-[#00adef] hover:bg-[#00adef]/10 rounded-lg transition-all",
                                                        title: "Edit Post",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sr-only",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: async ()=>{
                                                            if (confirm(`Are you sure you want to delete "${post_1.title}"?`)) {
                                                                const result_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$data$3a$744c74__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteBlog"])(post_1.slug);
                                                                if (result_0.success) {
                                                                    alert("Post deleted successfully!");
                                                                    window.location.reload();
                                                                } else {
                                                                    alert("Failed to delete: " + result_0.error);
                                                                }
                                                            }
                                                        },
                                                        className: "p-2 text-[#6b7280] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all",
                                                        title: "Delete Post",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sr-only",
                                                                children: "Delete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                                        lineNumber: 641,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/add/page.tsx",
                                                lineNumber: 636,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/blog/add/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 63
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/add/page.tsx",
                                lineNumber: 625,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/add/page.tsx",
                        lineNumber: 603,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/add/page.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/add/page.tsx",
        lineNumber: 252,
        columnNumber: 10
    }, this);
}
_s(AddBlogPage, "i/O9ieupRX86GKYKorEek2pV0+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddBlogPage;
var _c;
__turbopack_context__.k.register(_c, "AddBlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f59e0bbe._.js.map