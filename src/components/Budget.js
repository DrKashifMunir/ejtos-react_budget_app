import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch,budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        
        if (event.target.value < totalExpenses) {
            alert("You can not reduce the budget value lower than the spending");
            return;
        } 

        if (event.target.value > 20000) {
            alert('Budget can not be greater than 20000');
            event.target.value = 20000;
        }
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;