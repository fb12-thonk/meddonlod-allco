import { siteConfig } from '../config';

// META TAG SEO GOOGLE KHUSUS PRIVACY POLICY
export const metadata = {
  title: `Privacy Policy - ${siteConfig.SITENAME}`,
  description: `Read the Privacy Policy for ${siteConfig.SITENAME}. Learn how we protect your personal information, handle data, and ensure a secure media downloading experience.`,
  keywords: `Privacy Policy, ${siteConfig.SITENAME} privacy, data security, cookie policy`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px', minHeight: '60vh' }}>
        <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
                
                <div className="box-3d" style={{ padding: '40px', backgroundColor: '#fff' }}>
                  <div className="plain-article">
                    
                    <h2 style={{ marginTop: 0 }}>Introduction to Our Privacy Policy</h2>
                    <p>At <strong>{siteConfig.SITENAME}</strong>, the privacy of our visitors is of extreme importance to us. This comprehensive Privacy Policy document outlines the types of personal and non-personal information that is received, collected, and utilized by our infrastructure. By accessing and using our web-based media downloading tools, you hereby consent to our Privacy Policy and agree to its terms. If you require any more information or have any questions about our privacy practices, please feel free to contact us through our official channels.</p>

                    <h2>Information We Do Not Collect</h2>
                    <p>We fundamentally believe in the principle of data minimization. <strong>{siteConfig.SITENAME}</strong> is designed to function as an anonymous, free-to-use utility. We do not require you to register for an account, provide your name, submit an email address, or link any of your personal social media profiles. Furthermore, our servers act strictly as a temporary processing bridge. We absolutely do not store, archive, or maintain any databases of the videos, images, or audio files you choose to download using our service.</p>

                    <h2>Log Files and Analytical Data</h2>
                    <p>Like many other highly scalable websites, <strong>{siteConfig.SITENAME}</strong> makes use of standard log files. The information contained inside these log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring and exit pages, and the number of clicks. This information is utilized solely to analyze user trends, administer the site efficiently, track aggregate user movement around the site, and gather broad demographic information. IP addresses and other such non-identifying information are not linked to any information that is personally identifiable.</p>

                    <h2>Cookies and Web Beacons</h2>
                    <p><strong>{siteConfig.SITENAME}</strong> uses cookies to store information about visitors&apos; preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors&apos; browser types or other information that the visitor sends via their browser. These cookies are essential for maintaining a smooth, fast, and secure user experience across our platform.</p>

                    <h2>Third-Party Advertising Partners</h2>
                    <p>To keep our services completely free for all users worldwide, we partner with third-party advertising networks, such as Google AdSense. These third-party ad servers or ad networks use highly optimized technologies to serve the advertisements and links that appear on <strong>{siteConfig.SITENAME}</strong> directly to your browsers. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our third-party ad networks to measure the effectiveness of their advertising campaigns and to personalize the advertising content that you see on the site.</p>

                    <h2>Managing Your Cookie Preferences</h2>
                    <p>We respect your right to digital privacy. <strong>{siteConfig.SITENAME}</strong> has no access to or control over the cookies that are used by third-party advertisers. You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain tracking practices. If you wish to disable cookies entirely, you may do so through your individual internet browser options. More detailed information about cookie management with specific web browsers can be found at the browsers&apos; respective official websites.</p>

                    <h2>Data Security and SSL Encryption</h2>
                    <p>We prioritize the security of your connection to our platform. All data transmitted between your personal device and the <strong>{siteConfig.SITENAME}</strong> servers is protected using industry-standard Secure Socket Layer (SSL) encryption. This ensures that any URLs you submit and any files you download cannot be intercepted or monitored by malicious third parties on your network. However, please remember that no method of transmission over the internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your online experience, we cannot guarantee absolute, flawless security.</p>

                    <h2>External Links to Other Websites</h2>
                    <p>Our website may contain hyperlinks leading to external websites that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every single site you visit. We have absolutely no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

                    <h2>Children&apos;s Online Privacy Protection</h2>
                    <p><strong>{siteConfig.SITENAME}</strong> does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that our database has inadvertently collected the personally identifiable information of a child under the age of 13, please contact us immediately, and we will use our best efforts to promptly remove such information from our records.</p>

                    <h2>Updates and Modifications to this Policy</h2>
                    <p>We reserve the right to update, amend, or completely overhaul this Privacy Policy at any given time without prior notice to reflect changes in our operational practices, legal requirements, or regulatory shifts. We encourage all users to frequently check this page for any modifications. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications. Your continued use of the site following the posting of changes to this policy will be deemed your unreserved acceptance of those changes.</p>

                  </div>
                </div>

            </div>
        </div>
    </div>
  );
}
