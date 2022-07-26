import React from 'react'
import { useProductsContext } from '../context/products-context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Product from './Product'
import Loading from './Loading'
import Error from './Error'

const FeaturedProducts = () => {
  const {
    featured,
    product_loading: loading,
    product_error: error,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured-center'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* height: 100vh; */
  background: var(--clr-grey-10);

  h2 {
    text-align: center;
    margin-bottom: -0.5rem;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;

    text-align: center;
  }
  .featured-center {
    display: grid;
    gap: 1rem;
    margin: 4rem auto;
  }
  @media (min-width: 576px) {
    .featured-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
