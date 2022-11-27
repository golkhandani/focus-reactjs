import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpense) => {
    console.log("___ enteredExpense", enteredExpense);
    const newExpense = {
      ...enteredExpense,
      id: Date.now(),
    };
    props.onAddExpense(newExpense);
    return newExpense;
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
