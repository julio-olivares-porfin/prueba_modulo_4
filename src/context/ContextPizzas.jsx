import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ContextPizzas = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const data = await res.json();
    setPizzas(data);
  };


  useEffect(() => {
    getPizzas();
  }, []);

  const addPizzaCart = ({ id, img, name, price }) => {
    const product = { id, img, name, price, count: 1 };
    const findProduct = cart.findIndex((p) => p.id === id);

    if (findProduct >= 0) {
      cart[findProduct].count++;
      setCart([...cart]);
    } else {
      product.count = 1;
      setCart([...cart, product]);
    }
  };

  const removePizzaCart = (i) => {
    const index = cart.findIndex((orden) => orden.id === i.id);
    if (index >= 0) {
      if (cart[index].count > 1) {
        cart[index].count--;
        setCart([...cart]);
      } else {
        const nuevocart = cart.filter((item) => item.id != i.id);
        setCart(nuevocart);
      }
    } else {
      console.log('Borrado');
    }
  };

  const globalStates = {
    pizzas,
    cart,
    addPizzaCart,
    removePizzaCart,
    getPizzas,
  };

  return (
    <ContextPizzas.Provider value={{ globalStates }}>
      {children}
    </ContextPizzas.Provider>
  );
};

PizzasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PizzasProvider;
