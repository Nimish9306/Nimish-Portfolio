import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills h1",
                start: "top 80%",      // When animation starts
                end: "top 20%",        // When animation ends
                scrub: 2,              // Scrub ties animation to scroll (1 = 1 second lag, or true for direct)

            }
        });

        tl.from(".I, .II, .III", {
            y: -50,
            opacity: 0,
            stagger: 0.3,
            ease: "power1.out"
        }).to(".I, .II, .III", {
            y: 0,
            opacity: 1,
            stagger: 0.3,

            ease: "power1.out"
        });
    }, []);
    return (

        <div id="skills" className="mycontainer w-full h-[900px] sm:h-[600px] skills">
            <h1 className='font-bold py-16 px-20 text-3xl sm:text-4xl font-(family-name:<"Baloo Bhaina 2", sans-serif>)  text-white tracking-wide'>🆆hat I Can Do ?</h1>
            <div className="I flex flex-wrap justify-center gap-6 sm:justify-evenly">
                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://princerawat-webdev-portfolio.web.app/assets/html-D8OF6CEF.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>

                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://princerawat-webdev-portfolio.web.app/assets/css-CVEryGHC.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>

                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://princerawat-webdev-portfolio.web.app/assets/javascript-CxIQSbbq.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>

                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src=" https://princerawat-webdev-portfolio.web.app/assets/react-BHKPIQEC.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>




            </div>


            <div className="II flex flex-wrap pt-4 justify-center gap-6 sm:justify-evenly">
                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://princerawat-webdev-portfolio.web.app/assets/tailwind-BeplsA4J.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>

                <div className="flex items-center justify-start border rounded-full border-[#915EFF] bg-slate-400 shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://princerawat-webdev-portfolio.web.app/assets/nextjs-DaY2GCen.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>
                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>

                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>
                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://www.citypng.com/public/uploads/preview/java-white-logo-image-png-701751694771838qyus1n9gdu.png " // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>


            </div>


            <div className="III flex flex-wrap pt-4 justify-center gap-6 sm:justify-evenly">
                <div className="flex items-center justify-start border rounded-full border-[#915EFF] bg-slate-400 shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://princerawat-webdev-portfolio.web.app/assets/github1-Chqk9tDh.png" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>


                <div className="flex items-center justify-start border rounded-full border-[#915EFF] bg-slate-400 shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://www.svgrepo.com/show/306891/typescript.svg" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                        />
                    </div>



                </div>
                <div className="flex items-center justify-start border rounded-full border-[#915EFF] shadow-lg  p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://yt3.googleusercontent.com/Idxls5gflKqlPBP9Sn6LJkwQ4uW-f291qq0gaKsvNJo6hvUigK35W8Ha-zm8eZAYPuGoZ6lk=s900-c-k-c0x00ffffff-no-rj" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-12 h-12 object-contain bg-blend-color-burn"
                            loading="lazy"
                        />
                    </div>



                </div>

                

                <div className="flex items-center justify-start  border rounded-full border-[#915EFF] p-4  hover:scale-105 transition-transform duration-300 ease-in-out">

                    {/* Icon Section */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src="https://png.pngtree.com/png-vector/20200121/ourmid/pngtree-initial-c-hexagon-logo-vector-template-png-image_2132810.jpg" // Make sure this path matches your project!
                            alt="HTML5 Logo"
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                        />
                    </div>

                   

                </div>
            </div>
        </div>

    )
}

export default Skills

