import { CardDisplay } from "~/components/card";

import type { QuizWithCards } from "~/utils/quiz.server";

export function QuizDisplay({ quiz }: { quiz: QuizWithCards }) {
  return (
    <div>
      <h1>{quiz.title}</h1>
      <div>
        { quiz.cards.map((card) => (
          <CardDisplay key={`card-${card.id}`} card={card} />
        )) }
      </div>
    </div>
  );
}
