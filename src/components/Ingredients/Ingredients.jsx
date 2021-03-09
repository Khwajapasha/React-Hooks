import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);
  // Adding Ingredient Into List
  const addIngredientsHandler = (itemCurrent) => {
    setUserIngredient((prevIngredient) => [
      ...prevIngredient,
      { id: Math.random().toString(), ...itemCurrent },
    ]);
  };
  // Deleting Ingredient From List
  const deleteIngredientHandler = (ingredientId) => {
    setUserIngredient((prevIngredient) =>
      prevIngredient.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList
          itemCurrent={userIngredient}
          onRemoveItem={deleteIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
