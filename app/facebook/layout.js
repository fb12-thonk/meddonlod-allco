import { siteConfig } from '../config';// Pastikan path ke file config-nya benar

export const metadata = {
  title: `Facebook Video Downloader HD & 4K - ${siteConfig.SITENAME}`,
  description: `Download Facebook videos in Full HD and 4K quality for free. Fast, secure, and works for FB Reels and private videos on ${siteConfig.SITENAME}.`,
  keywords: `Facebook downloader, download FB videos, Facebook video saver, FB reels downloader, Facebook to MP4, download private FB videos, ${siteConfig.SITENAME}`,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
