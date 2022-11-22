import "./ExpenseDate.css";
export default function ExpenseDate({ date }) {
  const month = new Date().toLocaleDateString("en-US", { month: "long" });
  const year = new Date().getFullYear();
  const day = new Date().toLocaleDateString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
