module.exports = [
"[project]/src/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBlogBySlug",
    ()=>fetchBlogBySlug,
    "fetchBlogs",
    ()=>fetchBlogs,
    "getBaseUrl",
    ()=>getBaseUrl
]);
function getBaseUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
     // Browser uses relative URIs
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT || 3000}`; // Dev environment
}
const API_URL = getBaseUrl();
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
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const API_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBaseUrl"])();
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

//# sourceMappingURL=_58248bbd._.js.map