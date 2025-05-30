function Teknologi() {
  return (
    <section className="py-12 bg-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-1/2 md:w-1/3">
          <img
            src="/images/Fr.png"
            alt="Teknologi"
            className="rounded-full object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-6">Teknologi Yang Digunakan</h2>
          <p className="text-lg text-black mb-6">
            Untuk mengklasifikasi wajah anda kami menggunakan 3 teknologi Machine Learning yang sudah di latih dengan data yang besar ini penjelasannya :
          </p>
          <div className="flex flex-col gap-4">
            <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Hybrid Approach</h3>
                <p className="text-sm text-gray-700">
                  Menggabungkan dua pintur untuk mengenali jenis kulit wajah dengan lebih akurat. Satu memahami gambar secara visual dan satu lagi memahami sifat-sifatnya.
                </p>
              </div>
              <img
                src="/images/Fr.png"
                alt="Hybrid Approach"
                className="w-16 h-16 rounded"
              />
            </div>
            <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Support Vector Machine</h3>
                <p className="text-sm text-gray-700">
                  Bertindak sebagai pengambil keputusan akhir jenis kulit wajah, dengan menggunakan data yang telah di proses oleh MobileNet untuk memberikan hasil akhir.
                </p>
              </div>
              <img
                src="/images/Fr.png"
                alt="Support Vector Machine"
                className="w-16 h-16 rounded"
              />
            </div>
            <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">MobileNet</h3>
                <p className="text-sm text-gray-700">
                  Sebuah model pintar yang telah di latih untuk mengenali pola dan bentuk pada gambar kulit wajah. Efisien dan cepat dalam memproses data gambar.
                </p>
              </div>
              <img
                src="/images/Fr.png"
                alt="MobileNet"
                className="w-16 h-16 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teknologi;