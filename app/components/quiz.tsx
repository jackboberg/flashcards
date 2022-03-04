import { CardDisplay } from "~/components/card";

import type { Quiz } from "~/utils/quiz.server";

export function QuizDisplay({ quiz: { cards } }: { quiz: Quiz }) {
  return (
    <div>
      { cards.map((card) => (
        <CardDisplay key={`card-${card.id}`} card={card} />
      )) }
    </div>
  );
}
