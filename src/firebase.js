// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnKflJBIs8D_pXGsmv_X0f0eXXZG0WyXI",
  authDomain: "petmap-7f447.firebaseapp.com",
  projectId: "petmap-7f447",
  storageBucket: "petmap-7f447.appspot.com",
  messagingSenderId: "154197149671",
  appId: "1:154197149671:web:b7e52028cbadb463f31f42",
  measurementId: "G-QLV5WTFLCQ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);