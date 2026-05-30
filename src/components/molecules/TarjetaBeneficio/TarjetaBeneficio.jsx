import { Brain, Heart, Sparkles, TreePine } from 'lucide-react';
import './TarjetaBeneficio.scss';

const mapaIconos = {
  corazon: Heart,
  cerebro: Brain,
  destellos: Sparkles,
  arbol: TreePine,
};

function TarjetaBeneficio({ titulo, descripcion, nombreIcono }) {
  const Icono = mapaIconos[nombreIcono] ?? Heart;

  return (
    <article className="tarjeta-beneficio">
      <div className="tarjeta-beneficio__icono-contenedor" aria-hidden="true">
        <Icono className="tarjeta-beneficio__icono" />
      </div>
      <h3 className="tarjeta-beneficio__titulo">{titulo}</h3>
      <p className="tarjeta-beneficio__descripcion">{descripcion}</p>
    </article>
  );
}

export default TarjetaBeneficio;
