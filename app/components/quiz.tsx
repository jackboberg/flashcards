import { CardDisplay } from "~/components/card";

import type { Card } from "~/components/card";

export interface Quiz {
  id: number;
  cards: Card[];
};

export function QuizDisplay({ quiz: { cards } }: { quiz: Quiz }) {
  return (
    <div>
      { cards.map((card) => (
        <CardDisplay key={`card-${card.id}`} card={card} />
      )) }
    </div>
  );
}
