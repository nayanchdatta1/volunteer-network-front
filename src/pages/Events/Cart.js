import React from 'react';
import img from '../../Utilities/images/childSupport.png'

const Cart = (props) => {
    const { title } = props.event;
    return (
        <div className='card'>
            <img src={img} alt={title} />
            <div className='cart__content'>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Cart;