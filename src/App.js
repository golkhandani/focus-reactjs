import { useState } from 'react';
import './App.css';
import ExpenseList from './components/Expense/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  let initExpences = [
    {
      id: 1,
      date: new Date("2022-10-01"),
      title: "Car insurancec 2022",
      amount: 200.23
    },
    {
      id: 2,
      date: new Date("2020-10-01"),
      title: "Car insurance 2020",
      amount: 200.23
    },
    {
      id: 3,
      date: new Date("2019-10-01"),
      title: "Car insurance 2019",
      amount: 200.23
    }
  ]
  const [expenses, setExpenses] = useState(initExpences);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      const updatedExpneses = [expense, ...prevState];
      return updatedExpneses;
    });
  };

  return (
    <div className='container'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
