import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <div className="rounded border p-2 bg-green-300">
      <header>
        <div>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div>
        <p>{summary}</p>
        <div>
          <Link
            className="rounded border p-1 bg-amber-200 hover:bg-amber-300"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
