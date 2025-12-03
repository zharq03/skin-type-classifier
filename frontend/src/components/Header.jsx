import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { to: '/', label: 'Beranda' },
    { to: '/cek-wajah', label: 'Cek Wajah' },
    { to: '/tentang-kami', label: 'Tentang Kami' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-white/70 backdrop-blur-lg border-b border-white/30 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <nav className="flex justify-between items-center">

              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div>
                  <h1 className="font-poppins text-2xl font-bold text-primary-900">
                    Zharq
                  </h1>
                  <p className="font-poppins text-xs text-primary-900/70 -mt-1">
                    Skin Type Classifier
                  </p>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="relative font-poppins text-primary-900 font-bold text-lg transition-all duration-300 hover:text-primary-600"
                  >
                    {item.label}
                    {isActive(item.to) && (
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-600 rounded-full"></span>
                    )}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-600 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>

              {/* Mobile Burger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <span className="relative w-6 h-6">
                  <span
                    className={`absolute block w-full h-0.5 bg-primary-900 rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'top-3 rotate-45'
                        : 'top-1'
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-primary-900 rounded-full transition-all duration-300 top-3 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-primary-900 rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'top-3 -rotate-45'
                        : 'top-5'
                    }`}
                  />
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-28 px-8 pb-10">
            <div className="space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`block font-poppins text-2xl font-bold transition-all duration-300 ${
                    isActive(item.to)
                      ? 'text-primary-600'
                      : 'text-primary-900 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                  {isActive(item.to) && (
                    <span className="block w-16 h-1 bg-primary-600 rounded-full mt-2"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Optional: CTA di mobile menu */}
            <div className="mt-12">
              <Link
                to="/cek-wajah"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary-600 hover:bg-primary-500 text-white font-poppins font-bold py-5 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Cek Wajah Sekarang
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll effect (opsional) */}
      <style jsx>{`
        header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}

export default Header;