import React, { useContext, useEffect, useState } from 'react';
import ShoppingItem from './ShoppingItem'
import { AppContext } from '../state/context';
import { resetList } from '../state/reducer';


const ShoppingCart = () => {
    const { state, dispatch } = useContext(AppContext);

    const [cart, setCart] = useState(state.products)


     useEffect(() => {

        const getLocalCart = JSON.parse(localStorage.getItem("cart") || '[]');
   
        if (getLocalCart) {
            
            setCart({
                ...getLocalCart
            })              
        } 

    }, [])

   
    //   const cartItems = Object.values(cart);

    let newPriceArray = state.products.map(product => {
        return { ...product, totalPrice: product.amount * product.price }
    })
    let priceArray = newPriceArray.map(item => item.totalPrice)
    let sumPrice = priceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )

    let totalAmount = state.products.map(item => item.amount)
    let sumAmount = totalAmount.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )

    return <ul className="shopping--container">

        <h3 className='cart-line' data-testid="shopTitle">Shopping Cart</h3>

        { state.products &&  state.products.map((item: ShoppingType) => (
            
                <ShoppingItem key={item.id} item={item} />               
           
        ))}

        <p data-testid="shopPdtNb">Number of products: {sumAmount}</p>

        <p data-testid="shopTtlPr">Total price: {sumPrice},-</p>

        <p>
            <button
                className="shopping--button delete"
                data-testid="shopDelBtn"
                onClick={() => dispatch(resetList())}>
                Clear Cart
            </button>
        </p>

        <p>
            <button
                className="shopping--button checkout"
                data-testid="shopCkoBtn"
                onClick={() => alert('This prototype has no checkout function!')}>
                Checkout
            </button>
        </p>
    </ul>;
};

export default ShoppingCart;
