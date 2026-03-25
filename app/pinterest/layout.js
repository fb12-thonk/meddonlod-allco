import { siteConfig } from '../config';

export const metadata = {
  title: `Pinterest Video & Image Downloader HD - ${siteConfig.SITENAME}`,
  description: `Download Pinterest videos, high-quality images, and GIFs for free. Fast and secure way to save your favorite pins on ${siteConfig.SITENAME}.`,
  keywords: `Pinterest downloader, download Pinterest video, Pinterest image downloader, save Pinterest pins, Pinterest to MP4, HD image downloader, ${siteConfig.SITENAME}`,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
