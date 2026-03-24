// file: app/sitemap.js
import { siteConfig } from './config'; 
export default function sitemap() {
  const baseUrl = `https://${siteConfig.DOMAIN}`;

  // Daftar semua URL halaman yang ada di web lu
  const routes = [
    '',
    '/tiktok',
    '/facebook',
    '/instagram',
    '/pinterest',
    '/youtube',
    '/about',
    '/terms',
    '/privacy',
    '/contact'
  ];

  // Looping otomatis buat ngebentuk format XML Sitemap
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly', // Halaman utama dicek tiap hari
    priority: route === '' ? 1 : 0.8, // Prioritas (1 = paling penting)
  }));
}
