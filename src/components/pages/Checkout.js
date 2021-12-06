import React from 'react';
import {useStateValue} from '../helpers/StateProvider'
import CheckoutProduct from '../CheckoutProduct';

import './Checkout.css';
import Subtotal from '../Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();

    const products = basket.map(product => {
        const {
            id,
            title,
            image,
            price,
            rating
        } = product;
        return( 
            <CheckoutProduct 
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
            />
        )
    });
    
    return (
        <div className='checkout'>
            <div className='basket'>
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2021/img/Events/XCM_Manual_1372281_4302645_Egypt_WF21_Generic_header_1500x200_EN_3000x400_2X.jpg" />
                {basket.length === 0? (
                        <div>
                            <h3>Your Shopping Basket is Empty</h3>
                            <p>You have no items in your basket.
                            to buy one or more items, click "Add to basket" next to item.</p>
                        </div>
                ) : (
                    <div className="checkout__list">
                        <h3 className='checkout__title'>Your Shopping Basket</h3>
                        {products}
                    </div>
                )}
                    
            </div>
            <div className="checkout__subtotal">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
