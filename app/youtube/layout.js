import { siteConfig } from '../config';

export const metadata = {
  title: `Free & Fast YouTube Video Downloader - ${siteConfig.SITENAME}`,
  description: `Download YouTube videos and audio in high quality (MP4/MP3) for free. Fast, secure, and easy to use with no limits on ${siteConfig.SITENAME}.`,
  keywords: `YouTube downloader, download YouTube videos, free yt downloader, youtube to mp4, youtube to mp3, fast video downloader, ${siteConfig.SITENAME}`,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
