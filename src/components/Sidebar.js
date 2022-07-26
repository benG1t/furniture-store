import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { links } from '../utils/constants'
import { FaTimes } from 'react-icons/fa'
import CartButtons from './CartButtons'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products-context'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  return (
    <Wrapper>
      <aside className={`${isSidebarOpen ? 'aside show-sidebar' : 'aside'}`}>
        <header>
          <img src={logo} alt='comfy' />
          <button onClick={closeSidebar}>
            <FaTimes />
          </button>
        </header>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  .aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--clr-grey-10);
    transform: translateX(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translateX(0);
    z-index: 99;
  }
  header {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    img {
      width: 11rem;
      margin: -1rem;
    }
    button {
      border: transparent;
      font-size: 2rem;
      color: var(--clr-red-light);
      cursor: pointer;
    }
  }
  .nav-links {
    text-align: left;
    display: block;
    margin: 2rem 0;
    padding: 0 2rem;
    li {
      margin-bottom: 2rem;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      transition: var(--transition);
      font-size: 1rem;
    }
    li:hover {
      padding-left: 0.5rem;
    }
    .cart-btn {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: 578px) {
    .aside {
      display: none;
    }
  }
`

export default Sidebar
