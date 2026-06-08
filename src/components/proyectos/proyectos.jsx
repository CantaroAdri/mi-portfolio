import React from 'react';

function Proyectos() {
  
  const misProyectos = [
    {
      id: 1,
      titulo: "Barbería Shop & Turnos",
      descripcion: "Aplicación móvil para reserva de turnos en tiempo real con validación de horarios duplicados y un sistema completo de carrito de compras para productos de barbería.",
      tecnologias: ["React Native", "Expo", "Firebase Firestore", "Context API"],
      linkGithub: "https://github.com/CantaroAdri/Barberia-App", 
    },
    {
      id: 2,
      titulo: "Control de Stock & Inventario",
      descripcion: "Sistema de gestión comercial que permite dar de alta productos, actualizar stock de forma dinámica tras las ventas y disparar alertas automáticas de nivel bajo.",
      tecnologias: ["React Native", "Firebase", "AsyncStorage"],
      linkGithub: "https://github.com/CantaroAdri/data-Stock",
    },
    {
      id: 3,
      titulo: "Gestor de Gastos Personales",
      descripcion: "Aplicación de finanzas personales para el registro diario de ingresos y egresos, categorización de movimientos y almacenamiento seguro en la nube.",
      tecnologias: ["React Native", "Firebase Auth", "Firestore"],
      linkGithub: "https://github.com/CantaroAdri/gestion-de-clientes",
    },
  ];

  return (
    <section id="proyectos" className="px-6 py-16 max-w-6xl mx-auto">
     
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Proyectos Destacados</h2>
        <p className="text-gray-400">Aplicaciones reales enfocadas en resolver problemas de negocio.</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {misProyectos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all group"
          >
            <div>
             
              <div className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform inline-block">
                📁
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">
                {proyecto.titulo}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {proyecto.descripcion}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.tecnologias.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-800 text-purple-300 text-xs px-2.5 py-1 rounded-md border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={proyecto.linkGithub}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                Ver código en GitHub <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;