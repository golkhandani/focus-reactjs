import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
export default function ExpenseList({ expenses }) {
  return (
    <Card>
      {expenses.map((expense, i) => (
        <ExpenseItem key={expense.id + i} expense={expense} />
      ))}
    </Card>
  );
}
