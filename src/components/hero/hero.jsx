import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-[80vh]">
      
      <span className="bg-purple-900/50 text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-purple-700/50">
        Disponible para trabajar
      </span>

      
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Adrian</span>
      </h1>

    
      <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
        Desarrollador Frontend especializado en React & React Native
      </h2>

     
      <p className="max-w-2xl text-gray-400 text-lg mb-8 leading-relaxed">
        Apasionado por crear soluciones digitales eficientes, desde sistemas de gestión web hasta aplicaciones móviles nativas conectadas a bases de datos en tiempo real con Firebase.
      </p>

     
      <div className="flex flex-wrap gap-4 justify-center">
        <a 
          href="#proyectos" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-purple-600/30"
        >
          Ver mis proyectos
        </a>
        <a 
          href="https://linkedin.com"
          target="_blank" 
          rel="noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-lg border border-gray-700 transition-all"
        >
          Mi LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;