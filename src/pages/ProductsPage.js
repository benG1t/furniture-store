import React from 'react'
import styled from 'styled-components'
import Pagehero from '../components/Pagehero'
import { Filters, Sort, ProductList } from '../components'

const ProductsPage = () => {
  return (
    <main>
      <Pagehero title='Products' />
      <Wrapper>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - (20vh + 10rem));
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
