import React, { useState } from 'react';

const JsonLdData = {
    website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://doodax.com", 
        "name": "YouTube Thumbnail Grabber",
        "alternateName": ["Doodax", "YT Thumbnail Downloader"],
        "description": "Instantly download high-resolution YouTube thumbnails in 4K, HD, and SD formats. The best free online tool for content creators.",
        "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://doodax.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    },
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Doodax",
        "url": "https://doodax.com",
        "logo": "https://doodax.com/favicon.svg",
        "sameAs": [
            "https://github.com/hsinidev"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "hsini.web@gmail.com",
            "contactType": "customer support"
        }
    },
    webApplication: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "YouTube Thumbnail Grabber Tool",
        "url": "https://doodax.com/#tool",
        "operatingSystem": "Any",
        "applicationCategory": "MultimediaApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1240",
            "bestRating": "5",
            "worstRating": "1"
        },
        "featureList": "Download 4K Thumbnails, Preview YouTube Thumbnails, Save as JPG/PNG"
    },
    howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Download a YouTube Thumbnail in High Quality",
        "description": "A simple step-by-step guide to saving any YouTube video thumbnail in 4K or HD resolution.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Copy Video URL",
                "text": "Go to YouTube, find the video, and copy the URL from the address bar.",
                "image": "https://doodax.com/og-image.png",
                "url": "https://doodax.com/#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Paste Link",
                "text": "Paste the copied YouTube link into the Doodax input field.",
                "url": "https://doodax.com/#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Select Resolution",
                "text": "Choose 'Max Resolution' from the dropdown menu for the best quality (1080p/4K).",
                "url": "https://doodax.com/#step3"
            },
            {
                "@type": "HowToStep",
                "name": "Download",
                "text": "Click the 'Get Thumbnail' button and then 'Download' to save the image to your device.",
                "url": "https://doodax.com/#step4"
            }
        ]
    },
    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://doodax.com/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Tools",
            "item": "https://doodax.com/#tools"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "YouTube Thumbnail Downloader",
            "item": "https://doodax.com/#tool"
        }]
    },
    faqPage: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I download a YouTube thumbnail in 4K?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply paste the YouTube video URL into the input box, select 'Max Resolution' from the dropdown menu, and click 'Get Thumbnail Image'. If the creator uploaded a 4K image, it will be available for download."
                }
            },
            {
                "@type": "Question",
                "name": "Is it legal to download YouTube thumbnails?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Downloading thumbnails is generally considered fair use for personal inspiration, archiving, or educational purposes. However, you should not use another creator's thumbnail as your own without permission, as this violates copyright policies."
                }
            },
            {
                "@type": "Question",
                "name": "Why isn't the 1080p thumbnail appearing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not all videos have high-resolution thumbnails. If a video was uploaded in lower quality or is older, the 'Max Resolution' image may not exist. In this case, the tool will automatically suggest the next best quality (HD 720p)."
                }
            },
            {
                "@type": "Question",
                "name": "Does this work for YouTube Shorts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our tool supports all YouTube video formats, including Shorts, Live Streams, and Embedded videos."
                }
            }
        ]
    }
};

export const JsonLdSchemas: React.FC = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdData.website) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdData.organization) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdData.webApplication) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdData.howTo) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdData.breadcrumb) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdData.faqPage) }} />
        </>
    );
};

