import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper className='section section-center'>
      <h3>join our newsletter and get 20% off</h3>
      <div className='contact'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          blanditiis ut, fugit vel officia placeat nobis minus in enim dolores.
        </p>
        <form className='contact-form'>
          <input
            type='email'
            placeholder='Enter Email'
            className='form-input'
          />
          <button type='submit' className='submit-btn'>
            subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  p {
    line-height: 2;
    letter-spacing: var(--spacing);
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .submit-btn {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .contact-form {
    /* width: 90vw; */
    max-width: 31rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media (min-width: 992px) {
    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      margin-top: 2rem;
    }
    .contact-form {
      align-self: center;
    }
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`

export default Contact
