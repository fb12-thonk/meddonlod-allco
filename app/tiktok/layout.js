import { siteConfig } from '../config';

export const metadata = {
  title: `TikTok Video Downloader Without Watermark - ${siteConfig.SITENAME}`,
  description: `Download TikTok videos without watermark for free in HD quality. Fast, easy, and no registration required on ${siteConfig.SITENAME}.`,
  keywords: `TikTok downloader, download TikTok video no watermark, TikTok to MP4, save TikTok videos, TikTok video saver, ${siteConfig.SITENAME}`,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
