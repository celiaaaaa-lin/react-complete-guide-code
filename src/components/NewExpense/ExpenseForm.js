import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] =  useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
        // Multi-State-Approach: state updates depends on obsolete state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}}
        // );
    };

    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value);
        // Multi-State-Approach-2: no ganrantee if the obsolete state is the "latest" one
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const handleDateChange = (event) => {
        setEnteredDate(event.target.value);
    }

    const handleSubmit = (event) => {
        // disable request sending and form refresh
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                   <label>Title</label>
                   <input type="text" value={enteredTitle} onChange={handleTitleChange}/>
                </div>
                <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" value={enteredAmount} min="0.01" stop="0.01" onChange={handleAmountChange}/>
                </div>
                <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={handleDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;