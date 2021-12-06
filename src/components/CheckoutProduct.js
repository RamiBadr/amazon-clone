import React from 'react'
import StarIcon from '@mui/icons-material/Star';

import './CheckoutProduct.css';
import { useStateValue } from './helpers/StateProvider';

function CheckoutProduct({id, title, price, image, rating}) {
    const [,dispatch] = useStateValue();
    const remove = () => {
        dispatch({type: "REMOVE_FROM_BASKET", id: id});
    } 
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={image} alt="product image" />
            <div className="checkoutProduct__info">
                <h4 className="checkoutProduct__heading">{title}</h4>
                <p className="__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                    Array(rating).fill().map(() => <p><StarIcon /></p>)
                    }
                </div>
                <button className="checkoutProduct__button" onClick={remove}>Remove From Basket</button>
            </div>
        </div> 
    )
}

export default CheckoutProduct
