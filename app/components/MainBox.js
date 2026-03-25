// file: components/MainBox.js
'use client'; 
import { useState } from 'react';

export default function MainBox({
  hideInput = false, 
  activeTab = '',    
  title = "Free Social Media Video Downloader",
  subtitle = "Paste your link below to download videos, images, or audio instantly.",
  placeholder = "Paste your link here...",
  inputValue,        
  onInputChange,     
  onDownload,        
  loading,
  children           
}) {

  // --- LOGIKA JS LU YANG UDAH DIUBAH JADI REACT STATE ---
  const [toastMsg, setToastMsg] = useState('');
  const [toastClass, setToastClass] = useState('');

  const showToast = (message, isSuccess = true) => {
    setToastMsg(message);
    setToastClass(isSuccess ? 'show toast-success' : 'show toast-error');
    
    // Hilangkan toast setelah 3 detik (persis kayak script lu)
    setTimeout(() => {
      setToastClass('');
    }, 3000);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        onInputChange({target: {value: text}});
        showToast('Link pasted successfully from clipboard!', true);
      } else {
        showToast('Clipboard is empty.', false);
      }
    } catch (err) {
      showToast('Auto-paste failed. Please paste manually.', false);
    }
  };

  const handleDownloadClick = () => {
  // 1. Validasi Input Kosong
  if (!inputValue || inputValue.trim() === "") {
    showToast('Please paste a media link first!', false);
    return; // Stop di sini kalau kosong
  }

  // 2. Cek apakah SDK Iklan Monetag sudah siap
  if (typeof window !== "undefined" && typeof window.show_10302319 === "function") {
    
    showToast('Preparing your download...', true);

    // 3. Panggil Iklan Rewarded Interstitial
    window.show_10302319().then(() => {
      // --- KODE INI JALAN SETELAH USER SELESAI NONTON IKLAN ---
      showToast('Processing link...', true);
      
      // Jalankan fungsi download asli kamu
      if (onDownload) onDownload();

    }).catch((err) => {
      // Jika iklan gagal/eror, jangan blokir user, langsung download saja
      console.error("Ads Error:", err);
      if (onDownload) onDownload();
    });

  } else {
    // 4. Jika SDK Iklan belum terload (karena sinyal atau diblokir), langsung download
    showToast('Processing link...', true);
    if (onDownload) onDownload();
  }
};
  // -----------------------------------------------------

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1 col-xs-12">
        
        <div className="box-3d text-center" style={{ marginTop: '30px' }}>
          
          <h2 style={{ marginTop: 0, fontWeight: 800 }}>{title}</h2>
          <p className="text-muted" style={{ marginBottom: '25px' }}>{subtitle}</p>
          
          <div id="sosmed-buttons" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '25px' }}>
             {/* Tombol sosmed lu tetep aman di sini (gak gue ubah) */}
            <button onClick={() => goTo('/tiktok')} className={`btn btn-default btn-3d-sosmed ${activeTab === 'tiktok' ? 'active-tiktok' : ''}`}>
              <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M19.321 5.562a5.124 5.124 0 0 1-3.553-1.442 5.203 5.203 0 0 1-1.428-3.558h-3.44v14.076c0 1.901-1.545 3.446-3.446 3.446a3.45 3.45 0 0 1-3.446-3.446 3.45 3.45 0 0 1 3.446-3.446c.465 0 .911.092 1.32.257V7.817a6.83 6.83 0 0 0-1.32-.128 6.892 6.892 0 0 0-6.892 6.892 6.892 6.892 0 0 0 6.892 6.892 6.892 6.892 0 0 0 6.892-6.892V9.664a8.623 8.623 0 0 0 5.015 1.597V7.817c-1.168-.001-2.285-.386-3.04-1.255z"/></svg> TikTok
            </button>
            <button onClick={() => goTo('/facebook')} className={`btn btn-default btn-3d-sosmed ${activeTab === 'fb' ? 'btn-fb' : ''}`}>
              <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg> Facebook
            </button>
            <button onClick={() => goTo('/instagram')} className={`btn btn-default btn-3d-sosmed ${activeTab === 'ig' ? 'btn-ig' : ''}`}>
               <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.038-11451a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg> Instagram
            </button>
            <button onClick={() => goTo('/pinterest')} className={`btn btn-default btn-3d-sosmed ${activeTab === 'pin' ? 'btn-pin' : ''}`}>
              <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.436 2.981 7.436 6.963 0 4.156-2.617 7.502-6.255 7.502-1.221 0-2.372-.635-2.764-1.385l-.752 2.868c-.272 1.043-1.01 2.348-1.505 3.141 1.144.35 2.355.539 3.601.539 6.621 0 11.988-5.367 11.988-11.987C24.004 5.367 18.638 0 12.017 0z"/></svg> Pinterest
            </button>
            <button onClick={() => goTo('/youtube')} className={`btn btn-default btn-3d-sosmed ${activeTab === 'yt' ? 'btn-yt' : ''}`}>
               <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> YouTube
            </button>
          </div>

          {!hideInput && (
            <div className="row" style={{ marginTop: '20px', marginLeft: '-5px', marginRight: '-5px' }}>
              <div className="col-md-8 col-sm-12 col-xs-12" style={{ paddingLeft: '5px', paddingRight: '5px', marginBottom: '10px' }}>
                <input 
                  type="text" 
                  id="urlInput" 
                  className="form-control-3d" 
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={onInputChange}
                  style={{ width: '100%', height: '56px', fontSize: '16px', padding: '10px 15px', borderRadius: '6px', border: '2px solid #ddd', boxSizing: 'border-box' }}
                />
              </div>

              <div className="col-md-2 col-sm-6 col-xs-12" style={{ paddingLeft: '5px', paddingRight: '5px', marginBottom: '10px' }}>
                <button 
                  className="btn btn-action-3d btn-paste" 
                  id="btnPaste" 
                  type="button" 
                  style={{ width: '100%', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={handlePaste} // Dipanggil ke logika paste baru
                >
                  <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Paste
                </button>
              </div>

              <div className="col-md-2 col-sm-6 col-xs-12" style={{ paddingLeft: '5px', paddingRight: '5px', marginBottom: '10px' }}>
                <button 
                  className="btn btn-action-3d btn-download" 
                  id="btnDownload" 
                  type="button" 
                  onClick={handleDownloadClick} // Dipanggil ke logika validasi baru
                  disabled={loading}
                  style={{ width: '100%', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg className="icon-svg" viewBox="0 0 24 24" style={{ width:'18px', marginRight:'5px', fill:'currentColor', verticalAlign:'text-bottom' }}><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> 
                  {loading ? 'WAIT...' : 'UNDUH'}
                </button>
              </div>
            </div>
          )}

        </div>

        {!hideInput && children}

      </div>
      
      {/* HTML CUSTOM TOAST LU DITARUH DI SINI */}
      <div id="custom-toast" className={toastClass}>
        {toastMsg}
      </div>

    </div>
  );
}
