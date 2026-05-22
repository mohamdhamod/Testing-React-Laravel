import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import SearchResults from "./components/SearchResults";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import { WishListProvider } from "./context/WishListContext";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/about-us', element: <About /> },
      { path: '/cart', element: <Cart /> },
      { path: '/wishlist', element: <WishList /> },
      { path: '/shoes/men', element: <Men /> },
      { path: '/shoes/women', element: <Women /> },
      { path: '/shoes/kids', element: <Kids /> },
      { path: '/product-details/:id', element: <ProductDetails /> },
      { path: '/search/:search', element: <SearchResults /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishListProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </CartProvider>
    </WishListProvider>
  </React.StrictMode>
);