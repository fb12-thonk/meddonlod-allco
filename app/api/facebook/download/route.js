import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get('url');

  if (!fileUrl) return new NextResponse('URL kosong', { status: 400 });

  try {
    const response = await fetch(fileUrl, { 
      headers: { 'User-Agent': 'Mozilla/5.0' } 
    });
    
    if (!response.ok) throw new Error('Gagal mengunduh file');

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    let ext = 'mp4';
    if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = 'jpg';
    else if (contentType.includes('png')) ext = 'png';
    else if (contentType.includes('webp')) ext = 'webp';

    const filename = `fb_media_${Date.now()}.${ext}`;
    const headers = new Headers(response.headers);
    headers.set('Content-Type', contentType);
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);

    return new NextResponse(response.body, { status: 200, headers });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
