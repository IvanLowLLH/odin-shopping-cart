import { useState } from "react";
import "./App.css";
import ShopPage from "./componenets/Shop";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShopPage />
    </>
  );
}

export default App;
