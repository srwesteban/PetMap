import NavbarHome from './views/NavbarHome.jsx';
import Mapa from './views/Mapa.jsx';
import Footer from './/views/Footer.jsx';


export function Home() {

  return (
    <div>
      <NavbarHome />
      <Mapa/>
      <Footer/>
    </div>
  );
}