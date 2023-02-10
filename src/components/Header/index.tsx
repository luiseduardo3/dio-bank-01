import { ChakraProvider, Box, Center, Text } from "@chakra-ui/react";

interface IImage {
  src: string;
  alt: string;
}

export const Header = ({ src, alt }: IImage) => {
  return (
    <ChakraProvider>
      <Box margin={"0px"}>
        <Center color={"#ffffff"} backgroundColor="#151515">
          <img src={src} alt={alt} />
          <Text fontSize="40px" margin={"10px"}>
            Bank
          </Text>
        </Center>
      </Box>
    </ChakraProvider>
  );
};
