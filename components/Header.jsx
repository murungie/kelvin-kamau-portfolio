"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Socials from "../components/Socials";
import { navData } from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6 xl:px-0">
        <div className="flex justify-between items-center py-6 lg:py-8">
          
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={48}
              priority
              className="max-w-full h-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex gap-x-8 items-center">
            {navData.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className="capitalize hover:text-accent transition"
              >
                {link.name}
              </Link>
            ))}
            <Socials />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-3xl  "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden flex flex-col items-left gap-y-6 pb-6 text-white">
            {navData.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className="capitalize text-lg hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Socials />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
