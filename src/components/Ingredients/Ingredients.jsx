import React, { useEffect, useState, useCallback } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetching Data from database (FireBase)
  // useEffect(() => {
  //   fetch(
  //     "https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput.json"
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredient = [];
  //       for (const key in responseData) {
  //         loadedIngredient.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setUserIngredient(loadedIngredient);
  //     });
  // }, []);

  // useEffect for testing purpose
  useEffect(() => {
    console.log("testing useEffect==>");
  }, []);

  // Adding Ingredient Into List & Storing in data base (FireBase)
  const addIngredientsHandler = (Ingredients) => {
    setIsLoading(true);
    fetch(
      "https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput.json",
      {
        method: "POST",
        body: JSON.stringify(Ingredients),
        header: { "Content-Type": "Application/json" },
      }
    )
      .then((response) => {
        setIsLoading(false);
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
    setIsLoading(true);
    fetch(
      `https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput/${ingredientId}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setIsLoading(false);
      setUserIngredient((userIngredient) =>
        userIngredient.filter((ingredient) => ingredient.id !== ingredientId)
      );
    });
  };

  // Fetching data from FireBase & filtering it
  const filterIngredientHandler = useCallback((filteredIngredient) => {
    setUserIngredient(filteredIngredient);
  }, []);
  return (
    <div className="App">
      <IngredientForm
        onAddIngredient={addIngredientsHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filterIngredientHandler} />
        <IngredientList
          Ingredients={userIngredient}
          onRemoveItem={deleteIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
