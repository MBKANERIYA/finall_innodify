module.exports = [
"[project]/src/actions/blogActions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40402d5a555f387abd73543dc55893e5d9ca2cb792":"addBlog","40bbe406ee49e6f40a708c0c65e9a74b7b8a965f2b":"deleteBlog","60de23e34e47ff1c90885a4b9f9e806b6b6add48b4":"updateBlog"},"",""] */ __turbopack_context__.s([
    "addBlog",
    ()=>addBlog,
    "deleteBlog",
    ()=>deleteBlog,
    "updateBlog",
    ()=>updateBlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const API_URL = process.env.INTERNAL_API_URL || 'http://127.0.0.1:5000';
async function addBlog(newBlog) {
    try {
        const response = await fetch(`${API_URL}/api/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/blog');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to add blog:', error);
        return {
            success: false,
            error: error.message || 'Failed to save blog to database.'
        };
    }
}
async function deleteBlog(slug) {
    try {
        const response = await fetch(`${API_URL}/api/blogs/${slug}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/blog');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to delete blog:', error);
        return {
            success: false,
            error: error.message || 'Failed to delete blog from database.'
        };
    }
}
async function updateBlog(oldSlug, updatedBlog) {
    try {
        const response = await fetch(`${API_URL}/api/blogs/${oldSlug}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/blog');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/blog/${oldSlug}`);
        if (updatedBlog.slug && updatedBlog.slug !== oldSlug) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/blog/${updatedBlog.slug}`);
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update blog:', error);
        return {
            success: false,
            error: error.message || 'Failed to update blog in database.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addBlog,
    deleteBlog,
    updateBlog
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addBlog, "40402d5a555f387abd73543dc55893e5d9ca2cb792", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBlog, "40bbe406ee49e6f40a708c0c65e9a74b7b8a965f2b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBlog, "60de23e34e47ff1c90885a4b9f9e806b6b6add48b4", null);
}),
"[project]/.next-internal/server/app/blog/add/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/blogActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$blogActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/blogActions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/blog/add/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/blogActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40402d5a555f387abd73543dc55893e5d9ca2cb792",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$blogActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addBlog"],
    "40bbe406ee49e6f40a708c0c65e9a74b7b8a965f2b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$blogActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBlog"],
    "60de23e34e47ff1c90885a4b9f9e806b6b6add48b4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$blogActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBlog"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$blog$2f$add$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$blogActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/blog/add/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/blogActions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$blogActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/blogActions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_d1122656._.js.map