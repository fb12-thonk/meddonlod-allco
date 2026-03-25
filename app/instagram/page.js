'use client';
import { useState } from 'react';
import MainBox from '../components/MainBox';
import ContentArea from '../components/ContentArea';

export default function InstagramDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const processLink = async () => {
    if (!url) { setError('Please enter a valid Instagram link.'); return; }
    
    setLoading(true); setError(''); setResult(null);

    try {
      // Mesin API Instagram lu (tetap aman dengan cookie-nya)
      const res = await fetch(`/api/instagram/info?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
        
        // Animasi otomatis scroll ke hasil
        setTimeout(() => {
          const simArea = document.getElementById('simulationArea');
          if (simArea) simArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } catch (err) {
      setError('Network or server error.');
    }
    setLoading(false);
  };

  const handleDownload = (fileUrl) => {
    if (!fileUrl) return;
    window.location.href = `/api/instagram/download?url=${encodeURIComponent(fileUrl)}`;
  };

  return (
    <div className="container">
      
      {/* Panggil Cetakan Utama Khusus Instagram */}
      <MainBox 
        activeTab="ig" 
        title="Instagram Downloader"
        subtitle="Download Instagram Videos, Reels, Photos, or Carousel instantly."
        placeholder="Paste your Instagram link here..."
        inputValue={url}
        onInputChange={(e) => setUrl(e.target.value)}
        onDownload={processLink}
        loading={loading}
      >

        {/* Notifikasi Error */}
        {error && (
          <div className="alert alert-danger text-left" style={{ marginTop: '20px' }}>
            {error}
          </div>
        )}

        {/* ===================== AREA HASIL DOWNLOAD ===================== */}
        {result && (
          <div id="simulationArea" className="box-3d" style={{ marginTop: '20px', animation: 'fadeIn 0.5s ease-in-out' }}>
            <h4 style={{ fontWeight: 800, borderBottom: '2px solid #eee', paddingBottom: '15px', marginTop: 0, textAlign: 'left' }}>
              Download Result
            </h4>

            {/* Header: Username & Caption */}
            <div style={{ textAlign: 'left', marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px dashed #ddd' }}>
              <h4 style={{ fontWeight: 800, margin: '0 0 5px 0', fontSize: '18px' }}>@{result.username}</h4>
              <p className="text-muted" style={{ fontSize: '14px', whiteSpace: 'pre-wrap', margin: 0 }}>
                {result.caption ? (result.caption.length > 150 ? result.caption.substring(0, 150) + '...' : result.caption) : 'Instagram Post'}
              </p>
            </div>

            {/* Daftar Foto/Video (Grid Layout) */}
            <div className="row">
              {result.mediaList.map((item, index) => (
                <div className="col-md-6 col-sm-6 col-xs-12" key={index} style={{ marginBottom: '20px' }}>
                  <div style={{ border: '2px solid #eee', borderRadius: '8px', padding: '10px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    
                    {/* TAMPILAN JIKA KONTEN ADALAH VIDEO */}
                    {item.is_video ? (
                      <>
                        <video controls src={item.media} style={{ width: '100%', maxHeight: '300px', backgroundColor: '#000', borderRadius: '5px', marginBottom: '15px', objectFit: 'contain' }}></video>
                        <button 
                          className="btn btn-sim-dl btn-sim-video" 
                          style={{ width: '100%', marginTop: 'auto', padding: '10px 15px', textAlign: 'left' }} 
                          onClick={() => handleDownload(item.media)}
                        >
                          <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg>
                          Download Video (MP4) {result.mediaList.length > 1 ? `Part ${index + 1}` : ''}
                        </button>
                      </>
                    ) : (
                      
                    /* TAMPILAN JIKA KONTEN ADALAH FOTO (Pakai Proxy Lu) */
                      <>
                        <img 
                          src={`/api/instagram/proxy?url=${encodeURIComponent(item.media)}`} 
                          alt={`IG Extracted ${index}`} 
                          style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '5px', marginBottom: '15px', backgroundColor: '#f8f9fa' }} 
                          onError={(e) => {
                              // Trik Fallback Lu (Aman!)
                              e.target.onError = null;
                              e.target.src = item.media;
                              e.target.referrerPolicy = "no-referrer";
                          }}
                        />
                        <button 
                          className="btn btn-sim-dl btn-sim-image" 
                          style={{ width: '100%', marginTop: 'auto', padding: '10px 15px', textAlign: 'left', backgroundColor: '#ecf0f1', color: '#333', border: '2px solid #bdc3c7' }} 
                          onClick={() => handleDownload(item.media)}
                        >
                          <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                          Download Image (JPG) {result.mediaList.length > 1 ? `Part ${index + 1}` : ''}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        )}
        {/* =============================================================== */}

      </MainBox>

      {/* Panggil Artikel Fitur dan FAQ */}
      <ContentArea />

    </div>
  );
}
