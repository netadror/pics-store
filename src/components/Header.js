import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header() {
    const { cartItems } = useContext(Context)
    const cartClassName = cartItems.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            <Link to="/"><h2>DogPicShop</h2></Link>
            <Link to="/cart">
                <div className="checkout-container">
                    <h2>Checkout</h2>
                    <i className={`${cartClassName} ri-fw ri-2x`}></i>
                </div>
            </Link>
        </header>
    )
}

export default Header