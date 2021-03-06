import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartItem from '../../Components/cart-items/cart-item.component'
import CheckoutItem from '../../Components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component'

import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selector'
import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => {
    console.log(cartItems)
    return (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem=> <CheckoutItem key={cartItem.id} cartItem = {cartItem}/>)}

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
        *Please use the following test credit card for payments new*
        <br/>
        4242 4242 4242 4242 4242 - Exp: 01/23 - CVV: 123   
        </div>
        <StripeCheckoutButton price ={total}/>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)