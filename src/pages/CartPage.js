import React from 'react'
import styled from 'styled-components'
import Pagehero from '../components/Pagehero'
import CartContent from '../components/CartContent'

const CartPage = () => {
  return (
    <main>
      <Pagehero title='Cart' />
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main``

export default CartPage
