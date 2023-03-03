import { Route, Routes, useNavigate } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import { Conta } from "./components/pages/Conta";
import { ContaInfo } from "./components/pages/ContaInfo";
import { Home } from "./components/pages/Home";

import { useContext } from "react";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const pageNotFoud = `
  <h1>PÁGINA NÂO ENCONTRADA</>
  `;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  );
};
