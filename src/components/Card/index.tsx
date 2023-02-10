import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { login } from "../../services/login";
import { Botao } from "../Botao";

export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#1e192c" padding={"25px"}>
        <Box backgroundColor="#ffffff" borderRadius={"25px"} padding="15px">
          <Center>
            <h1>Faça login</h1>
          </Center>
          <Center color={"#3a3741"}>
            <EmailIcon color={"#8647ad"} />
            <Input placeholder="Email" margin={"10px"} />
          </Center>
          <Center color={"#3a3741"}>
            <LockIcon color={"#8647ad"} />
            <Input type={"password"} placeholder="Senha" margin={"10px"} />
          </Center>
          <Center>
            <Botao
              btnName="Entrar"
              background="#3a3741"
              color="#77747e"
              width="50%"
              onClick={login}
            />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
