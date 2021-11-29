import React from 'react'
import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CartItem from '../cart-items/cart-item.component'
import { toggleCart } from '../../redux/cart/cart.action'
import { selectCartItem } from '../../redux/cart/cart.selector'
import './cart-dropdown.styles.scss'



const CartDropdown = ({ cartItems, history, dispatch }) => {
    console.log("cartItems")
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                        : (<span className="empty-message" > Your Cart is empty!</span>)
                }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleCart())
                history.push('/checkout')
            }
            }>
                GO TO CHECKOUT
            </CustomButton>
        </div>

    )
}

// this method of passing in state is without createStructuredSelector
// please see header component and app.js mapStateToProps
const mapStateToProps = (state) => ({
    cartItems: selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))