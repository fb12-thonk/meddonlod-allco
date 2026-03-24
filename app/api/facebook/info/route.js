import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ success: false, message: 'URL is empty' });

  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'connection': 'keep-alive'
    };

    // redirect: 'follow' wajib untuk link model share/
    const response = await fetch(url, { headers, redirect: 'follow', cache: 'no-store' });
    if (!response.ok) throw new Error(`Failed to access Facebook: HTTP ${response.status}`);
    const html = await response.text();

    // 1. Ambil Judul
    let title = 'Facebook Content';
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) title = titleMatch[1].replace(/&amp;/g, '&');

    // 2. Ambil Link Video
    const videoLinks = {};
    const sdMatch = html.match(/"browser_native_sd_url":"([^"]+)"/) || html.match(/"playable_url":"([^"]+)"/);
    if (sdMatch) videoLinks['SD Quality'] = sdMatch[1].replace(/\\/g, '');

    const hdMatch = html.match(/"browser_native_hd_url":"([^"]+)"/) || html.match(/"playable_url_quality_hd":"([^"]+)"/);
    if (hdMatch) videoLinks['HD Quality'] = hdMatch[1].replace(/\\/g, '');

    // 3. Ambil Gambar (Thumbnail atau Album)
    let images = [];
    
    // Prioritas 1: OG Image (paling akurat buat thumbnail video/single post)
    const ogMatch = html.match(/property="og:image" content="([^"]+)"/i);
    if (ogMatch) images.push(ogMatch[1].replace(/&amp;/g, '&').replace(/\\/g, ''));

    // Prioritas 2: Regex Brutal ala Petch.php (buat album/share/p/ yang og:image-nya keblokir)
    const imageRegex = /https:\/\/[^"'\s>]+\.fbcdn\.net[^"'\s>]+/ig;
    let matches = html.match(imageRegex);
    if (matches) {
      for (let img of matches) {
        img = img.replace(/\\/g, '').replace(/&amp;/g, '&');
        // Validasi ekstensi
        if (!/\.(jpg|jpeg|png|webp)/i.test(img)) continue;
        // Filter sampah (icon, emoji, rsrc, profil kecil)
        if (/(sprite|icon|emoji|profile_pic|rsrc\.php|g\.fbcdn\.net)/i.test(img)) continue;
        // Filter thumbnail kecil p100x100, s160x160, dll
        if (/\/p\d+x\d+\//i.test(img) || /\/s\d+x\d+\//i.test(img)) continue; 
        
        images.push(img);
      }
    }
    // Hapus duplikat dan batasi maksimal 6 gambar
    images = [...new Set(images)].slice(0, 6);

    // 4. Deteksi Tipe Konten
    const hasVideo = Object.keys(videoLinks).length > 0;
    const hasImages = images.length > 0;

    // Perbaikan Logika Error: Kadang FB ngeblokir total HTML-nya (kasih form login)
    // Kalau benar-benar kosong, baru throw error.
    if (!hasVideo && !hasImages) {
      if (html.includes('id="login_form"') || html.includes('"type":"comet_login"') || title.includes('Log in') || title.includes('Masuk')) {
         throw new Error('Content is private or blocked by Facebook login wall.');
      }
      throw new Error('Media not found.');
    }

    // Selalu paksa tipe gambar jika tidak ada video, biarpun og:image thumbnail Reels dapet
    let finalType = hasVideo ? 'video' : 'image';
    
    return NextResponse.json({
      success: true,
      title,
      type: finalType,
      videoLinks,
      // Kalau video, og:image (images[0]) dijadiin thumbnail.
      // Kalau murni foto, kirim semua daftar fotonya.
      images: hasVideo && images.length > 0 ? [images[0]] : images 
    });

  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
