import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import hero from '../assets/home-img.jpeg'
import heroSmall from '../assets/home-img2.jpeg'

const Hero = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='hero-info'>
          <h1>
            design your <br />
            comfort zone
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            autem, facere esse doloremque, aliquid corporis amet architecto
            earum, soluta aliquam eos voluptatibus. Sunt laudantium
            exercitationem totam quisquam iure alias quas.
          </p>
          <Link to='/products' className='btn'>
            shop now
          </Link>
        </article>
        <article className='img-container'>
          <img src={hero} alt='hero comfy' className='hero-img' />
          <img src={heroSmall} alt='comfy' className='hero-img-small' />
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: calc(100vh-5rem);
  .img-container {
    display: none;
  }
  p {
    padding: 0.8rem 0;
    line-height: 2;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 35rem 1fr;
      column-gap: 2rem;
    }
    .hero-info {
      align-self: center;
    }
    .img-container {
      display: block;
      position: relative;
      justify-self: end;
    }
    .hero-img {
      display: block;
      width: 30rem;
      height: 30rem;
      object-fit: cover;
      position: relative;
    }
    .hero-img-small {
      width: 15rem;
      height: 10rem;
      position: absolute;
      bottom: 0;
      left: 0%;
      transform: translateX(-50%);
    }
    img {
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 4rem;
      height: 23rem;
      background: var(--clr-primary-8);
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
  }
`

export default Hero
