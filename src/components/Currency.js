import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    const currency_obj = {
        "$": "Dollar",
        "£": "Pound",
        "€": "Euro",
        "₹": "Rupee"
    }

    return (
        <div className='alert alert-secondary'>
            <div className='alert-success'>
                Currency {
                <select name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}
                        className="selectpicker"
                >
                    {Object.keys(currency_obj).map((key) => {
                        let selected = false;
                        if (key === currency) {
                            selected = true;
                        }

                        return (
                            <option value={key} selected={selected}>{key} {currency_obj[key]}</option>
                        );
                    })}
                </select>
            }
            </div>
        </div>
    )
}

export default Currency