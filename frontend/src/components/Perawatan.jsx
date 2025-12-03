import React from 'react';

function Perawatan() {
  return (
    <section className="py-16 lg:py-26 bg-neutral-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Gambar Kiri  */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/images/aset1.png"
                alt="Wanita sedang membersihkan wajah"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
          </div>

          {/* Teks + List Kanan */}
          <div className="order-1 lg:order-2">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              3 Perawatan Umum
            </h2>
            <h3 className="font-poppins text-3xl md:text-4xl font-semibold text-primary-900 mb-6">
              Harian Wajah
            </h3>
            <p className="font-poppins text-lg text-primary-900/80 leading-relaxed mb-10">
              Saran dari <span className="font-bold text-primary-600">dr. Tompi</span> bahwa untuk merawat wajah itu{' '}
              <span className="font-bold">hanya perlu 3 saja</span> — cukup moisturizer, cleanser, dan sunscreen yang digunakan untuk:
            </p>

            {/* List Perawatan - Card primary-50 */}
            <div className="bg-primary-50 rounded-3xl p-8 lg:p-10 shadow-card">
              <div className="space-y-6">

                {/* Sunscreen */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white p-3 shadow-lg ring-4 ring-white/50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="/images/aset7.png" 
                    alt="Sunscreen" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-poppins text-xl font-bold text-primary-900 mb-1">
                    Sunscreen
                  </h4>
                  <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
                    Melindungi kulit dari sinar UV berbahaya. Wajib dipakai setiap hari, bahkan saat mendung.
                  </p>
                </div>
              </div>

              {/* Moisturizer */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white p-3 shadow-lg ring-4 ring-white/50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="/images/aset8.png" 
                    alt="Moisturizer" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-poppins text-xl font-bold text-primary-900 mb-1">
                    Moisturizer
                  </h4>
                  <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
                    Menjaga kelembapan kulit, mencegah kekeringan dan iritasi. Pilih sesuai tipe kulitmu.
                  </p>
                </div>
              </div>

              {/* Cleanser */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white p-3 shadow-lg ring-4 ring-white/50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="/images/aset9.png" 
                    alt="Cleanser" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-poppins text-xl font-bold text-primary-900 mb-1">
                    Cleanser
                  </h4>
                  <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
                    Membersihkan kotoran, minyak, dan sisa makeup. Gunakan 2x sehari (pagi & malam).
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perawatan;