import React from "react";
import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className="flex flex-col gap-2">
      {meals?.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
