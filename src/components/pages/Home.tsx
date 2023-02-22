import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Center, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { login } from "../../services/login";
import { Botao } from "../Botao";
import { Card } from "../Card";

interface IUserData {
  email: string;
  password: string;
  name: string;
}

export const Home = () => {
  const [email, setEmail] = useState("");

  const [userData, setUserData] = useState<null | IUserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const handlerEvento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <Box>
      <Card>
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
      </Card>
    </Box>
  );
};
