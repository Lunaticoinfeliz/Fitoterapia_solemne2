import BarraNavegacion from '../components/BarraNavegacion/BarraNavegacion.jsx';

function PaginaInicio() {
  return (
    <div className="layout-principal">
      <BarraNavegacion />
      <main className="layout-principal__contenido" id="contenido-principal">
        <p className="layout-principal__placeholder">Contenido del landing en construcción</p>
      </main>
    </div>
  );
}

export default PaginaInicio;
