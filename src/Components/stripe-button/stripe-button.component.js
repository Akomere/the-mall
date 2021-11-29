import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStipe =  price * 100;
    const publishableKey = 'pk_test_51K0k63EzV9UlgbsNVx7vFOEqJFKf9XTwD3ffdG2QbSy6VLSDIHHVe2YYvtatYlsfvpkawyJNOiGDTqglTgTi9GhN00DzsLMQHP'
    const onToken = token=>{
        console.log(token)
        alert('payment successful!')
    }

    return (
        
        <StripeCheckout
            label = 'Pay Now'
            name = 'lady mall'
            billingAddress
            shippingAddress
            image = 'https://www.google.com/search?q=credit+card+images&tbm=isch&ved=2ahUKEwj-iOeE8br0AhWaQUEAHc6RCsoQ2-cCegQIABAA&oq=credit+card+images&gs_lcp=CgNpbWcQDDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BggAEAcQHlCOCVi9EGDaHmgAcAB4AIABX4gB-QSSAQE4mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=fl6jYf7RDpqDhbIPzqOq0Aw&bih=969&biw=1920#imgrc=OezBXu3eCKQcyM'
            description = {`your total is $${price}`}
            amount ={priceForStipe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}

        />
    
    )
}

export default StripeCheckoutButton