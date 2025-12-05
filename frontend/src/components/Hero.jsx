import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-primary min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Text Section */}
        <div className="max-w-2xl text-left lg:text-left">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold text-primary-900 leading-tight">
            Selamat Datang
          </h1>
          <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-primary-900 mt-3 mb-6">
            Di FaceDX <span className="text-primary-600">Skin Type Classifier</span>
          </h2>

          <p className="font-poppins text-lg md:text-xl text-primary-900/80 leading-relaxed mb-10">
            Web ini dirancang khusus untuk mendeteksi tipe kulit wajah kamu — 
            <span className="font-semibold"> berminyak, kering, berjerawat, atau normal</span> — 
            hanya dengan teknologi AI canggih. <br /><br />
            Temukan perawatan dan makeup yang <span className="text-primary-600 font-semibold">paling cocok</span> untuk kulitmu. Yuk mulai sekarang!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/cek-wajah"
              className="bg-primary-600 hover:bg-primary-500 text-white font-poppins font-semibold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              Mulai Cek Sekarang
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] relative">
            <img
              src="/images/Frame.png"
              alt="Ilustrasi wajah cantik dengan skin care"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;