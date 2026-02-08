import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  { name: "YouTube", link: "/", Icon: RiYoutubeLine },
  { name: "Instagram", link: "/", Icon: RiInstagramLine },
  { name: "Facebook", link: "/", Icon: RiFacebookLine },
  { name: "Dribbble", link: "/", Icon: RiDribbbleLine },
  { name: "Pinterest", link: "/", Icon: RiPinterestLine },
  { name: "Github", link: "/", Icon: RiGithubLine },
];

const Socials = ({ className = "" }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`flex items-center gap-x-5 text-lg relative ${className}`}>
      {socialData.map((social, i) => {
        const Icon = social.Icon;

        return (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => setHovered(social.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href={social.link}
              className={`transition-all duration-300 ${
                social.name === "Github"
                  ? "bg-accent text-white rounded-full p-[6px]"
                  : "hover:text-accent"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon aria-hidden />
              </motion.div>

              <span className="sr-only">{social.name}</span>
            </Link>

            {/* Tooltip (desktop only) */}
            <AnimatePresence>
              {hovered === social.name && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2
                             whitespace-nowrap rounded bg-black px-2 py-1
                             text-xs text-white shadow-lg hidden lg:block"
                >
                  {social.name}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;