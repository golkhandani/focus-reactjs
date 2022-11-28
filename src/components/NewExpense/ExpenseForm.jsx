import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // alternative
  /*
  const [UserInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: 0,
    enteredDate: new Date(),
  });
  const titleChangeHandler = (event) => {
    console.log("Title Changed!", event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle:  event.target.value,
      };
    });
  };
  */

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    console.log("Title Changed!", event.target.value);
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("0");
  const amountChangeHandler = (event) => {
    console.log("Amount Changed!", event.target.value);
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    console.log("Date Changed!", event.target.value);
    setEnteredDate(event.target.value);
  };

  const reset = () => {
    setEnteredDate("");
    setEnteredAmount("0");
    setEnteredTitle("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log("Submit expense", expense);
    props.onSaveExpense(expense);
    reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
