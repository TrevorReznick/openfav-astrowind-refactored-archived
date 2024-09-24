import { mergeDeepRight, pathOr } from 'ramda'

import type { MetaData } from '../types'

type Config = {
    site?: SiteConfig
    metadata?: MetaDataConfig
    i18n?: I18NConfig    
    analytics?: unknown
}
  
export interface SiteConfig {
    name: string;
    site?: string;
    base?: string;
    trailingSlash?: boolean
    googleSiteVerificationId?: string
}
export interface MetaDataConfig extends Omit<MetaData, 'title'> {
    title?: {
      default: string
      template: string
    }
}
  export interface I18NConfig {
    language: string
    textDirection: string
    dateFormatter?: Intl.DateTimeFormat
}

export interface AnalyticsConfig {
    vendors: {
      googleAnalytics: {
        id?: string
        partytown?: boolean
      }
    }
}

const DEFAULT_SITE_NAME = 'Website'

const getSite = (config: Config) => {
    const _default = {
      name: DEFAULT_SITE_NAME,
      site: undefined,
      base: '/',
      trailingSlash: false,  
      googleSiteVerificationId: ''
    }
  
    return mergeDeepRight({}, _default, config?.site ?? {}) as SiteConfig;
}

const getMetadata = (config: Config) => {
    const siteConfig = getSite(config)
  
    const _default = {
      title: {
        default: siteConfig?.name || DEFAULT_SITE_NAME,
        template: '%s',
      },
      description: '',
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        type: 'website'
      }
    }
  
    return mergeDeepRight({}, _default, config?.metadata ?? {}) as MetaDataConfig
}

const getAnalytics = (config: Config) => {
    const _default = {
      vendors: {
        googleAnalytics: {
          id: undefined,
          partytown: true,
        }
      }
    }
  
    return mergeDeepRight({}, _default, config?.analytics ?? {}) as AnalyticsConfig;
};
  
  export default (config: Config) => ({
    SITE: getSite(config),    
    METADATA: getMetadata(config),    
    ANALYTICS: getAnalytics(config),
  })