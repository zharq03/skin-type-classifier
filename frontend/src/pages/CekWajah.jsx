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
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary-900 mb-4">
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
                <div className="mt-6">
                  <img src={image} alt="Preview" className="w-full rounded-2xl shadow-lg" />
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
  <div className="mt-6 p-8 bg-gradient-to-br from-primary-50 to-white rounded-3xl shadow-xl border border-primary-200 overflow-hidden relative">
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl"></div>

    <div className="relative z-10">
      <p className="text-lg font-poppins text-primary-900 mb-3">Hasil deteksi kulit wajahmu</p>

      {/* Auto-mapping dari bahasa Inggris ke Indonesia + ikon */}
      {(() => {
        const normalized = result?.trim().toLowerCase();

        // Mapping lengkap & anti-gagal
        const config = {
          oily: {
            display: "Berminyak",
            bigIcon: <Sparkles className="w-12 h-12 text-yellow-500" />,
            tips: [
              { icon: <Droplets className="w-5 h-5 text-cyan-600" />, text: "Cleanser berbusa setiap hari" },
              { icon: <Sparkles className="w-5 h-5 text-emerald-600" />, text: "Clay mask 2–3× seminggu" }
            ]
          },
          normal: {
            display: "Normal",
            bigIcon: <Smile className="w-12 h-12 text-green-500" />,
            tips: [
              { icon: <CheckCircle2 className="w-5 h-5 text-green-600" />, text: "Kulit ideal! Basic routine cukup" },
              { icon: <Sun className="w-5 h-5 text-yellow-500" />, text: "Sunscreen setiap hari wajib" }
            ]
          },
          dry: {
            display: "Kering",
            bigIcon: <Frown className="w-12 h-12 text-orange-500" />,
            tips: [
              { icon: <CloudRain className="w-5 h-5 text-blue-600" />, text: "Hydrating toner + serum HA" },
              { icon: <Heart className="w-5 h-5 text-pink-500" />, text: "Moisturizer kental malam hari" }
            ]
          },
          acne: {
            display: "Berjerawat",
            bigIcon: <AlertTriangle className="w-12 h-12 text-red-500" />,
            tips: [
              { icon: <Zap className="w-5 h-5 text-purple-600" />, text: "Salicylic acid / Benzoyl peroxide" },
              { icon: <Shield className="w-5 h-5 text-teal-600" />, text: "Sunscreen non-comedogenic" }
            ]
          }
        };

        const skin = config[normalized] || null;

        if (!skin) {
          return <p className="text-red-600 font-medium">Jenis kulit tidak dikenali: {result}</p>;
        }

        return (
          <>
            {/* Nama jenis kulit + ikon besar */}
            <div className="flex items-center justify-center gap-4 mb-5">
              {skin.bigIcon}
              <h3 className="text-4xl md:text-5xl font-bold text-primary-700">{skin.display}</h3>
            </div>

            {/* Tips singkat */}
            <div className="space-y-4 text-primary-800 font-medium text-center">
              {skin.tips.map((tip, i) => (
                <p key={i} className="flex items-center justify-center gap-2">
                  {tip.icon} {tip.text}
                </p>
              ))}
            </div>
          </>
        );
      })()}

      {/* CTA responsif */}
      <div className="mt-7 pt-5 border-t border-primary-200">
        <p className="text-sm text-primary-600 font-semibold flex items-center justify-center gap-2">
          <span className="hidden lg:inline">
            <ArrowRight className="w-4 h-4" /> Lihat rekomendasi lengkap di sebelah kanan
          </span>
          <span className="lg:hidden">
            <ArrowDown className="w-4 h-4" /> Scroll ke bawah untuk saran lengkap
          </span>
        </p>
      </div>
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
    </>
  );
}

export default CekWajah;