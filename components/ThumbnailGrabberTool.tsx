import React, { useState, useCallback, useRef, useEffect } from 'react';
import { extractVideoId, generateThumbnailUrl, RESOLUTIONS, Resolution } from '../services/youtubeService';

type HistoryItem = {
    id: string;
    videoId: string;
    imageUrl: string;
    timestamp: number;
};

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const PreviewIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const ThumbnailGrabberTool: React.FC = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [selectedResolution, setSelectedResolution] = useState<Resolution>('maxresdefault');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [videoId, setVideoId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const [activeTab, setActiveTab] = useState<'download' | 'preview'>('download');
    const [history, setHistory] = useState<HistoryItem[]>([]);
    
    // Mockup Content State
    const [mockTitle, setMockTitle] = useState("Wait! You Won't Believe What Happens Next...");
    const [mockChannel, setMockChannel] = useState("Awesome Creator");
    
    const imageRef = useRef<HTMLImageElement>(null);
    
    const [currentResolutionAttempt, setCurrentResolutionAttempt] = useState<Resolution>('maxresdefault');
    const resolutionFallbackOrder: Resolution[] = ['maxresdefault', 'hq720', 'sddefault', 'hqdefault'];

    // Load History on Mount
    useEffect(() => {
        const savedHistory = localStorage.getItem('doodax_history');
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) {
                console.error("Failed to parse history");
            }
        }
    }, []);

    const addToHistory = (id: string, url: string) => {
        setHistory(prev => {
            // Remove duplicates of same video
            const filtered = prev.filter(item => item.videoId !== id);
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                videoId: id,
                imageUrl: url,
                timestamp: Date.now()
            };
            const newHistory = [newItem, ...filtered].slice(0, 6); // Keep last 6
            localStorage.setItem('doodax_history', JSON.stringify(newHistory));
            return newHistory;
        });
    };

    const handleGrabThumbnail = useCallback(() => {
        setIsLoading(true);
        setError(null);
        setImageUrl(null);
        setVideoId(null);
        setCopySuccess(false);

        const extractedId = extractVideoId(videoUrl);
        if (!extractedId) {
            setError('Invalid YouTube URL. Please check the link and try again.');
            setIsLoading(false);
            return;
        }
        
        setVideoId(extractedId);
        setCurrentResolutionAttempt(selectedResolution);
        const url = generateThumbnailUrl(extractedId, selectedResolution);
        setImageUrl(url);

    }, [videoUrl, selectedResolution]);

    const handleImageError = () => {
        if (!videoId) return;
        const currentIndex = resolutionFallbackOrder.indexOf(currentResolutionAttempt);
        const nextIndex = currentIndex + 1;

        if (nextIndex < resolutionFallbackOrder.length) {
            const nextResolution = resolutionFallbackOrder[nextIndex];
            setCurrentResolutionAttempt(nextResolution);
            const newUrl = generateThumbnailUrl(videoId, nextResolution);
            setImageUrl(newUrl);
        } else {
            setError("Thumbnail not found. The video might be private, age-restricted, or deleted.");
            setIsLoading(false);
        }
    };
    
    const handleImageLoad = () => {
        setIsLoading(false);
        if (videoId && imageUrl) {
            addToHistory(videoId, imageUrl);
        }
    };

    const handleDownload = async (format: 'jpg' | 'png' = 'jpg') => {
        if (!imageUrl) return;
        try {
            // For JPG we can just fetch/blob
            if (format === 'jpg') {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `doodax-${videoId}-${currentResolutionAttempt}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                // For PNG/Conversion, draw to canvas
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.src = imageUrl;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    if(ctx) {
                        ctx.drawImage(img, 0, 0);
                        const pngUrl = canvas.toDataURL('image/png');
                        const link = document.createElement('a');
                        link.href = pngUrl;
                        link.download = `doodax-${videoId}-${currentResolutionAttempt}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                }
            }

        } catch (err) {
            setError("Download blocked. Try right-clicking the image and 'Save Image As'.");
        }
    };

    const handleCopyUrl = () => {
        if (!imageUrl) return;
        navigator.clipboard.writeText(imageUrl).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        });
    };
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleGrabThumbnail();
        }
    };

    const restoreFromHistory = (item: HistoryItem) => {
        setVideoUrl(`https://youtube.com/watch?v=${item.videoId}`);
        setImageUrl(item.imageUrl);
        setVideoId(item.videoId);
        // Slight delay to visual refresh
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setIsLoading(!!imageUrl);
    }, [imageUrl]);

    return (
        <section id="tool" className="flex flex-col items-center text-center w-full max-w-6xl mx-auto animate-fadeIn">
            
            <div className="relative mb-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <h1 className="relative text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                    Thumbnail<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Grabber</span>
                </h1>
            </div>
            
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed px-4">
                Instantly download high-quality YouTube thumbnails in 4K, HD, and more. <br className="hidden md:block"/>Free, fast, and privacy-focused.
            </p>

            <div className="w-full glass-panel rounded-3xl p-1 shadow-[0_0_60px_rgba(0,0,0,0.4)] hover:shadow-[0_0_80px_rgba(88,28,135,0.2)] transition-shadow duration-500 z-20">
                <div className="bg-[#0a051a]/90 backdrop-blur-md rounded-[22px] p-6 md:p-12 border border-white/5">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-grow relative group z-20">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-300 blur"></div>
                            <input
                                type="text"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Paste your YouTube Link here..."
                                className="relative w-full bg-[#130d25] text-white placeholder-gray-500 border border-white/10 rounded-xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-lg transition-all shadow-inner"
                            />
                        </div>
                        <div className="relative z-20 min-w-[220px]">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-300 blur"></div>
                            <select
                                value={selectedResolution}
                                onChange={(e) => setSelectedResolution(e.target.value as Resolution)}
                                className="relative w-full h-full bg-[#130d25] text-white border border-white/10 rounded-xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer font-medium text-lg shadow-inner"
                            >
                                {RESOLUTIONS.map(res => (
                                    <option key={res.value} value={res.value} className="bg-[#130d25] py-2">{res.label}</option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 z-30">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={handleGrabThumbnail}
                        disabled={!videoUrl || isLoading}
                        className="w-full relative overflow-hidden group bg-white text-black font-bold py-5 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:scale-100 shadow-lg shadow-purple-900/20"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                            {isLoading ? (
                                 <>
                                    <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Fetching High-Res Image...
                                 </>
                            ) : (
                                <>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Get Thumbnail Image
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </div>

            {error && (
                <div className="mt-8 w-full max-w-3xl bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-200 px-6 py-4 rounded-xl animate-fadeIn flex items-center gap-4">
                    <div className="p-2 bg-red-500/20 rounded-full shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-left font-medium">{error}</p>
                </div>
            )}

            {imageUrl && !error && (
                <div className="mt-16 w-full max-w-5xl flex flex-col items-center animate-fadeIn scroll-mt-32" id="result">
                    
                    {/* Tabs */}
                    <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-6">
                        <button 
                            onClick={() => setActiveTab('download')}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'download' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            Download
                        </button>
                        <button 
                            onClick={() => setActiveTab('preview')}
                            className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === 'preview' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                           <PreviewIcon className="w-4 h-4"/> Live Preview
                        </button>
                    </div>

                    {activeTab === 'download' ? (
                        // DOWNLOAD VIEW
                        <div className="w-full animate-fadeIn">
                            <div className="w-full p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">
                                <div className="relative w-full aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl group border border-white/5">
                                    {isLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-20 transition-all">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
                                                <span className="text-purple-300 font-medium">Optimizing Quality...</span>
                                            </div>
                                        </div>
                                    )}
                                    <img
                                        ref={imageRef}
                                        src={imageUrl}
                                        alt={`YouTube Thumbnail for video ${videoId} in ${selectedResolution} quality`}
                                        title={`YouTube Thumbnail - ${selectedResolution}`}
                                        className={`w-full h-full object-contain transition-all duration-700 ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}`}
                                        onLoad={handleImageLoad}
                                        onError={handleImageError}
                                    />
                                    
                                    {/* Hover Overlay */}
                                    {!isLoading && (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                                            <button 
                                                onClick={() => handleDownload('jpg')} 
                                                className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-purple-400 hover:text-white shadow-lg"
                                            >
                                                <DownloadIcon className="w-5 h-5" />
                                                Quick Download
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {!isLoading && (
                                <div className="mt-8 flex flex-wrap justify-center gap-4 w-full max-w-2xl mx-auto">
                                    <button 
                                        onClick={() => handleDownload('jpg')} 
                                        className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:-translate-y-1"
                                    >
                                        <DownloadIcon className="w-5 h-5" />
                                        <span>Download .JPG</span>
                                    </button>
                                    
                                    <button 
                                        onClick={() => handleDownload('png')} 
                                        className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-[#1a1a2e] border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white font-bold py-4 px-6 rounded-xl transition-all hover:-translate-y-1"
                                    >
                                        <DownloadIcon className="w-5 h-5" />
                                        <span>Download .PNG</span>
                                    </button>

                                    <button 
                                        onClick={handleCopyUrl} 
                                        className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl transition-all border hover:-translate-y-1 ${copySuccess ? 'bg-green-600 border-green-500 text-white' : 'bg-[#1a1a2e] border-white/10 text-gray-300 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        {copySuccess ? (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                <span>Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <CopyIcon className="w-5 h-5" />
                                                <span>Copy Link</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        // PREVIEW MOCKUP VIEW
                        <div className="w-full max-w-3xl animate-fadeIn">
                            <div className="bg-[#0f0f0f] rounded-xl p-4 md:p-6 border border-white/10 shadow-2xl text-left">
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">YouTube Search Preview Simulator</span>
                                    <span className="text-xs text-gray-600">Mode: Dark</span>
                                </div>

                                {/* Mock Video Card */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    {/* Thumbnail Container */}
                                    <div className="relative md:w-[360px] flex-shrink-0 aspect-video rounded-xl overflow-hidden bg-gray-800 group cursor-pointer">
                                        <img src={imageUrl} className="w-full h-full object-cover" alt="Preview" />
                                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-medium px-1 rounded">12:42</div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="flex flex-col gap-2 flex-grow">
                                        <div className="flex flex-col">
                                             <input 
                                                type="text" 
                                                value={mockTitle}
                                                onChange={(e) => setMockTitle(e.target.value)}
                                                className="bg-transparent text-white text-lg font-semibold leading-tight border border-transparent hover:border-white/20 focus:border-purple-500 focus:bg-white/5 rounded px-1 -ml-1 transition-all outline-none"
                                             />
                                             <p className="text-xs text-gray-400 mt-1">Click text to edit</p>
                                        </div>
                                        
                                        <div className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                                            <div className="flex items-center gap-2 hover:text-white cursor-pointer">
                                                 <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 flex items-center justify-center text-[10px] text-white font-bold">
                                                    {mockChannel.charAt(0)}
                                                 </div>
                                                 <input 
                                                    type="text" 
                                                    value={mockChannel}
                                                    onChange={(e) => setMockChannel(e.target.value)}
                                                    className="bg-transparent hover:border-white/20 focus:border-purple-500 focus:bg-white/5 rounded px-1 -ml-1 transition-all outline-none max-w-[150px]"
                                                 />
                                            </div>
                                            <span>•</span>
                                            <span>1.2M views</span>
                                            <span>•</span>
                                            <span>2 hours ago</span>
                                        </div>
                                        
                                        <div className="mt-3 flex gap-2">
                                            <div className="bg-white/10 rounded px-2 py-1 text-xs text-gray-300">4K</div>
                                            <div className="bg-white/10 rounded px-2 py-1 text-xs text-gray-300">CC</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-gray-500 text-sm mt-4">
                                Tip: Edit the title and channel name above to see how your thumbnail fits in context.
                            </p>
                        </div>
                    )}
                </div>
            )}
            
            {/* Recent History Bar */}
            {history.length > 0 && (
                <div className="mt-24 w-full max-w-5xl animate-fadeIn">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <span className="text-gray-400 text-sm uppercase tracking-widest font-bold">Recent Grabs</span>
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {history.map((item) => (
                            <div 
                                key={item.id}
                                onClick={() => restoreFromHistory(item)}
                                className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-900/20"
                            >
                                <img src={item.imageUrl} alt="History" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ThumbnailGrabberTool;