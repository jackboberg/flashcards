import useToggle from '~/hooks/useToggle';

import type { Card } from "~/utils/quiz.server";

export function CardDisplay({
  card: { front, back }
}: { card: Card }) {
  const [facing, flip] = useToggle();

  return (
    <p onClick={flip}>{ facing ? front : back }</p>
  );
}
