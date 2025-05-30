function VisiMisi() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Visi Misi</h2>
        <div className="flex flex-col gap-6">
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Visi</h3>
              <p className="text-sm text-gray-700">
                Normal adalah Tipe kulit yang tidak sering mengalami kesensitifan pada skincare atau perawatan wajah
              </p>
            </div>
            <img
              src="/images/Fr.png"
              alt="Visi"
              className="w-16 h-16 rounded"
            />
          </div>
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Misi</h3>
              <p className="text-sm text-gray-700">
                Normal adalah Tipe kulit yang sering mengalami kesensitifan pada skincare atau perawatan wajah
              </p>
            </div>
            <img
              src="/images/Fr.png"
              alt="Misi"
              className="w-16 h-16 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisiMisi;