import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../FilterExpense/ExpensesFilter";

import "./ExpenseList.css";

import Card from "../UI/Card";
import { useState } from "react";

export default function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  let expenses = structuredClone(props.expenses).filter((item) => {
    const itemDate = item.date.getFullYear().toString();
    return itemDate === filteredYear;
  });
  const filterExpenseChangeHandler = (filter) => {
    setFilteredYear(filter);
  };
  return (
    <Card>
      <ExpensesFilter
        filteredYear={filteredYear}
        onFilterChange={filterExpenseChangeHandler}
      />
      {expenses.map((expense, i) => (
        <ExpenseItem key={expense.id + i} expense={expense} />
      ))}
    </Card>
  );
}
