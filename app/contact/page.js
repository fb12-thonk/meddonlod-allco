// file: app/contact/page.js
import { siteConfig } from '../config';

// META TAG SEO GOOGLE KHUSUS HALAMAN CONTACT
export const metadata = {
  title: `Contact Us - ${siteConfig.SITENAME}`,
  description: `Get in touch with the ${siteConfig.SITENAME} team for support, feedback, DMCA notices, or business inquiries.`,
  keywords: `Contact ${siteConfig.SITENAME}, support, email, feedback, DMCA`,
};

export default function ContactPage() {
  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px', minHeight: '60vh' }}>
        <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
                
                <div className="box-3d" style={{ padding: '40px', backgroundColor: '#fff' }}>
                  {/* Gue tambahin text-center biar rapi posisinya di tengah karena isinya singkat */}
                  <div className="plain-article text-center">
                    
                    <h2 style={{ marginTop: 0, fontWeight: 800, fontSize: '32px' }}>Contact Us</h2>
                    
                    <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', color: '#555' }}>
                      Have a question, suggestion, or experiencing a technical issue with our downloader? We are here to help! At <strong>{siteConfig.SITENAME}</strong>, we strive to provide the best possible experience for our users, and your feedback is incredibly valuable to us.
                    </p>
                    
                    <h3 style={{ fontWeight: 800 }}>How to Reach Us</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
                      To keep things simple and direct, we don&apos;t use complicated contact forms. You can reach out to our support and administration team directly via email.
                    </p>

                    {/* Kotak khusus buat nampilin Email biar menonjol */}
                    <div style={{ backgroundColor: '#f8f9fa', padding: '20px 40px', borderRadius: '8px', border: '2px dashed #bdc3c7', display: 'inline-block', marginBottom: '30px' }}>
                      <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#2c3e50' }}>
                        ðŸ“§ admin@{siteConfig.SITENAME.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                      </p>
                    </div>

                    <h3 style={{ fontWeight: 800 }}>Business &amp; DMCA Inquiries</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
                      For partnership opportunities, advertising placement, or copyright/DMCA concerns, please send a detailed message to the email address above. Make sure to include relevant links and specific details so our team can assist you efficiently.
                    </p>
                    
                    <p className="text-muted" style={{ fontSize: '14px', marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                      <em>Please note: While we read every single email we receive, response times may vary between 24 to 48 hours depending on the volume of inquiries. Thank you for your patience!</em>
                    </p>

                  </div>
                </div>

            </div>
        </div>
    </div>
  );
}
