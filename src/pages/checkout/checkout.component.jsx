import React, {useEffect} from 'react';
import './checkout.styles.scss'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'

import LeftArrow from '../../assets/img/left-arrow.png'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import CustomButton from '../../components/custom-button/custom-button.component';

//import StripeCheckoutButton from '../../components/stripe-button/stripe-button.ocmponent'

//import {useFlutterwave, closePaymentModal} from 'flutterwave-react-v3';

import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


//Trying to get currentUservalue only after the page loads

const CheckoutPage = ({cartItems, total, currentUser} ) =>{
    // useEffect(() => {
    //     var currentUserEmail = currentUser.currentUser.email
    // }, []);
    // window.onload = () => { 
    //        let currentUserEmail = currentUser.currentUser.email;

    //     console.log(currentUserEmail)
    // }
   // console.log(currentUserEmail)
   
//     let config;

//     let currentUserEmail = currentUser.currentUser.email;
//      config = {
//         public_key: 'FLWPUBK-c2b4173873f46e8ddc0f2e8b438f4710-X',
//         tx_ref: Date.now(),
//         amount: total,
//         currency: 'USD',
//         payment_options: 'card,mobilemoney,ussd',
//         customer: {
//           email: currentUserEmail
//         },
//         customizations: {
//           title: 'my Payment Title',
//           description: 'Payment for items in cart',
//           logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//         },
//  }
//  return config;
// })
//    const handleFlutterPayment = useFlutterwave(config);

    const config = {
            public_key: 'FLWPUBK-c2b4173873f46e8ddc0f2e8b438f4710-X',
            tx_ref: Date.now(),
            amount: total,
            currency: 'USD',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
              email: "youremail@gmail.com", 
              name:"Your name",
            //   This shouldnt be typically. The user's email was meant to be fed into this object from the "currentUser" prop
            //   but I cannot seem to do that without triggering an error. 
            //   Redux persist rehydrates the redux currentUser prop after the initial value of null has
            //   already been received as the value 
            },
            customizations: {
              title: 'my Payment Title',
              description: 'Payment for items in cart',
              logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
            },
        }
        const fwConfig = {
            ...config,
            text: 'Pay Now',
            callback: (response) => {
               console.log(response);
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          };

    return( 
    <div className = "checkout">
        <a href={"/collections"} className="navigation">
            <span className= "navigation-arrow">
            &#8592;
            </span>
            <span className="navigation-text">Back to Shopping</span>
        </a>
    
    <div className="checkout-container">

        <div className="checkout-items">
{cartItems.map(cartItem => 
<CheckoutItem key= {cartItem.id} cartItem= {cartItem} />
   )}
        </div>

        <div className="checkout-summary">
            <p className="checkout-summary__title">Order Summary</p>
            <div className="checkout-summary__items">
                <div className="checkout-summary__item">
                    <span className= "checkout-summary__item--title">Subtotal</span>
                    <span className= "checkout-summary__item--info">${total}</span>
                </div>
                <div className="checkout-summary__item">
                    <span className= "checkout-summary__item--title">Estimated Shipping</span>
                    <span className= "checkout-summary__item--info">Free</span>
                </div>
                <div className="checkout-summary__item">
                    <span className= "checkout-summary__item--title">Estimated Tax</span>
                    <span className= "checkout-summary__item--info">$0</span>
                </div>
                <div className="checkout-summary__item">
                    <span className= "checkout-summary__item--title">Estimated Total</span>
                    <span className= "checkout-summary__item--total">${total}</span>
                </div>
            </div>

            {/* <StripeCheckoutButton price = {total}/> */}
            <FlutterWaveButton {...fwConfig}  />

            </div>
        </div>
    </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total:selectCartTotal,
    currentUser:selectCurrentUser,
});

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser, 
//     total:createStructuredSelector({
//         total:selectCartTotal
//     }),
//     cartItems: state.cart.cartItems,
//   });

export default connect(mapStateToProps, null)(CheckoutPage);

