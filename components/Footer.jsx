"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 mt-20 bg-black/40 backdrop-blur-xl">

      {/* Soft background blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto relative z-10 py-10 px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm">

          {/* Brand */}
          <a href="/" className="group text-center md:text-left max-w-xs">
            <h3 className="text-lg font-semibold tracking-wide group-hover:text-accent transition">
              Kamau The Tutor
            </h3>
            <p className="text-white/60 text-sm mt-2 leading-relaxed">
              Designing and engineering secure, scalable digital systems
              built for performance and long-term growth.
            </p>
          </a>

          {/* Contact */}
          <div className="flex flex-col md:flex-row gap-6 text-white/70 text-sm items-center">

            {/* Email */}
            <a
              href="mailto:kamauthetutor@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
              </svg>
              kamauthetutor@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:0717090705"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5h2l3 7-1.5 1.5a16 16 0 006 6L14 18l7 3v2a2 2 0 01-2 2C9.716 25 0 15.284 0 4a2 2 0 012-2h1z" />
              </svg>
              +254 717 090 705
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254717090705"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 12a9 9 0 11-16.95 4.95L3 21l4.05-1.05A9 9 0 1121 12z" />
              </svg>
              Chat on WhatsApp
            </a>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50 tracking-wide">
          © {new Date().getFullYear()} Kamau The Tutor. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;