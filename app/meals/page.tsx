import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/create">Create</Link>
      </p>
      <p>
        <Link href="/">Back</Link>
      </p>
    </div>
  );
}

export default page;
