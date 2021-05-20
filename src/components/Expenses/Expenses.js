import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const handleFilterChange = selectedYear => {
    setSelectedYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onFilterChange={handleFilterChange} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
};

export default Expenses;