import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState('Order')
    const { cartItems, emptyCart } = useContext(Context)
    const totalCost = 5 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    console.log('totalCost', totalCost)
    console.log('cartItems', cartItems)


    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            alert("ordered!")
            setButtonText('Order')
            emptyCart()
        }, 3000);
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
                {cartItems.length ? <button onClick={placeOrder}>{buttonText}</button> : 'Cart is empty'}
            </div>
        </main>
    )
}

export default Cart