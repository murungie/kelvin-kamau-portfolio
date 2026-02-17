"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-[#0f1115] border-t border-white/10">

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 py-16"
      >
        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-sm">

          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Kelvin <span className="text-red-500">Digital</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Digital Marketing Strategist, Full-Stack Developer & Freelance
              Consultant helping brands scale through smart technology,
              performance marketing and conversion-driven systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-white/60">
              <li className="hover:text-red-500 transition">Performance Marketing</li>
              <li className="hover:text-red-500 transition">Full-Stack Development</li>
              <li className="hover:text-red-500 transition">SEO & Growth Strategy</li>
              <li className="hover:text-red-500 transition">Website Optimization</li>
              <li className="hover:text-red-500 transition">Freelance Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>

            <div className="space-y-4 text-white/60">

              <a
                href="mailto:kamauthetutor@gmail.com"
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <Mail size={16} />
                kamauthetutor@gmail.com
              </a>

              <a
                href="tel:+254717090705"
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <Phone size={16} />
                +254 717 090 705
              </a>

              <a
                href="https://wa.me/254717090705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <MessageCircle size={16} />
                WhatsApp Chat
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 transition">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 transition">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>
            © {new Date().getFullYear()} Kelvin  Kamau. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
