import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <div className={classes["main-container"]}>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> By You</span>
        </h1>
        <p>choose your favorite recipe and share it with your flavors.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<div className="bg-red-300">Loading...</div>}>
          <Meals />
        </Suspense>
      </main>
    </div>
  );
}
