import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavHeader } from "../components/NavHeader";
import Home from "../pages/Home";
import Male from "../pages/Male";
import ShoppingCart from "../pages/ShoppingCart";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { AppContexts } from "../context";

export function Routess() {
  return (
    <BrowserRouter>
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
