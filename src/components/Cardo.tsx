interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Cardo = ({ id, details, paragraph }: ICard) => {
  return (
    <div>
      <h1>Card {id}</h1>
      <p>{details}</p>
      <p>{paragraph}</p>
    </div>
  );
};
