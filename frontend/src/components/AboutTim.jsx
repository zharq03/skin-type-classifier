function AboutTim() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tentang Tim Pembuat Web App Ini</h2>
        <div className="flex flex-col gap-6">
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-center flex-col">
            <img
              src="/images/Fr.png"
              alt="Azhar"
              className="w-16 h-16 rounded mb-2"
            />
            <h3 className="text-xl font-semibold">Azhar</h3>
            <p className="text-sm text-gray-700">
              Sebagai Developer Machine Learning <br />
              Ig: @azhar_rz <br />
              git hub: bonz003 <br />
              LinkedIn: Azhar Rizqullah
            </p>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg border border-teal-200 flex items-center justify-center flex-col">
            <img
              src="/images/Fr.png"
              alt="Rizqullah"
              className="w-16 h-16 rounded mb-2"
            />
            <h3 className="text-xl font-semibold">Rizqullah</h3>
            <p className="text-sm text-gray-700">
              Sebagai UI dan UX Research <br />
              Ig: @athor_rz <br />
              git hub: bonz013 <br />
              LinkedIn: Azhar Rizqullah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTim;