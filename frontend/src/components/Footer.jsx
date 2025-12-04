import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-primary text-primary-900 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Bagian atas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">

          {/* Layanan */}
          <div className="text-left">
            <p className="font-poppins text-sm text-primary-900/70">Layanan:</p>
            <a
              href="mailto:azhar.rizqullah234@gmail.com"
              className="font-poppins font-semibold text-primary-900 hover:text-primary-600 transition-colors flex items-center gap-2 mt-1"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
              Cek Jenis Kulit
            </a>
          </div>

          {/* Email */}
         <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-medium text-primary-900/70 text-sm">
              Contact person:
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
              <a
                href="mailto:azhar.rizqullah234@gmail.com"
                className="font-poppins font-semibold text-primary-900 hover:text-primary-600 transition-colors"
              >
                azhar.rizqullah234@gmail.com
              </a>
            </div>
          </div>

          {/* Brand */}
          <div className="md:text-right">
            <h2 className="font-poppins text-2xl font-bold">FaceDX</h2>
            <p className="font-poppins text-primary-900/70 text-xs -mt-1">
              Skin Type Classifier
            </p>
          </div>
        </div>

        {/* Copyright  */}
        <div className="border-t border-primary-900/20 pt-5 text-center">
          <p className="font-poppins text-xs text-primary-900/60">
            © 2025 <span className="font-semibold text-primary-900">Zharq</span>. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;