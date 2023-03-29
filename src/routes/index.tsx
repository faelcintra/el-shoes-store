import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavHeader } from "../components/NavHeader";
import Home from "../pages/Home";
import Male from "../pages/Male";

export function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path="masculino" element={<Male />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
