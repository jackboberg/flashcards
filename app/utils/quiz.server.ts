import { Card, Prisma, Quiz } from "@prisma/client";

import { db } from "~/utils/db.server";

export type { Card, Quiz };

export type QuizWithCards = Prisma.QuizGetPayload<{
  include: { cards: true }
}>

export async function getQuizzes(): Promise<Quiz[]> {
  return await db.quiz.findMany();
}

export async function getQuiz(id: string|undefined): Promise<QuizWithCards|null> {
  return await db.quiz.findUnique({
    where: { id },
    include: { cards: true },
  });
}
