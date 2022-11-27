import React, { useState } from "react";

import "./ExpensesFilter.css";
import Card from "../UI/Card";

const ExpensesFilter = (props) => {
  const [select, setSelect] = useState("2022");
  const onChangeHandler = (event) => {
    const newSelect = event.target?.value;
    setSelect(newSelect);
    props.onFilterChange(newSelect);
  };
  return (
    <Card>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={select} onChange={onChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
