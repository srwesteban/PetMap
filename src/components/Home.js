import {useAuth} from '../context/AuthContext';
import NavbarHome from './NavbarHome';
import Mapa from './Mapas/Mapa';
import Footer from './Footer';


export function Home() {
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
    <div>
      <NavbarHome />
      <Mapa/>
      <Footer/>
    </div>
    
    
  );
}