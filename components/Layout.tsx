import React, { useState, useCallback, useEffect } from 'react';
import { MODAL_CONTENT } from '../constants/seo';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca';

const ShootingStars = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top Left Shooting Star */}
            <div 
                className="absolute -top-[10%] left-[20%] w-[2px] h-[100px] bg-gradient-to-b from-white to-transparent animate-shooting opacity-0" 
                style={{ animationDelay: '2s', transform: 'rotate(45deg)' }}
            ></div>
            
            {/* Top Right Shooting Star */}
            <div 
                className="absolute top-[10%] -left-[10%] w-[3px] h-[150px] bg-gradient-to-b from-cyan-200 to-transparent animate-shooting opacity-0" 
                style={{ animationDelay: '7s', animationDuration: '4s', transform: 'rotate(45deg)' }}
            ></div>
            
             {/* Mid Shooting Star */}
             <div 
                className="absolute top-[40%] left-[0%] w-[2px] h-[80px] bg-gradient-to-b from-purple-200 to-transparent animate-shooting opacity-0" 
                style={{ animationDelay: '12s', animationDuration: '5s', transform: 'rotate(45deg)' }}
            ></div>
            
             {/* Bottom Right Shooting Star */}
             <div 
                className="absolute bottom-[20%] right-[0%] w-[2px] h-[120px] bg-gradient-to-b from-pink-200 to-transparent animate-shooting opacity-0" 
                style={{ animationDelay: '15s', animationDuration: '3s', transform: 'rotate(45deg)' }}
            ></div>
        </div>
    );
};

const GalaxyBackground: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Reduced movement range for a heavier, more distant feel
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#050014]">
            {/* Deepest Space Layer */}
            <div className="absolute inset-0 bg-black"></div>

            {/* Nebula Sway Container - The entire universe gently swings */}
            <div className="absolute inset-0 animate-sway origin-center will-change-transform">
                
                {/* Parallax Container */}
                <div 
                    className="absolute inset-0 transition-transform duration-1000 ease-out will-change-transform"
                    style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
                >
                    {/* --- Nebula Cloud Layers --- */}
                    
                    {/* 1. Primary Purple/Fuchsia Cloud (Top Left) */}
                    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-40 blur-[120px] animate-float bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900 via-purple-900 to-transparent"></div>

                    {/* 2. Deep Blue/Indigo Cloud (Bottom Right) */}
                    <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-40 blur-[120px] animate-float bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-indigo-900 to-transparent" style={{ animationDelay: '-5s' }}></div>

                    {/* 3. Vibrant Cyan Accent (Center Left) */}
                    <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen opacity-30 blur-[100px] animate-pulse-slow bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-600 via-teal-900 to-transparent" style={{ animationDelay: '2s' }}></div>

                    {/* 4. Hot Pink/Rose Accent (Center Right) */}
                    <div className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full mix-blend-screen opacity-30 blur-[100px] animate-pulse-slow bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-600 via-pink-900 to-transparent" style={{ animationDelay: '4s' }}></div>

                    {/* 5. Rotating Central Core (Subtle) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] rounded-full mix-blend-overlay opacity-20 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.1)_360deg)]"></div>


                    {/* --- Starfields --- */}
                    
                    {/* Static Distant Stars */}
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: 'radial-gradient(1px 1px at 10% 10%, white, transparent), radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 30% 10%, white, transparent), radial-gradient(1.5px 1.5px at 40% 30%, white, transparent), radial-gradient(1px 1px at 50% 10%, white, transparent), radial-gradient(1px 1px at 60% 30%, white, transparent), radial-gradient(1.5px 1.5px at 70% 10%, white, transparent), radial-gradient(1px 1px at 80% 30%, white, transparent), radial-gradient(1px 1px at 90% 10%, white, transparent), radial-gradient(1px 1px at 10% 50%, white, transparent)',
                        backgroundSize: '550px 550px',
                    }}></div>

                    {/* Twinkling Mid-Range Stars */}
                    <div className="absolute inset-0 animate-twinkle opacity-60" style={{
                        backgroundImage: 'radial-gradient(2px 2px at 15% 15%, #e0e7ff, transparent), radial-gradient(2px 2px at 35% 45%, #fce7f3, transparent), radial-gradient(2px 2px at 75% 25%, #cffafe, transparent), radial-gradient(2px 2px at 85% 65%, #e0e7ff, transparent)',
                        backgroundSize: '350px 350px',
                        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
                    }}></div>
                    
                     {/* Bright Foreground Stars */}
                    <div className="absolute inset-0 animate-twinkle" style={{
                        backgroundImage: 'radial-gradient(2.5px 2.5px at 50% 50%, white, transparent), radial-gradient(2.5px 2.5px at 80% 80%, #a5f3fc, transparent)',
                        backgroundSize: '450px 450px',
                        opacity: 0.7,
                        animationDelay: '1.5s',
                        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
                    }}></div>
                </div>
            </div>
            
            <ShootingStars />
        </div>
    );
};

