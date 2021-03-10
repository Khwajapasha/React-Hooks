import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);

  // Fetching Data from database
  useEffect(() => {
    fetch(
      "https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredient = [];
        for (const key in responseData) {
          loadedIngredient.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredient(loadedIngredient);
      });
  }, []);
  // Adding Ingredient Into List
  // const ingredientGUID = uuidv4();
  const addIngredientsHandler = (Ingredients) => {
    fetch(
      "https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput.json",
      {
        method: "POST",
        body: JSON.stringify(Ingredients),
        header: { "Content-Type": "Application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredient((userIngredient) => [
          ...userIngredient,
          { id: responseData.name, ...Ingredients },
        ]);
      });
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