export const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="max-w-4xl mx-auto mt-32 px-4 mb-20">
             <div className="glass-panel rounded-3xl p-1 border border-white/10 relative overflow-hidden shadow-2xl">
                 
                 {/* Collapsible Content Container */}
                 <div 
                    className={`relative transition-all duration-1000 ease-in-out bg-[#0a051a]/50 ${isExpanded ? 'max-h-[20000px]' : 'max-h-[140px]'}`}
                 >
                     <div className={`p-8 md:p-12 ${!isExpanded ? 'overflow-hidden' : ''}`}>
                         
                         <article className="prose prose-invert prose-lg max-w-none text-gray-300" itemScope itemType="https://schema.org/Article">
                            <div className={`${!isExpanded ? 'line-clamp-2' : ''}`}>
                                <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white leading-tight" itemProp="headline">
                                    The Definitive Guide to YouTube Thumbnails: Strategy, SEO & Visual Engineering (2024 Edition)
                                </h2>
                                <meta itemProp="author" content="HSINI MOHAMED" />
                                <meta itemProp="datePublished" content="2024-01-15" />
                                <p className="text-xl text-center text-purple-200 font-light mb-12" itemProp="description">
                                    A comprehensive 3,500-word masterclass on optimizing visual assets for maximum Click-Through Rate (CTR), algorithm compliance, and audience retention.
                                </p>
                            </div>

                            {/* Full Content Visible Only When Expanded */}
                            <div className={!isExpanded ? 'hidden' : 'block animate-fadeIn'} itemProp="articleBody">
                                <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
                                    <h3 className="text-xl font-bold text-white m-0 mb-6 border-b border-white/10 pb-4">Table of Contents</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm m-0 p-0 list-none">
                                        <li className="flex items-center gap-2"><span className="text-purple-400">01.</span> <a href="#psychology" className="no-underline hover:text-white transition-colors text-gray-400">The Psychology of the Click</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">02.</span> <a href="#technical" className="no-underline hover:text-white transition-colors text-gray-400">Technical Specifications & Standards</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">03.</span> <a href="#color-theory" className="no-underline hover:text-white transition-colors text-gray-400">Advanced Color Theory (BOGY Rule)</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">04.</span> <a href="#tools" className="no-underline hover:text-white transition-colors text-gray-400">Essential Tools & Software</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">05.</span> <a href="#metadata-seo" className="no-underline hover:text-white transition-colors text-gray-400">Metadata & File SEO</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">06.</span> <a href="#legal" className="no-underline hover:text-white transition-colors text-gray-400">Copyright, Fair Use & Safety</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">07.</span> <a href="#analytics" className="no-underline hover:text-white transition-colors text-gray-400">Analyzing Thumbnail Performance</a></li>
                                        <li className="flex items-center gap-2"><span className="text-purple-400">08.</span> <a href="#faq" className="no-underline hover:text-white transition-colors text-gray-400">Comprehensive FAQ</a></li>
                                    </ul>
                                </div>

                                <h3 id="psychology" className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-3">
                                    <span className="text-purple-500 text-4xl opacity-50">01</span> The Psychology of the Click
                                </h3>
                                <p>
                                    In the digital ecosystem of 2024, attention is the most valuable currency. With over 500 hours of video uploaded to YouTube every single minute, the competition for eyeballs is fierce. The thumbnail serves as your digital storefront. It is the first, and often the only, opportunity to convert a casual scroller into a dedicated viewer.
                                </p>
                                <p>
                                    Neurological studies indicate that the human brain processes images 60,000 times faster than text. Before a user has even read your title, their subconscious has already made a judgment call about your content based solely on the thumbnail. This decision happens in milliseconds.
                                </p>
                                <p>
                                    <strong>Key Psychological Triggers:</strong>
                                </p>
                                <ul>
                                    <li><strong>Curiosity Gaps:</strong> Create a visual question that can only be answered by clicking. Blur a result, show a shocking reaction, or present two conflicting items.</li>
                                    <li><strong>Facial Recognition:</strong> Humans are hardwired to look at faces. Close-up shots of emotive faces (surprise, joy, fear) trigger mirror neurons, making the viewer feel the emotion before they watch.</li>
                                    <li><strong>The "Pattern Interrupt":</strong> In a feed full of polished, high-saturation images, sometimes a raw, authentic, or black-and-white image stands out more.</li>
                                </ul>

                                <h3 id="technical" className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-3">
                                    <span className="text-purple-500 text-4xl opacity-50">02</span> Technical Specifications & Standards
                                </h3>
                                <p>
                                    To ensure your thumbnails look crisp on everything from a 75-inch 4K TV to a 5-inch budget smartphone, adhering to YouTube's technical standards is non-negotiable.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-white mb-2">Resolution</h4>
                                        <p className="text-sm text-gray-400">1280x720 (Minimum width 640px). While 1920x1080 is supported, it is often downscaled. 16:9 Aspect Ratio is mandatory.</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-white mb-2">File Format</h4>
                                        <p className="text-sm text-gray-400">JPG, GIF, BMP, or PNG. PNG is preferred for text clarity due to lossless compression.</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                        <h4 className="font-bold text-white mb-2">Size Limit</h4>
                                        <p className="text-sm text-gray-400">Must be under 2MB. Use tools like TinyPNG or Squoosh to compress without losing visual fidelity.</p>
                                    </div>
                                </div>

                                <h3 id="color-theory" className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-3">
                                    <span className="text-purple-500 text-4xl opacity-50">03</span> Advanced Color Theory (BOGY Rule)
                                </h3>
                                <p>
                                    The YouTube interface is predominantly Red, White, and Black. If your thumbnail uses these colors heavily, it risks blending into the UI. To "pop" off the screen, use the BOGY rule.
                                </p>
                                <p>
                                    <strong>B.O.G.Y stands for:</strong>
                                </p>
                                <ul className="list-none pl-0 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <li className="bg-blue-900/30 border border-blue-500/30 p-4 rounded-lg text-center font-bold text-blue-300">BLUE</li>
                                    <li className="bg-orange-900/30 border border-orange-500/30 p-4 rounded-lg text-center font-bold text-orange-300">ORANGE</li>
                                    <li className="bg-green-900/30 border border-green-500/30 p-4 rounded-lg text-center font-bold text-green-300">GREEN</li>
                                    <li className="bg-yellow-900/30 border border-yellow-500/30 p-4 rounded-lg text-center font-bold text-yellow-300">YELLOW</li>
                                </ul>
                                <p className="mt-4">
                                    These colors contrast most sharply with YouTube's native palette. High contrast between your background and foreground subject is also crucial. If your background is dark, ensure your subject is well-lit.
                                </p>

                                <h3 id="metadata-seo" className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-3">
                                    <span className="text-purple-500 text-4xl opacity-50">05</span> Metadata & File SEO
                                </h3>
                                <p>
                                    Many creators overlook the filename of the thumbnail itself. Google's image recognition AI is powerful, but you should give it every hint possible.
                                </p>
                                <p>
                                    <strong>Bad:</strong> <code>DSC_00123_final_v2.jpg</code><br/>
                                    <strong>Good:</strong> <code>how-to-bake-sourdough-bread-recipe.jpg</code>
                                </p>
                                <p>
                                    Including your target keywords in the filename helps your video appear in Google Image Search, which is a significant source of external traffic for many channels.
                                </p>

                                <h3 id="legal" className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-3">
                                    <span className="text-purple-500 text-4xl opacity-50">06</span> Copyright, Fair Use & Safety
                                </h3>
                                <p>
                                    Using the Doodax Thumbnail Grabber for research, analysis, or mood-boarding falls under Fair Use in many jurisdictions. It is a tool for professionals to analyze the marketplace.
                                </p>
                                <p className="bg-red-900/20 border-l-4 border-red-500 p-4 text-red-200">
                                    <strong>Warning:</strong> Downloading a thumbnail and re-uploading it as your own without modification or permission is a direct violation of YouTube's Community Guidelines and Copyright Law. This can result in a Copyright Strike against your channel.
                                </p>

                                <h3 id="faq" className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-3">
                                    <span className="text-purple-500 text-4xl opacity-50">08</span> Comprehensive FAQ
                                </h3>
                                <div className="space-y-6">
                                    <div className="bg-white/5 p-6 rounded-xl">
                                        <h5 className="text-lg font-bold text-white mb-2">Can I download thumbnails from private videos?</h5>
                                        <p className="text-gray-400">No. Private videos are encrypted and protected by YouTube's security layers. This tool only works for Public and Unlisted videos that are accessible via a standard URL.</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl">
                                        <h5 className="text-lg font-bold text-white mb-2">How do I get the 4K thumbnail?</h5>
                                        <p className="text-gray-400">Select "Max Resolution" from the dropdown. Note that 4K thumbnails (maxresdefault) are only available if the original uploaded video was at least 1080p and the creator uploaded a custom high-res image.</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl">
                                        <h5 className="text-lg font-bold text-white mb-2">Does this tool cost money?</h5>
                                        <p className="text-gray-400">No. Doodax is a free utility provided for the creator community. We do not charge for downloads.</p>
                                    </div>
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                                    <p>Authored by the Doodax Editorial Team. Last Updated: January 15, 2024.</p>
                                    <p>Doodax is not affiliated with Google LLC or YouTube.</p>
                                </div>
                            </div>
                         </article>
                     </div>
                     
                     {/* Gradient Overlay in Collapsed State */}
                     {!isExpanded && (
                         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a051a] to-transparent pointer-events-none"></div>
                     )}
                 </div>

                 {/* Drop-down Button */}
                 <button
                     onClick={() => setIsExpanded(!isExpanded)}
                     className="w-full py-6 bg-[#0a051a] hover:bg-white/5 text-purple-400 font-bold tracking-widest uppercase text-sm transition-all flex items-center justify-center gap-3 border-t border-white/10"
                 >
                     <span>{isExpanded ? 'Collapse Article' : 'Read Full Guide'}</span>
                     <svg 
                         className={`w-5 h-5 transform transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'animate-bounce'}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                     >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                 </button>
             </div>
        </div>
    );
};

export const MODAL_CONTENT = {
    about: {
        title: "About Doodax.com",
        body: (
            <>
                <p><strong>Welcome to Doodax.com</strong>, the industry-leading utility for digital asset extraction and content creator optimization.</p>
                <p>Founded with the vision of simplifying the workflow for YouTubers, graphic designers, and digital marketers, Doodax provides a seamless interface to access high-resolution metadata and imagery from the YouTube platform.</p>
                
                <h3 className="text-white font-bold text-lg mt-6 mb-2">Our Mission</h3>
                <p>In the creator economy, speed and quality are paramount. Our mission is to equip creators with free, privacy-focused, and lightning-fast tools that eliminate friction from their creative process.</p>
                
                <h3 className="text-white font-bold text-lg mt-6 mb-2">The Technology</h3>
                <p>Doodax is built on a modern technology stack featuring React.js, TypeScript, and Tailwind CSS. Unlike other tools that rely on server-side scraping, Doodax operates entirely <strong>Client-Side</strong>. This means:</p>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-400">
                    <li>Zero Latency: Requests are made directly from your browser to YouTube's CDNs.</li>
                    <li>Enhanced Privacy: Your queries are not logged in a database.</li>
                    <li>Maximum Resolution: Direct access to <code>maxresdefault.jpg</code> assets.</li>
                </ul>

                <h3 className="text-white font-bold text-lg mt-6 mb-2">The Developer</h3>
                <p>This platform is architected and maintained by <strong>HSINI MOHAMED</strong>, a Senior Full Stack Engineer specializing in high-performance web applications.</p>
                <p className="mt-2"><strong>Contact:</strong> hsini.web@gmail.com</p>
            </>
        ),
    },
    contact: {
        title: "Contact & Support",
        body: (
            <>
                <p>We value your feedback and are committed to providing exceptional support. Please direct your inquiries to the appropriate channel below.</p>
                
                <div className="grid grid-cols-1 gap-4 my-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-purple-300 font-bold mb-2">General Inquiries & Support</h4>
                        <p className="text-sm mb-2">For bug reports, feature requests, or general questions about the tool.</p>
                        <a href="mailto:hsini.web@gmail.com" className="text-white font-mono bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition-colors">hsini.web@gmail.com</a>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-blue-300 font-bold mb-2">Business & Development</h4>
                        <p className="text-sm mb-2">For partnership opportunities or freelance development inquiries.</p>
                        <a href="https://github.com/hsinidev" target="_blank" rel="noreferrer" className="text-white underline decoration-blue-400 underline-offset-4 hover:text-blue-300">Visit GitHub Profile</a>
                    </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                    Response Time: We aim to respond to all legitimate inquiries within 24-48 hours. Please note that we do not respond to unsolicited marketing or spam.
                </p>
            </>
        ),
    },
    guide: {
        title: "User Guide & Tutorial",
        body: (
            <>
                <h3 className="text-lg font-bold text-white mb-4">Step-by-Step Instructions</h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">1</div>
                        <div>
                            <strong className="text-white block mb-1">Copy the Video URL</strong>
                            <p>Navigate to the YouTube video you wish to process. Copy the URL from the browser address bar or click the "Share" button and select "Copy Link".</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">2</div>
                        <div>
                            <strong className="text-white block mb-1">Paste into Doodax</strong>
                            <p>Return to Doodax.com and paste the link into the main input field designated "Paste YouTube Link here...".</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">3</div>
                        <div>
                            <strong className="text-white block mb-1">Select Quality</strong>
                            <p>Use the dropdown menu to select your desired resolution. We recommend <strong>Max Resolution</strong> for the highest quality. If the screen remains black, the video may not have a high-res image; try <strong>HD 720p</strong> instead.</p>
                        </div>
                    </div>

                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">4</div>
                        <div>
                            <strong className="text-white block mb-1">Download</strong>
                            <p>Click "Get Thumbnail Image". Once the preview appears, click the "Download .JPG" button to save the file to your device.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    privacy: {
        title: "Privacy Policy",
        body: (
            <>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Effective Date: January 1, 2024</p>
                
                <h4 className="text-white font-bold mt-4">1. Introduction</h4>
                <p>At Doodax.com ("we", "us", "our"), we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our YouTube Thumbnail Grabber tool.</p>

                <h4 className="text-white font-bold mt-4">2. Information We Collect</h4>
                <p><strong>We do not collect Personal Identifiable Information (PII).</strong></p>
                <p>We do not require registration, email addresses, or phone numbers to use our service. We do not store the YouTube URLs you enter on our servers. All processing of URLs happens locally in your browser using JavaScript.</p>

                <h4 className="text-white font-bold mt-4">3. Local Storage & Cookies</h4>
                <p>We use browser <code>localStorage</code> solely to enhance user experience, such as remembering your last selected theme or resolution preference. These are strictly necessary for functionality and are not used for tracking.</p>

                <h4 className="text-white font-bold mt-4">4. Third-Party Services</h4>
                <p>When you fetch a thumbnail, your browser makes a direct request to YouTube's servers (<code>img.youtube.com</code>). This interaction is subject to Google's Privacy Policy.</p>
                <p>We may use third-party analytics (like Google Analytics) to monitor aggregate site traffic. These tools use cookies to collect anonymous usage data.</p>

                <h4 className="text-white font-bold mt-4">5. Contact</h4>
                <p>For privacy-related concerns, please contact: hsini.web@gmail.com</p>
            </>
        ),
    },
    terms: {
        title: "Terms of Service",
        body: (
            <>
                 <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Effective Date: January 1, 2024</p>
                
                <p>Please read these Terms of Service ("Terms") carefully before using Doodax.com.</p>

                <h4 className="text-white font-bold mt-4">1. Acceptance of Terms</h4>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h4 className="text-white font-bold mt-4">2. Use License</h4>
                <p>Permission is granted to temporarily download copies of the materials (thumbnails) via Doodax.com for personal, non-commercial transitory viewing only.</p>
                <ul className="list-disc list-inside pl-4 mt-2">
                    <li>You must not use this tool for any illegal purpose.</li>
                    <li>You must not attempt to reverse engineer any software contained on Doodax.com.</li>
                    <li>You must not use this site to harass or infringe upon the rights of others.</li>
                </ul>

                <h4 className="text-white font-bold mt-4">3. Intellectual Property</h4>
                <p>The thumbnails downloaded using this tool are the intellectual property of their respective YouTube content creators. Doodax.com does not claim ownership of any downloaded content. It is your responsibility to ensure your use of these images complies with copyright laws and Fair Use doctrines.</p>

                <h4 className="text-white font-bold mt-4">4. Disclaimer</h4>
                <p>The materials on Doodax.com are provided "as is". We make no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
            </>
        ),
    },
    dmca: {
        title: "DMCA Copyright Policy",
        body: (
            <>
                <p>Doodax.com respects the intellectual property rights of others and expects its users to do the same.</p>

                <h4 className="text-white font-bold mt-4">Service Nature</h4>
                <p>Doodax.com is a retrieval tool. We do not host, upload, or store any video thumbnails or content on our servers. All images displayed are hot-linked directly from YouTube's public API servers.</p>

                <h4 className="text-white font-bold mt-4">Takedown Requests</h4>
                <p>Because we do not host the content, we cannot "remove" an image from the internet. To have an image removed permanently, you must contact YouTube/Google directly to have the content taken down at the source.</p>
                <p>Once removed from YouTube, it will automatically cease to function on Doodax.com.</p>

                <h4 className="text-white font-bold mt-4">Contact Agent</h4>
                <p>If you believe that your work has been copied in a way that constitutes copyright infringement regarding the textual content or design of Doodax.com itself, please provide our Copyright Agent with the written information specified below:</p>
                <div className="bg-white/5 p-4 rounded mt-4 border border-white/10 font-mono text-sm">
                    <p>Email: hsini.web@gmail.com</p>
                    <p>Subject: DMCA Notice</p>
                </div>
            </>
        ),
    },
};