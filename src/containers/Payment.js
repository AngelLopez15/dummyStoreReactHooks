import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button'
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css'

export default function Payment() {

  const { state, addNewOrder } = useContext(AppContext)
  const history = useHistory()
  const { cart, buyer } = state

  const paypalOptions = {
    clientId: '51848484ea84eavava',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const hanleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const handlePaymentSucces = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer, 
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }

  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={hanleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data=>handlePaymentSucces(data)}
            onPaymentError={error=>console.log(error)}
            onPaymentCancel={data=>console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}
