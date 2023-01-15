import React, { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function Image({ className, img }) {
    // const [isHovered, setIsHovered] = useState(false)

    const [hovered, ref] = useHover()
    const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context)

    function toggleHeart() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const inCart = cartItems.some(item => item.id === img.id)
        if (inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            ref={ref}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" />
            {toggleHeart()}
            {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image