/// <reference path="../.astro/types.d.ts" />

interface SiteConfig {
  name: string
  site: string
  base: string;
  googleSiteVerificationId: string
}
  
interface MetadataConfig {
  title: {
    default: string
    template: string
  }
  description: string
  robots: {
    index: boolean
    follow: boolean
  }
  openGraph: {
    site_name: string
    images: Array<{
      url: string
      width: number
      height: number
    }>
    type: string
  }
  twitter: {
    handle: string
    site: string
    cardType: string
  }
}


export const SITE: SiteConfig;
export const I18N: I18NConfig;
export const METADATA: MetaDataConfig;
export const APP_BLOG: AppBlogConfig;
export const UI: UIConfig;
export const ANALYTICS: AnalyticsConfig;
  
