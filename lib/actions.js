"use server";
async function ShareMeal(fd) {
  "use server";
  const meal = {
    title: fd.get("title"),
    summary: fd.get("summary"),
    instructions: fd.get("instructions"),
    image: fd.get("image"),
    creator: fd.get("name"),
    creator_email: fd.get("email"),
  };
  console.log("meal is :", meal);
}

export const shareMeal = ShareMeal;
