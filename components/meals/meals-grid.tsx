import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

interface mealsProps {
  meals: {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }[];
}

function mealsGrid({ meals }: mealsProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default mealsGrid;
