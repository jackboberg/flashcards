import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <Link to="quizzes">Take quiz</Link>
    </div>
  );
}
