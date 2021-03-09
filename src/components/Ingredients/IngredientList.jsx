import React from "react";

import "./IngredientList.css";

const IngredientList = (kuchBhi) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {kuchBhi.value.map((ig) => (
          <li key={ig.id} onClick={kuchBhi.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
