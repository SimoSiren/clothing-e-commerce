export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    //Jos sama tuote id on ennestään korissa, kasvatetaan vastaavan tuotteen quantityä yhdellä.
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    //Jos samaa tuotetta ei ole ennestään, se liitetäään arrayhin ja annetaan quantity 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}