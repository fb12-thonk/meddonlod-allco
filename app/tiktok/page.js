'use client';
import { useState } from 'react';
import MainBox from '../components/MainBox';
import ContentArea from '../components/ContentArea';

export default function TikTokDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const processLink = async () => {
    if (!url) { setError('Please enter a valid TikTok link.'); return; }
    setLoading(true); setError(''); setResult(null);

    try {
      // Mesin API lu (tetap aman)
      const res = await fetch(`/api/tiktok/info?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      
      if (data.status !== 'success') {
        setError(data.message || 'Failed to load video.');
      } else {
        setResult(data.data);
        
        // Animasi otomatis scroll ke hasil download (biar elegan)
        setTimeout(() => {
          const simArea = document.getElementById('simulationArea');
          if (simArea) simArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } catch (err) {
      setError('Network or system error.');
    }
    setLoading(false);
  };

  const handleDownload = (fileUrl, type) => {
    if (!fileUrl) return;
    window.location.href = `/api/tiktok/download?video=${encodeURIComponent(fileUrl)}&type=${type}`;
  };

  return (
    <div className="container">
      
      {/* Panggil Cetakan Utama */}
      <MainBox 
        activeTab="tiktok" 
        title="TikTok Downloader"
        subtitle="Paste your TikTok link below to download videos or audio instantly."
        placeholder="Paste your TikTok link here..."
        inputValue={url}
        onInputChange={(e) => setUrl(e.target.value)}
        onDownload={processLink}
        loading={loading}
      >
        
        {/* Tampilkan Error jika link salah atau API gagal */}
        {error && (
          <div className="alert alert-danger text-left" style={{ marginTop: '20px', display: 'none' }}>
            {error}
          </div>
        )}

        {/* Tampilkan Kotak Hasil 3D jika data API sukses */}
        {result && (
          <div id="simulationArea" className="box-3d" style={{ marginTop: '20px', animation: 'fadeIn 0.5s ease-in-out' }}>
            <h4 style={{ fontWeight: 800, borderBottom: '2px solid #eee', paddingBottom: '15px', marginTop: 0, textAlign: 'left' }}>
              Download Result
            </h4>
            <div className="row" style={{ marginTop: '20px' }}>
              
              <div className="col-md-5">
                <div className="media-preview-container">
                  {/* Ngambil gambar cover dari API lu */}
                  <img 
                    src={result.cover || "https://via.placeholder.com/600x400.png?text=No+Thumbnail"} 
                    alt="TikTok Thumbnail" 
                    style={{ maxWidth: '100%', borderRadius: '8px', objectFit: 'cover' }} 
                  />
                </div>
              </div>
              
              <div className="col-md-7" style={{ textAlign: 'left' }}>
                {/* Ngambil judul dan username dari API lu */}
                <h4 style={{ fontWeight: 800, marginTop: 0, lineHeight: 1.4, fontSize: '18px' }}>
                  {result.title ? result.title.substring(0, 70) + '...' : 'TikTok Video Ready'}
                </h4>
                {result.author?.nickname && (
                  <p className="text-muted" style={{ fontWeight: 600 }}>
                    Username: @{result.author.nickname}
                  </p>
                )}
                
                <div style={{ marginTop: '20px' }}>
                  
                  {/* Tombol Download Video (Ngebaca urlList API lu) */}
                  {result.play?.UrlList?.[0] && (
                    <button 
                      className="btn btn-sim-dl btn-sim-video" 
                      style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}
                      onClick={() => handleDownload(result.play.UrlList[0], 'video')}
                    >
                      <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg> 
                      Download Video (MP4)
                    </button>
                  )}

                  {/* Tombol Download Audio (Ngebaca music API lu) */}
                  {result.music && (
                    <button 
                      className="btn btn-sim-dl btn-sim-image" 
                      style={{ width: '100%', textAlign: 'left', backgroundColor: '#f1c40f', color: '#000', border: '2px solid #e67e22' }}
                      onClick={() => handleDownload(result.music, 'audio')}
                    >
                      <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>
                      Download Audio (MP3)
                    </button>
                  )}

                </div>
              </div>
            </div>
          </div>
        )}
      </MainBox>

      {/* Panggil Artikel Fitur dan FAQ */}
      <ContentArea />

    </div>
  );
}
