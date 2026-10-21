// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Portal", href: "/login" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-900/50 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-900/40 group-hover:scale-105 transition-transform">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-emerald-50">
              VINEYARD
            </span>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
              College
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-emerald-100/80 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/apply"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-300 shadow-md shadow-emerald-900/30 hover:shadow-emerald-600/30"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-emerald-200 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide-over Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-over Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-emerald-950 border-l border-emerald-900 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-emerald-900">
            <span className="font-bold text-lg text-emerald-50">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-5 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-emerald-100 hover:text-emerald-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="pt-6 border-t border-emerald-900">
          <Link
            href="/apply"
            onClick={() => setIsOpen(false)}
            className="w-full block text-center py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}