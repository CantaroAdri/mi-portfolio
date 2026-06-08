import React from 'react';
import Hero from './components/hero/hero'; 
import Proyectos from './components/proyectos/proyectos';
import Habilidades from './components/habilidades/habilidades';
import Contacto from './components/contacto/contacto';

function App() {
  return (
 
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      
   
      <Hero />
      <Proyectos/>
      <Habilidades/>
      <Contacto/>
      
     
    </div>
  );
}

export default App;