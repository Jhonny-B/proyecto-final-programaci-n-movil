import React from 'react';
import { Link } from 'react-router-dom';
import portada from '../assets/images/uni.jpg';
import './HomePage.css'; // Importa el archivo de estilos para esta página

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <h1>Taller Universitario</h1>
        <p className="main-paragraph">
          Bienvenido al taller universitario virtual diseñado especialmente para estudiantes como tú. Aquí encontrarás una colección cuidadosamente seleccionada de recursos para complementar tus estudios y enriquecer tu experiencia académica.
        </p>

        <section className="article">
          <h2>Explora Nuestros Recursos</h2>
          <p>
            Sumérgete en nuestra biblioteca de videos educativos, cuidadosamente elegidos para abordar temas clave de diversas disciplinas. Aprende a tu propio ritmo y refuerza tus conocimientos con explicaciones visuales y ejemplos prácticos.
          </p>
          <Link to="/videos" className="button">Ver Videos</Link>
        </section>

        <section className="article">
          <h2>Accede a Documentos Importantes</h2>
          <p>
            Descarga guías de estudio, plantillas útiles, resúmenes de clases y otros materiales que te ayudarán a organizar tu trabajo académico y a tener éxito en tus cursos.
          </p>
          <Link to="/documentos" className="button">Ver Documentos</Link>
        </section>

        <section className="article last-article">
          <h2>Encuentra Inspiración</h2>
          <p>
            ¿Necesitas un impulso de motivación? Nuestra sección de frases de ánimo te ofrece palabras inspiradoras para mantenerte enfocado y positivo a lo largo de tu jornada universitaria.
          </p>
          <Link to="/frases" className="button">Ver Frases</Link>
        </section>
      </div>
      <div className="home-page-image">
        <img src={portada} alt="Portada del Taller Universitario" />
      </div>
    </div>
  );
}

export default HomePage;




/*import React from 'react';
import logo from '../assets/images/uni.jpg';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Taller Universitario</h1>
      <img src={logo} alt="Logo del Taller Universitario" />
      <p>Bienvenido al taller universitario virtual para estudiantes.</p>
      <p>Un espacio diseñado para potenciar tu aprendizaje y desarrollo académico.</p>*/
     // {/* Puedes agregar más contenido a la página principal aquí */}
   /* </div>
  );
}

export default HomePage;
*/