const Modal: React.FC<{ content: { title: string; body: React.ReactNode }; onClose: () => void }> = ({ content, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-fadeIn" onClick={onClose}>
            <div 
                className="glass-panel rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto custom-scrollbar flex flex-col border border-white/10 bg-[#0a051a]/90" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-[#0a051a]/95 backdrop-blur-xl flex justify-between items-center p-6 border-b border-white/10 z-10">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        {content.title}
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                    >
                        <span className="text-xl leading-none">&times;</span>
                    </button>
                </div>
                <div className="p-6 md:p-10 text-gray-300 space-y-6 leading-relaxed text-sm md:text-base">
                    {content.body}
                </div>
                <div className="sticky bottom-0 bg-[#0a051a]/95 backdrop-blur-xl p-4 border-t border-white/10 flex justify-end">
                    <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors border border-white/5 font-medium">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-fuchsia-500/40 selection:text-white">
      <GalaxyBackground />
      
      <header className="fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 bg-[#030014]/60 backdrop-blur-md border-b border-white/5">
        <nav className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-900/30">
                <span className="font-black text-white text-xl relative z-10">D</span>
             </div>
             <span className="font-bold text-xl tracking-tight text-white">
                Doodax<span className="text-purple-400">.com</span>
             </span>
          </div>
          
          <ul className="flex flex-wrap justify-center gap-2">
             {(['about', 'guide', 'contact'] as ModalType[]).map((item) => (
                 <li key={item}>
                     <button 
                        onClick={() => openModal(item)}
                        className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all capitalize border border-transparent hover:border-white/10"
                     >
                        {item}
                     </button>
                 </li>
             ))}
          </ul>
        </nav>
      </header>
      
      <main className="relative z-10 pt-32 pb-20 min-h-[80vh]">
        {children}
      </main>

      <footer className="relative z-10 py-12 bg-black/60 backdrop-blur-lg border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400">
            {(['privacy', 'terms', 'dmca'] as ModalType[]).map((item) => (
                <button 
                    key={item}
                    onClick={() => openModal(item)}
                    className="hover:text-purple-400 transition-colors capitalize font-medium"
                >
                    {item === 'dmca' ? 'DMCA' : item.replace('-', ' ')}
                </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
             
             <div className="flex flex-col items-center gap-2">
                 <p className="text-gray-500 text-xs uppercase tracking-widest">Powered by</p>
                 <a 
                    href="https://github.com/hsinidev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                 >
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white group-hover:from-purple-300 group-hover:to-blue-300">
                        HSINI MOHAMED
                    </span>
                 </a>
             </div>

             <p className="text-gray-600 text-sm mt-4">
                &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
             </p>
          </div>
        </div>
      </footer>

      {activeModal && <Modal content={MODAL_CONTENT[activeModal]} onClose={closeModal} />}
    </div>
  );
};

export default Layout;