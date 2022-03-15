import { Link } from "remix";
import { Center, SimpleGrid, Heading } from '@chakra-ui/react';

import { CardDisplay } from "~/components/card";

import type { Quiz, QuizWithCards } from "~/utils/quiz.server";

export function QuizList({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <SimpleGrid columns={{sm: 2, md: 3}} spacing="4" pt="4">
      {quizzes.map((quiz) => (
        <QuizPreview key={`quiz-${quiz.id}`} quiz={quiz} />
      ))}
    </SimpleGrid>
  );
}

export function QuizPreview({ quiz }: { quiz: Quiz }) {
  return (
    <Link to={quiz.id}>
      <Center key={`quiz-${quiz.id}`} h="20" w="100%" bg="blue.50">
        <Heading as="h2" size="md" isTruncated>
          {quiz.title}
        </Heading>
      </Center>
    </Link>
  );
}

export function QuizDisplay({ quiz }: { quiz: QuizWithCards }) {
  return (
    <div>
      <h1>{quiz.title}</h1>
      <div>
        {quiz.cards.map((card) => (
          <CardDisplay key={`card-${card.id}`} card={card} />
        ))}
      </div>
    </div>
  );
}
