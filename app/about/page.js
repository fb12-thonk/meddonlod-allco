import { siteConfig } from '../config';

// INI META TAG KHUSUS NEXT.JS (Sangat SEO Friendly & Sesuai Kebijakan Google)
export const metadata = {
  title: `About Us - ${siteConfig.SITENAME}`,
  description: `Learn more about ${siteConfig.SITENAME}, our core mission, technological infrastructure, and our strict commitment to user privacy and secure media downloading.`,
  keywords: `About ${siteConfig.SITENAME}, social media downloader, free video downloader, about us`,
};

export default function AboutPage() {
  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px', minHeight: '60vh' }}>
        <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
                
                {/* Dibungkus box-3d biar seragam sama desain lu, tapi tetep pake plain-article buat teksnya */}
                <div className="box-3d" style={{ padding: '40px', backgroundColor: '#fff' }}>
                  <div className="plain-article">
                    
                    <h2 style={{ marginTop: 0 }}>Welcome to {siteConfig.SITENAME}</h2>
                    <p>Welcome to <strong>{siteConfig.SITENAME}</strong>, your premier destination for high-quality, seamless, and completely free social media media extraction. In an era where digital content is produced and consumed at an unprecedented rate, having the ability to save, archive, and view your favorite moments offline is no longer just a luxury, but a necessity. We have built this platform from the ground up to empower users worldwide, providing a robust suite of tools designed to interact safely and efficiently with the world&apos;s most popular social networks.</p>

                    <h2>Our Core Mission</h2>
                    <p>At <strong>{siteConfig.SITENAME}</strong>, our primary mission is to democratize digital content accessibility. We believe that once media is shared publicly on the internet, users should have the flexibility to consume that content on their own terms, regardless of internet connectivity or platform restrictions. Our goal is to break down the walled gardens of modern social media applications by offering a universal bridge. We aim to provide a service that is universally accessible, requiring no advanced technical knowledge, no mandatory software installations, and absolutely no financial commitments from our user base.</p>

                    <h2>The Problem We Aim to Solve</h2>
                    <p>Major social media platforms are brilliantly designed to keep users engaged within their specific ecosystems. While they offer phenomenal streaming experiences, they deliberately restrict direct downloading features to maximize user retention and ad impressions. This creates a significant hurdle for educators seeking reference materials, creators looking for inspiration, or everyday users who simply want to back up a memorable video before it gets deleted or swallowed by an endless algorithmic feed. <strong>{siteConfig.SITENAME}</strong> solves this exact bottleneck by functioning as an independent, cloud-based retrieval system that fetches your requested files directly from source content delivery networks.</p>

                    <h2>Uncompromising Privacy and Security</h2>
                    <p>In today&apos;s digital landscape, user data is often treated as a commodity. We take a radically different approach. <strong>{siteConfig.SITENAME}</strong> operates on a strict principle of data minimization and total anonymity. We do not require you to create an account, register an email address, or link your social media profiles to use our services. Furthermore, our servers act merely as a conduit. We process the link you provide, retrieve the media file, and pass it directly to your device. We do not maintain databases of your downloaded files, nor do we track your personal download history. Every connection made to our platform is secured with industry-standard SSL encryption, ensuring that your browsing behavior remains entirely your own business.</p>

                    <h2>Technological Excellence and Speed</h2>
                    <p>Behind the simple and intuitive user interface of <strong>{siteConfig.SITENAME}</strong> lies a highly sophisticated backend infrastructure. We utilize state-of-the-art server technologies and specialized scraping algorithms that are constantly monitored and updated to adapt to the ever-changing architectures of target platforms. This technological edge allows us to bypass regional restrictions, parse complex media playlists, and successfully extract ultra-high-definition videos and uncompressed audio files in milliseconds. We heavily invest in premium server bandwidth to guarantee that when you hit the download button, your file transfers at the maximum speed your personal internet connection can handle.</p>

                    <h2>A Platform Built for Everyone</h2>
                    <p>Accessibility is at the heart of our design philosophy. We recognize that our user base is incredibly diverse, ranging from teenagers saving viral trends on their mobile devices to professional video editors archiving reference footage on high-end desktop workstations. Therefore, <strong>{siteConfig.SITENAME}</strong> is engineered as a fully responsive, cross-platform web application. Whether you are using the latest iPhone, an Android tablet, a Windows PC, or a Linux distribution, our website scales perfectly to your screen and functions flawlessly across all modern web browsers without the need for specialized browser extensions.</p>

                    <h2>Our Stance on Copyright and Fair Use</h2>
                    <p>While we provide the technical means to download media, <strong>{siteConfig.SITENAME}</strong> strictly advocates for the ethical use of digital content. We strongly encourage our users to respect the intellectual property rights of original creators. Our tool is intended for personal archiving, educational fair use, offline viewing, and transformative creative works. We explicitly prohibit the use of our services for copyright infringement, commercial piracy, or the unauthorized redistribution of proprietary material. Users bear full responsibility for how they utilize the files downloaded through our infrastructure.</p>

                    <h2>Continuous Improvement and Innovation</h2>
                    <p>The digital ecosystem is not static, and neither are we. Social media platforms frequently update their codebases, deploy new media formats, and alter their security protocols. To ensure uninterrupted service, our dedicated team of developers works around the clock to maintain and optimize our extraction engines. We actively monitor user feedback and error reports, allowing us to deploy rapid patches and introduce support for emerging social networks. When you use <strong>{siteConfig.SITENAME}</strong>, you are utilizing a platform that evolves daily to meet the cutting-edge demands of the internet.</p>

                    <h2>The Future of Digital Media Accessibility</h2>
                    <p>As we look toward the future, our vision for <strong>{siteConfig.SITENAME}</strong> extends beyond simple video downloading. We are constantly researching new ways to handle diverse media formats, including high-fidelity audio extraction, document parsing, and batch processing capabilities. Our commitment remains unwavering: to provide a clean, fast, and secure environment where users have absolute control over the public media they consume. We will continue to scale our operations, refine our user interface, and uphold our promise of a free and open digital experience.</p>

                    <h2>Connect With Us</h2>
                    <p>Your experience and satisfaction are the metrics by which we measure our success. Whether you have encountered a technical issue, wish to suggest support for a new platform, or simply want to share how <strong>{siteConfig.SITENAME}</strong> has helped you, our virtual doors are always open. We believe in building a product guided by community input. Thank you for choosing us as your trusted media downloading utility. We look forward to continuously serving your digital needs for years to come.</p>

                  </div>
                </div>

            </div>
        </div>
    </div>
  );
}
