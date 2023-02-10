import { Button } from "@chakra-ui/react";

interface IButton {
  onClick: () => void;
  btnName: string;
  color?: string;
  background?: string;
  width?: string;
}

export const Botao = ({
  onClick,
  btnName,
  color,
  background,
  width,
}: IButton) => {
  return (
    <Button
      onClick={onClick}
      color={color}
      backgroundColor={background}
      width={width}
    >
      {btnName}
    </Button>
  );
};
