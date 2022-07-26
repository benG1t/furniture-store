import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import AmountButtons from './AmountButtons'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product
  const [mainColor, setMainColor] = useState(colors[0])

  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <span
                key={index}
                className='color'
                style={{ background: `${color}` }}
                onClick={() => setMainColor(colors[index])}
              >
                {mainColor === color && <FaCheck />}
              </span>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </div>
      <Link
        to='/cart'
        className='btn'
        onClick={() => addToCart(id, mainColor, amount, product)}
      >
        add to cart
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .color {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-right: 1rem;
    color: white;
  }
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    div {
      display: flex;
    }
    span {
      font-weight: bold;
    }
  }
`

export default AddToCart
