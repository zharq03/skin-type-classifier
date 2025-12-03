// src/components/SkinTypeCard.jsx
import React from 'react';

function SkinTypeCard({ type, imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 flex items-center gap-6 group">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h3 className="font-poppins text-2xl font-bold text-primary-900 mb-1">
          {title}
        </h3>
        <p className="font-poppins text-primary-900/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SkinTypeCard;