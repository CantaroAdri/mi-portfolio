import React from 'react';
import Hero from './components/hero/hero'; 
import Proyectos from './components/proyectos/proyectos';
import Habilidades from './components/habilidades/habilidades';
import Contacto from './components/contacto/contacto';

function App() {
  return (
    // Contenedor padre global con fondo oscuro para todo el sitio
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      
      {/* Renderizamos el Hero */}
      <Hero />
      <Proyectos/>
      <Habilidades/>
      <Contacto/>
      
      {/* Las siguientes secciones (Proyectos, Habilidades) irán cayendo acá abajo */}
      
    </div>
  );
}

export default App;