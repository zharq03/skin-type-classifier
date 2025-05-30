function Hero() {
  return (
    <section className="bg-gradient-to-b from-teal-200 to-teal-600 min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-black text-left mb-4">Selamat Datang</h2>
          <h3 className="text-2xl font-semibold text-black text-left mb-4">Di Skin Type Classifier</h3>
          <p className="text-lg text-black text-left mb-6">
            Web ini di rancang untuk Mendeteksi tipe wajah apa anda apakah berminyak atau kering atau normal ? <br />
            dengan teknologi AI, anda dapat mengetahui tipe wajah anda, dan dapat mengenakan makeup, memilih perawatan apa yang cocok untuk wajah anda mari cek tipe wajah anda sekarang
          </p>
          <div className="flex justify-left gap-4">
            <a
              href="/cek-wajah"
              className="bg-teal-600 text-white py-1 px-8 rounded-full hover:bg-teal-700 transition"
            >
              Cek
            </a>
            <a
              href="/lihat"
              className="bg-white text-teal-600 py-1 px-7 rounded-full border border-teal-600 hover:bg-gray-100 transition"
            >
              Lihat
            </a>
          </div>
        </div>
        <div className="w-72 h-72">
          <img
            src="/images/Frame.png" Path gambar diperbarui
            alt="Wajah"
            className="rounded-[20px] object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;