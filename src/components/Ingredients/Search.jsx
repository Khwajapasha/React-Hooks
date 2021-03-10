import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilterData, setEnteredFilterData] = useState("");

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
        // setUserIngredient(loadedIngredient);
      });
  }, [enteredFilterData]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilterData || ""}
            onChange={(e) => setEnteredFilterData(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
