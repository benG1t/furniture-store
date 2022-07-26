import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <img src={main.url} alt='furniture' className='main-img' />
      <div className='img-container'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={image.url === main.url ? 'active images' : 'images'}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .main-img {
    height: 20rem;
  }
  .img-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    margin-top: 1rem;
    img {
      height: 5rem;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (min-width: 992px) {
    .main-img {
      height: 31rem;
    }
    .images {
    }
  }
`

export default ProductImages
