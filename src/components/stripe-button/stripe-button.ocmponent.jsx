import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hx7YMEds7QhgZVCj8lTphTaKf3P3Q7b5nZ2pTplCGjayxCpZ0CuLx67pjfo0Jv2IB39wNm1B6lkFk4gGFZIWXwC00wgaaOvjf'

      const  onToken = token =>{
            console.log(token);
            alert("Payment Successful")
        };

        return(
            <StripeCheckout
            label = "Pay Now"
            name = "Celestial Things" 
            billingAddress
            shippingAddress
            description = {`Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel = "Pay Now"
            token = {onToken}
            stripeKey = {publishableKey}
            />
        );
}

export default StripeCheckoutButton;