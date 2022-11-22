import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
  const expenses = [
    {
      date: new Date(),
      title: "Car insurance",
      amount: 200.23
    },
    {
      date: new Date(),
      title: "Car insurance",
      amount: 200.23
    },
    {
      date: new Date(),
      title: "Car insurance",
      amount: 200.23
    }
  ];
  return (
    <div>
      <h2>List of Expenses!</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
