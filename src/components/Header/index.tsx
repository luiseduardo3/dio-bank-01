import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

interface IImage {
  src: string;
  alt: string;
}

export const Header = ({ src, alt }: IImage) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Flex
      margin={"0px"}
      color={"#ffffff"}
      backgroundColor="#151515"
      padding={"5px"}
    >
      <Box>
        <Center>
          <img src={src} alt={alt} />
          <Text fontSize="40px" margin={"10px"}>
            Bank
          </Text>
        </Center>
      </Box>
      {isLoggedIn === true ? (
        <>
          <Spacer />
          <Button onClick={() => logout()} backgroundColor={"red"}>
            Sair
          </Button>
        </>
      ) : null}
    </Flex>
  );
};
