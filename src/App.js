import { Home } from './components/container/Home';
import { Navbar } from './components/container/Navbar';
import { Servicios } from './components/container/Servicios';
import { Galeria } from './components/container/Galeria';
import { Contacto} from './components/container/Contacto';

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
