import React from 'react';

function AminoPhrasesPage() {
  const phrases = [
    "-- Frase 1 --",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti mismo y en todo lo que eres. Sabes que hay algo dentro", 
    "de ti que es más grande que cualquier obstáculo.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",

    "___________________________________________________________________",
    "-- Frase 2 --",

    "Cada día es una nueva oportunidad",    
    "Aprovecha cada momento y brilla con tu luz.",

    "___________________________________________________________________",

    "-- Frase 3 --",
    "Es posible recuperarse de una derrota, pero cuesta más perdonarse a",
    "uno mismo por no haberlo intentado (George Edward Woodberry)",

    "____________________________________________________________________",

    "-- Frase 4 --",
    "No es que sea muy listo, es que me quedo durante más tiempo", 
    "trabajando en los problemas (Albert Einstein)",

    "____________________________________________________________________",

    "-- Frase 5 --",
    "La fuerza no viene de ganar. Sus luchas desarrollan sus fortalezas.", 
    "Cuando uno atraviesa dificultades y decide no rendirse, eso es fuerza (Arnold Schwarzenegger)"
    // Agrega más frases inspiradoras aquí
  ];

  return (
    <div className="amino-phrases-page">
      <h2>Frases de Ánimo para Estudiantes</h2>
      <ul>
        {phrases.map((phrase, index) => (
          <li key={index}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
}

export default AminoPhrasesPage;