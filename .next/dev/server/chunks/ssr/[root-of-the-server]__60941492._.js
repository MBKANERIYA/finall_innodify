module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function addBlog(newBlog) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/data/blogs.ts');
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        // Find the end of the array
        const arrayEndIndex = fileContent.lastIndexOf('];');
        if (arrayEndIndex === -1) {
            throw new Error('Could not find the end of the blogs array.');
        }
        // Format the new blog object as a string
        // We use JSON.stringify but then remove the outer braces to insert it cleanly if needed,
        // or just rely on the fact that valid JSON object syntax is valid JS object syntax (mostly).
        const blogString = JSON.stringify(newBlog, null, 4);
        // check if there are other items to add a comma
        const insertContent = `    ${blogString},\n`;
        const newContent = fileContent.slice(0, arrayEndIndex) + insertContent + fileContent.slice(arrayEndIndex);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, newContent, 'utf-8');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to add blog:', error);
        return {
            success: false,
            error: 'Failed to save blog to file.'
        };
    }
}
async function deleteBlog(slug) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/data/blogs.ts');
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        const arrayStartMarker = 'export const defaultBlogs: BlogPost[] = [';
        const arrayEndMarker = '];';
        const startIndex = fileContent.indexOf(arrayStartMarker);
        const endIndex = fileContent.lastIndexOf(arrayEndMarker);
        if (startIndex === -1 || endIndex === -1) {
            throw new Error('Could not find the blogs array in the file.');
        }
        const beforeArray = fileContent.slice(0, startIndex + arrayStartMarker.length);
        const afterArray = fileContent.slice(endIndex);
        const arrayContent = fileContent.slice(startIndex + arrayStartMarker.length, endIndex);
        // Regex to match individual blog objects in the array
        const regex = /\{[\s\S]*?\}\s*(?=,|\s*\])/g;
        const matches = arrayContent.match(regex) || [];
        const keptMatches = matches.filter((match)=>{
            // Match by slug
            const slugMatch = match.match(/"slug":\s*"([^"]+)"/) || match.match(/'slug':\s*'([^']+)'/) || match.match(/slug:\s*"([^"]+)"/) || match.match(/slug:\s*'([^']+)'/);
            return slugMatch ? slugMatch[1] !== slug : true;
        });
        const newArrayContent = '\n' + keptMatches.join(',\n') + (keptMatches.length > 0 ? ',\n' : '\n');
        const newFileContent = beforeArray + newArrayContent + afterArray;
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, newFileContent, 'utf-8');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to delete blog:', error);
        return {
            success: false,
            error: 'Failed to delete blog from file.'
        };
    }
}
async function updateBlog(oldSlug, updatedBlog) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/data/blogs.ts');
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        const arrayStartMarker = 'export const defaultBlogs: BlogPost[] = [';
        const arrayEndMarker = '];';
        const startIndex = fileContent.indexOf(arrayStartMarker);
        const endIndex = fileContent.lastIndexOf(arrayEndMarker);
        if (startIndex === -1 || endIndex === -1) {
            throw new Error('Could not find the blogs array in the file.');
        }
        const beforeArray = fileContent.slice(0, startIndex + arrayStartMarker.length);
        const afterArray = fileContent.slice(endIndex);
        const arrayContent = fileContent.slice(startIndex + arrayStartMarker.length, endIndex);
        const regex = /\{[\s\S]*?\}\s*(?=,|\s*\])/g;
        const matches = arrayContent.match(regex) || [];
        const updatedMatches = matches.map((match)=>{
            const slugMatch = match.match(/"slug":\s*"([^"]+)"/) || match.match(/'slug':\s*'([^']+)'/) || match.match(/slug:\s*"([^"]+)"/) || match.match(/slug:\s*'([^']+)'/);
            if (slugMatch && slugMatch[1] === oldSlug) {
                return JSON.stringify(updatedBlog, null, 4);
            }
            return match;
        });
        const newArrayContent = '\n' + updatedMatches.join(',\n') + (updatedMatches.length > 0 ? ',\n' : '\n');
        const newFileContent = beforeArray + newArrayContent + afterArray;
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, newFileContent, 'utf-8');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update blog:', error);
        return {
            success: false,
            error: 'Failed to update blog in file.'
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
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60941492._.js.map