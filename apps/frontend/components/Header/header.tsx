"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, Waves, Sparkles } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#", submenu: true },
    { name: "Articles", href: "#" },
    { name: "About", href: "#" },
  ];

  const categories = [
    { name: "Technology", icon: "🚀" },
    { name: "Design", icon: "🎨" },
    { name: "Future", icon: "🔮" },
    { name: "Lifestyle", icon: "🌊" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "h-16 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,149,255,0.1)]"
            : "h-24 bg-transparent"
        }`}
      >
        {/* Subtle Water Mesh - Only visible on top */}
        {!scrolled && (
          <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-100 rounded-full blur-[80px]" />
          </div>
        )}

        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-3 group cursor-pointer relative z-[110] ">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 blur-md opacity-0 group-hover:opacity-50 transition-all duration-500" />
              <div className="relative h-10 w-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <Waves className="text-white h-5 w-5" />
              </div>
            </div>
            <Link href="/">
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                DB
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50/50">
                  {link.name}
                  {link.submenu && (
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </button>

                {/* CATEGORY DROPDOWN - Fixed Visibility */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-56 p-2 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,149,255,0.15)] border border-white">
                      {categories.map((cat) => (
                        <a
                          key={cat.name}
                          href="#"
                          className="flex items-center gap-3 p-3 rounded-2xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all group/item"
                        >
                          <span className="text-sm font-bold">{cat.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center space-x-3 relative z-[110]">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-slate-600 hover:bg-blue-50 rounded-2xl transition-all"
            >
              <Search size={20} strokeWidth={2.5} />
            </button>

            <button className="hidden md:block px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              Subscribe
            </button>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 bg-blue-50 text-blue-600 rounded-2xl transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* SEARCH BAR (Slide Down) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-blue-100 overflow-hidden shadow-2xl"
            >
              <div className="container mx-auto py-10 px-6">
                <input
                  type="text"
                  placeholder="Dive into stories..."
                  className="w-full bg-transparent text-4xl font-light focus:outline-none placeholder:text-slate-300 text-blue-900"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MOBILE MENU (Liquid Slide In) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-blue-900/20 backdrop-blur-md z-[120]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[130] shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-2xl text-blue-600">AQUA</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                    {link.submenu && (
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {categories.map((c) => (
                          <span
                            key={c.name}
                            className="px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold"
                          >
                            {c.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200">
                  Join Community
                </button>
                <p className="text-center text-slate-400 text-sm italic">
                  Making waves in design.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
