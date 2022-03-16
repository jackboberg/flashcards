import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
  await Promise.all(getQuizzes().map((quiz) => db.quiz.create({ data: quiz })));
}

seed();

function getQuizzes() {
  return [
    {
      title: "Quiz 1",
      cards: {
        create: [
          { front: "1:1 - front", back: "1:1 - back" },
          { front: "1:2 - front", back: "1:2 - back" },
          { front: "1:3 - front", back: "1:3 - back" },
        ],
      },
    },
    {
      title: "Quiz 2",
      cards: {
        create: [
          { front: "2:1 - front", back: "2:1 - back" },
          { front: "2:2 - front", back: "2:2 - back" },
        ],
      },
    },
  ];
}
