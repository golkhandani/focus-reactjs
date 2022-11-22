import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
export default function ExpenseList({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}
