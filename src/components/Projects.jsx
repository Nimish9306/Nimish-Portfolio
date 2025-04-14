import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dino from '../assets/dino.jpg';
import techfind from '../assets/techfind.png';
import tictactoe from "../assets/tictactoe.jpg";
import todo from "../assets/todo.jpg";
import twitter from "../assets/twitter.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
    );
  };

  const images = [twitter, techfind, tictactoe, todo, dino];
  const imageCaptions = [
    "Twitter Clone",
    "TechFind",
    "TicTacToe",
    "Todo List",
    "I-Dragon Game"
  ];
  const imageLinks = [
    "https://github.com/Nimish9306/Twitter-clone",
    "https://techfindbuild.web.app/",
    "https://github.com/Nimish9306/MyTicTacToe",
    "https://github.com/Nimish9306/Todo-list",
    "https://github.com/Nimish9306/iDragon-game"
  ];

  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, images.length);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(imagesRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      }
    );

    
  }, []);

  return (
    <div id="Projects" ref={sectionRef}>
      <h1 className='proje font-bold pt-10 pb-3 px-20 text-6xl text-center text-white tracking-wide'>
        Projects
      </h1>
      <p className="para sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center text-slate-400">
        My work
      </p>

      <div className="flex items-center justify-center relative">
        <div className="relative w-full h-[40vh] sm:h-[70vh] flex items-center justify-center">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ width: "40%" }}
              ref={(el) => (imagesRef.current[index] = el)}
            >
              <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-[12px] w-full h-56  md:h-[60vh]"
                />
              </a>
              <p className="absolute bottom-5 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-center">
                {imageCaptions[index]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          className="text-white bg-indigo-400 rounded-full py-2 px-4 w-16 h-16"
          onClick={handleBack}
        >
          &#8592;
        </button>
        <button
          className="text-white bg-indigo-400 rounded-full py-2 px-4 w-16 h-16"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Projects;

