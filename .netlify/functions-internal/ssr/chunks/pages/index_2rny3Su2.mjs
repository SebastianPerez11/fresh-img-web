/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_C4fD_Pcz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as images, $ as $$Header, a as $$Hero, b as $$TagHero, c as $$Layout } from './_image__BbAZTD_Q.mjs';
import { $ as $$ItemImg } from './astrojs_CINP98A9.mjs';

const $$Astro$1 = createAstro();
const $$ListOfImg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfImg;
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex justify-center py-6 px-12 max-md:px-2"> <div class="w-full max-w-[1920px] grid grid-cols-auto-fit max-md:grid-cols-auto-fill gap-2"> ${images.map(({ id, title, img }) => {
    return renderTemplate`${renderComponent($$result, "ItemImg", $$ItemImg, { "id": id, "title": title, "img": img })}`;
  })} </div> </section>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/components/ListOfImg.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fresh Img" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "home": "text-cyan-500" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {}, { "tag": ($$result3) => renderTemplate`${renderComponent($$result3, "TagHero", $$TagHero, { "slot": "tag", "tag": "Todas las imagenes" })}` })} ${renderComponent($$result2, "ListOfImg", $$ListOfImg, {})} </main> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/index.astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
