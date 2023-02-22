import { Box, Text } from "@chakra-ui/react";

interface iCardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: iCardInfo) => {
  return (
    <Box
      backgroundColor={"red"}
      minHeight="120px"
      padding={8}
      borderRadius="24px"
    >
      <Text fontSize={"2xl"} fontWeight="bold">
        {mainContent}
      </Text>
      <Text fontSize={"xl"}>{content}</Text>
    </Box>
  );
};
