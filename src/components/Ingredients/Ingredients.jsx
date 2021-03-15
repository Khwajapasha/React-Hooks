import React, { useEffect, useState, useCallback, useReducer } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredient;
    case "ADD":
      return [...currentIngredients, action.Ingredients];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not be get ");
  }
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...currentHttpState, error: null };
    default:
      throw new Error("Should not be reached");
  }
};
const Ingredients = () => {
  // const [userIngredient, setUserIngredient] = useState([]);
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [showError, setShowError] = useState();
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

  // Fetching data from FireBase & filtering it
  const filterIngredientHandler = useCallback((filteredIngredient) => {
    // setUserIngredient(filteredIngredient);

    //instead of above code we can useReducer
    dispatch({ type: "SET", ingredient: filteredIngredient });
  }, []);

  // Adding Ingredient Into List & Storing in data base (FireBase)
  const addIngredientsHandler = (Ingredients) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" }); // using useReducer
    fetch(
      "https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput.json",
      {
        method: "POST",
        body: JSON.stringify(Ingredients),
        header: { "Content-Type": "Application/json" },
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then((responseData) => {
        // setUserIngredient((userIngredient) => [
        //   ...userIngredient,
        //   { id: responseData.name, ...Ingredients },
        // ]);

        //instead of above code we can useReducer
        dispatch({
          type: "ADD",
          Ingredients: { id: responseData.name, ...Ingredients },
        });
      });
  };

  // Deleting Ingredient From List
  const deleteIngredientHandler = (ingredientId) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hooks-49032-default-rtdb.firebaseio.com/IngredientsFromInput/${ingredientId}.jon`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        // setUserIngredient((userIngredient) =>
        //   userIngredient.filter((ingredient) => ingredient.id !== ingredientId)
        // );
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((error) => {
        // setShowError(error.message);
        // setIsLoading(false);
        dispatchHttp({ type: "ERROR", errorMessage: error.message });
      });
  };

  const clearErrorModal = () => {
    // setShowError(null);
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {/* {showError && (
        <ErrorModal onClose={clearErrorModal}>{showError}</ErrorModal>
      )} */}
      {httpState.error && (
        <ErrorModal onClose={clearErrorModal}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientsHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredients={filterIngredientHandler} />
        <IngredientList
          Ingredients={userIngredients}
          onRemoveItem={deleteIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
