import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#15151b] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name or Logo */}
        <div className="text-2xl font-bold text-[#915EFF]">
          Nimish<span className="text-white">.</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/Nimish9306" target="_blank" rel="noopener noreferrer" className="hover:text-[#915EFF] transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nimish-agarwal-b0062b307/" target="_blank" rel="noopener noreferrer" className="hover:text-[#915EFF] transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/nimishxagarwal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#915EFF] transition">
            <FaInstagram />
          </a>
          <a href="mailto:nimishagrawal627@gmail.com" className="hover:text-[#915EFF] transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Nimish Agarwal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
