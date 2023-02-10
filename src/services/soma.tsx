export const soma = (n1: number) => {
  return n1 + 1;
};

export const multiplica = (n1: number, multi: number) => {
  if (multi === 2 || multi === 3) {
    return n1 * multi;
  }
  return "Multiplicador não aceito";
};
