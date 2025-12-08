// src/components/SkinTypeCard.jsx
import { Droplets, Smile, CloudRain, Zap, CheckCircle2 } from 'lucide-react';

export default function SkinTypeCard({ 
  type, 
  imageSrc, 
  title, 
  description, 
  isActive = false   // ← prop baru buat highlight
}) {
  // Ikon kecil sesuai tipe
  const icons = {
    oily: <Droplets className="w-6 h-6 text-cyan-600" />,
    normal: <Smile className="w-6 h-6 text-green-600" />,
    dry: <CloudRain className="w-6 h-6 text-blue-600" />,
    acne: <Zap className="w-6 h-6 text-purple-600" />
  };

  // Tips singkat (cuma 3 item, biar nggak kepanjangan)
  const quickTips = {
    oily: ["Cleanser berbusa", "Clay mask 2x/minggu", "Oil-free moisturizer"],
    normal: ["Basic routine cukup", "Sunscreen wajib", "Jangan over-skincare"],
    dry: ["Hydrating toner", "Cream malam kental", "Hindari sabun batang"],
    acne: ["Salicylic acid", "Jangan pencet jerawat", "Non-comedogenic sunscreen"]
  };

  const tips = quickTips[type] || quickTips.oily;

  return (
    <div className={`
      bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 
      p-6 flex items-center gap-6 group relative overflow-hidden
      ${isActive ? 'ring-4 ring-primary-500 shadow-2xl scale-105' : ''}
    `}>
      {/* Efek glow kalau aktif */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent pointer-events-none"></div>
      )}

      {/* Gambar */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Ikon kecil di pojok gambar */}
          <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
            {icons[type] || icons.oily}
          </div>
        </div>
      </div>

      {/* Teks */}
      <div className="flex-1">
        <h3 className="font-poppins text-2xl font-bold text-primary-900 mb-2 flex items-center gap-3">
          {title}
          {isActive && <span className="text-sm bg-primary-600 text-white px-3 py-1 rounded-full animate-pulse">Kulitmu!</span>}
        </h3>
        <p className="font-poppins text-primary-900/70 text-sm leading-relaxed mb-3">
          {description}
        </p>

        {/* Tips singkat */}
        <div className="flex flex-wrap gap-2">
          {tips.map((tip, i) => (
            <span key={i} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {tip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}