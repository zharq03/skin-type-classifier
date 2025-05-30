function Perawatan() {
  return (
    <section className="py-12 bg-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-1/2 md:w-1/3">
          <img
            src="/images/Frame.png"
            alt="Perawatan Wajah"
            className="rounded-[20px] object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-6">3 Perawatan Umum</h2>
          <h3 className="text-2xl font-semibold text-black mb-4">Harian Wajah</h3>
          <p className="text-lg text-black mb-6">
            Saran dari dokter Tompi bahwa untuk merawat wajah itu hanya perlu 3 saja moisturizer, cleanser dan sunscreen yang digunakan untuk:
          </p>
          <div className="flex flex-col gap-4">
            <div className="bg-teal-100 p-4 rounded-lg border border-teal-200">
              <div className="flex items-center mb-2">
                <img
                  src="/images/Fr.png"
                  alt="Sunscreen"
                  className="w-10 h-10 mr-2"
                />
                <h4 className="text-xl font-semibold">Sunscreen</h4>
              </div>
              <p className="text-sm text-gray-700">
                Untuk pelindung dari sinar matahari ultraviolet pada wajah, digunakan pada siang hari.
              </p>
            </div>
            <div className="bg-teal-100 p-4 rounded-lg border border-teal-200">
              <div className="flex items-center mb-2">
                <img
                  src="/images/Fr.png"
                  alt="Moisturizer"
                  className="w-10 h-10 mr-2"
                />
                <h4 className="text-xl font-semibold">Moisturizer</h4>
              </div>
              <p className="text-sm text-gray-700">
                Untuk pelembapan dari sinar matahari ultraviolet pada wajah, digunakan pada siang hari.
              </p>
            </div>
            <div className="bg-teal-100 p-4 rounded-lg border border-teal-200">
              <div className="flex items-center mb-2">
                <img
                  src="/images/Fr.png"
                  alt="Cleanser"
                  className="w-10 h-10 mr-2"
                />
                <h4 className="text-xl font-semibold">Cleanser</h4>
              </div>
              <p className="text-sm text-gray-700">
                Untuk pembersihan dari sinar matahari ultraviolet pada wajah, digunakan pada siang hari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perawatan;