import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Servicios } from './components/Servicios/Servicios';
import { Galeria } from './components/Galeria/Galeria';
import { Contacto} from './components/contacto/Contacto';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <Servicios/>
        <Galeria/>
        <Contacto/>
      </header>
    </div>
    
  );
}

export default App;
