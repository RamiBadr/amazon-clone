import React from 'react'

import StarIcon from '@mui/icons-material/Star';

import './Product.css'
import { useStateValue } from './helpers/StateProvider';
import { useHistory } from 'react-router-dom';

function Product({id, title, price, rating, image}) {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue()
    const addToBasket = () => {
        if(user) {
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id,
                    title,
                    image,
                    price,
                    rating
                }
            })
        } else {
            history.push('/login');
        }
    }
    return (
        <div className="product">
            <div className="product__info">
                <h4 className="product__heading">{title}</h4>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                    Array(rating).fill().map(() => <p><StarIcon /></p>)
                    }
                </div>
            </div>
            <img src={image} alt="product image" />
            <button className="product__button" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
