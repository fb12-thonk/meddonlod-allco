import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mediaUrl = searchParams.get('url');

  if (!mediaUrl) return new NextResponse('Missing URL', { status: 400 });

  try {
    const response = await fetch(mediaUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    if (!response.ok) throw new Error('Failed to fetch media file');

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    const ext = contentType.includes('video') ? 'mp4' : 'jpg';
    const filename = `ig_media_${Date.now()}.${ext}`;

    const headers = new Headers(response.headers);
    headers.set('Content-Type', contentType);
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);

    return new NextResponse(response.body, { status: 200, headers });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
