import {
  useCatch,
  useLoaderData,
  type LoaderFunction,
} from "remix";
import { isEmpty } from "lodash";

import { QuizList } from "~/components/quiz";
import { getQuizzes, type Quiz } from "~/utils/quiz.server";

interface LoaderData {
  quizzes: Quiz[];
};

export const loader: LoaderFunction = async () => {
  const quizzes = await getQuizzes();
  if (isEmpty(quizzes)) {
    throw new Response("Not found.", { status: 404 });
  }
  const data: LoaderData = {
    quizzes: quizzes,
  };

  return data;
};

export default function QuizzesRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <QuizList quizzes={data.quizzes} />
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  switch (caught.status) {
    case 404: {
      return (
        <div>
          <p>No quizzes found.</p>
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

    return (
      <div>
        <p>{`There was an error loading quizzes. Sorry.`}</p>
      </div>
    );
}
