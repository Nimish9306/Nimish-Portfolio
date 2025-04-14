import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const Halo = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            if (vantaEffect) {
                vantaEffect.resize();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [vantaEffect]);

    // Dynamic height calculation for different screen sizes
    const dynamicHeight = windowSize.width < 640 ? 700 : 800;

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    backgroundColor: 0x050509,
                })
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            id="your-element-selector"
            ref={vantaRef}
            style={{
                width: '100%',
                height: `${dynamicHeight}px`,
                
                
            }}
            className="relative"
        >
            {/* Optional content on top */}
            <div id="app" className="hey">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-black pt-14 text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                        Hi, I'm <span className="text-[#915EFF]">Nimish</span>
                    </h1>

                    {/* Social icons with responsive spacing */}
                    <div className="lordicon flex items-center justify-center my-0 py-0 space-x-4 sm:space-x-6">
                        {/* ... social icons remain same ... */}
                    </div>

                    <style jsx>{`
                        @keyframes gradientShift {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        .animate-gradient {
                            background-size: 200% 200%;
                            animation: gradientShift 11s ease infinite;
                        }
                        @media (max-width: 640px) {
                            #app { padding-top: 2rem; }
                            h1 { padding-top: 1rem; }
                        }
                    `}</style>
                </div>
                <div className="lordicon flex items-center justify-center my-0 py-0">
                    <a href="https://github.com/Nimish9306" target="_blank" rel="noopener noreferrer">
                        <lord-icon
                            src="https://cdn.lordicon.com/lllcnxva.json"
                            trigger="in"
                            delay="1500"
                            state="in-reveal"
                            style={{ width: "50px", height: "50px" }}
                        >
                        </lord-icon></a>
                    <a href="https://www.instagram.com/nimishxagarwal/" target="_blank" rel="noopener noreferrer">
                        <lord-icon
                            src="https://cdn.lordicon.com/tgyvxauj.json"
                            trigger="in"
                            delay="1500"
                            state="in-reveal"
                            colors="primary:#121331,secondary:#b4b4b4"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon></a>
                    <a href="https://www.linkedin.com/in/nimish-agarwal-b0062b307/" target="_blank" rel="noopener noreferrer">
                        <lord-icon
                            src="https://cdn.lordicon.com/euybrknk.json"
                            trigger="in"
                            delay="1500"
                            state="in-reveal"
                            colors="primary:#121331,secondary:#b4b4b4"
                            style={{ width: "50px", height: "50px" }}
                        >
                        </lord-icon></a>
                    <a href="mailto:nimishagrawal627@gmail.com">
                        <lord-icon
                            src="https://cdn.lordicon.com/ozlkyfxg.json"
                            trigger="in"
                            delay="1500"
                            state="in-reveal"
                            colors="primary:#121331,secondary:#b4b4b4"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon></a>
                </div>

            </div>
        </div>
    );
};

export default Halo;

