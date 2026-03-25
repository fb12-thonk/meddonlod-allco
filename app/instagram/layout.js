import { siteConfig } from '../config';

export const metadata = {
  title: `Instagram Reels & Video Downloader HD - ${siteConfig.SITENAME}`,
  description: `Download Instagram Reels, Stories, Photos, and IGTV videos for free. High-quality MP4 downloads with no login required on ${siteConfig.SITENAME}.`,
  keywords: `Instagram downloader, download Instagram reels, IG story downloader, Instagram video saver, IGTV downloader, download IG photos, ${siteConfig.SITENAME}`,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
