import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { newCurrency, setNewCurrency } = useState(currency);

    const handleCurrencyChange = (event) => {

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
                <span style={currencyDropDown}>Currency {newCurrency} </span>
                <select style={currencySelect} className="custom-select" id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event)}>
                    <option value="$ Dollar" name="dollar">$ Dollar</option>
                    <option value="£ Pound" name="pound">£ Pound</option>
                    <option value="€ Euro" name="euro">€ Euro</option>
                    <option value="₹ Rupee" name="ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
}

export default Currency;