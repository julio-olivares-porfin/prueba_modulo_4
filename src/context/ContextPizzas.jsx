import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const addPizzaToCard = ({ id, img, name, price }) => {
    const producto = { id, img, name, price, count: 1 };
    const encontrarProducto = carrito.findIndex((p) => p.id === id);

    if (encontrarProducto >= 0) {
      carrito[encontrarProducto].count++;
      setCarrito([...carrito]);
    } else {
      producto.count = 1;
      setCarrito([...carrito, producto]);
    }
  };

  const removePizzaToCard = (i) => {
    const index = carrito.findIndex((orden) => orden.id === i.id);
    if (index >= 0) {
      if (carrito[index].count > 1) {
        carrito[index].count--;
        setCarrito([...carrito]);
      } else {
        const nuevoCarrito = carrito.filter((item) => item.id != i.id);
        setCarrito(nuevoCarrito);
      }
    } else {
      console.log('Borrado');
    }
  };

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        carrito,
        addPizzaToCard,
        removePizzaToCard,
        getPizzas,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

PizzasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default PizzasProvider;
