import React from 'react'
import styled from 'styled-components'
import { Pagehero } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <Pagehero title='checkout' />
      <Wrapper>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          'STRIP PAYMENT COMING SOON'
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - (20vh + 10rem));
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CheckoutPage
