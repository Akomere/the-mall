import { cartType } from "./cart.types";
import { addItemToCart, removeIteminCart } from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case cartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

            case cartType.CLEAR_CART:
                return{
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                }

            case cartType.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems: removeIteminCart(state.cartItems, action.payload)
                }
                    

        default:
            return state;
    }

}

export default cartReducer