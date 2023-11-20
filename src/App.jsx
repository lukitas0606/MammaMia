import { Route, Routes } from 'react-router-dom';
import { PizzaProvider } from './context/PizzaContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pizza from './views/Pizza';
import Carro from './views/Carro';

const App = () => {
  return (
    <>
      <PizzaProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Carro />} />
        </Routes>
      </PizzaProvider>
    </>
  );
};

export default App;
