import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { login } from "../../services/login";
import { Botao } from "../Botao";
import { useEffect, useState } from "react";

export const Card = ({ children }: any) => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#1e192c" padding={"25px"}>
        {/* {userData === null ||
          (userData === undefined ? (
            <h1 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
              Carregando...
            </h1>
          ) : (
            <h1 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
              Carregou
            </h1>
          ))} */}
        {children}
      </Box>
    </ChakraProvider>
  );
};
