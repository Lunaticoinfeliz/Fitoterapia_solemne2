import './Boton.scss';

function Boton({ texto, tipo = 'button', variante = 'primario', className = '', ...props }) {
  const clases = ['boton', `boton--${variante}`, className].filter(Boolean).join(' ');

  if (tipo === 'enlace') {
    return (
      <a className={clases} {...props}>
        {texto}
      </a>
    );
  }

  return (
    <button type={tipo === 'submit' ? 'submit' : 'button'} className={clases} {...props}>
      {texto}
    </button>
  );
}

export default Boton;
