import React from "react";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import MealItem from "@/components/meals/MealItem";
import { notFound } from "next/navigation";
export default async function MealDetailPage({ params }) {
  const { MealId } = await params;
  const meal = await getMeal(MealId);

  if (!meal) {
    notFound();
  }
  return (
    <header className="flex flex-col bg-green-200 gap-2">
      <div>Image</div>
      <div className="flex flex-col justify-center items-center bg-green-300">
        <h1>{meal.title}</h1>
        <p>
          by{" "}
          <a
            className="text-amber-5 00 hover:text-amber-200"
            href={`mailto:${meal.creator_email}`}
          >
            {meal.creator}
          </a>
        </p>
        <p>{meal.summary} </p>
      </div>
    </header>
  );
}
