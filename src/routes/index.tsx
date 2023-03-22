import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
