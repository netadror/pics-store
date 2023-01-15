import React, { useState, useContext } from "react"
import { Context } from "../Context"

function CartItem({ item }) {
    const [isBinHovered, setIsBinHovered] = useState(false)
    const { removeFromCart } = useContext(Context)

    const iconClassName = isBinHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"


    return (
        <div className="cart-item">
            <i
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setIsBinHovered(true)}
                onMouseLeave={() => setIsBinHovered(false)}

            ></i>
            <img src={item.url} width="200px" />
            <p>$5</p>
        </div>
    )
}

export default CartItem

    // const itemPrice = getRandomIntInclusive(1, 10)
    // function getRandomIntInclusive(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    // }