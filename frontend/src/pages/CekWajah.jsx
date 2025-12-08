import { 
  Sparkles, Smile, Frown, AlertTriangle,
  Droplets, CheckCircle2, Sun, CloudRain,
  Heart, Zap, Shield, ArrowRight, ArrowDown
} from 'lucide-react';
import { useState } from 'react';
import SkinTypeCard from '../components/SkinTypeCard';

function CekWajah() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && ['image/jpeg', 'image/png'].includes(selectedFile.type)) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
      setResult('');
      setError('');
    } else {
      setError('Hanya file JPG atau PNG yang diperbolehkan');
    }
  };

  const handlePredict = async () => {
    if (!file) {
      setError('Pilih gambar terlebih dahulu');
      return;
    }

    setIsLoading(true);       
    setResult('');
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://bareface-production.up.railway.app/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        setError(
          data.error.includes('Wajah tidak ditemukan')
            ? 'Wajah tidak terdeteksi. Pastikan wajah terlihat jelas dan hanya satu wajah.'
            : data.error
        );
      } else {
        setResult(data.prediction);
      }
    } catch (err) {
      setError('Gagal terhubung ke server. Coba lagi nanti.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);  
    }
  };

  return (
    <>
      {/* POPUP LOADING */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-sm w-full mx-4 animate-pulse">
            {/* Spinner */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <svg className="w-20 h-20 animate-spin" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#D6FFF6"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#00AE89"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="80 150"
                    className="origin-center -rotate-90"
                  />
                </svg>
              </div>
            </div>

            {/* Teks */}
            <h2 className="text-2xl font-bold text-primary-900 text-center font-poppins">
              Sedang scan wajah Anda
            </h2>
            <p className="mt-3 text-primary-600 text-center font-poppins">
              Mohon tunggu sebentar, AI sedang menganalisis…
            </p>
          </div>
        </div>
      )}

      {/* ===== KONTEN UTAMA ===== */}
      <section className="min-h-screen bg-gradient-primary pt-24 md:pt-28 lg:pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Kiri: Upload & Hasil */}
          <div className="space-y-8">
            <div>
              <h1 className="font-poppins text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Cek Jenis Kulit Wajahmu Sekarang
              </h1>
              <p className="font-poppins text-lg text-primary-900/80">
                Upload foto wajahmu, dan AI kami akan mendeteksi apakah kulitmu{' '}
                <strong>berjerawat, berminyak, kering, atau normal</strong>.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-card hover:shadow-card-hover transition-shadow p-8 max-w-lg">
              <input
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleImageChange}
                className="w-full file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:bg-primary-600 file:text-white hover:file:bg-primary-500 cursor-pointer"
              />

              {image && (
  <div className="mt-6 -mx-8 px-8">
    {/* Container gambar — TINGGI FIX & SUPER PENDEK */}
    <div className="
      relative bg-gray-100 rounded-2xl  overflow-hidden
      border-4 border-dashed border-primary-200
      /* Tinggi super pendek & konsisten */
      h-64           /* Mobile: 256px  ← sangat pendek */
      sm:h-72        /* Tablet: 288px  */
      lg:h-80        /* Desktop: 320px ← ini yang kamu mau: pendek banget di desktop! */
      overflow-y-auto
      scrollbar scrollbar-w-2 scrollbar-thumb-rounded-full
      scrollbar-thumb-primary-600 scrollbar-track-primary-50
    ">
      <img 
        src={image} 
        alt="Preview wajah" 
        className="w-full h-auto block min-h-full object-cover object-top"
      />
    </div>

    {/* Petunjuk scroll */}
    <p className="text-xs text-primary-700 text-center mt-3 font-medium">
      Geser ke bawah jika ingin melihat seluruh foto
    </p>
  </div>
)}

              <button
                onClick={handlePredict}
                disabled={!file || isLoading}
                className={`
                  mt-6 w-full font-poppins font-bold py-5 rounded-full shadow-lg transition-all duration-300 text-lg
                  ${isLoading
                    ? 'bg-primary-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-xl'
                  }
                  text-white
                `}
              >
                {isLoading ? 'Sedang Menganalisis…' : file ? 'Analisis Sekarang' : 'Pilih Gambar Dulu'}
              </button>

             {result && (
  <div className="mt-6 p-6 bg-white rounded-3xl shadow-card hover:shadow-card-hover border-2 border-primary-300 transition-all">
    {/* Header: Hasil + Ikon */}
    <div className="flex items-center justify-center gap-4 mb-4">
      {(() => {
        const icons = {
          oily: <Sparkles className="w-10 h-10 text-yellow-500" />,
          normal: <Smile className="w-10 h-10 text-green-500" />,
          dry: <Frown className="w-10 h-10 text-orange-500" />,
          acne: <AlertTriangle className="w-10 h-10 text-red-500" />
        };
        const display = {
          oily: "Berminyak", normal: "Normal", dry: "Kering", acne: "Berjerawat"
        };
        const key = result?.trim().toLowerCase();
        return (
          <>
            {icons[key] || <AlertTriangle className="w-10 h-10 text-red-500" />}
            <h3 className="text-3xl font-bold text-primary-900">
              {display[key] || result}
            </h3>
          </>
        );
      })()}
    </div>

    {/* 2 Tips Singkat Paling Penting */}
    <div className="space-y-3 text-center">
      {(() => {
        const tips = {
          oily: [
            { icon: <Droplets className="w-5 h-5" />, text: "Cleanser berbusa" },
            { icon: <Sparkles className="w-5 h-5" />, text: "Clay mask 2x/minggu" }
          ],
          normal: [
            { icon: <CheckCircle2 className="w-5 h-5" />, text: "Basic routine cukup" },
            { icon: <Sun className="w-5 h-5" />, text: "Sunscreen setiap hari" }
          ],
          dry: [
            { icon: <CloudRain className="w-5 h-5" />, text: "Hydrating toner" },
            { icon: <Heart className="w-5 h-5" />, text: "Moisturizer kental" }
          ],
          acne: [
            { icon: <Zap className="w-5 h-5" />, text: "Salicylic acid" },
            { icon: <Shield className="w-5 h-5" />, text: "Sunscreen non-comedogenic" }
          ]
        };
        const key = result?.trim().toLowerCase();
        const selected = tips[key] || tips.acne;

        return selected.map((tip, i) => (
          <p key={i} className="flex items-center justify-center gap-2 text-primary-800 font-medium text-sm">
            <span className="text-primary-600">{tip.icon}</span>
            {tip.text}
          </p>
        ));
      })()}
    </div>

    {/* CTA Kecil */}
    <div className="mt-5 pt-4 border-t border-primary-200">
  <p className="text-xs text-primary-600 font-bold flex items-center gap-2">
    <span className="hidden lg:flex items-center gap-2">
      <ArrowRight className="w-4 h-4" />
      <span>Lihat detail di sebelah kanan</span>
    </span>
    <span className="flex lg:hidden items-center gap-2">
      <ArrowDown className="w-4 h-4" />
      <span>Scroll ke bawah untuk detail</span>
    </span>
  </p>
</div>
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
    isActive={result?.trim().toLowerCase() === "oily"}
  />
  <SkinTypeCard
    type="normal"
    imageSrc="/images/aset5.png"
    title="Normal"
    description="Kulit seimbang, halus, pori kecil. Tipe kulit ideal — cukup pakai basic routine."
    isActive={result?.trim().toLowerCase() === "normal"}
  />
  <SkinTypeCard
    type="dry"
    imageSrc="/images/aset6.png"
    title="Kering"
    description="Kulit kusam, kasar, mudah iritasi. Butuh hidrasi intens dengan moisturizer kental."
    isActive={result?.trim().toLowerCase() === "dry"}
  />
  <SkinTypeCard
    type="acne"
    imageSrc="/images/aset3.png"
    title="Berjerawat"
    description="Kulit rentan breakout, komedo, dan inflamasi. Butuh treatment dengan salicylic acid, benzoyl peroxide, atau retinoid."
    isActive={result?.trim().toLowerCase() === "acne"}
  />
</div>
        </div>
      </section>
    </>
  );
}

export default CekWajah;