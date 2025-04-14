import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import gsap from 'gsap'
import CustomCursor from './components/customcursor'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Halo from './components/Halo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundMusicOnScroll from "./components/BackgroundMusicOnScroll";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    var tl = gsap.timeline()
    tl.from(".hey h1", {
      y: -30,
      duration: 2,
      delay: 1,
      opacity: 0,
    });
    tl.to(".hey h1", {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
    });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/ritcuqlt.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div className="w-full max-w-screen overflow-x-hidden">
      <BackgroundMusicOnScroll />

      <Navbar />
      <CustomCursor />
      <Halo />
      
      <hr className="border-t-2 border-gray-300 my-0" />
      <Skills />
      <Aboutme />
      <Projects />

      <div className='w-auto h-40'></div>

      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App
