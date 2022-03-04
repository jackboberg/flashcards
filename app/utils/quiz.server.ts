import { find } from "lodash";

const sampleQuizzes = [
  {
    id: "63D7FEA9-4F44-4C62-B9A5-6615F5D6DCC9",
    title: "Quiz 1",
    cards: [
      { id: 1, front: "1:1: front", back: "1:1: back" },
      { id: 2, front: "1:2: front", back: "1:2: back" },
    ],
  },
  {
    id: "65017CCA-EA75-4341-BB4A-A4A2D6AA3E39",
    title: "Quiz 2",
    cards: [
      { id: 1, front: "2:1: front", back: "2:1: back" },
      { id: 2, front: "2:2: front", back: "2:2: back" },
    ],
  },
]

export interface Card {
  id: number;
  front: string;
  back: string;
};

export interface Quiz {
  id: string;
  title: string;
  cards: Card[];
};

export async function getQuizzes(): Promise<Quiz[]> {
  return sampleQuizzes;
}

export async function getQuiz(id: string|undefined): Promise<Quiz|undefined> {
  return find(sampleQuizzes, { id });
}
