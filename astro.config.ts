// @ts-check
import { defineConfig } from 'astro/config'
import {fileURLToPath} from 'node:url'
import path from 'path'

import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import openfav from './src/integrations/index'

import type { AstroConfig, AstroIntegration } from 'astro'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false
const whenExternalScripts = (
    items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
        hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : []

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
	output: 'server',
	adapter: vercel(),
    integrations: [
		mdx(), 
		sitemap(), 
		tailwind({
			applyBaseStyles: false,
		}),
		icon({
			include: {
			  tabler: ['*'],
			  'flat-color-icons': [
				'template',
				'gallery',
				'approval',
				'document',
				'advertising',
				'currency-exchange',
				'voice-presentation',
				'business-contact',
				'database',
			  ],
			},
		}),
		openfav({
			config: './src/config.yaml',
		}),
        ...whenExternalScripts(() =>
            partytown({
              config: { forward: ['dataLayer.push'] },
            })
        ),
	]
})