import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);
  // Adding Ingredient Into List

  const addIngredientsHandler = (ingredients) => {
    const GUID = uuidv4();
    setUserIngredient((prevIngredient) => [
      ...prevIngredient,
      // { id: Math.random().toString(), ...ingredients },
      { id: GUID, ...ingredients },
    ]);
  };

  // Deleting Ingredient From List
  // const deleteIngredientHandler = (ingredientId) => {
  //   setUserIngredient((prevIngredient) =>
  //     prevIngredient.filter((ingredient) => ingredient.id !== ingredientId)
  //   );
  // };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList itemCurrent={userIngredient} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Ingredients;
