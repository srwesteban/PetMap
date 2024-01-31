// Importa las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnKflJBIs8D_pXGsmv_X0f0eXXZG0WyXI",
  authDomain: "petmap-7f447.firebaseapp.com",
  projectId: "petmap-7f447",
  storageBucket: "petmap-7f447.appspot.com",
  messagingSenderId: "154197149671",
  appId: "1:154197149671:web:b7e52028cbadb463f31f42",
  measurementId: "G-QLV5WTFLCQ"
};

// Crea una instancia del proveedor de autenticación de Facebook
const fbAuthProvider = new FacebookAuthProvider();

// Inicializa la aplicación Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtiene la instancia de autenticación
const auth = getAuth(firebaseApp);

// Función para realizar la autenticación con Facebook
export const FacebookAuth = async () => {
  try {
    // Realiza la autenticación con la ventana emergente de Facebook
    const result = await signInWithPopup(auth, fbAuthProvider);
    // La autenticación fue exitosa, devuelve el resultado
    return result;
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la autenticación
    console.error("Error durante la autenticación con Facebook:", error);
    throw error; // Puedes decidir si quieres propagar el error o manejarlo de otra manera
  }
};

// Exporta la instancia de la aplicación y la instancia de autenticación si es necesario
export { firebaseApp, auth };
