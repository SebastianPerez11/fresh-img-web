/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// added new 4 column grid as new4
				'auto-fit': 'repeat(auto-fit, minmax(380px, 1fr))'
			}
		},
	},
	plugins: [],
}
