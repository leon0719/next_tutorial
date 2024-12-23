import Image from "next/image";
import classes from "./page.module.css";
import React from "react";
import { getMeal, Meal } from "@/lib/meals";
import { notFound } from "next/navigation"; // 自動導向not found page

interface generateMetadataProps {
  params: {
    mealSlug: number;
  };
}

export async function generateMetadata({ params }: generateMetadataProps) {
  const meal = await getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

interface MealProps {
  params: {
    mealSlug: number;
  };
}

async function MealDetailsPage({ params }: MealProps) {
  const meal: Meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
