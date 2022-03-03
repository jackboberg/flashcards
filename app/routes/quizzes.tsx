import { Link, Outlet, useLoaderData } from "remix";

import { getQuizzes, Quiz } from "~/utils/quiz.server";

import type { LoaderFunction } from "remix";

type LoaderData = {
  quizzes: Quiz[];
};

export const loader: LoaderFunction = async ({
  request: _request,
}) => {
  const quizzes = await getQuizzes();
  const data: LoaderData = {
    quizzes: quizzes,
  };

  return data;
};

export default function QuizzesRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <ol>
        {data.quizzes.map((quiz) => (
          <li key={`quiz-${quiz.id}`}>
            <Link to={quiz.id}>{quiz.title}</Link>
          </li>
        ))}
      </ol>
      <Outlet />
    </div>
  );
}
