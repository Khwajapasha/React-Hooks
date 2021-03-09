import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);
  // Adding Ingredient Into List

  const addIngredientsHandler = (Ingredients) => {
    const ingredientGUID = uuidv4();
    setUserIngredient((userIngredient) => [
      ...userIngredient,
      { id: ingredientGUID, ...Ingredients },
    ]);
  };

  // Deleting Ingredient From List
  const deleteIngredientHandler = (ingredientId) => {
    setUserIngredient((userIngredient) =>
      userIngredient.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList
          Ingredients={userIngredient}
          onRemoveItem={deleteIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
