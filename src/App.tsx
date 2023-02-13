import { ChakraProvider, Box } from "@chakra-ui/react";
import { Card } from "./components/Card";

import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box>
          <Card />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
