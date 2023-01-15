import React, { useEffect, useState } from "react"

const Context = React.createContext()

function ContextProvidor({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
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
        console.log('newItem added', newItem)
        setCartItems(prevItems => [...prevItems, newItem])
        console.log('cartItems', cartItems)
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