import { ChakraProvider, Box, Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

interface IImage {
  src: string;
  alt: string;
}

export const Header = ({ src, alt }: IImage) => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <ChakraProvider>
      <Box margin={"0px"}>
        <Center color={"#ffffff"} backgroundColor="#151515">
          <img src={src} alt={alt} />
          <Text fontSize="40px" margin={"10px"}>
            Bank
          </Text>
          meu nome {context.user.name}
        </Center>
      </Box>
    </ChakraProvider>
  );
};
