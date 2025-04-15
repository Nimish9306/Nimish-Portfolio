import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0c0c0c,
          color: 0x915eff,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftContentRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
        scrub: 1.5, // Makes scroll linked to progress
      }
    });
  
    // Animate left content from left
    tl.fromTo(leftContentRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  
    // Animate right image from right
    tl.fromTo(rightImageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8" // Overlap slightly with previous
    );

   
  }, []);

  return (
    <div
      id='Aboutme'
      ref={vantaRef}
      style={{ width: '100%', height: '100vh', position: 'relative' }}
    >
      <div className='flex flex-col md:flex-row justify-evenly items-center h-full px-10'>
        <div ref={leftContentRef}>
          <div className='md:px-20 pt-20 md:pt-40'>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-slate-400">Introduction</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
          </div>
          <p className="mt-4 md:px-20 text-secondary text-[17px] max-w-3xl leading-[30px] text-slate-400">
            I'm a B.Tech at Maulana Azad National Institute of Technology (MANIT), passionate about Web Development and building modern, responsive applications. I am also a DSA enthusiast, constantly improving my problem-solving skills. I enjoy participating in hackathons to innovate, collaborate, and bring ideas to life. Currently, I'm exploring AI and Blockchain to broaden my technical horizons.
          </p>
        </div>

        <div
          ref={rightImageRef}
          className="img w-60 pt-10 md:pt-32 overflow-hidden"
        >
          <img
            className="border rounded-lg filter blur-sm hover:blur-0 transition-all duration-500 ease-in-out transform hover:scale-105"
            src="https://i.pinimg.com/736x/f5/b3/39/f5b339491376cec87d6797b8763212cd.jpg"
            alt="Interstellar Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

