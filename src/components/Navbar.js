import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products-context'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='comfy sloth' />
          <button className='nav-button' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 5rem;
  .cart-btn {
    display: none;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .nav-button {
    font-size: 2rem;
    border: transparent;
    background: transparent;
    cursor: pointer;
  }
  img {
    width: 11rem;
    margin-left: -1rem;
  }
  .nav-links {
    display: none;
    cursor: pointer;
    a {
      padding-bottom: 0.4rem;
    }
    a:hover {
      border-bottom: 0.15rem solid var(--clr-primary-7);
    }
  }
  @media (min-width: 992px) {
    .nav-button {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        margin-right: 2rem;
        text-transform: capitalize;
      }
    }
    .cart-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-center {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }
  }
`

export default Navbar
