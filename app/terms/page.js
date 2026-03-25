import { siteConfig } from '../config';

// META TAG SEO GOOGLE
export const metadata = {
  title: `Terms of Service - ${siteConfig.SITENAME}`,
  description: `Read the Terms of Service for ${siteConfig.SITENAME}. Understand your rights, responsibilities, and our policies regarding the use of our media downloading tools.`,
  keywords: `Terms of Service, ${siteConfig.SITENAME} terms, user agreement, copyright policy`,
};

export default function TermsPage() {
  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px', minHeight: '60vh' }}>
        <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
                
                <div className="box-3d" style={{ padding: '40px', backgroundColor: '#fff' }}>
                  <div className="plain-article">
                    
                    <h2 style={{ marginTop: 0 }}>Acceptance of Terms</h2>
                    <p>By accessing and utilizing the tools provided by <strong>{siteConfig.SITENAME}</strong>, you explicitly agree to be bound by these Terms of Service, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials and tools contained on this website are protected by applicable copyright and trademark law. Your continued use of the website following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>

                    <h2>Description of Service</h2>
                    <p><strong>{siteConfig.SITENAME}</strong> operates as a web-based utility designed to help users download and archive publicly available media content from various social media platforms for personal, non-commercial use. Our service acts strictly as a technical conduit. We process the URLs submitted by users, extract the direct media links from the respective content delivery networks, and return those links to the user. We do not host, store, or transmit any copyrighted media on our own servers. The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties regarding continuous uptime or flawless media extraction.</p>

                    <h2>User Responsibilities and Acceptable Use</h2>
                    <p>As a user of <strong>{siteConfig.SITENAME}</strong>, you bear full responsibility for the media you choose to download. You agree to use our service only for lawful purposes and in a way that does not infringe upon the rights of, restrict, or inhibit anyone else&apos;s use of the service. You are strictly prohibited from using our tool to download proprietary, copyrighted, or sensitive material without the explicit permission of the respective copyright owner. Any use of downloaded media for commercial distribution, public broadcasting, or financial gain without proper licensing is strictly forbidden and violates these terms.</p>

                    <h2>Copyright and Intellectual Property Disclaimer</h2>
                    <p>We deeply respect the intellectual property rights of creators, artists, and media companies. <strong>{siteConfig.SITENAME}</strong> does not claim any ownership, rights, or affiliation with the videos, audio, or images downloaded through our platform. All downloaded content remains the sole property of its respective original creators and the platforms hosting them. Our tool is designed strictly for fair use purposes, such as personal offline viewing, research, and transformative creation. If you are a copyright owner and believe that our tool is being used to repeatedly infringe upon your work, please contact us so we can take appropriate preventative measures.</p>

                    <h2>Limitation of Liability</h2>
                    <p>In no event shall <strong>{siteConfig.SITENAME}</strong>, its developers, partners, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the materials on our website. This includes, but is not limited to, damages for loss of data, loss of profit, or business interruption. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you. You agree to use the service entirely at your own risk.</p>

                    <h2>Accuracy of Materials and Technical Issues</h2>
                    <p>The digital landscape is highly dynamic. Social media platforms continuously update their infrastructures, which may temporarily or permanently disrupt our extraction algorithms. Therefore, the materials and links appearing on <strong>{siteConfig.SITENAME}</strong> could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the tools, features, and materials contained on the website at any time without notice, but we do not make any commitment to update the materials within a specific timeframe.</p>

                    <h2>External Links and Third-Party Content</h2>
                    <p><strong>{siteConfig.SITENAME}</strong> may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>

                    <h2>Modifications to the Terms of Service</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes to these Terms of Service constitutes acceptance of those changes. We may also, in the future, offer new services or features through the website, which shall also be subject to these Terms of Service.</p>

                    <h2>Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with international web standards and the applicable laws of the jurisdiction in which <strong>{siteConfig.SITENAME}</strong> operates, without regard to its conflict of law provisions. Any dispute arising from these terms shall be resolved exclusively in the competent courts of that jurisdiction.</p>

                  </div>
                </div>

            </div>
        </div>
    </div>
  );
}
