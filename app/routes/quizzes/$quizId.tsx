import { useLoaderData } from "remix";

import { QuizDisplay } from "~/components/quiz";
import { getQuiz, Quiz } from "~/utils/quiz.server";

import type { LoaderFunction } from "remix";

type LoaderData = {
  quiz: Quiz;
};

export const loader: LoaderFunction = async ({
  request: _request,
  params
}) => {
  const quiz = await getQuiz(params.quizId);
  if (!quiz) {
    throw new Response("Not found.", { status: 404 });
  }
  const data: LoaderData = {
    quiz: quiz,
  };

  return data;
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <QuizDisplay quiz={data.quiz} />
  );
}
