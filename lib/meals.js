import MealItem from "@/components/meals/MealItem";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("could not fetch the meals");
  return db.prepare("SELECT * FROM MEALS").all();
}

export async function getMeal(ID) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM MEALS WHERE SLUG = ?").get(ID);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage));
  await Promise((resolve) => setTimeout(resolve, 1000));
  db.prepare(
    `
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `
  ).run(meal);
}
