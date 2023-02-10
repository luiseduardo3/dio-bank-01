import { ChakraProvider, Input, Box, Center, Button } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import LogoDio from "./assets/img/imgdio.png";

function App() {
  return (
    <ChakraProvider>
      <Header src={LogoDio} alt="Luis" />
      <Card />
    </ChakraProvider>
  );
}

export default App;
