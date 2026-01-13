import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };
  return (
    <>
      <NavBar />
      <main>
        <Outlet context={{ cart, addToCart }} />
      </main>
    </>
  );
}

export default App;
