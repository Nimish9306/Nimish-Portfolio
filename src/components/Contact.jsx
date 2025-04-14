import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import gsap from "gsap"

const Contact = () => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {


    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x021618,
          cloudColor: 0xc0e0f2,
          sunColor: 0x101977,
          sunGlareColor: 0x070851,
          sunlightColor: 0x16466f
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div id='Contact'
      ref={vantaRef}
      className="min-h-screen flex p-4 cloud"
    >
      <div className="bg-[#0e0e27] p-10 rounded-lg w-[480px] h-[650px] max-w-xl shadow-lg md:ml-20 mt-16 md:mt-9 z-10 relative">
        <h3 className="text-[#aaaae2] text-sm uppercase tracking-wide">Get in touch</h3>
        <h1 className="text-white text-5xl font-black mb-8">Contact<span className="text-[#ffffff]">.</span></h1>

        <form className="space-y-6">
          <div>
            <label className="text-white font-medium block mb-2">Your Name</label>
            <input
              type="text"
              placeholder="What's your good name?"
              className="w-full px-4 py-3 bg-[#1e1e3f] text-white rounded-lg focus:outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="text-white font-medium block mb-2">Your email</label>
            <input
              type="email"
              placeholder="What's your web address?"
              className="w-full px-4 py-3 bg-[#1e1e3f] text-white rounded-lg focus:outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="text-white font-medium block mb-2">Your Message</label>
            <textarea
              rows="5"
              placeholder="What you want to say?"
              className="w-full px-4 py-3 bg-[#1e1e3f] text-white rounded-lg focus:outline-none placeholder-gray-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#7c3aed] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#6b21a8] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

