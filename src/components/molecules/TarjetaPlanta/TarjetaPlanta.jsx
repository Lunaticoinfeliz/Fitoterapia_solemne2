import ImagenConRespaldo from '../../atoms/ImagenConRespaldo/ImagenConRespaldo.jsx';
import './TarjetaPlanta.scss';

function TarjetaPlanta({ nombre, imagen, beneficios, usos }) {
  return (
    <article className="tarjeta-planta">
      <div className="tarjeta-planta__imagen-contenedor">
        <ImagenConRespaldo
          src={imagen}
          textoAlternativo={`Fotografía de la planta ${nombre}`}
          className="tarjeta-planta__imagen"
        />
      </div>
      <div className="tarjeta-planta__cuerpo">
        <h3 className="tarjeta-planta__nombre">{nombre}</h3>
        <div className="tarjeta-planta__detalle">
          <span className="tarjeta-planta__etiqueta">Beneficios:</span>
          <p>{beneficios}</p>
        </div>
        <div className="tarjeta-planta__detalle">
          <span className="tarjeta-planta__etiqueta">Usos:</span>
          <p>{usos}</p>
        </div>
      </div>
    </article>
  );
}

export default TarjetaPlanta;
