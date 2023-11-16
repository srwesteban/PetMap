import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function NavbarHome() {
  const { logout, user } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="bg-black w-screen max-w-[1900px] p-4">
      <div className="flex justify-between items-center">
        {/* Título "PetMap" solo visible en pantallas grandes (lg: large) y cuando el menú está cerrado */}
        <div className={`text-white text-xl lg:text-3xl font-bold lg:block ${isMenuOpen ? 'hidden' : 'block'}`}>PetMap</div>
        {/* Botón de cierre (X) en dispositivos móviles */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Línea blanca separadora */}
      <hr className="border-t border-white my-2" />

      {/* Menú visible en pantallas grandes (lg: large) */}
      <div className={`hidden lg:flex items-center gap-6 justify-end ${isMenuOpen ? 'hidden' : 'block'}`}>
        <a href="#" className="text-white hover:underline">
          Instrucciones
        </a>
        <a href="#" className="text-white hover:underline">
          Mis Mascotas
        </a>
        <p className="text-white mx-4">Bienvenido, {user.displayName || user.email}</p>
        <div className="text-center">
          <button
            className="bg-slate-200 hover:bg-slate-300 rounded py-1 px-2 text-black"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Menú desplegable en dispositivos móviles */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} text-center`}>
        <a href="#" className="text-white hover:underline block">
          Instrucciones
        </a>
        <a href="#" className="text-white hover:underline block">
          Mis Mascotas
        </a>
        <p className="text-white block mb-4">Bienvenido, {user.displayName || user.email}</p>
        <div className="text-center">
          <button
            className="bg-slate-200 hover:bg-slate-300 rounded py-1 px-2 text-black"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarHome;
