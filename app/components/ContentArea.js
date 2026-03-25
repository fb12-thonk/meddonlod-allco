"use client"; // 1. Wajib tambah ini di baris paling atas
import { useEffect } from 'react';
import { siteConfig } from '../config';

export default function ContentArea() {

  // 3. Masukkan kode iklan di dalam useEffect
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fungsi pemicu iklan dari Monetag
      const showAd = () => {
        if (typeof window.show_10302319 === "function") {
          window.show_10302319({
            type: 'inApp',
            inAppSettings: {
              frequency: 2,
              capping: 0.1,
              interval: 30,
              timeout: 5,
              everyPage: false
            }
          });
        }
      };

      showAd();
    }
  }, []);
  
  return (
    <>
      <h3 className="section-title">Why {siteConfig.SITENAME} is the Best?</h3>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="box-3d feature-box">
            <svg className="feature-icon-svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <h4 style={{ fontWeight: 800 }}>Super Fast Processing</h4>
            <p>Our server-side algorithms analyze and process links in milliseconds. No waiting around for your download links.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="box-3d feature-box">
            <svg className="feature-icon-svg" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H5V5h14v14zM8 15h2v-4h1.5v4h2v-5.5c0-.83-.67-1.5-1.5-1.5H8v7zm5-4h1.5v2.5H13V11zm4 4h2v-4h1.5v4h2v-5.5c0-.83-.67-1.5-1.5-1.5h-4v7z"/></svg>
            <h4 style={{ fontWeight: 800 }}>HD Quality Support</h4>
            <p>Fetch the original media quality directly from the platform&apos;s CDN. Download videos in resolutions up to 4K if available.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="box-3d feature-box">
            <svg className="feature-icon-svg" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            <h4 style={{ fontWeight: 800 }}>100% Anonymous &amp; Secure</h4>
            <p>We do not require any registration or personal data. {siteConfig.SITENAME} respects your privacy and uses SSL encryption for all traffic.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="box-3d feature-box">
            <svg className="feature-icon-svg" viewBox="0 0 24 24"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/></svg>
            <h4 style={{ fontWeight: 800 }}>Watermark Removal</h4>
            <p>Optimized algorithms automatically detect and remove pesky platform watermarks for a cleaner viewing experience on compatible networks.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="box-3d feature-box">
            <svg className="feature-icon-svg" viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></svg>
            <h4 style={{ fontWeight: 800 }}>Cross-Device Sync</h4>
            <p>Seamlessly works on desktops, tablets, and smartphones (both iOS and Android) without requiring additional app installations.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="box-3d feature-box">
            <svg className="feature-icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <h4 style={{ fontWeight: 800 }}>Completely Free to Use</h4>
            <p>No hidden costs, daily download limits, or premium account requirements. Enjoy unlimited media downloading from {siteConfig.SITENAME} forever.</p>
          </div>
        </div>
      </div>

      <div className="plain-article">
        <h3>How to Use {siteConfig.SITENAME} to Download Content Instantly</h3>
        <p>Welcome to {siteConfig.SITENAME}, the ultimate solution for downloading your favorite media content from across various social media platforms directly to your device. In today&apos;s fast-paced digital environment, we frequently encounter captivating videos, inspiring images, and compelling audio that we want to save for offline viewing, creative projects, or simply to share with friends and family without relying on platform connectivity. While most social networks offer excellent streaming capabilities, they often intentionally omit direct downloading functionality to keep users engaged within their ecosystems. This is where {siteConfig.SITENAME} steps in, bridging the gap between digital content and your personal media collection.</p>
        
        <p>Our platform has been meticulously designed with a focus on speed, simplicity, and user security. You will notice that {siteConfig.SITENAME} requires absolutely no registration process, premium subscriptions, or app installations. The service is entirely browser-based, making it incredibly accessible from any desktop computer, laptop, tablet, or smartphone. Our core philosophy is to provide a seamless utility that respects your time and privacy. Whether you are using a high-end gaming rig or a budget smartphone on a cellular connection, the optimized infrastructure of {siteConfig.SITENAME} ensures that link processing and media extraction occur rapidly, offering you direct download links within moments of submitting a request.</p>
        
        <p>The entire process of using {siteConfig.SITENAME} can be summarized in three effortless steps. First, you need to locate the video or media link you wish to save. Navigate to your preferred social media platform, such as TikTok or Facebook, find the specific post, and use the platform&apos;s native &apos;Share&apos; functionality to select &apos;Copy Link&apos;. Second, return to {siteConfig.SITENAME} and locate the intuitive input box. You can manually paste the link or utilize our convenient &apos;Paste&apos; button which leverages modern Clipboard API technology (subject to browser permissions). Once the link is populated, click the prominent &apos;UNDUH&apos; button. {siteConfig.SITENAME} will instantly begin analyzing the submitted URL, contacting the platform&apos;s servers, and identifying the highest possible media resolution available for download.</p>
        
        <p>Within seconds, a download result simulation area will appear below the input box, providing a clear preview of the media found and presenting specific download buttons. Our system prioritizes original quality, meaning that if the source video was uploaded in 100% HD or 4K resolution, {siteConfig.SITENAME} will strive to provide a direct download link for that exact resolution. For video content from TikTok, our advanced algorithms automatically detect and attempt to strip away distracting platform watermarks, providing a clean MP4 file. Finally, clicking the preferred download button will initiate the transfer through your browser&apos;s native download manager. {siteConfig.SITENAME} provides these links directly, ensuring max download speeds without traffic bottlenecks. Enjoy your media offline, securely, and completely free on {siteConfig.SITENAME}.</p>
      </div>

      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h3 className="section-title">Frequently Asked Questions</h3>
          
          <div className="panel-group panel-group-custom" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col1" aria-expanded="true">
                    How does {siteConfig.SITENAME} remove TikTok watermarks?
                  </a>
                </h4>
              </div>
              <div id="col1" className="panel-collapse collapse in">
                <div className="panel-body">
                  Our backend servers analyze the submitted TikTok link and utilize specialized extraction methods to identify the source video file stored on the server *before* the watermark layer is applied by the platform. This allows {siteConfig.SITENAME} to present you with a clean MP4 download link.
                </div>
              </div>
            </div>
            
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col2" className="collapsed">
                    Is {siteConfig.SITENAME} completely free? Are there any daily download limits?
                  </a>
                </h4>
              </div>
              <div id="col2" className="panel-collapse collapse">
                <div className="panel-body">
                  Yes, {siteConfig.SITENAME} is entirely free to use and supported by unobtrusive advertisements. We do not impose any daily download limits or premium account requirements. You can process as many links as you wish, 24/7.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col3" className="collapsed">
                    Which file formats does {siteConfig.SITENAME} support for downloads?
                  </a>
                </h4>
              </div>
              <div id="col3" className="panel-collapse collapse">
                <div className="panel-body">
                  It depends on the source content. Video content is typically provided in MP4 format. Images (like Instagram thumbnails or Pinterest pins) are provided in JPG or PNG. Audio extracted from videos is usually presented in MP3 format.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col4" className="collapsed">
                    Can I download videos from private social media accounts?
                  </a>
                </h4>
              </div>
              <div id="col4" className="panel-collapse collapse">
                <div className="panel-body">
                  No. To respect user privacy and platform terms, {siteConfig.SITENAME} only processes links that are publicly accessible. Our servers cannot access media hidden behind private account walls.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col5" className="collapsed">
                    Does {siteConfig.SITENAME} store a copy of the videos I download?
                  </a>
                </h4>
              </div>
              <div id="col5" className="panel-collapse collapse">
                <div className="panel-body">
                  No, we do not. {siteConfig.SITENAME} acts as an intermediary tool. We process the link and provide you with a direct connection to the file stored on the platform&apos;s original CDN servers. We have zero media storage infrastructure.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col6" className="collapsed">
                    Where are my downloaded files saved?
                  </a>
                </h4>
              </div>
              <div id="col6" className="panel-collapse collapse">
                <div className="panel-body">
                  Files are saved to your browser&apos;s default download location. This is usually the &quot;Downloads&quot; folder on Windows, &quot;Downloads&quot; on macOS, and the native downloads folder on mobile devices (iOS/Android).
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#col7" className="collapsed">
                    Does {siteConfig.SITENAME} require any app installations?
                  </a>
                </h4>
              </div>
              <div id="col7" className="panel-collapse collapse">
                <div className="panel-body">
                  Absolutely not. {siteConfig.SITENAME} is entirely browser-based. You do not need to install any Chrome extensions, mobile apps, or desktop software. Simply bookmark {siteConfig.SITENAME} for future use.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
