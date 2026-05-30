import './EncabezadoSeccion.scss';

function EncabezadoSeccion({ titulo, descripcion, idSeccion }) {
  return (
    <header className="encabezado-seccion">
      <h2 id={idSeccion} className="encabezado-seccion__titulo">
        {titulo}
      </h2>
      {descripcion && <p className="encabezado-seccion__descripcion">{descripcion}</p>}
    </header>
  );
}

export default EncabezadoSeccion;
