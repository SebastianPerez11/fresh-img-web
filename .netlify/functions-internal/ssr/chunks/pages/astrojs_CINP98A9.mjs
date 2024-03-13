/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_C4fD_Pcz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as images, $ as $$Header, a as $$Hero, b as $$TagHero, c as $$Layout } from './_image__BbAZTD_Q.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$ItemImg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemImg;
  const { id, img, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="overflow-hidden rounded-lg min-w-[340px]"${addAttribute(`/${id}`, "href")}> <img${addAttribute(`view-transition-name: image-${id};`, "style")} class="w-full object-cover aspect-video rounded-lg transition-transform hover:scale-110"${addAttribute(img, "src")}${addAttribute(title, "alt")}${addAttribute(title, "title")}> </a>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/components/ItemImg.astro", void 0);

const $$Astro = createAstro();
const $$Astrojs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Astrojs;
  const { image } = Astro2.params;
  images.find((b) => b.id === image);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Js" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "astro": "text-cyan-500" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {}, { "tag": ($$result3) => renderTemplate`${renderComponent($$result3, "TagHero", $$TagHero, { "slot": "tag", "tag": "Astro Js" })}` })} <section class="w-full flex justify-center py-6 px-12 max-md:px-2"> <div class="w-full max-w-[1920px] grid grid-cols-auto-fit gap-2"> ${images.map(({ id, title, img }) => {
    if (id.includes("astro")) {
      return renderTemplate`${renderComponent($$result2, "ItemImg", $$ItemImg, { "id": id, "title": title, "img": img })}`;
    }
  })} </div> </section> </main> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/astrojs.astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/astrojs.astro";
const $$url = "/astrojs";

const astrojs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Astrojs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ItemImg as $, astrojs as a };
