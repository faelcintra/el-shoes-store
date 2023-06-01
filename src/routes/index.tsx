import { Route, Router, Routes, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavHeader } from "../components/NavHeader";
import Home from "../pages/Home";
import Male from "../pages/Male";
import ShoppingCart from "../pages/ShoppingCart";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { AppContexts } from "../context";
import { useEffect } from "react";

export function Routess() {
  const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <BrowserRouter>
      <ScrollTop />

      <AppContexts>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

          <Route path="/" element={<NavHeader />}>
            <Route index element={<Home />} />
            <Route path="masculino" element={<Male />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </AppContexts>
    </BrowserRouter>
  );
}
