import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

const PizzaContext = createContext();

const pizzaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload.id);
    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREMENT_QUANTITY':
      return state
        .map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
        default:
      return state;
  }
};

const PizzaProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(pizzaReducer, []);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/pizzas.json');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  return (
    <PizzaContext.Provider value={{ cart, dispatch, pizzas, getPizzaById }}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizza must be used within a PizzaProvider');
  }
  return context;
};

export { PizzaProvider, usePizza };
