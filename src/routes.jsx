import HomePage from "./components/HomePage";
import ShopPage from "./components/Shop";
import Cart from "./components/Cart";
import App from "./App";
import { createBrowserRouter } from "react-router";
export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
