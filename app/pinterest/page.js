'use client';
import { useState } from 'react';
import MainBox from '../components/MainBox';
import ContentArea from '../components/ContentArea';



export default function PinterestDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const processLink = async () => {
    if (!url) { setError('Please enter a Pinterest link.'); return; }
    
    setLoading(true); setError(''); setResult(null);

    try {
      // Mesin API Pinterest Lu (Aman)
      const res = await fetch(`/api/pinterest/info?url=${encodeURIComponent(url)}`);
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
    window.location.href = `/api/pinterest/download?url=${encodeURIComponent(fileUrl)}`;
  };

  return (
    <div className="container">
      
      {/* Panggil Cetakan Utama Khusus Pinterest */}
      <MainBox 
        activeTab="pin" 
        title="Pinterest Downloader"
        subtitle="Download Pinterest Videos or Original Images instantly."
        placeholder="Paste Pinterest link (pin.it or pinterest.com)..."
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
              <div className="col-md-8 col-md-offset-2 text-center">
                
                {/* Header Teks */}
                <h4 style={{ fontWeight: 800, marginBottom: '20px', fontSize: '18px' }}>
                  {result.type === 'video' ? 'Pinterest Video Ready!' : 'Pinterest Image Ready!'}
                </h4>
                
                {/* TAMPILAN JIKA KONTEN ADALAH VIDEO */}
                {result.type === 'video' ? (
                  <div style={{ marginBottom: '20px' }}>
                    <video 
                      controls 
                      src={result.mediaUrl} 
                      poster={result.thumbnail || ''} 
                      style={{ width: '100%', maxHeight: '400px', backgroundColor: '#000', borderRadius: '8px', marginBottom: '20px', objectFit: 'contain' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    <button 
                      className="btn btn-sim-dl btn-sim-video" 
                      style={{ width: '100%', marginBottom: '10px', padding: '12px 15px', fontSize: '16px' }}
                      onClick={() => handleDownload(result.mediaUrl)}
                    >
                      <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'20px', marginRight:'8px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg>
                      Download Video (MP4)
                    </button>

                    {result.thumbnail && (
                      <button 
                        className="btn btn-sim-dl btn-sim-image" 
                        style={{ width: '100%', padding: '10px 15px', backgroundColor: '#ecf0f1', color: '#333', border: '2px solid #bdc3c7' }} 
                        onClick={() => handleDownload(result.thumbnail)}
                      >
                        <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                        Download Thumbnail Cover
                      </button>
                    )}
                  </div>
                ) : (

                /* TAMPILAN JIKA KONTEN ADALAH IMAGE/FOTO */
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ border: '2px solid #eee', borderRadius: '8px', padding: '5px', marginBottom: '20px' }}>
                      <img 
                        src={result.mediaUrl} 
                        alt="Pinterest Extract" 
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '5px' }} 
                      />
                    </div>
                    
                    <button 
                      className="btn btn-sim-dl btn-sim-image" 
                      style={{ width: '100%', padding: '12px 15px', fontSize: '16px', backgroundColor: '#bdc3c7', color: '#000', border: '2px solid #95a5a6' }} 
                      onClick={() => handleDownload(result.mediaUrl)}
                    >
                      <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'20px', marginRight:'8px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                      Download Image (Original)
                    </button>
                  </div>
                )}
                
              </div>
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
