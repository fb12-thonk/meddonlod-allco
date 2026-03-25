'use client';
import { useState } from 'react';
import MainBox from '../components/MainBox';
import ContentArea from '../components/ContentArea';

export default function FacebookDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const processLink = async () => {
    if (!url) { setError('Please enter a valid Facebook link.'); return; }
    
    setLoading(true); setError(''); setResult(null);

    try {
      // Mesin API Facebook Lu
      const res = await fetch(`/api/facebook/info?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      
      if (!data.success) {
        setError(data.message);
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
    window.location.href = `/api/facebook/download?url=${encodeURIComponent(fileUrl)}`;
  };

  return (
    <div className="container">
      
      {/* Panggil Cetakan Utama Khusus Facebook */}
      <MainBox 
        activeTab="fb" 
        title="Facebook Downloader"
        subtitle="Download Facebook Videos, Reels, or Images instantly."
        placeholder="Paste any Facebook link here..."
        inputValue={url}
        onInputChange={(e) => setUrl(e.target.value)}
        onDownload={processLink}
        loading={loading}
      >

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

            {/* -------- SKENARIO 1: JIKA KONTEN ADALAH VIDEO -------- */}
            {result.type === 'video' ? (
              <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-md-5 text-center">
                  <div className="media-preview-container" style={{ marginBottom: '15px' }}>
                    {result.images?.[0] ? (
                      <img src={result.images[0]} alt="FB Thumbnail" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                    ) : (
                      <img src="https://via.placeholder.com/600x400.png?text=FB+Video" alt="No Thumbnail" style={{ width: '100%', borderRadius: '8px' }} />
                    )}
                  </div>
                  {/* Tombol Download Thumbnail */}
                  {result.images?.[0] && (
                    <button 
                      className="btn btn-sim-dl btn-sim-image" 
                      style={{ width: '100%', textAlign: 'left', padding: '10px 15px', backgroundColor: '#ecf0f1', color: '#333', border: '2px solid #bdc3c7' }}
                      onClick={() => handleDownload(result.images[0])}
                    >
                      <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                      Download Thumbnail (JPG)
                    </button>
                  )}
                </div>
                
                <div className="col-md-7" style={{ textAlign: 'left' }}>
                  <h4 style={{ fontWeight: 800, marginTop: 0, lineHeight: 1.4, fontSize: '18px', marginBottom: '20px' }}>
                    {result.title ? (result.title.length > 70 ? result.title.substring(0, 70) + '...' : result.title) : 'Facebook Video Ready'}
                  </h4>
                  
                  <p className="text-muted" style={{ fontWeight: 600 }}>Available Formats:</p>
                  
                  {/* Tombol Download Video Kualitas SD/HD (Loop dari API lu) */}
                  {result.videoLinks && Object.entries(result.videoLinks).map(([quality, link]) => (
                    <button 
                      key={quality}
                      className="btn btn-sim-dl btn-sim-video" 
                      style={{ width: '100%', marginBottom: '10px', textAlign: 'left', padding: '10px 15px' }}
                      onClick={() => handleDownload(link)}
                    >
                      <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg> 
                      Download Video ({quality})
                    </button>
                  ))}
                </div>
              </div>
            ) : (

            /* -------- SKENARIO 2: JIKA KONTEN ADALAH IMAGE/ALBUM -------- */
              <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-xs-12" style={{ textAlign: 'left', marginBottom: '15px' }}>
                  <h4 style={{ fontWeight: 800, marginTop: 0, lineHeight: 1.4, fontSize: '18px' }}>
                    {result.title ? result.title : 'Facebook Images Found'}
                  </h4>
                  <p className="text-muted" style={{ fontWeight: 600 }}>Images ({result.images?.length || 0}):</p>
                </div>

                {/* Looping semua gambar (Grid Style) */}
                {result.images && result.images.map((imgUrl, index) => (
                  <div className="col-md-4 col-sm-6 col-xs-12" key={index} style={{ marginBottom: '15px' }}>
                    <div style={{ border: '2px solid #eee', borderRadius: '8px', padding: '5px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <img src={imgUrl} alt={`FB Extracted ${index}`} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }} />
                      <button 
                        className="btn btn-sim-dl btn-sim-image" 
                        style={{ width: '100%', marginTop: 'auto', padding: '8px', fontSize: '14px', backgroundColor: '#ecf0f1', color: '#333', border: '2px solid #bdc3c7' }} 
                        onClick={() => handleDownload(imgUrl)}
                      >
                        <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'16px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                        Download Image
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}
        {/* =============================================================== */}

      </MainBox>

      {/* Panggil Artikel Fitur dan FAQ */}
      <ContentArea />

    </div>
  );
}
