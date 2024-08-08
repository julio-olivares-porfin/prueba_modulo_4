import { Route, Routes } from "react-router-dom";
import PizzaNavbar from "./components/PizzaNavbar";
import Home from "./layouts/Home";
import PizzaDetail from "./layouts/PizzaDetail";
import Carrito from "./layouts/Carrito";
import NotFound from "./layouts/NotFound";
import PizzasProvider from "./context/ContextPizzas";

const App = () => {
  return (
    <PizzasProvider>
      <PizzaNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PizzasProvider>
  );
};
export default App;
