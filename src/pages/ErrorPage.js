import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h4>sorry, this page you tried cannot be found</h4>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: grid;
  place-items: center;
  min-height: calc(100vh - 10rem);
  text-align: center;
`

export default ErrorPage
