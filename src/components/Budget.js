
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        
        if (totalExpenses > event.target.value) {
            alert("You cannot reduce the budget value lower than the spending")
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} {newBudget}</span>
            <input type="number" step="10" value={newBudget} onChange={(event) => {handleBudgetChange(event)}}></input>
        </div>
    );
};
export default Budget;