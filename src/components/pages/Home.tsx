import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { Login } from "../../services/login";
import { AppContext } from "../AppContext";
import { Botao } from "../Botao";
import { Card } from "../Card";

export const Home = () => {
  const [email, setEmail] = useState("");

  const handlerEvento = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const validadeUser = async (email: string) => {
    const loggedIn = await Login(email);

    if (!loggedIn) {
      return alert("E-mail inválido");
    }
    setIsLoggedIn(true);
    navigate("/conta/1");
  };

  return (
    <Box>
      <Card>
        <Box backgroundColor="#ffffff" borderRadius={"25px"} padding="15px">
          <Center>
            <h1>Faça login</h1>
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
              onClick={() => validadeUser(email)}
            />
          </Center>
        </Box>
      </Card>
    </Box>
  );
};
