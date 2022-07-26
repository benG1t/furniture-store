import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Error, Loading, Pagehero, Stars, AddToCart } from '../components'
import styled from 'styled-components'
import { single_product_url as url } from '../utils/constants'
import { useProductsContext } from '../context/products-context'
import ProductImages from '../components/ProductImages'
import { formatPrice } from '../utils/helpers'

const SingleProductPage = () => {
  const { id } = useParams()
  const {
    fetchSingleProduct,
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext()
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const {
    images,
    name,
    stars,
    reviews,
    id: sku,
    price,
    description,
    stock,
    company,
    colors,
  } = product
  return (
    <main>
      <Pagehero title='Products' name='benjamin' product />
      <Wrapper className='section section-center'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <article className='product-info'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <p className='price'>{formatPrice(price)}</p>
            <p className='description'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'in stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </article>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  .product-center {
    display: grid;
    gap: 4rem;
  }
  .btn {
    margin-bottom: 2rem;
  }
  .info {
    display: grid;
    width: 300px;
    grid-template-columns: 125px 1fr;
    text-transform: capitalize;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default SingleProductPage
