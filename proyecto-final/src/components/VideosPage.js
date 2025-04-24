import React from 'react';

function VideosPage() {
  return (
    <div className="videos-page">
      <h2>Videos para Estudiantes</h2>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mdGBsYt01BM" // Reemplaza con la URL de tu video
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Debate estudiantil - Competencia digitales en los docentes O&M Podcast.</p>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1glVfFxj8a4" // Reemplaza con la URL de tu segundo video
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Curso COMPLETO de JavaScript DESDE CERO para Principiantes.</p>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/28q1ZnWsw9c" // Reemplaza con la URL de tu segundo video
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Universidad O&M en Santo Domingo realiza conferencia sobre inteligencia artificial.</p>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7iobxzd_2wY" // Reemplaza con la URL de tu segundo video
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>CURSO REACT 2024 - Aprende desde cero.</p>
      </div>

      {/* ... más videos ... */}
    </div>
  );
}

export default VideosPage;


