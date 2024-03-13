/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_C4fD_Pcz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as images, $ as $$Header, a as $$Hero, b as $$TagHero, c as $$Layout } from './_image__BbAZTD_Q.mjs';
import { $ as $$ItemImg } from './astrojs_CINP98A9.mjs';

const $$Astro = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tailwind;
  const { image } = Astro2.params;
  images.find((b) => b.id === image);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tailwind" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "tailwind": "text-cyan-500" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {}, { "tag": ($$result3) => renderTemplate`${renderComponent($$result3, "TagHero", $$TagHero, { "slot": "tag", "tag": "Tailwind Css" })}` })} <section class="w-full flex justify-center py-6 px-12 max-md:px-2"> <div class="w-full max-w-[1920px] grid grid-cols-auto-fit gap-2"> ${images.map(({ id, title, img }) => {
    if (id.includes("tailwind")) {
      return renderTemplate`${renderComponent($$result2, "ItemImg", $$ItemImg, { "id": id, "title": title, "img": img })}`;
    }
  })} </div> </section> </main> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/tailwind.astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/tailwind.astro";
const $$url = "/tailwind";

export { $$Tailwind as default, $$file as file, $$url as url };
