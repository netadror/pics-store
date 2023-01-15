import React, { useContext } from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"
import PropTypes from 'prop-types'

function CartItem({ item }) {
    // const [isBinHovered, setIsBinHovered] = useState(false)
    const [hovered, ref] = useHover()
    const { removeFromCart } = useContext(Context)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"


    return (
        <div className="cart-item">
            <i
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            // onMouseEnter={() => setIsBinHovered(true)}
            // onMouseLeave={() => setIsBinHovered(false)}

            ></i>
            <img src={item.url} width="200px" />
            <p>$5</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}
export default CartItem

    // const itemPrice = getRandomIntInclusive(1, 10)
    // function getRandomIntInclusive(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    // }