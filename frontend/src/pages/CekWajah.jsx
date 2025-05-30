import { useState } from 'react';

function CekWajah() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult('');
      setError('');
    }
  };

  const handlePredict = async () => {
    if (!image) {
      setError('Pilih gambar terlebih dahulu');
      return;
    }

    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('image', fileInput.files[0]);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setResult('');
      } else {
        setResult(data.prediction);
        setError('');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat memproses gambar');
      setResult('');
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-100 to-teal-200 py-12 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Left Section: Image Upload and Prediction */}
        <div className="md:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mari Kita Cek Jenis Kulit Wajah Anda</h2>
          <p className="text-lg text-gray-600 mb-6">
            Saran dari dokter Tompi bahwa untuk merawat wajah itu hanya perlu 3 saja moisturizer, cleanser dan sunscreen yang digunakan untuk:
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4 w-full text-gray-600"
            />
            {image && (
              <img src={image} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
            )}
            <button
              onClick={handlePredict}
              className="w-full bg-white text-teal-600 border border-teal-600 py-2 px-4 rounded-full hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Cek
            </button>
            {result && (
              <p className="mt-4 text-lg text-gray-800">
                Jenis kulit wajah: <strong>{result}</strong>
              </p>
            )}
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
        </div>

        {/* Right Section: Skin Type Explanations */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
          <img
            src="/images/Fr.png"
            alt="Dry skin illustration"
            className="w-16 h-16 rounded-full object-cover"
          />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Oily</h3>
              <p className="text-gray-600">
                Untuk pelindung dari tabir surya atau sinar ultraviolet pada matahari digunakan pada siang hari
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
          <img
            src="/images/Fr.png"
            alt="Dry skin illustration"
            className="w-16 h-16 rounded-full object-cover"
          />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Normal</h3>
              <p className="text-gray-600">
                Untuk pelindung dari tabir surya atau sinar ultraviolet pada matahari digunakan pada siang hari
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
          <img
            src="/images/Fr.png"
            alt="Dry skin illustration"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Dry</h3>
            <p className="text-gray-600">
              Untuk pelindung dari tabir surya atau sinar ultraviolet pada matahari digunakan pada siang hari
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default CekWajah;