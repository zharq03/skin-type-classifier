function TypeSkin() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Umumnya Tipe Wajah Ada 3</h2>
        <h3 className="text-2xl font-semibold text-center mb-8">Berminyak, Kering, dan Normal</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200">
            <img
              src="/images/Fr.png"
              alt="Berminyak"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h4 className="text-3xl font-bold text-center mb-2">01</h4>
            <h3 className="text-xl font-semibold text-center mb-2">Berminyak</h3>
            <p className="text-sm text-gray-700 text-center mb-4">
              Berminyak adalah Tipe Kulit yang sangat berminyak dan sering mengkilap, kesesntian pada skincare atau perawatan wajah
            </p>
            <div className="text-center">
              <a
                href="/cek-wajah"
                className="bg-teal-600 text-white py-1 px-6 rounded-full hover:bg-teal-700 transition"
              >
                Cek
              </a>
            </div>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200">
            <img
              src="/images/Fr.png"
              alt="Normal"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h4 className="text-3xl font-bold text-center mb-2">02</h4>
            <h3 className="text-xl font-semibold text-center mb-2">Normal</h3>
            <p className="text-sm text-gray-700 text-center mb-4">
              Normal adalah Tipe Kulit yang sangat berminyak kesesntian pada skincare atau perawatan wajah
            </p>
            <div className="text-center">
              <a
                href="/cek-wajah"
                className="bg-teal-600 text-white py-1 px-6 rounded-full hover:bg-teal-700 transition"
              >
                Cek
              </a>
            </div>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200">
            <img
              src="/images/Fr.png"
              alt="Kering"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h4 className="text-3xl font-bold text-center mb-2">03</h4>
            <h3 className="text-xl font-semibold text-center mb-2">Kering</h3>
            <p className="text-sm text-gray-700 text-center mb-4">
              Kering adalah Tipe Kulit yang sangat berminyak kesesntian pada skincare atau perawatan wajah
            </p>
            <div className="text-center">
              <a
                href="/cek-wajah"
                className="bg-teal-600 text-white py-1 px-6 rounded-full hover:bg-teal-700 transition"
              >
                Cek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypeSkin;