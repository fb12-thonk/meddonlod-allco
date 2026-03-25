import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get('video');
  const type = searchParams.get('type') || 'video';

  // 1. Error message changed to English
  if (!videoUrl) {
    return NextResponse.json(
      { status: 'error', message: 'Media URL is missing' }, 
      { status: 400 }
    );
  }

  try {
    const response = await fetch(videoUrl, {
      headers: { 
        'Referer': 'https://www.tiktok.com/', 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' 
      }
    });

    // 2. Error message changed to English
    if (!response.ok) throw new Error('Failed to fetch media file from server');

    const ext = type === 'audio' ? 'mp3' : 'mp4';
    const contentType = type === 'audio' ? 'audio/mpeg' : 'video/mp4';
    
    // Custom filename with your site style
    const filename = `TikTok_Media_${type}_${Date.now()}.${ext}`;

    // 3. Prepare response headers for forced download
    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);
    headers.set('Access-Control-Allow-Origin', '*'); // Biar gak kena CORS error

    return new NextResponse(response.body, { 
      status: 200, 
      headers 
    });

  } catch (error) {
    // 4. Catch block with English error message
    return NextResponse.json(
      { status: 'error', message: error.message || 'Internal Server Error during download' }, 
      { status: 500 }
    );
  }
}
