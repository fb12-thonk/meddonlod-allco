// file: app/robots.js
import { siteConfig } from './config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Kita larang bot masuk ke folder API biar server lu gak jebol di-crawl
    },
    sitemap: `https://${siteConfig.DOMAIN}/sitemap.xml`,
  }
}


