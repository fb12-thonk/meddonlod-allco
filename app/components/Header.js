// file: components/Header.js
import { siteConfig } from '../config';

export default function Header() {
  return (
    // Kita paksa kasih border bawah warna hitam tebal biar senada sama box 3D dan Footer
    <nav className="navbar navbar-custom navbar-fixed-top" style={{ borderBottom: '3px solid #111', backgroundColor: '#fff' }}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt={`${siteConfig.SITENAME} Logo`} />
            <span>{siteConfig.SITENAME}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
