import { siteConfig } from '../config';

export default function ResultArea() {
  return (
    <div id="simulationArea" className="box-3d" style={{ display: 'none' }}>
      <h4 style={{ fontWeight: 800, borderBottom: '2px solid #eee', paddingBottom: '15px', marginTop: 0 }}>Download Result</h4>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-5">
          <div className="media-preview-container">
            <img src="https://via.placeholder.com/600x400.png?text=Simulated+Media+Result" alt="Simulation Thumbnail" style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <div className="col-md-7" style={{ textAlign: 'left' }}>
          <h4 style={{ fontWeight: 800, marginTop: 0, lineHeight: 1.4 }}>Simulation Title: This is how the media title will appear on {siteConfig.SITENAME}.</h4>
          <p className="text-muted" style={{ fontWeight: 600 }}>Username: @simulation_user</p>
          
          <div style={{ marginTop: '20px' }}>
            <button className="btn btn-sim-dl btn-sim-video" style={{ width: '100%', marginBottom: '10px', textAlign: 'left' }}>
              <svg className="icon-svg" viewBox="0 0 24 24" style={{ width: '18px', marginRight: '5px', fill: 'currentColor', verticalAlign: 'text-bottom' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg> 
              Unduh Video 
            </button>
            <button className="btn btn-sim-dl btn-sim-image" style={{ width: '100%', textAlign: 'left' }}>
              <svg className="icon-svg" viewBox="0 0 24 24" style={{ width: '18px', marginRight: '5px', fill: 'currentColor', verticalAlign: 'text-bottom' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg> 
              Unduh Thumbnail (JPG)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
