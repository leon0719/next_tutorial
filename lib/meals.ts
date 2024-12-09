import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const meals = db.prepare(`SELECT * FROM meals`).all(); // .run() 是如果要插入數據或更改數據

  // throw new Error("Something went wrong");
  return meals;
}
