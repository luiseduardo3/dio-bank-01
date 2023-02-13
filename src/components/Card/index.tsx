import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { login } from "../../services/login";
import { Botao } from "../Botao";
import { useEffect, useState } from "react";

import { api } from "../../api";

interface IUserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState<null | IUserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  console.log(userData);

  const handlerEvento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#1e192c" padding={"25px"}>
        {userData === null ||
          (userData === undefined ? (
            <h1 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
              Carregando...
            </h1>
          ) : (
            <h1 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
              Carregou
            </h1>
          ))}
        <Box backgroundColor="#ffffff" borderRadius={"25px"} padding="15px">
          <Center>
            <h1>Faça login {userData?.name}</h1>
          </Center>
          <Center color={"#3a3741"}>
            <EmailIcon color={"#8647ad"} />
            <Input
              placeholder="Email"
              margin={"10px"}
              value={email}
              onChange={handlerEvento}
            />
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
              onClick={() => login(email)}
            />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
