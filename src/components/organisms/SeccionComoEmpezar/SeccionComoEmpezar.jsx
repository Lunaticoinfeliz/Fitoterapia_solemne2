import ImagenConRespaldo from '../../atoms/ImagenConRespaldo/ImagenConRespaldo.jsx';
import ItemPasoHuerto from '../../molecules/ItemPasoHuerto/ItemPasoHuerto.jsx';
import { pasosHuerto } from '../../../datos/pasosHuerto.js';
import './SeccionComoEmpezar.scss';

const imagenGuia =
  'https://images.unsplash.com/photo-1775330179749-9034fb29a1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

function SeccionComoEmpezar() {
  return (
    <section className="seccion-como-empezar" aria-labelledby="titulo-como-empezar">
      <div className="seccion-como-empezar__contenedor">
        <div className="seccion-como-empezar__rejilla">
          <div className="seccion-como-empezar__texto">
            <h2 id="titulo-como-empezar" className="seccion-como-empezar__titulo">
              Cómo Empezar Tu Huerto Terapéutico
            </h2>
            <p className="seccion-como-empezar__intro">
              Crear tu propio huerto medicinal es más fácil de lo que piensas. Sigue estos pasos para
              comenzar tu viaje hacia la sanación natural.
            </p>
            <div className="seccion-como-empezar__pasos">
              {pasosHuerto.map((paso) => (
                <ItemPasoHuerto
                  key={paso.id}
                  titulo={paso.titulo}
                  descripcion={paso.descripcion}
                  nombreIcono={paso.nombreIcono}
                />
              ))}
            </div>
          </div>
          <aside className="seccion-como-empezar__visual" aria-label="Ilustración del huerto">
            <div className="seccion-como-empezar__imagen-contenedor">
              <ImagenConRespaldo
                src={imagenGuia}
                textoAlternativo="Libro abierto con ilustraciones de plantas medicinales"
                className="seccion-como-empezar__imagen"
              />
            </div>
            <blockquote className="seccion-como-empezar__cita">
              <p>
                &ldquo;Un jardín es un gran maestro. Te enseña paciencia y cuidado cuidadoso; te
                enseña industria y ahorro; sobre todo te enseña total confianza.&rdquo;
              </p>
            </blockquote>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default SeccionComoEmpezar;
