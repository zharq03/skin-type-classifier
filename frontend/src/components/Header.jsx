import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Helper untuk cek halaman aktif
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop blur + transparan */}
      <div className="bg-white/70 backdrop-blur-lg border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <nav className="flex justify-between items-center">

            {/* Logo / Brand */}
            <Link to="/" className="flex items-center space-x-3 group">

              <div>
                <h1 className="font-poppins text-2xl font-bold text-primary-900">
                  FaceDX
                </h1>
                <p className="font-poppins text-xs text-primary-900 -mt-1">
                  Skin Type Classifier
                </p>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              {[
                { to: '/', label: 'Beranda' },
                { to: '/cek-wajah', label: 'Cek Wajah' },
                { to: '/tentang-kami', label: 'Tentang Kami' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative font-poppins text-primary-900 font-bold text-lg transition-all duration-300 hover:text-primary-600"
                >
                  {item.label}

                  {/* Indicator aktif  */}
                  {isActive(item.to) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-600 rounded-full animate-pulse"></span>
                  )}

                  {/* Hover underline effect */}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button  */}
            <button className="md:hidden text-primary-900">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <style jsx>{`
        header {
          transition: all 0.4s ease;
        }
        header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </header>
  );
}

export default Header;