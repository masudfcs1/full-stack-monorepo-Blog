"use client";
import React, { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#", submenu: true },
    { name: "Articles", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const categories = [
    "Technology",
    "Design",
    "Business",
    "Lifestyle",
    "Travel",
    "Health",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
            <span className="text-xl font-bold tracking-tight">BlogSpace</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  {link.name}
                </a>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {categories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Auth buttons (desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>

            {/* User menu (desktop) */}
            <button className="hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <User size={16} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="Search articles, topics, or authors..."
                className="w-full px-4 py-3 pl-12 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <div className="ml-4 mt-2 space-y-2 border-l pl-4">
                      {categories.map((category) => (
                        <a
                          key={category}
                          href="#"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t">
                <button className="w-full py-2.5 text-center font-medium text-gray-700 hover:text-blue-600">
                  Sign In
                </button>
                <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
