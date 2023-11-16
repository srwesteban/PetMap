import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Detectar el ancho de la ventana para determinar si estamos en un dispositivo móvil
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Puedes ajustar este valor según tus necesidades
      setShowContent(!isMobile); // Mostrar contenido solo si no estamos en un dispositivo móvil
    };

    // Agregar un event listener para manejar cambios de tamaño de ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize al inicio para establecer el estado inicial
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-black text-white py-6 w-screen max-w-[1900px] fixed bottom-0">
      <div className="mx-auto text-center">
        {showContent ? (
          <>
            <p className="mb-2 text-sm sm:mb-4 sm:text-base md:mb-6 lg:mb-8 xl:mb-10">Desarrollado por William Esteban y sebas</p>
            <p className="text-sm sm:text-base mb-4">Contacto: sr.w@hotmail.com</p>
          </>
        ) : (
          <>
            {/* Aquí puedes poner el input para ingresar coordenadas */}
            <input
              type="text"
              placeholder="Ingrese coordenadas"
              className="bg-white text-black p-2 mb-4"
            />
            {/* Otros elementos que desees mostrar */}
          </>
        )}
      </div>
    </footer>
  );
}
