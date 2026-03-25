import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center" style={{ marginBottom: '20px' }}>
            <div className="footer-logo">
              <img src="/logo.png" alt="Logo" />
              <span style={{ fontSize: '20px', marginLeft: '10px' }}>{siteConfig.SITENAME}</span>
            </div>
            <p style={{ fontWeight: 'normal', fontSize: '13px', textAlign: 'left', marginTop: '10px' }} className="text-muted">
              High-speed and secure social media media downloader.<br /> 
              &copy; 2026. All rights reserved.
            </p>
          </div>
          <div className="col-md-8 text-center">
            <div className="footer-links" style={{ marginTop: '15px' }}>
              <a href="/about" style={{ marginRight: '15px' }}>About Us</a>
              <a href="/terms" style={{ marginRight: '15px' }}>Terms of Service</a>
              <a href="/privacy" style={{ marginRight: '15px' }}>Privacy Policy</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  }
