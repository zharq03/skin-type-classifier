import { useState } from 'react';

function CekWajah() {
  const [image, setImage] = useState(null); // Menyimpan URL pratinjau
  const [file, setFile] = useState(null); // Menyimpan file asli
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && ['image/jpeg', 'image/png'].includes(selectedFile.type)) {
      console.log('File selected:', selectedFile.name); // Debugging
      setFile(selectedFile); // Simpan file asli
      setImage(URL.createObjectURL(selectedFile)); // Simpan URL pratinjau
      setResult('');
      setError('');
    } else {
      setError('Hanya file JPG atau PNG yang diperbolehkan');
      console.log('Invalid file type'); // Debugging
    }
  };

  const handlePredict = async () => {
    if (!file) {
      setError('Pilih gambar terlebih dahulu');
      console.error('No file available for prediction'); // Debugging
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Gunakan kunci 'file' sesuai backend
    console.log('FormData prepared:', formData.get('file').name); // Debugging

    try {
      const response = await fetch('https://bareface-production.up.railway.app/', {
        method: 'POST',
        body: formData,
      });
      console.log('Response status:', response.status); // Debugging
      const data = await response.json();
      console.log('Response data:', data); // Debugging
      if (data.error) {
        // Sesuaikan pesan untuk deteksi wajah
        if (data.error === 'Wajah tidak ditemukan, silakan scan wajah Anda') {
          setError('Wajah tidak ditemukan, silakan unggah gambar wajah Anda');
        } else {
          setError(data.error);
        }
        setResult('');
      } else {
        setResult(data.prediction);
        setError('');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat memproses gambar. Pastikan server berjalan.');
      setResult('');
      console.error('Fetch error:', err); // Debugging
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-100 to-teal-200 py-12 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Left Section: Image Upload and Prediction */}
        <div className="md:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mari Kita Cek Jenis Kulit Wajah Anda</h2>
          <p className="text-lg text-gray-600 mb-6">
            Saran dari dokter Tompi bahwa untuk merawat wajah itu hanya perlu 3 saja: moisturizer, cleanser, dan sunscreen yang digunakan untuk:
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
            {error && (
              <p className="mt-4 text-red-500 font-semibold">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Skin Type Explanations */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/Fr.png`}
              alt="Oily skin illustration"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Oily</h3>
              <p className="text-gray-600">
                Untuk pelindung dari tabir surya atau sinar ultraviolet pada matahari digunakan pada siang hari.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/Fr.png`}
              alt="Normal skin illustration"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Normal</h3>
              <p className="text-gray-600">
                Untuk pelindung dari tabir surya atau sinar ultraviolet pada matahari digunakan pada siang hari.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/Fr.png`}
              alt="Dry skin illustration"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Dry</h3>
              <p className="text-gray-600">
                Untuk pelindung dari tabir surya atau sinar ultraviolet pada matahari digunakan pada siang hari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CekWajah;