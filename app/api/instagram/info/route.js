import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ error: "Empty URL" });

  const match = url.match(/\/(?:reel|p|tv)\/([^/?#&]+)/i);
  if (!match) return NextResponse.json({ error: "Invalid Instagram URL" });

  const shortcode = match[1];

  const vars = {
    shortcode: shortcode,
    fetch_tagged_user_count: null,
    hoisted_comment_id: null,
    hoisted_reply_id: null
  };

  const graphqlUrl = `https://www.instagram.com/graphql/query/?doc_id=8845758582119845&variables=${encodeURIComponent(JSON.stringify(vars))}`;

  // Kumpulin semua cookie yang ada di Environment Variables Vercel
  const allCookies = [
    process.env.IG_COOKIE,
    process.env.IG_COOKIE_1,
    process.env.IG_COOKIE_2,
    process.env.IG_COOKIE_3,
    process.env.IG_COOKIE // Jaga-jaga kalau lu cuma bikin namanya IG_COOKIE
  ].filter(Boolean); // Buang yang kosong

  // Kalau gak ada satupun yang diisi di Vercel
  if (allCookies.length === 0) {
    return NextResponse.json({ error: "IG cookies have not been set" });
  }

  // Acak pilih satu cookie
  const igCookie = allCookies[Math.floor(Math.random() * allCookies.length)];

  try {
    const response = await fetch(graphqlUrl, {
      method: 'GET',
      headers: {
        'x-ig-app-id': '936619743392459',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Cookie': igCookie
      },
      cache: 'no-store'
    });

    const text = await response.text();
    let ig;
    
    try {
      ig = JSON.parse(text);
    } catch (e) {
      return NextResponse.json({ error: "Parse failed. Instagram blocked the request." });
    }

    const post = ig?.data?.xdt_shortcode_media;

    if (!post) {
      return NextResponse.json({ error: "Post private / not available" });
    }

    let mediaList = [];
    
    if (post.edge_sidecar_to_children && post.edge_sidecar_to_children.edges) {
      post.edge_sidecar_to_children.edges.forEach(edge => {
        const node = edge.node;
        mediaList.push({
          is_video: Boolean(node.is_video),
          media: node.is_video ? node.video_url : node.display_url
        });
      });
    } else {
      const isVideo = Boolean(post.is_video);
      mediaList.push({
        is_video: isVideo,
        media: isVideo ? post.video_url : post.display_url
      });
    }

    return NextResponse.json({
      username: post.owner?.username || '',
      caption: post.edge_media_to_caption?.edges?.[0]?.node?.text || '',
      mediaList: mediaList
    });

  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
