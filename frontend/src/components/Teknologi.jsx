import React from 'react';

function Teknologi() {
  return (
    <section className="py-12 lg:py-26 bg-neutral-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Gambar Kiri */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/images/aset2.png"
                alt="AI Technology"
                className="w-full max-w-md rounded-full shadow-2xl object-cover border-8 border-white"
              />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-40 -z-10"></div>
            </div>
          </div>

          {/* Teks + List Kanan */}
          <div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Teknologi Yang Digunakan
            </h2>
            <p className="font-poppins text-lg text-primary-900/80 leading-relaxed mb-10">
              Untuk mengklasifikasi wajah anda, kami menggunakan <strong>3 teknologi Machine Learning</strong> 
              yang sudah dilatih dengan data besar. Ini penjelasannya:
            </p>

            {/* Card List - Background primary-50 */}
            <div className="bg-primary-50 rounded-3xl p-8 lg:p-10 shadow-card space-y-8">

              {/* Hybrid Approach */}
              <div className="flex items-center justify-between gap-6 group">
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-bold text-primary-900 mb-2">
                    Hybrid Approach
                  </h3>
                  <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
                    Menggabungkan dua model pintar: satu memahami gambar secara visual, 
                    satu lagi memahami fitur numerik kulit — hasilnya jauh lebih akurat.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-blue-400 rounded-2xl shadow-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                    <img src="/images/aset10.png" alt="Hybrid" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Support Vector Machine */}
              <div className="flex items-center justify-between gap-6 group">
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-bold text-primary-900 mb-2">
                    Support Vector Machine
                  </h3>
                  <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
                    Bertindak sebagai pengambil keputusan akhir. Memberikan hasil klasifikasi 
                    jenis kulit dengan akurasi tinggi berdasarkan data yang sudah diproses.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-2xl shadow-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                    <img src="/images/aset11.png" alt="SVM" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* MobileNet */}
              <div className="flex items-center justify-between gap-6 group">
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-bold text-primary-900 mb-2">
                    MobileNet
                  </h3>
                  <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
                    Model ringan & cepat yang sudah dilatih dengan jutaan gambar. 
                    Mampu mengenali tekstur, kilap, dan pori-pori kulit secara otomatis.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-2xl shadow-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                    <img src="/images/aset12.png" alt="MobileNet" className="w-full h-full object-contain" />
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

export default Teknologi;