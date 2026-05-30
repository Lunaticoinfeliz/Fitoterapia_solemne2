import { BookOpen, Droplets, Sprout, Sun } from 'lucide-react';
import './ItemPasoHuerto.scss';

const mapaIconos = {
  brote: Sprout,
  sol: Sun,
  gota: Droplets,
  libro: BookOpen,
};

function ItemPasoHuerto({ titulo, descripcion, nombreIcono }) {
  const Icono = mapaIconos[nombreIcono] ?? Sprout;

  return (
    <article className="item-paso">
      <div className="item-paso__icono-contenedor" aria-hidden="true">
        <Icono className="item-paso__icono" />
      </div>
      <div className="item-paso__contenido">
        <h3 className="item-paso__titulo">{titulo}</h3>
        <p className="item-paso__descripcion">{descripcion}</p>
      </div>
    </article>
  );
}

export default ItemPasoHuerto;
