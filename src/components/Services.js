import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper className='section'>
      <div className='title section-center'>
        <h3>
          custom furniture <br /> built only for you
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          quam id ipsa nostrum culpa! Odit sit reiciendis saepe sapiente fuga?
        </p>
      </div>
      <div className='services-info section-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  p {
    padding: 1rem 0;
  }
  article {
    background: var(--clr-primary-7);
    text-align: center;
    margin: 2rem 0;
    border-radius: var(--radius);
    padding: 2rem;
  }
  span {
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    background: var(--clr-primary-10);
    margin: 0 auto;
    svg {
      font-size: 2rem;
    }
  }
  h4 {
    padding-top: 1rem;
    margin-bottom: -0.2rem;
  }
  @media (min-width: 578px) {
    .title {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .services-info {
      display: grid;
      column-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default Services
