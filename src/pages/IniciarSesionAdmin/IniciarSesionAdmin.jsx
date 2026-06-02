import { useState } from 'react';
import { Leaf, Mail, Lock, Shield, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ImagenConRespaldo from '../../components/atoms/ImagenConRespaldo/ImagenConRespaldo.jsx';
import './IniciarSesionAdmin.scss';

function IniciarSesionAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validar credenciales de administrador
    if (email === 'prueba@gmail.com' && password === '12345678') {
      // Guardar sesión de admin
      localStorage.setItem('isAdmin', 'true');
      // Redirigir al panel de admin
      navigate('/admin/panel');
    } else {
      setError('Credenciales incorrectas. Solo administradores pueden acceder.');
    }
  };

  return (
    <div className="login-admin">
      {/* Contenedor Izquierdo - Formulario */}
      <main className="login-admin__lado-izquierdo">
        <div className="login-admin__formulario-contenedor">
          
          <Link to="/" className="login-admin__volver" aria-label="Volver a la página de inicio">
            <ArrowLeft className="login-admin__volver-icono" aria-hidden="true" />
            <span>Volver al inicio</span>
          </Link>

          <div className="login-admin__alerta-restringida">
            <div className="login-admin__alerta-contenido">
              <Shield className="login-admin__alerta-icono" aria-hidden="true" />
              <div>
                <h3 className="login-admin__alerta-titulo">Área Restringida</h3>
                <p className="login-admin__alerta-descripcion">Solo para administradores autorizados</p>
              </div>
            </div>
          </div>

          <div className="login-admin__encabezado">
            <Leaf className="login-admin__logo-icono" aria-hidden="true" />
            <h1 className="login-admin__titulo-principal">Fitoterapia Admin</h1>
          </div>

          <div className="login-admin__subencabezado">
            <h2 className="login-admin__titulo-secundario">Panel de Administración</h2>
            <p className="login-admin__descripcion">Ingresa tus credenciales de administrador</p>
          </div>

          {error && (
            <div className="login-admin__alerta-error" role="alert">
              <Shield className="login-admin__alerta-error-icono" aria-hidden="true" />
              <span className="login-admin__alerta-error-texto">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-admin__form">
            <div className="login-admin__campo">
              <label htmlFor="email" className="login-admin__label">
                Correo de Administrador
              </label>
              <div className="login-admin__input-wrapper">
                <Mail className="login-admin__input-icono" aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@correo.com"
                  className="login-admin__input"
                  required
                />
              </div>
            </div>

            <div className="login-admin__campo">
              <label htmlFor="password" className="login-admin__label">
                Contraseña
              </label>
              <div className="login-admin__input-wrapper">
                <Lock className="login-admin__input-icono" aria-hidden="true" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="login-admin__input"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="login-admin__boton-acceder"
            >
              <Shield className="login-admin__boton-icono" aria-hidden="true" />
              Acceder al Panel
            </button>
          </form>

          <div className="login-admin__credenciales-prueba">
            <p className="login-admin__prueba-texto">
              <strong>Credenciales de prueba:</strong><br />
              Email: prueba@gmail.com<br />
              Contraseña: 12345678
            </p>
          </div>
        </div>
      </main>

      {/* Contenedor Derecho - Decoración con Imagen */}
      <section className="login-admin__lado-derecho" aria-label="Decoración visual">
        <ImagenConRespaldo
          src="https://images.unsplash.com/photo-1775330179749-9034fb29a1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx0aGVyYXBldXRpYyUyMGhlcmJzJTIwZ2FyZGVuJTIwcGxhbnRzJTIwbWVkaWNpbmFsfGVufDF8fHx8MTc3ODY5NDIxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          textoAlternativo="Plantas terapéuticas en un huerto"
          className="login-admin__imagen"
        />
        <div className="login-admin__superposicion">
          <div className="login-admin__superposicion-contenido">
            <Shield className="login-admin__superposicion-icono" aria-hidden="true" />
            <h3 className="login-admin__superposicion-titulo">Panel de Gestión</h3>
            <p className="login-admin__superposicion-descripcion">
              Administra el catálogo completo de plantas medicinales
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IniciarSesionAdmin;
