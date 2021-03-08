import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);
  const addIngredientsHandler = (itemCurrent) => {
    setUserIngredient((prevIngredient) => [
      ...prevIngredient,
      { id: Math.random().toString(), ...itemCurrent },
    ]);
  };
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
