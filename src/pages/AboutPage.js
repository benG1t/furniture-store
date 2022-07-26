import React from 'react'
import styled from 'styled-components'
import homeimg from '../assets/home-img.jpeg'
import Pagehero from '../components/Pagehero'

const AboutPage = () => {
  return (
    <Wrapper>
      <Pagehero title='About' />
      <section className='section'>
        <div className='section-center'>
          <img src={homeimg} alt='comfy furniture' />
          <article className='about-info'>
            <div className='title'>
              <h2>our story</h2>
              <div className='underline'></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nemo, eligendi vero blanditiis laudantium adipisci amet earum
              deserunt accusantium exercitationem et culpa autem nisi expedita?
              Deserunt fugiat consectetur ullam temporibus architecto in
              voluptates incidunt alias necessitatibus tenetur accusamus
              blanditiis illum eveniet praesentium recusandae doloribus, quia
              nulla, ratione voluptatum. A ab doloribus omnis rem sit officia
              neque consequuntur dolorum? Necessitatibus error libero voluptatum
              nemo praesentium mollitia tempore maiores natus cupiditate
              pariatur.
            </p>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  img {
    border-radius: var(radius);
    height: 30rem;
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .underline {
    margin-left: 0;
    margin-right: auto;
  }
  @media (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .title {
      margin-top: -1.8rem;
    }
    article {
      align-self: start;
    }
  }
`

export default AboutPage
