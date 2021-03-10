import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilterData, setEnteredFilterData] = useState("");
  useEffect(() => {}, [enteredFilterData]);
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
