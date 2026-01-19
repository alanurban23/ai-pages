"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-avatar rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Avatar</span>
              <span className="block text-xs text-gray-500 -mt-1">Centrum Zdrowia</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#o-nas" className="nav-link">O nas</a>
            <a href="#uslugi" className="nav-link">Usługi</a>
            <a href="#dieta" className="nav-link">Dieta</a>
            <a href="#terapia" className="nav-link">Terapia</a>
            <a href="#kontakt" className="nav-link">Kontakt</a>
            <a href="#kontakt" className="btn-primary text-sm">Umów wizytę</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#o-nas" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>O nas</a>
              <a href="#uslugi" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Usługi</a>
              <a href="#dieta" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Dieta</a>
              <a href="#terapia" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Terapia</a>
              <a href="#kontakt" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
              <a href="#kontakt" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Umów wizytę</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
