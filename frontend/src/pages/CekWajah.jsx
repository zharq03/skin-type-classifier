// src/pages/CekWajah.jsx atau dimana kamu taruh
import { useState } from 'react';
import SkinTypeCard from '../components/SkinTypeCard';

function CekWajah() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && ['image/jpeg', 'image/png'].includes(selectedFile.type)) {
      console.log('File selected:', selectedFile.name);
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
      setResult('');
      setError('');
    } else {
      setError('Hanya file JPG atau PNG yang diperbolehkan');
      console.log('Invalid file type');
    }
  };

  const handlePredict = async () => {
    if (!file) {
      setError('Pilih gambar terlebih dahulu');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    console.log('Uploading:', formData.get('file').name);

    try {
      const response = await fetch('https://bareface-production.up.railway.app/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (data.error) {
        setError(
          data.error.includes('Wajah tidak ditemukan')
            ? 'Wajah tidak terdeteksi. Pastikan wajah terlihat jelas dan hanya satu wajah.'
            : data.error
        );
        setResult('');
      } else {
        setResult(data.prediction);
        setError('');
      }
    } catch (err) {
      setError('Gagal terhubung ke server. Coba lagi nanti.');
      console.error('Fetch error:', err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-primary pt-20 md:pt-28 lg:pt-36 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* Kiri: Upload & Hasil */}
        <div className="space-y-8">
          <div>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Cek Jenis Kulit Wajahmu Sekarang
            </h1>
            <p className="font-poppins text-lg text-primary-900/80">
              Upload foto wajahmu, dan AI kami akan mendeteksi apakah kulitmu <strong>berjerawat, berminyak, kering, atau normal</strong>.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-lg">
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleImageChange}
              className="w-full file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:bg-primary-600 file:text-white hover:file:bg-primary-500 cursor-pointer"
            />

            {image && (
              <div className="mt-6">
                <img src={image} alt="Preview" className="w-full rounded-2xl shadow-lg" />
              </div>
            )}

            <button
              onClick={handlePredict}
              disabled={!file}
              className="mt-6 w-full bg-primary-600 hover:bg-primary-500 disabled:bg-gray-400 text-white font-poppins font-bold py-5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {file ? 'Analisis Sekarang' : 'Pilih Gambar Dulu'}
            </button>

            {result && (
              <div className="mt-6 p-6 bg-primary-50 rounded-2xl text-center">
                <p className="text-lg font-poppins text-primary-900">Hasil deteksi:</p>
                <p className="text-4xl font-bold text-primary-600 mt-2">{result}</p>
              </div>
            )}

            {error && (
              <p className="mt-4 text-red-600 font-poppins font-medium text-center bg-red-50 py-3 rounded-xl">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Kanan: Penjelasan Jenis Kulit */}
        <div className="space-y-8">
          <SkinTypeCard
            type="oily"
            imageSrc="/images/aset13.png"
            title="Berminyak"
            description="Kulit mengkilap, pori besar, rentan jerawat. Butuh produk oil-control & clay mask."
          />
          <SkinTypeCard
            type="normal"
            imageSrc="/images/aset5.png"
            title="Normal"
            description="Kulit seimbang, halus, pori kecil. Tipe kulit ideal — cukup pakai basic routine."
          />
          <SkinTypeCard
            type="dry"
            imageSrc="/images/aset6.png"
            title="Kering"
            description="Kulit kusam, kasar, mudah iritasi. Butuh hidrasi intens dengan moisturizer kental."
          />
          <SkinTypeCard
            imageSrc="/images/aset3.png" 
            title="Berjerawat"
            description="Kulit rentan breakout, komedo, dan inflamasi. Butuh treatment dengan salicylic acid, benzoyl peroxide, atau retinoid."
          />
        </div>
      </div>
    </section>
  );
}

export default CekWajah;