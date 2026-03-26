"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/unique-logo2.png"
            alt="Unique Hair Braiding Logo"
            className="h-12 w-auto object-contain rounded-2xl shadow-2xl"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm tracking-wide">
          <a href="#services" className="hover:text-pink-300 transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-pink-300 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-pink-300 transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="rounded-full bg-pink-600 px-5 py-2 text-white text-sm font-medium hover:bg-pink-700 transition">
          Call Now
        </button>
      </div>
    </header>
  );
}
