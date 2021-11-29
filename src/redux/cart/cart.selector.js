import { createSelector } from 'reselect'

const cartSelector = state => state.cart;

export const selectCartItem = createSelector(
    [cartSelector],
    cart => cart.cartItems
);
 export const selectCartHidden = createSelector(
     [cartSelector], cart => cart.hidden
 );

export const selectCartItemsCount = createSelector(
    [selectCartItem], cartItems => cartItems.reduce(
        (cartQuantity, cartItem) => (
            cartQuantity + cartItem.quantity
        ),
        0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItem], cartItems => cartItems.reduce(
        (accumalatedQuant, cartItem)=> 
        accumalatedQuant + cartItem.quantity * cartItem.price,
        0
        )
)