import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../CardInfo";
import { useEffect, useState, useContext } from "react";
import { api } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

interface IUserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>();

  const { isLoggedIn, user } = useContext(AppContext);

  const { id } = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualData = new Date();
  if (!isLoggedIn) {
    navegate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={"xl"} color="green" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem Vindo ${user.name}`}
              content={`${actualData.getDate()}/${actualData.getMonth()}/${actualData.getFullYear()} 
             ${actualData.getHours()}:${actualData.getMinutes()}`}
            />

            {isLoggedIn === true ? (
              <h1>Usuario Logado </h1>
            ) : (
              <h1>Não logado</h1>
            )}

            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </>
        )}

        {/* <CardInfo mainContent={'Seu Saldo'} content={`R$ ${userData?.balance}`}/> */}
      </SimpleGrid>
    </Center>
  );
};
