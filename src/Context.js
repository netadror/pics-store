import React, { useEffect, useState } from "react"

const Context = React.createContext()

function ContextProvidor({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = 'https://api.pexels.com/v1/search?query=dogs&per_page=15'

    const options = {
        method: 'GET',
        headers: {
            Authorization: '563492ad6f91700001000001129df32ba082468e949fc828b9190e77'
        }
    };

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => setAllPhotos(data.photos))
    }, [])

    function toggleFavorite(id) {
        const updatedPhotos = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedPhotos)

    }
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            addToCart,
            cartItems,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvidor, Context }