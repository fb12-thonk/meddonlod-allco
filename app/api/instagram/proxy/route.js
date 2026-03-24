import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mediaUrl = searchParams.get('url');

  if (!mediaUrl) return new NextResponse('Missing URL', { status: 400 });

  try {
    // Tembak URL scontent aslinya lewat server
    const response = await fetch(mediaUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' } // Nyamar jadi browser
    });

    if (!response.ok) throw new Error('Failed to fetch image content');

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    // Kirim balik data biner gambarnya ke browser dengan header yang bener
    return new NextResponse(response.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, must-revalidate' // Cache 1 jam biar irit
      }
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
