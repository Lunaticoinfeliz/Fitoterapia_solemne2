import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import ImagenConRespaldo from '../../atoms/ImagenConRespaldo/ImagenConRespaldo.jsx';
import Boton from '../../atoms/Boton/Boton.jsx';
import './TarjetaEvento.scss';

function TarjetaEvento({ titulo, descripcion, fecha, hora, ubicacion, participantes, imagen }) {
  return (
    <article className="tarjeta-evento">
      <div className="tarjeta-evento__imagen-contenedor">
        <ImagenConRespaldo
          src={imagen}
          textoAlternativo={`Imagen del evento ${titulo}`}
          className="tarjeta-evento__imagen"
        />
      </div>
      <div className="tarjeta-evento__cuerpo">
        <h3 className="tarjeta-evento__titulo">{titulo}</h3>
        <p className="tarjeta-evento__descripcion">{descripcion}</p>
        <ul className="tarjeta-evento__metadatos">
          <li>
            <Calendar className="tarjeta-evento__icono" aria-hidden="true" />
            <span>{fecha}</span>
          </li>
          <li>
            <Clock className="tarjeta-evento__icono" aria-hidden="true" />
            <span>{hora}</span>
          </li>
          <li>
            <MapPin className="tarjeta-evento__icono" aria-hidden="true" />
            <span>{ubicacion}</span>
          </li>
          <li>
            <Users className="tarjeta-evento__icono" aria-hidden="true" />
            <span>{participantes} participantes</span>
          </li>
        </ul>
        <Boton texto="Reservar cupo" className="boton--ancho-completo" />
      </div>
    </article>
  );
}

export default TarjetaEvento;
