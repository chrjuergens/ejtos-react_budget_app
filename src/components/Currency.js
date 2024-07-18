import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [ newCurrency, setNewCurrency ] = useState(currency);

    const handleCurrencyChange = (event) => {
        console.log(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
        console.log("New Currency: " + event.target.value);
    }

    const currencyDropDown = {
        backgroundColor: '#7EDC77',
        color: 'white',
        border: 'none',
        max: '100px'
    }

    const currencySelect = {
        backgroundColor: '#7EDC77',
        color: 'white',
        border: 'none',
        width: '120px'
    }

    return (
        <div className='alert alert-secondary'>
            <div style={currencyDropDown}>
                <span style={currencyDropDown}>Currency </span>
                <select defaultValue={newCurrency} style={currencySelect} className="custom-select" id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event)}>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
}

export default Currency;