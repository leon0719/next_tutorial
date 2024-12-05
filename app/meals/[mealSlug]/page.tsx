import Link from "next/link";
import React from "react";

function MealDetailsPage() {
  return (
    <div>
      <h1>Meal</h1>
      <p>
        <Link href="/meals">Back</Link>
      </p>
    </div>
  );
}

export default MealDetailsPage;
