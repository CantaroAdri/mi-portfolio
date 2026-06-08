import React from 'react';

function Contacto() {
  return (
    <footer id="contacto" className="bg-slate-900/20 border-t border-slate-900 px-6 py-12 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Izquierda: Texto de derechos o marca personal */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">Adrian | Frontend Developer</p>
          <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} - Construido con React & Tailwind CSS</p>
        </div>

        {/* Derecha: Redes y canales de contacto directo */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Botón de LinkedIn */}
          <a 
            href="https://linkedin.com" // Recordá cambiarlo por tu link real después
            target="_blank" 
            rel="noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-purple-400 px-4 py-2 rounded-lg border border-slate-800 transition-all text-sm font-medium flex items-center gap-2"
          >
            💼 LinkedIn
          </a>

          {/* Botón de GitHub */}
          <a 
            href="https://github.com" // Tu link real de GitHub
            target="_blank" 
            rel="noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-purple-400 px-4 py-2 rounded-lg border border-slate-800 transition-all text-sm font-medium flex items-center gap-2"
          >
            📁 GitHub
          </a>

          {/* Botón de Correo Electrónico */}
          <a 
            href="mailto:tu-correo@email.com" // Tu email real
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-semibold flex items-center gap-2 shadow-md shadow-purple-600/20"
          >
            ✉️ Enviar un correo
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Contacto;