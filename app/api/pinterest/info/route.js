import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ success: false, message: 'URL is empty' });

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      redirect: 'follow', 
      cache: 'no-store'
    });

    if (!response.ok) throw new Error('Failed to access Pinterest page.');

    const html = await response.text();

    // --- INI KODE BARU BUAT AMBIL GAMBAR THUMBNAIL (OG:IMAGE) ---
    let thumbnail = '';
    const ogMatch = html.match(/property="og:image" content="([^"]+)"/i);
    if (ogMatch) thumbnail = ogMatch[1].replace(/&amp;/g, '&');
    // -----------------------------------------------------------

    // 1. Cek Video
    const videoMatch = html.match(/"contentUrl":"(https:[^"]+\.mp4[^"]*)"/);
    if (videoMatch && videoMatch[1]) {
      return NextResponse.json({ 
        success: true, 
        type: 'video', 
        mediaUrl: videoMatch[1].replace(/\\/g, ''),
        thumbnail: thumbnail // <-- Data thumbnail dikirim ke frontend
      });
    }

    // 2. Cek Image (Originals Quality)
    const imageMatch = html.match(/"url":"(https:\/\/i\.pinimg\.com\/originals\/[^"]+\.(jpg|png|webp))"/i);
    if (imageMatch && imageMatch[1]) {
      return NextResponse.json({ 
        success: true, 
        type: 'image', 
        mediaUrl: imageMatch[1].replace(/\\/g, '') 
      });
    }

    throw new Error('Media not found. The Pin might be private or invalid.');

  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
