/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_C4fD_Pcz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as images, $ as $$Header, a as $$Hero, b as $$TagHero, c as $$Layout } from './_image__Cih3tWN1.mjs';
import { $ as $$ItemImg } from './astrojs_C7uW1Vvt.mjs';

const $$Astro = createAstro();
const $$Js = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Js;
  const { image } = Astro2.params;
  images.find((b) => b.id === image);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JavaScript" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "js": "text-cyan-500" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {}, { "tag": ($$result3) => renderTemplate`${renderComponent($$result3, "TagHero", $$TagHero, { "slot": "tag", "tag": "JavaScript" })}` })} <section class="w-full flex justify-center py-6 px-12"> <ul class="w-full max-w-[1920px] grid grid-cols-auto-fit gap-2"> ${images.map(({ id, title, img }) => {
    if (id.includes("javascript")) {
      return renderTemplate`${renderComponent($$result2, "ItemImg", $$ItemImg, { "id": id, "title": title, "img": img })}`;
    }
  })} </ul> </section> </main> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/js.astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/js.astro";
const $$url = "/js";

export { $$Js as default, $$file as file, $$url as url };
