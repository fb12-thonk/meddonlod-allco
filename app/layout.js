// file: app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import { siteConfig } from './config'; // Sesuaikan path ini kalau config lu ada di luar folder app
import './globals.css';

// ==========================================
// META TAG SEO SUPER LENGKAP ALA NEXT.JS
// ==========================================
export const metadata = {
  metadataBase: new URL(`https://${siteConfig.DOMAIN}`), // Biar link gambar OG otomatis absolute
  title: {
    default: `${siteConfig.SITENAME} - High-Speed Social Media Video Downloader`,
    template: `%s | ${siteConfig.SITENAME}`
  },
  description: `Download high-quality videos, audios, and images from TikTok, Facebook, Instagram, Pinterest, and YouTube instantly and completely free on ${siteConfig.SITENAME}.`,
  keywords: [
    'video downloader', 'social media downloader', 'tiktok video downloader', 
    'facebook video downloader', 'instagram downloader', 'pinterest downloader', 
    'youtube shorts downloader', 'free media downloader', siteConfig.SITENAME
  ],
  authors: [{ name: siteConfig.SITENAME }],
  
  // Open Graph (Buat preview cakep pas di-share di WA/FB/Telegram)
  openGraph: {
    title: `${siteConfig.SITENAME} - Free Social Media Video Downloader`,
    description: `Download high-quality videos, audios, and images from your favorite social media platforms instantly.`,
    url: `https://${siteConfig.DOMAIN}`,
    siteName: siteConfig.SITENAME,
    images: [
      {
        url: '/og-image.jpg', // Nanti lu wajib taruh gambar og-image.jpg ukuran 1200x630 di folder 'public'
        width: 1200,
        height: 630,
        alt: `${siteConfig.SITENAME} Preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card (Buat preview pas di-share di Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.SITENAME} - Fast Media Downloader`,
    description: `Download videos and audio from your favorite social media platforms quickly and safely.`,
    images: ['/og-image.jpg'], // Sama kayak OG image
  },

  // Icon Website (Favicon)
  icons: {
    icon: '/icon.png', // Taruh file favicon.ico di folder 'public'
    shortcut: '/icon.png',
    apple: '/icon.png', // Buat icon pas disave ke homescreen iPhone
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        
        <main style={{ marginTop: '70px', minHeight: '80vh' }}>
          {children}
        </main>

        <Footer />

        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

