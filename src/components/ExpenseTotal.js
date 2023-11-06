import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <>
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>

        <div className='currency'> 
            <span> Currency </span>
            <select id="currency" name="currency">
            <option value="USD">$ Dollar</option>
            <option value="GBP" selected>£ Pound</option>
            <option value="EUR">€ Euro</option>
              <option value="INR">₹ Ruppee</option>
            </select>
        </div>
        </>
    );
};
export default ExpenseTotal;