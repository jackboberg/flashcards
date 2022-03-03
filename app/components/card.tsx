import useToggle from '~/hooks/useToggle';

export interface Card {
  id: number;
  front: string;
  back: string;
};

export function CardDisplay({
  card: { front, back }
}: { card: Card }) {
  const [facing, flip] = useToggle();

  return (
    <p onClick={flip}>{ facing ? front : back }</p>
  );
}
