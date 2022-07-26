import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { formatPrice } from '../utils/helpers'

const Product = ({ id, image, name, price }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt='comfy products' />
        <Link to={`/product/${id}`} className='product-link'>
          <FaSearch />
        </Link>
      </div>
      <div className='product-info'>
        <p>{name}</p>
        <p>{formatPrice(price)}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img-container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }

  .product-link {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .img-container:hover img {
    opacity: 0.5;
  }
  .img-container:hover .product-link {
    opacity: 1;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 14rem;
    object-fit: cover;
    transition: var(--transition);
  }
  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export default Product
