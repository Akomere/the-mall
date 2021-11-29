import { cartType } from "./cart.types";

export const toggleCart = () =>({
    type: cartType.TOGGLE_CART_HIDDEN  
})

export const addItem = item =>({
    type: cartType.ADD_ITEM,
    payload: item
})

export const clearCart = (item)=>({
    type: cartType.CLEAR_CART,
    payload: item
})

export const removeItem = item =>({
    type: cartType.REMOVE_ITEM,
    payload: item
})