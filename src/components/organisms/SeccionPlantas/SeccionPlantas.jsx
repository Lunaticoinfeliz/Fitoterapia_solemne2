import EncabezadoSeccion from '../../atoms/EncabezadoSeccion/EncabezadoSeccion.jsx';
import TarjetaPlanta from '../../molecules/TarjetaPlanta/TarjetaPlanta.jsx';
import Boton from '../../atoms/Boton/Boton.jsx';
import { plantas } from '../../../datos/plantas.js';
import './SeccionPlantas.scss';

function SeccionPlantas() {
  const plantasDestacadas = plantas.slice(0, 6);

  return (
    <section id="plantas" className="seccion-plantas" aria-labelledby="titulo-plantas">
      <div className="seccion-plantas__contenedor">
        <EncabezadoSeccion
          idSeccion="titulo-plantas"
          titulo="Plantas Terapéuticas Esenciales"
          descripcion="Conoce las plantas medicinales más populares y fáciles de cultivar en tu hogar"
        />
        <div className="seccion-plantas__rejilla">
          {plantasDestacadas.map((planta) => (
            <TarjetaPlanta
              key={planta.id}
              nombre={planta.nombre}
              imagen={planta.imagen}
              beneficios={planta.beneficios}
              usos={planta.usos}
            />
          ))}
        </div>
        <div className="seccion-plantas__acciones">
          <Boton
            tipo="enlace"
            href="#catalogo"
            texto="Ver más plantas"
            aria-label="Ver catálogo completo de plantas"
          />
        </div>
      </div>
    </section>
  );
}

export default SeccionPlantas;
