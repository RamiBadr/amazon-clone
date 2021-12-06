import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './helpers/StateProvider';
import './Subtotal.css'

function Subtotal() {
    const [{basket}] = useStateValue();
    const getTotal = (basket) => {
        return basket.reduce((amount, item) => amount + item.price, 0);
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> this order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
