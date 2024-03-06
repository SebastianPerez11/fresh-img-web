import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_C4fD_Pcz.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/astrojs","isIndex":false,"type":"page","pattern":"^\\/astrojs\\/?$","segments":[[{"content":"astrojs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/astrojs.astro","pathname":"/astrojs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/css","isIndex":false,"type":"page","pattern":"^\\/css\\/?$","segments":[[{"content":"css","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/css.astro","pathname":"/css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/html","isIndex":false,"type":"page","pattern":"^\\/html\\/?$","segments":[[{"content":"html","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/html.astro","pathname":"/html","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/js","isIndex":false,"type":"page","pattern":"^\\/js\\/?$","segments":[[{"content":"js","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/js.astro","pathname":"/js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/next","isIndex":false,"type":"page","pattern":"^\\/next\\/?$","segments":[[{"content":"next","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/next.astro","pathname":"/next","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/react","isIndex":false,"type":"page","pattern":"^\\/react\\/?$","segments":[[{"content":"react","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/react.astro","pathname":"/react","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/tailwind","isIndex":false,"type":"page","pattern":"^\\/tailwind\\/?$","segments":[[{"content":"tailwind","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tailwind.astro","pathname":"/tailwind","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/[image]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"image","dynamic":true,"spread":false}]],"params":["image"],"component":"src/pages/[image].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/_image_.DlQEV1Bx.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/[image].astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/astrojs.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/css.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/html.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/js.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/next.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/react.astro",{"propagation":"none","containsHead":true}],["C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/tailwind.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/css.astro":"chunks/pages/css_Cy7szFl7.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BLSEmn60.mjs","/src/pages/html.astro":"chunks/pages/html_MPSx2dw_.mjs","/src/pages/index.astro":"chunks/pages/index_COBgGjTO.mjs","/src/pages/js.astro":"chunks/pages/js_CiEeiB7h.mjs","/src/pages/next.astro":"chunks/pages/next_GxrGV0ZC.mjs","/src/pages/react.astro":"chunks/pages/react_CgX-O4gc.mjs","/src/pages/tailwind.astro":"chunks/pages/tailwind_Cz3HwyCx.mjs","\u0000@astrojs-manifest":"manifest_BQ_YeZQ5.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DLy2UFBQ.mjs","\u0000@astro-page:src/pages/astrojs@_@astro":"chunks/astrojs_u3qXA8Nf.mjs","\u0000@astro-page:src/pages/css@_@astro":"chunks/css_DVL84tHd.mjs","\u0000@astro-page:src/pages/html@_@astro":"chunks/html_CeeYwfLw.mjs","\u0000@astro-page:src/pages/js@_@astro":"chunks/js_DjKJLxN5.mjs","\u0000@astro-page:src/pages/next@_@astro":"chunks/next_Bj9rCx4v.mjs","\u0000@astro-page:src/pages/react@_@astro":"chunks/react_CLESD5L8.mjs","\u0000@astro-page:src/pages/tailwind@_@astro":"chunks/tailwind_BDSh4Le9.mjs","\u0000@astro-page:src/pages/[image]@_@astro":"chunks/_image__Do2lxEYb.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DISUkGen.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DqR2iBSn.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_image_.DlQEV1Bx.css","/favicon.svg","/_astro/hoisted.DqR2iBSn.js"],"buildFormat":"directory"});

export { manifest };
