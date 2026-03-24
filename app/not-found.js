// file: app/not-found.js

export default function NotFound() {
  return (
    <div className="container" style={{ marginTop: '80px', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-8 col-md-offset-2 col-xs-12 text-center">
          
          {/* Box 3D dengan padding ekstra biar lega */}
          <div className="box-3d" style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
            
            <h1 style={{ 
              fontSize: '100px', 
              fontWeight: 900, 
              marginTop: 0, 
              marginBottom: '10px', 
              color: '#111', 
              lineHeight: '1' 
            }}>
              404
            </h1>
            
            <h3 style={{ fontWeight: 800, marginTop: 0, marginBottom: '20px', fontSize: '24px' }}>
              Oops! Page Not Found
            </h3>
            
            <p className="text-muted" style={{ fontSize: '16px', marginBottom: '40px', maxWidth: '450px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            {/* Tombol 3D balik ke Home */}
            <a 
              href="/" 
              className="btn btn-action-3d" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 700,
                backgroundColor: '#2ecc71', /* Warna hijau biar seger */
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              <svg className="icon-svg" viewBox="0 0 24 24" style={{ width: '20px', marginRight: '8px', fill: 'currentColor' }}>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
              Back to Homepage
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
