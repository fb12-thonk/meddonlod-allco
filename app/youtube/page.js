'use client';
import { useState } from 'react';
import MainBox from '../components/MainBox';
import ContentArea from '../components/ContentArea';

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const processLink = async () => {
    if (!url) { setError('Please enter a valid YouTube link (Video/Shorts).'); return; }
    
    setLoading(true); setError(''); setResult(null);

    try {
      // Mesin API YouTube lu aman
      const res = await fetch(`/api/youtube/info?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.data);
        
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
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  // LOGIKA BAWAAN LU: Cari gambar thumbnail dengan resolusi paling tinggi / HD
  const getThumbnailUrl = () => {
    if (!result || !result.thumbnail) return '';
    if (typeof result.thumbnail === 'string') return result.thumbnail;
    
    if (Array.isArray(result.thumbnail) && result.thumbnail.length > 0) {
      try {
        const highestRes = [...result.thumbnail].sort((a, b) => (b.width || 0) - (a.width || 0));
        if (highestRes[0] && highestRes[0].url) return highestRes[0].url;
      } catch (e) {}

      const lastThumb = result.thumbnail[result.thumbnail.length - 1];
      if (typeof lastThumb === 'string') return lastThumb;
      if (lastThumb && typeof lastThumb === 'object' && lastThumb.url) return lastThumb.url;
    }
    return ''; 
  };

  // LOGIKA BAWAAN LU: Ambil format
  const getFormats = () => {
    if (!result) return [];
    if (Array.isArray(result.formats)) return result.formats;
    if (Array.isArray(result.links)) return result.links;
    
    let combined = [];
    if (result.data && result.data.video && Array.isArray(result.data.video)) combined = [...combined, ...result.data.video];
    if (result.data && result.data.audio && Array.isArray(result.data.audio)) combined = [...combined, ...result.data.audio];
    if (combined.length > 0) return combined;

    let combinedFallback = [];
    if (Array.isArray(result.video)) combinedFallback = [...combinedFallback, ...result.video];
    if (Array.isArray(result.audio)) combinedFallback = [...combinedFallback, ...result.audio];
    return combinedFallback;
  };

  const thumbnailUrl = getThumbnailUrl();
  const formats = getFormats();

  return (
    <div className="container">
      
      {/* Panggil Cetakan Utama Khusus YouTube */}
      <MainBox 
        activeTab="yt" 
        title="YouTube Downloader"
        subtitle="Download YouTube Videos & Shorts instantly."
        placeholder="Paste YouTube link here..."
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

            <div className="row" style={{ marginTop: '20px' }}>
              
              <div className="col-md-5 text-center">
                <div className="media-preview-container" style={{ marginBottom: '15px' }}>
                  {thumbnailUrl && (
                    <img 
                      referrerPolicy="no-referrer"
                      src={thumbnailUrl} 
                      alt="YouTube Thumbnail" 
                      style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} 
                    />
                  )}
                </div>
              </div>
              
              <div className="col-md-7" style={{ textAlign: 'left' }}>
                <h4 style={{ fontWeight: 800, marginTop: 0, lineHeight: 1.4, fontSize: '18px', marginBottom: '20px' }}>
                  {result.title ? (result.title.length > 70 ? result.title.substring(0, 70) + '...' : result.title) : 'YouTube Media Ready'}
                </h4>
                
                <p className="text-muted" style={{ fontWeight: 600 }}>Available Formats:</p>
                
                {/* Area Format dibikin bisa di-scroll biar kalau listnya panjang kotak 3D-nya tetep rapi */}
                <div style={{ maxHeight: '350px', overflowY: 'auto', paddingRight: '5px' }}>
                  {formats.length > 0 ? (
                    formats.map((fmt, index) => {
                      const quality = fmt.quality || fmt.res || fmt.format || fmt.label || 'Download';
                      const isAudio = fmt.type?.includes('audio') || fmt.mimeType?.includes('audio') || fmt.ext === 'mp3';
                      const label = isAudio ? `Audio (${quality})` : `Video (${quality})`;
                      
                      // Style dibedain otomatis: Kuning buat Audio, Default buat Video
                      const btnClass = isAudio ? "btn btn-sim-dl btn-sim-image" : "btn btn-sim-dl btn-sim-video";
                      const customStyle = isAudio 
                        ? { width: '100%', marginBottom: '10px', textAlign: 'left', padding: '10px 15px', backgroundColor: '#f1c40f', color: '#000', border: '2px solid #e67e22' }
                        : { width: '100%', marginBottom: '10px', textAlign: 'left', padding: '10px 15px' };

                      return (
                        <button 
                          key={index} 
                          className={btnClass} 
                          style={customStyle} 
                          onClick={() => handleDownload(fmt.url || fmt.link)}
                        >
                          {isAudio ? (
                            <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>
                          ) : (
                            <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg>
                          )}
                          Download {label}
                        </button>
                      )
                    })
                  ) : (
                    <div className="alert alert-warning">
                      Data format tidak dikenali.
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}
        {/* =============================================================== */}

      </MainBox>

      <ContentArea />

    </div>
  );
}
