// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import openfav from './src/integrations/index'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
	output: 'server',
	adapter: vercel(),
    integrations: [
		mdx(), 
		sitemap(), 
		tailwind(),
		openfav({
			config: './src/config.yaml',
		})
	]
})