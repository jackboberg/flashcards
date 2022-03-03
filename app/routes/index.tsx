import { useLoaderData } from "remix";

import { QuizDisplay } from "~/components/quiz";

import type { LoaderFunction } from "remix";
import type { Quiz } from "~/components/quiz";

type LoaderData = {
  quiz: Quiz;
};

export const loader: LoaderFunction = async ({
  request: _request,
}) => {
  const data: LoaderData = {
    quiz: {
      id: 1,
      cards: [
        { id: 1, front: "1: front", back: "1: back" },
        { id: 2, front: "2: front", back: "2: back" },
      ]
    }
  };

  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <QuizDisplay quiz={data.quiz} />
    </div>
  );
}
