import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
export interface Meal {
  id: string;
  image: string;
  title: string;
  creator: string;
  summary: string;
  instructions: string;
  slug: string;
  creator_email: string;
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

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  await new Promise((resolve, reject) => {
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) reject(error);
      resolve(true);
    });
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (
    @title,
    @summary,
    @instructions,
    @image,
    @creator,
    @creator_email,
    @slug
  )`,
  ).run(meal);
}
