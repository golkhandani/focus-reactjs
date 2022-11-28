import { useState } from 'react';
import './App.css';
import ExpenseList from './components/Expense/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/FilterExpense/ExpensesFilter';
function App() {
  const initExpences = [
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
  const [expenses, setExpenses] = useState(initExpences)

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      const updatedExpneses = [expense, ...prevState]
      return updatedExpneses;
    });
  }
  const filterExpenseChangeHandler = (filter) => {
    setExpenses(() => {
      const updatedExpneses = initExpences.filter(item => {
        const itemDate = item.date.getFullYear().toString();
        return itemDate === filter;
      });
      return updatedExpneses;
    });
  }

  return (
    <div className='container'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onFilterChange={filterExpenseChangeHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
