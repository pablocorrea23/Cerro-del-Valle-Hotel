import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Servicios } from './components/Servicios/Servicios';
import { Galeria } from './components/Galería/Galeria';
import { Contacto} from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <main>
        <Home/>
        <Servicios/>
        <Galeria/>
        <Contacto/>
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
