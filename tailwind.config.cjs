import defaultTheme from 'tailwindcss/defaultTheme'
import typographyPlugin from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
    	extend: {
      		colors: {
        		primary: 'var(--aw-color-primary)',
				secondary: 'var(--aw-color-secondary)',
				accent: 'var(--aw-color-accent)',
				default: 'var(--aw-color-text-default)',
				muted: 'var(--aw-color-text-muted)',
			}
		},
		fontFamily: {
			'body': [
				'Inter', 
				'ui-sans-serif', 
				'system-ui', 
				'-apple-system', 
				'system-ui', 
				'Segoe UI', 
				'Roboto', 
				'Helvetica Neue', 
				'Arial', 
				'Noto Sans', 
				'sans-serif', 
				'Apple Color Emoji', 
				'Segoe UI Emoji', 
				'Segoe UI Symbol', 
				'Noto Color Emoji'
			],
			'sans': [
				'Inter', 
				'ui-sans-serif', 
				'system-ui', 
				'-apple-system', 
				'system-ui', 
				'Segoe UI', 
				'Roboto', 
				'Helvetica Neue', 
				'Arial', 
				'Noto Sans', 
				'sans-serif', 
				'Apple Color Emoji', 
				'Segoe UI Emoji', 
				'Segoe UI Symbol', 
				'Noto Color Emoji'
			]
		}
	},
	plugins: [
		typographyPlugin,
		require('flowbite/plugin')
	],
	darkMode: 'class'
}

