import React from 'react';

function Habilidades() {
  // 📊 Agrupamos tus tecnologías por categorías reales
  const categorias = [
    {
      titulo: "Desarrollo Móvil",
      skills: ["React Native", "Expo", "Context API", "AsyncStorage"]
    },
    {
      titulo: "Desarrollo Web & Frontend",
      skills: ["React.js", "JavaScript (ES6)", "Tailwind CSS", "HTML5 / CSS3", "Vite"]
    },
    {
      titulo: "Backend & Herramientas",
      skills: ["Firebase Firestore", "Firebase Auth", "Git & GitHub", "NPM"]
    }
  ];

  return (
    <section id="habilidades" className="px-6 py-16 max-w-6xl mx-auto border-t border-slate-900">
      {/* Título de la sección */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Habilidades Técnicas</h2>
        <p className="text-gray-400">Las tecnologías y herramientas que utilizo para dar vida a los proyectos.</p>
      </div>

      {/* 🗂️ Contenedor de Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categorias.map((cat, index) => (
          <div 
            key={index} 
            className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300"
          >
            {/* Título de la categoría (ej: Desarrollo Móvil) */}
            <h3 className="text-lg font-bold text-purple-400 mb-4 border-b border-slate-800 pb-2">
              {cat.titulo}
            </h3>

            {/* 🏷️ Lista de burbujas de tecnologías */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-slate-950 text-slate-300 text-sm px-3 py-1.5 rounded-lg border border-slate-800/60 hover:border-purple-500/30 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;