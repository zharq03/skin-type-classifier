import React from 'react';

function VisiMisi() {
  return (
    <section className=" lg:py-20 bg-neutral-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Judul Section */}
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary-900 text-center mb-16">
          Visi Misi
        </h2>

        <div className="space-y-12">

          {/* Card Visi */}
          <div className="bg-primary-50 rounded-3xl lg:rounded-[40px] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden relative group">
            <div className="p-10 lg:p-14 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 -mt-16 -ml-6 md:-mt-20 md:-ml-10">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-xl p-4 rotate-[-8deg] group-hover:rotate-[-4deg] transition-transform">
                  <img
                    src="/images/aset16.png"  
                    alt="Visi"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Teks */}
              <div className="flex-1 mt-6 md:mt-0">
                <h3 className="font-poppins text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                  Visi
                </h3>
                <p className="font-poppins text-primary-900/80 text-lg leading-relaxed">
                  Menjadi solusi terdepan di Indonesia yang membantu setiap orang 
                  mengenal dan merawat kulit wajahnya dengan benar melalui teknologi AI 
                  yang mudah diakses, akurat, dan terjangkau.
                </p>
              </div>
            </div>
          </div>

          {/* Card Misi */}
          <div className="bg-primary-50 rounded-3xl lg:rounded-[40px] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden relative group">
            <div className="p-10 lg:p-14 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 -mt-16 -ml-6 md:-mt-20 md:-ml-10">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-xl p-4 rotate-[-6deg] group-hover:rotate-[-2deg] transition-transform">
                  <img
                    src="/images/aset17.png" 
                    alt="Misi"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Teks */}
              <div className="flex-1 mt-6 md:mt-0">
                <h3 className="font-poppins text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                  Misi
                </h3>
                <p className="font-poppins text-primary-900/80 text-lg leading-relaxed">
                  Memberikan edukasi dan akses teknologi canggih kepada masyarakat 
                  agar dapat memahami tipe kulitnya dengan benar, memilih produk yang tepat, 
                  dan membangun rutinitas perawatan wajah yang sehat serta berkelanjutan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisiMisi;