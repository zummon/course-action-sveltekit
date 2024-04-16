/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: "'Josefin Sans', sans-serif",
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
