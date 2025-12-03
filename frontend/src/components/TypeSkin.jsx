import React from 'react';

function TypeSkin() {
  return (
    <section className="py-20 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul */}
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary-900 text-center mb-4">
          Umumnya Tipe Wajah Ada 4
        </h2>
        <p className="font-poppins text-2xl md:text-3xl font-medium text-primary-900/80 text-center mb-16">
          Berjerawat, Berminyak, Kering, dan Normal
        </p>

        {/* Grid: 1-2 kolom di mobile, 4 kolom di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* 01 - Berjerawat */}
          <div className="group bg-primary-50 rounded-3xl shadow-card hover:shadow-card-hover hover:bg-primary-500 transition-all duration-500 cursor-pointer transform hover:-translate-y-3">
            <div className="p-8 text-center">
              <img
                src="/images/aset3.png"
                alt="Kulit Berjerawat"
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <div className="text-6xl font-bold text-primary-900/20 group-hover:text-white/30 mb-4">
                01
              </div>
              <h3 className="font-poppins text-2xl font-bold text-primary-900 group-hover:text-white transition-colors">
                Berjerawat
              </h3>
              <p className="font-poppins text-primary-900/70 group-hover:text-white/80 text-sm leading-relaxed mt-4 mb-8">
                Rentan komedo, jerawat inflamasi, dan breakout. Butuh treatment dengan salicylic acid & benzoyl peroxide.
              </p>
              <a
                href="/cek-wajah"
                className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-poppins font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Cek Sekarang
              </a>
            </div>
          </div>

          {/* 02 - Berminyak */}
          <div className="group bg-primary-50 rounded-3xl shadow-card hover:shadow-card-hover hover:bg-primary-500 transition-all duration-500 cursor-pointer transform hover:-translate-y-3">
            <div className="p-8 text-center">
              <img
                src="images/aset13.png"
                alt="Kulit Berminyak"
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <div className="text-6xl font-bold text-primary-900/20 group-hover:text-white/30 mb-4">
                02
              </div>
              <h3 className="font-poppins text-2xl font-bold text-primary-900 group-hover:text-white transition-colors">
                Berminyak
              </h3>
              <p className="font-poppins text-primary-900/70 group-hover:text-white/80 text-sm leading-relaxed mt-4 mb-8">
                Mengkilap, pori besar, mudah komedo. Cocok dengan oil-control dan clay mask.
              </p>
              <a
                href="/cek-wajah"
                className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-poppins font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Cek Sekarang
              </a>
            </div>
          </div>

          {/* 03 - Kering */}
          <div className="group bg-primary-50 rounded-3xl shadow-card hover:shadow-card-hover hover:bg-primary-500 transition-all duration-500 cursor-pointer transform hover:-translate-y-3">
            <div className="p-8 text-center">
              <img
                src="/images/aset15.png"
                alt="Kulit Kering"
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <div className="text-6xl font-bold text-primary-900/20 group-hover:text-white/30 mb-4">
                03
              </div>
              <h3 className="font-poppins text-2xl font-bold text-primary-900 group-hover:text-white transition-colors">
                Kering
              </h3>
              <p className="font-poppins text-primary-900/70 group-hover:text-white/80 text-sm leading-relaxed mt-4 mb-8">
                Kusam, kasar, mudah mengelupas. Butuh hidrasi intens dengan cream kental.
              </p>
              <a
                href="/cek-wajah"
                className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-poppins font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Cek Sekarang
              </a>
            </div>
          </div>

          {/* 04 - Normal */}
          <div className="group bg-primary-50 rounded-3xl shadow-card hover:shadow-card-hover hover:bg-primary-500 transition-all duration-500 cursor-pointer transform hover:-translate-y-3">
            <div className="p-8 text-center">
              <img
                src="/images/aset14.png"
                alt="Kulit Normal"
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <div className="text-6xl font-bold text-primary-900/20 group-hover:text-white/30 mb-4">
                04
              </div>
              <h3 className="font-poppins text-2xl font-bold text-primary-900 group-hover:text-white transition-colors">
                Normal
              </h3>
              <p className="font-poppins text-primary-900/70 group-hover:text-white/80 text-sm leading-relaxed mt-4 mb-8">
                Seimbang, halus, pori kecil. Tipe kulit ideal cukup hanya dengan perawatan perawata dasar.
              </p>
              <a
                href="/cek-wajah"
                className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-poppins font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Cek Sekarang
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TypeSkin;