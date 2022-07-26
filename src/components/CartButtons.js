import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { useProductsContext } from '../context/products-context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()
  return (
    <Wrapper className='cart-btn'>
      <Link to='/cart' className='cart' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-amount'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            clearCart()
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout
          <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* display: none; */
  .cart {
    font-size: 1.5rem;
    padding-right: 1rem;
    color: var(--clr-black);
    cursor: pointer;
  }
  .cart-container {
    margin-left: 0.2rem;
    position: relative;
  }
  .cart-amount {
    background: var(--clr-primary-5);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    font-size: 1rem;
    color: white;
    letter-spacing: var(--spacing);
  }
  .auth-btn {
    border: transparent;
    margin-right: 1rem;
    margin-left: 1rem;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    svg {
      margin-left: 0.2rem;
    }
  }
`

export default CartButtons
