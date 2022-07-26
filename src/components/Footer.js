import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} <span>comfy sloth</span>
        <br />
        All rights reserved
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--clr-black);
  /* text-align: center; */
  font-size: 1rem;
  height: 5rem;
  display: grid;
  place-items: center;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
  }
  span {
    color: var(--clr-primary-5);
  }
`

export default Footer
