import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BQ_YeZQ5.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DLy2UFBQ.mjs');
const _page1 = () => import('./chunks/astrojs_u3qXA8Nf.mjs');
const _page2 = () => import('./chunks/css_DVL84tHd.mjs');
const _page3 = () => import('./chunks/html_CeeYwfLw.mjs');
const _page4 = () => import('./chunks/js_DjKJLxN5.mjs');
const _page5 = () => import('./chunks/next_Bj9rCx4v.mjs');
const _page6 = () => import('./chunks/react_CLESD5L8.mjs');
const _page7 = () => import('./chunks/tailwind_BDSh4Le9.mjs');
const _page8 = () => import('./chunks/_image__Do2lxEYb.mjs');
const _page9 = () => import('./chunks/index_DISUkGen.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/astrojs.astro", _page1],
    ["src/pages/css.astro", _page2],
    ["src/pages/html.astro", _page3],
    ["src/pages/js.astro", _page4],
    ["src/pages/next.astro", _page5],
    ["src/pages/react.astro", _page6],
    ["src/pages/tailwind.astro", _page7],
    ["src/pages/[image].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "78eac65e-ee7b-4b95-8705-f7c28d9a1b57"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
