/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_C4fD_Pcz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$7 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Repositorio de Wallpapers"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body id="body" class="relative -z-10"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"> <title>Ir al Repositorio</title> <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"></path> <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"></path> </g></svg>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/icons/Github.astro", void 0);

const $$Astro$4 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")}${addAttribute(Astro2.props.id, "id")} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <title>Menu Icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/icons/Menu.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="w-full flex justify-center py-6 px-12 max-md:px-2"> <nav class="w-full grid grid-cols-8 gap-10 items-center max-w-[1920px] max-2xl:gap-4 max-xl:grid-cols-6 max-sm:grid-cols-4"> <picture class="max-md:col-span-2"> <a href="/" title="Fresh Img" class="font-semibold text-2xl">Fresh Img</a> </picture> <div class="flex col-span-2 max-xl:col-span-3 max-sm:col-span-full"> <input class="w-full py-2 px-4 border rounded-full" placeholder="Buscador" type="text" name="" id="search"> </div> <div class="flex w-full justify-between items-center col-span-3 max-2xl:col-span-4 text-lg max-xl:hidden"> <a title="Inicio" href="/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.home}`, "class")}>Inicio</a> <a title="HTML5" href="/html/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.html}`, "class")}>Html</a> <a title="CSS3" href="/css/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.css}`, "class")}>Css</a> <a title="JavaScript" href="/js/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.js}`, "class")}>JavaScript</a> <a title="React" href="/react/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.react}`, "class")}>React</a> <a title="Tailwind" href="/tailwind/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.tailwind}`, "class")}>Tailwind</a> <a title="Next Js" href="/next/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.next}`, "class")}>Next Js</a> <a title="Astro Js" href="/astrojs/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.astro}`, "class")}>Astro</a> </div> </nav> <a href="https://github.com/SebastianPerez11" target="_blank" class="place-self-center w-8 h-8 max-xl:hidden"> ${renderComponent($$result, "Github", $$Github, { "class": "w-8 transition-colors hover:fill-cyan-500" })} </a> <nav class="flex w-[42px] h-[42px] items-center justify-center xl:hidden"> ${renderComponent($$result, "Menu", $$Menu, { "id": "iconMenu", "class": "w-9 h-9 cursor-pointer fixed z-50" })} </nav> <div id="menu-nesting" class="text-white grid place-content-center gap-10 text-center text-2xl absolute w-full h-screen top-0 bottom-0 transition-all right-[-100%] z-40 bg-[#0F0F14] md:hidden"> <a title="Inicio" href="/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.home}`, "class")}>Inicio</a> <a title="HTML5" href="/html/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.html}`, "class")}>Html</a> <a title="CSS3" href="/css/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.css}`, "class")}>Css</a> <a title="JavaScript" href="/js/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.js}`, "class")}>JavaScript</a> <a title="React" href="/react/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.react}`, "class")}>React</a> <a title="Tailwind" href="/tailwind/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.tailwind}`, "class")}>Tailwind</a> <a title="Next Js" href="/next/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.next}`, "class")}>Next Js</a> <a title="Astro Js" href="/astrojs/"${addAttribute(`transition-colors hover:text-cyan-500 ${Astro2.props.astro}`, "class")}>Astro</a> </div> </header> `;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex justify-center py-8 px-12 max-md:px-2"> <div class="w-full max-w-[1920px] flex flex-col gap-5"> <header class="w-full flex flex-col gap-1"> <h1 class="text-3xl font-semibold">Encontra los mejores <span class="text-cyan-500">Wallpapers</span> de tus tecnologias favoritas</h1> <p class="text-xl">Descargalos de forma sencilla y con la mejor Calidad.</p> </header> <footer class="w-full flex gap-2 items-center"> ${renderSlot($$result, $$slots["tag"])} </footer> </div> </section>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$TagHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagHero;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="bg-slate-200 rounded-full px-5 py-1">${tag}</span>`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/components/TagHero.astro", void 0);

const images = [
  {
    id: "react-1",
    title: "React Js",
    img: "../img/react/react-1.webp",
    type: "Biblioteca",
    textColor: "text-cyan-400",
    details: ["Minimalista", "4K", "HD"
    ],
  },
  {
    id: "astro-1",
    title: "Astro Js",
    img: "../img/astro/astro-3.webp",
    type: "Framework",
    textColor: "text-orange-500",
    details: ["Fantasia", "4K", "HD"
    ],
  },
  {
    id: "tailwind-1",
    title: "Tailwind Css",
    img: "../img/tailwind/tailwind-1.webp",
    type: "Framework",
    textColor: "text-cyan-500",
    details: ["Minimalista", "4K", "HD"],
  },
  {
    id: "react-3",
    title: "React Js",
    img: "../img/react/react-3.webp",
    type: "Biblioteca",
    textColor: "text-cyan-400",
    details: ["Minimalista", "4K", "HD"
    ],
  },
  {
    id: "next-1",
    title: "Next Js",
    img: "../img/next/next-1.webp",
    type: "Framework",
    textColor: "",
    details: ["Futurista", "4K", "HD"
    ],
  },
  {
    id: "html-1",
    title: "HTML5",
    img: "../img/html/html-1.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "javascript-1",
    title: "JavaScript",
    img: "../img/js/js-1.webp",
    type: "Lenguaje de Programación",
    textColor: "text-yellow-500",
    details: ["Realista", "4K", "HD"
    ],
  },
  {
    id: "astro-2",
    title: "Astro Js",
    img: "../img/astro/astro-2.webp",
    type: "Framework",
    textColor: "text-orange-500",
    details: ["Fantasia", "4K", "HD"
    ],
  },
  {
    id: "css-5",
    title: "CSS3",
    img: "../img/css/css-5.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "next-2",
    title: "Next Js",
    img: "../img/next/next-2.webp",
    type: "Framework",
    textColor: "",
    details: ["Futurista", "4K", "HD"
    ],
  },
  {
    id: "tailwind-2",
    title: "Tailwind Css",
    img: "../img/tailwind/tailwind-2.webp",
    type: "Framework",
    textColor: "text-cyan-500",
    details: ["Minimalista", "4K", "HD"],
  },
  {
    id: "html-2",
    title: "HTML5",
    img: "../img/html/html-2.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "css-2",
    title: "CSS3",
    img: "../img/css/css-2.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "html-3",
    title: "HTML5",
    img: "../img/html/html-3.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "react-5",
    title: "React Js",
    img: "../img/react/react-5.webp",
    type: "Biblioteca",
    textColor: "text-cyan-400",
    details: ["Minimalista", "4K", "HD"
    ],
  },
  {
    id: "next-3",
    title: "Next Js",
    img: "../img/next/next-3.webp",
    type: "Framework",
    textColor: "",
    details: ["Futurista", "4K", "HD"
    ],
  },
  {
    id: "html-4",
    title: "HTML5",
    img: "../img/html/html-4.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "astro-6",
    title: "Astro Js",
    img: "../img/astro/astro-6.webp",
    type: "Framework",
    textColor: "text-orange-500",
    details: ["Fantasia", "4K", "HD"
    ],
  },
  {
    id: "css-1",
    title: "CSS3",
    img: "../img/css/css-1.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "javascript-2",
    title: "JavaScript",
    img: "../img/js/js-2.webp",
    type: "Lenguaje de Programación",
    textColor: "text-yellow-500",
    details: ["Realista", "4K", "HD"
    ],
  },
  {
    id: "tailwind-3",
    title: "Tailwind Css",
    img: "../img/tailwind/tailwind-3.webp",
    type: "Framework",
    textColor: "text-cyan-500",
    details: ["Minimalista", "4K", "HD"],
  },
  {
    id: "css-3",
    title: "CSS3",
    img: "../img/css/css-3.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "javascript-3",
    title: "JavaScript",
    img: "../img/js/js-3.webp",
    type: "Lenguaje de Programación",
    textColor: "text-yellow-500",
    details: ["Realista", "4K", "HD"
    ],
  },
  {
    id: "astro-3",
    title: "Astro Js",
    img: "../img/astro/astro-1.webp",
    type: "Framework",
    textColor: "text-orange-500",
    details: ["Fantasia", "4K", "HD"
    ],
  },
  {
    id: "tailwind-4",
    title: "Tailwind Css",
    img: "../img/tailwind/tailwind-4.webp",
    type: "Framework",
    textColor: "text-cyan-500",
    details: ["Minimalista", "4K", "HD"],
  },
  {
    id: "react-4",
    title: "React Js",
    img: "../img/react/react-4.webp",
    type: "Biblioteca",
    textColor: "text-cyan-400",
    details: ["Minimalista", "4K", "HD"
    ],
  },
  {
    id: "next-4",
    title: "Next Js",
    img: "../img/next/next-4.webp",
    type: "Framework",
    textColor: "",
    details: ["Futurista", "4K", "HD"
    ],
  },
  {
    id: "javascript-4",
    title: "JavaScript",
    img: "../img/js/js-4.webp",
    type: "Lenguaje de Programación",
    textColor: "text-yellow-500",
    details: ["Realista", "4K", "HD"
    ],
  },
  {
    id: "astro-4",
    title: "Astro Js",
    img: "../img/astro/astro-4.webp",
    type: "Framework",
    textColor: "text-orange-500",
    details: ["Fantasia", "4K", "HD"
    ],
  },
  {
    id: "html-6",
    title: "HTML5",
    img: "../img/html/html-6.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "css-6",
    title: "CSS3",
    img: "../img/css/css-6.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "next-6",
    title: "Next Js",
    img: "../img/next/next-6.webp",
    type: "Framework",
    textColor: "",
    details: ["Futurista", "4K", "HD"
    ],
  },
  {
    id: "javascript-5",
    title: "JavaScript",
    img: "../img/js/js-5.webp",
    type: "Lenguaje de Programación",
    textColor: "text-yellow-500",
    details: ["Realista", "4K", "HD"
    ],
  },
  {
    id: "astro-5",
    title: "Astro Js",
    img: "../img/astro/astro-5.webp",
    type: "Framework",
    textColor: "text-orange-500",
    details: ["Fantasia", "4K", "HD"
    ],
  },
  {
    id: "html-5",
    title: "HTML5",
    img: "../img/html/html-5.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "react-2",
    title: "React Js",
    img: "../img/react/react-2.webp",
    type: "Biblioteca",
    textColor: "text-cyan-400",
    details: ["Minimalista", "4K", "HD"
    ],
  },
  {
    id: "css-4",
    title: "CSS3",
    img: "../img/css/css-4.webp",
    type: "Framework",
    textColor: "text-orange-400",
    details: ["3D", "4K", "HD"
    ],
  },
  {
    id: "next-5",
    title: "Next Js",
    img: "../img/next/next-5.webp",
    type: "Framework",
    textColor: "",
    details: ["Futurista", "4K", "HD"
    ],
  },
  {
    id: "tailwind-5",
    title: "Tailwind Css",
    img: "../img/tailwind/tailwind-5.webp",
    type: "Framework",
    textColor: "text-cyan-500",
    details: ["Minimalista", "4K", "HD"],
  },
  {
    id: "javascript-6",
    title: "JavaScript",
    img: "../img/js/js-6.webp",
    type: "Lenguaje de Programación",
    textColor: "text-yellow-500",
    details: ["Realista", "4K", "HD"
    ],
  },
];

const $$Astro = createAstro();
const $$image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$image;
  const { image } = Astro2.params;
  const info = images.find((b) => b.id === image);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Imagenes ${info.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {}, { "tag": ($$result3) => renderTemplate`${renderComponent($$result3, "TagHero", $$TagHero, { "slot": "tag", "tag": `${info.title}` })}${renderComponent($$result3, "TagHero", $$TagHero, { "slot": "tag", "tag": `${info.type}` })}` })} <section class="w-full flex justify-center py-8 px-12 max-md:px-2"> <div class="w-full grid grid-cols-2 gap-10 max-w-[1920px] max-lg:grid-cols-1"> <picture class="overflow-hidden"> <img${addAttribute(`view-transition-name: image-${info.id};`, "style")} class="w-full h-full object-cover aspect-video rounded-lg"${addAttribute(`${info.img}`, "src")}${addAttribute(`${info.title}`, "title")}${addAttribute(`${info.title}`, "alt")}> </picture> <div class="w-full flex flex-col gap-10"> <header class="flex flex-col gap-4"> <h1${addAttribute(`text-4xl font-semibold ${info.textColor}`, "class")}> ${`${info.title}`} </h1> <p class="text-2xl">Descargar Wallpaper totalmente gratis.</p> <div class="flex gap-2 items-center"> ${info.details.map((tag) => {
    return renderTemplate`${renderComponent($$result2, "TagHero", $$TagHero, { "slot": "tag", "tag": tag })}`;
  })} </div> </header> <footer class="flex gap-2"> <a title="Descargar" class="bg-blue-600 text-lg rounded-lg text-white py-2 px-8"${addAttribute(`${info.img}`, "href")}${addAttribute(`${info.title}`, "download")}>Descargar</a> <a title="Volver" class="bg-gray-600 text-lg rounded-lg text-white py-2 px-8" href="javascript:history.back(-1);">Volver</a> </footer> </div> </div> </section> </main> ` })}`;
}, "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/[image].astro", void 0);

const $$file = "C:/Users/sebas/OneDrive/Escritorio/landing-page-galery/src/pages/[image].astro";
const $$url = "/[image]";

const _image_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$image,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _image_ as _, $$Hero as a, $$TagHero as b, $$Layout as c, images as i };
