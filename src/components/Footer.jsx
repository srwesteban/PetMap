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
    <>
      {showContent && (
        <footer className="bg-black text-white w-full fixed bottom-0">
          <div className="mx-auto text-center">
            <p className="mb-2 text-sm sm:mb-2 sm:text-base md:mb-2 lg:mb-2 xl:mb-2">Desarrollado por William David Esteban Mora y Sebas</p>
            <p className="text-sm sm:text-base mb-2">Contacto: sr.w@hotmail.com</p>
          </div>
        </footer>
      )}
    </>
  );
}
