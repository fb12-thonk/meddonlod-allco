import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ error: "URL YouTube kosong." });

  // 1. Ambil Video ID aslinya
  const idMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^?&]+)/i);
  if (!idMatch) return NextResponse.json({ error: "URL YouTube tidak valid." });
  
  const videoId = idMatch[1];

  // Kumpulin semua API Key dari Environment Variables Vercel
  const apiKeys = [
    process.env.YT_RAPIDAPI_KEY_1,
    process.env.YT_RAPIDAPI_KEY_2,
    process.env.YT_RAPIDAPI_KEY_3,
    process.env.YT_RAPIDAPI_KEY // Jaga-jaga kalau lu cuma namain ini
  ].filter(Boolean); // Buang otomatis kalau ada yang belum lu isi di Vercel

  if (apiKeys.length === 0) {
    return NextResponse.json({ error: "API Key RapidAPI belum disetting di Vercel." });
  }

  let lastError = "Gagal mengambil data dari server.";

  // SISTEM ROTASI: Coba satu per satu API Key
  for (const apiKey of apiKeys) {
    try {
      const response = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${videoId}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com'
        },
        cache: 'no-store'
      });

      // Kalau kena limit (429) atau error 403, lanjut ke Key berikutnya di putaran loop
      if (!response.ok) {
        if (response.status === 429 || response.status === 403) {
           lastError = "API Key limit/diblokir, mencoba key cadangan...";
           continue; 
        }
        throw new Error(`API Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      
      // LOGIKA BARU: Jika API lu gak ngasih thumbnail, bikin link thumbnail HD alternatif dari video ID
      if (!data.thumbnail) {
        // Ambil thumbnail high-resolution dari server YouTube aslinya
        data.thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
      
      // Kalau sukses, langsung keluar dari loop dan lempar datanya ke frontend
      return NextResponse.json({ success: true, data });

    } catch (error) {
      lastError = error.message;
      continue; // Coba key selanjutnya kalau fetch gagal (misal timeout)
    }
  }

  // Kalau semua API Key udah dicoba tapi gagal semua, baru munculin error ini ke layar
  return NextResponse.json({ error: `Semua API Key gagal/limit. Detail: ${lastError}` });
}
