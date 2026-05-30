import ImagenConRespaldo from '../../atoms/ImagenConRespaldo/ImagenConRespaldo.jsx';
import Boton from '../../atoms/Boton/Boton.jsx';
import './SeccionHero.scss';

const imagenHero =
  'https://images.unsplash.com/photo-1756935446645-cc030b6962a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

function SeccionHero() {
  return (
    <section className="seccion-hero" aria-labelledby="titulo-hero">
      <ImagenConRespaldo
        src={imagenHero}
        textoAlternativo="Canasta de hierbas frescas y flores medicinales"
        className="seccion-hero__imagen-fondo"
      />
      <div className="seccion-hero__superposicion">
        <div className="seccion-hero__contenedor">
          <div className="seccion-hero__texto">
            <h2 id="titulo-hero" className="seccion-hero__titulo">
              Descubre el Poder Curativo de las Plantas
            </h2>
            <p className="seccion-hero__descripcion">
              Un huerto terapéutico en tu hogar puede transformar tu bienestar físico y emocional.
              Cultiva salud, paz y conexión con la naturaleza.
            </p>
            <Boton
              texto="Comienza a aprender"
              aria-label="Comenzar a aprender sobre el huerto terapéutico"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionHero;
