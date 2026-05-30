import EncabezadoSeccion from '../../atoms/EncabezadoSeccion/EncabezadoSeccion.jsx';
import TarjetaBeneficio from '../../molecules/TarjetaBeneficio/TarjetaBeneficio.jsx';
import { beneficiosHuerto } from '../../../datos/beneficiosHuerto.js';
import './SeccionGuiaHuerto.scss';

function SeccionGuiaHuerto() {
  return (
    <section className="seccion-guia" aria-labelledby="titulo-guia-huerto">
      <div className="seccion-guia__contenedor">
        <EncabezadoSeccion
          idSeccion="titulo-guia-huerto"
          titulo="Guía de uso correcto del Huerto"
          descripcion="Más que un jardín, es una fuente de sanación integral para cuerpo, mente y espíritu"
        />
        <div className="seccion-guia__rejilla">
          {beneficiosHuerto.map((beneficio) => (
            <TarjetaBeneficio
              key={beneficio.id}
              titulo={beneficio.titulo}
              descripcion={beneficio.descripcion}
              nombreIcono={beneficio.nombreIcono}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeccionGuiaHuerto;
