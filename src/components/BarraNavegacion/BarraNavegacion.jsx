import { Link } from 'react-router-dom';
import { Leaf, User } from 'lucide-react';
import './BarraNavegacion.scss';

const enlacesNavegacion = [
  { etiqueta: 'Inicio', ruta: '/' },
  { etiqueta: 'Plantas', ruta: '/#plantas', esAncla: true },
  { etiqueta: 'Eventos', ruta: '/#eventos', esAncla: true },
];

function BarraNavegacion() {
  return (
    <header className="barra-navegacion layout-principal__cabecera">
      <div className="barra-navegacion__contenedor">
        <Link to="/" className="barra-navegacion__marca" aria-label="Ir al inicio de Fitoterapia">
          <Leaf className="barra-navegacion__icono" aria-hidden="true" />
          <span className="barra-navegacion__titulo">Fitoterapia</span>
        </Link>

        <nav className="barra-navegacion__menu" aria-label="Navegación principal">
          <ul className="barra-navegacion__lista">
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.etiqueta} className="barra-navegacion__item">
                {enlace.esAncla ? (
                  <a href={enlace.ruta} className="barra-navegacion__enlace">
                    {enlace.etiqueta}
                  </a>
                ) : (
                  <Link to={enlace.ruta} className="barra-navegacion__enlace">
                    {enlace.etiqueta}
                  </Link>
                )}
              </li>
            ))}
            <li className="barra-navegacion__item">
              <Link to="/admin/login" className="barra-navegacion__boton-admin">
                <User className="barra-navegacion__boton-icono" aria-hidden="true" />
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default BarraNavegacion;
