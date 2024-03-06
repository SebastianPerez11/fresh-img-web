import { renderers } from './renderers.mjs';
import { manifest } from './manifest_jAW4rTbH.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DLy2UFBQ.mjs');
const _page1 = () => import('./chunks/astrojs_C-E6cSCC.mjs');
const _page2 = () => import('./chunks/css_SMYeLRMS.mjs');
const _page3 = () => import('./chunks/html_B1qZXof1.mjs');
const _page4 = () => import('./chunks/js_CvITKkvD.mjs');
const _page5 = () => import('./chunks/next_Bn4yldZS.mjs');
const _page6 = () => import('./chunks/react_BIh5mZoA.mjs');
const _page7 = () => import('./chunks/tailwind_CpALTRY2.mjs');
const _page8 = () => import('./chunks/_image__lzpop5Ps.mjs');
const _page9 = () => import('./chunks/index_Oe5LGOUv.mjs');
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
    "middlewareSecret": "9fc85d4b-3550-4076-bf1a-59894f72d139"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
