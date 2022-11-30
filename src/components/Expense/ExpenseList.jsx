import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../FilterExpense/ExpensesFilter";

import "./ExpenseList.css";

import Card from "../UI/Card";
import { useState } from "react";

export default function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  let filterExpenses = structuredClone(props.expenses).filter((item) => {
    const itemDate = item.date.getFullYear().toString();
    return itemDate === filteredYear;
  });
  const filterExpenseChangeHandler = (filter) => {
    setFilteredYear(filter);
  };

  let expencesContent = filterExpenses.length === 0 && (
    <h2>No expences found!</h2>
  );

  if (filterExpenses.length > 0) {
    expencesContent = filterExpenses.map((expense, i) => (
      <ExpenseItem key={expense.id.toString()} expense={expense} />
    ));
  }

  return (
    <Card>
      <ExpensesFilter
        filteredYear={filteredYear}
        onFilterChange={filterExpenseChangeHandler}
      />
      {expencesContent}
    </Card>
  );
}
