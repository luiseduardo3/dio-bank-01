import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { Layout } from "./components/Layout";
import { Conta } from "./components/pages/Conta";
import { ContaInfo } from "./components/pages/ContaInfo";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conta/:id" element={<Conta />} />
              <Route path="/infoconta" element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
