import { useState } from 'react';
import './ImagenConRespaldo.scss';

function ImagenConRespaldo({ src, textoAlternativo, className = '' }) {
  const [tieneError, setTieneError] = useState(false);

  if (tieneError) {
    return (
      <div
        className={`imagen-respaldo imagen-respaldo--error ${className}`}
        role="img"
        aria-label={textoAlternativo}
      >
        <span className="imagen-respaldo__texto">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={textoAlternativo}
      className={`imagen-respaldo ${className}`}
      onError={() => setTieneError(true)}
      loading="lazy"
    />
  );
}

export default ImagenConRespaldo;
