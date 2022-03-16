import { Link } from "remix";
import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

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
  const card = quiz.cards[0];

  return (
    <Box>
      <Heading as="h2" size="lg" p="2">{quiz.title}</Heading>
      <Divider />
      <Center mt="8">
        <CardDisplay card={card} />
      </Center>
    </Box>
  );
}
