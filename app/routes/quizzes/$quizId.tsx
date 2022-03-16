import { LoaderFunction, useCatch, useLoaderData, useParams } from "remix";
import { shuffle } from "lodash";

import { QuizDisplay } from "~/components/quiz";
import { getQuiz, type QuizWithCards } from "~/utils/quiz.server";

interface LoaderData {
  quiz: QuizWithCards;
}

export const loader: LoaderFunction = async ({ params: { quizId } }) => {
  const quiz = await getQuiz(quizId);
  if (!quiz) {
    throw new Response("Not found.", { status: 404 });
  }
  const data: LoaderData = {
    quiz: { ...quiz, cards: shuffle(quiz.cards) },
  };

  return data;
};

export default function QuizRoute() {
  const data = useLoaderData<LoaderData>();

  return <QuizDisplay quiz={data.quiz} />;
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();

  switch (caught.status) {
    case 404: {
      return (
        <div>
          <p>Huh? What the heck is {params.quizId}?</p>
        </div>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  const { quizId } = useParams();
  return (
    <div>
      <p>{`There was an error loading quiz by the id ${quizId}. Sorry.`}</p>
    </div>
  );
}
