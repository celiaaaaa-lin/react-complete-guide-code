import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
           ...enteredExpenseData,
           id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    };

    const handleStartEditing = () => {
        setIsEditing(true);
    }

    const handleStopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={handleStartEditing} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onStopEditing={handleStopEditing} />}
        </div>
    );
};

export default NewExpense;