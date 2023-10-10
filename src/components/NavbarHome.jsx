import React from 'react';
import {useAuth} from '../context/AuthContext';

export function NavbarHome() {

    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(error.message);
      }
    };




    return (
        <nav className="bg-black w-screen max-w-[1900px] p-4">
          <div className="  flex justify-between items-center">
            <div className="text-white text-2xl font-bold">PetMap</div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white hover:underline">Inicio</a>
              <a href="#" className="text-white hover:underline">Instrucciones</a>
              <a href="#" className="text-white hover:underline">Mis Mascotas</a>
              <p className="text-white">Bienvenido, {user.displayName || user.email}</p>
              <button className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-2 text-black" onClick={handleLogout}>
                Cerrar sesion
              </button>
              </div>
            </div>
        </nav>
      );
}

export default NavbarHome;
