import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vercel from '@astrojs/vercel/serverless';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

export default defineConfig({
  integrations: [tailwind()],
   output: "hybrid",
   adapter: vercel()
});

