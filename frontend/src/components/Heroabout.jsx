import React from 'react';

function Heroabout() {
  return (
    <section className="bg-gradient-primary py-24 md:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Judul */}
        <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-900 leading-tight tracking-tight">
          Tentang <span className="text-primary-600">FaceDX</span>
        </h1>
        {/* Deskripsi */}
        <p className="font-poppins text-lg md:text-xl lg:text-2xl text-primary-900/85 mt-8 max-w-4xl mx-auto leading-relaxed text-center">
        Kami menggunakan{' '}
        <span className="font-bold text-primary-600">teknologi AI canggih</span> untuk
        <br className="sm:hidden" />
        {' '}mengenali tipe kulit wajahmu{' '}
        <span className="font-semibold"> berjerawat, berminyak, kering, atau normal</span>
        <br className="hidden md:block" />
        hanya dalam hitungan detik, lalu memberikan rekomendasi perawatan yang tepat.
      </p>
        <div className="mt-12 flex justify-center gap-5">
          <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
          <div className="w-10 h-1.5 bg-primary-500 rounded-full"></div>
          <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}

export default Heroabout;