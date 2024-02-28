/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_Srf718gm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$ItemImg, b as $$Layout } from './index_DKoI02DM.mjs';

const $$Astro = createAstro();
const $$React = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "React" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<section class="w-full flex justify-center py-8 px-12"> <div class="w-full max-w-[1920px] flex flex-col gap-5"> <header class="w-full flex flex-col gap-1"> <h1 class="text-3xl font-semibold">Encontra los mejores Wallpapers de tus tecnologias favoritas</h1> <p class="text-xl">Descargalos de forma sencilla y con la mejor Calidad.</p> </header> <footer class="w-full"> <a href="/" class="bg-slate-200 rounded-full px-4 py-1">React</a> <a href="/" class="bg-slate-200 rounded-full px-4 py-1">Framework</a> </footer> </div> </section> <section class="w-full flex justify-center py-6 px-12"> <div class="w-full max-w-[1920px] grid grid-cols-auto-fit gap-2"> ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-1.jpg", "alt": "" })} ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-2.jpg", "alt": "" })} ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-3.jpg", "alt": "" })} ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-4.png", "alt": "" })} ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-5.png", "alt": "" })} ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-6.png", "alt": "" })} ${renderComponent($$result2, "ItemImg", $$ItemImg, { "href": "", "src": "/public/img/react-7.jpg", "alt": "" })} </div> </section> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/react.astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/react.astro";
const $$url = "/react";

export { $$React as default, $$file as file, $$url as url };
