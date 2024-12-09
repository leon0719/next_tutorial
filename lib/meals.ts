import sql from "better-sqlite3";

export interface Meal {
  image: string;
  title: string;
  creator: string;
  summary: string;
  instructions: string;
  slug: number;
}

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

  // Type the query result as Meal[]
  const meals = db.prepare(`SELECT * FROM meals`).all() as Meal[];
  return meals;
}

export async function getMeal(slug: number): Promise<Meal> {
  // Type the query result as Meal
  const meal = db
    .prepare(`SELECT * FROM meals WHERE slug = ?`)
    .get(slug) as Meal;

  if (!meal) {
    throw new Error(`Meal with slug ${slug} not found`);
  }

  return meal;
}
