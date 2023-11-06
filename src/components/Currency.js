import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

    const Currency = (props) => {
        const {dispatch} = useContext(AppContext);
    
        const submitEvent = (event) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            });
        };


    return (
      
        <div  className='alert alert-secondary'>
            <span> Currency </span>
                <select id="currency" name="currency" onChange={submitEvent}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>

    );
};
export default Currency;