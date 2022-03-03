import { useLoaderData } from "remix";

import { CardDisplay } from "~/components/card";

import type { LoaderFunction } from "remix";
import type { Card } from "~/components/card";

type LoaderData = {
  cards: Card[];
};

export const loader: LoaderFunction = async ({
  request: _request,
}) => {
  const data: LoaderData = {
    cards: [
      { id: 1, front: "1: front", back: "1: back" },
      { id: 2, front: "2: front", back: "2: back" },
    ]
  };

  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      { data.cards.map((card) => (
        <CardDisplay key={`card-${card.id}`} card={card} />
      )) }
    </div>
  );
}
