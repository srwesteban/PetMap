import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import backgroundImage from "../images/huella.png";
import googleLogo from '../images/google.png';


export function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async e => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGuestLogin = async () => {  
    // Credenciales de invitado
    const guestCredentials = {
      email: "petmap@petmap.com",
      password: "petmap123",
    };
  
    try {
      // Autenticar con las credenciales de invitado
      await login(guestCredentials.email, guestCredentials.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="m-9">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ejemplo@correo.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="*************"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 m-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar Sesion
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#!"
              onClick={handleResetPassword}
            >
              Olvidaste el Password?
            </a>
          </div>
        </form>

        <button
          onClick={handleGoogleSignin}
          className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 border border-gray-300 rounded w-full flex items-center justify-center"
        >
          <img
            src={googleLogo}
            alt="Google Logo"
            className="mr-2"
            style={{ height: '20px', width: '20px' }}
          />
          Usar Google
        </button>
        <button
          onClick={handleGuestLogin}
          className="bg-slate-50 hover:bg-slate-200 text-black shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
        >
          Ingresar como invitado
        </button>

        <p className="my-4 text-sm flex justify-between px-3 text-black bg-white font-semibold">
          No tiene una cuenta?
          <Link to="/register" className="text-blue-700 hover:text-blue-900">
            Registarse
          </Link>
        </p>
      </div>
    </div>
  );
}

