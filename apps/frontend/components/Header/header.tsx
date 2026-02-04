"use client";
import React, { useState } from "react";
import { Menu, X, Search, ChevronDown, Waves } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 1. Hook into the scroll position
  const { scrollY } = useScroll();

  // 2. Map scroll position to specific values for smooth interpolation
  // We transition properties over the first 80px of scrolling
  const headerHeight = useTransform(scrollY, [0, 80], ["90px", "64px"]);
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.75)"],
  );
  const blurAmount = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(20px)"],
  );
  const shadowOpacity = useTransform(
    scrollY,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,149,255,0.1)"],
  );

  // Use a spring for the motion to make it "bouncy" and natural
  const smoothHeight = useSpring(headerHeight, { stiffness: 300, damping: 30 });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#", submenu: true },
    { name: "Articles", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <motion.header
      style={{
        height: smoothHeight,
        backgroundColor: headerBg,
        backdropFilter: blurAmount,
        boxShadow: shadowOpacity,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-500 will-change-[height,background-color]"
    >
      {/* Dynamic Water Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          style={{ opacity: useTransform(scrollY, [0, 100], [0.1, 0.4]) }}
          className="absolute -top-[50%] left-[-10%] w-[120%] h-[200%]"
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer group"
          initial={false}
        >
          <div className="relative h-10 w-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="relative h-9 w-9 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
              <Waves className="text-white h-5 w-5" />
            </div>
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            AQUA
          </span>
        </motion.div>

        {/* DESKTOP NAV - Floating pill style */}
        <nav className="hidden lg:flex items-center bg-white/40 border border-white/60 rounded-full px-2 py-1 shadow-sm">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2.5 bg-white/40 hover:bg-white/80 rounded-xl text-slate-600 transition-all border border-white/50"
          >
            <Search size={18} strokeWidth={2.5} />
          </button>

          <button className="hidden sm:block px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
            Subscribe
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-slate-600"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* SEARCH OVERLAY (Liquid Dropdown) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/80 backdrop-blur-3xl border-b border-blue-100 overflow-hidden"
          >
            <div className="container mx-auto py-8 px-6">
              <input
                type="text"
                placeholder="Search the blue..."
                className="w-full bg-transparent text-2xl font-medium focus:outline-none placeholder:text-slate-300"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
