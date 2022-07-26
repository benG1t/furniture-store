import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  const { sort, updateSort, grid_view, setGridView, setListView } =
    useFilterContext()
  return (
    <Wrapper>
      <div className='layout'>
        <button className={grid_view ? 'active' : null} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button className={!grid_view ? 'active' : null} onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p>18 products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select name='sort' id='sort' value={sort} onChange={updateSort}>
          <option value='price-lowest'>Price (Lowest)</option>
          <option value='price-highest'>Price (Highest)</option>
          <option value='a-z'>Name (A-Z)</option>
          <option value='z-a'>Price (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 0.75rem;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: auto auto 1fr auto;
    column-gap: 1rem;
    hr {
      align-self: center;
    }
  }
  button {
    padding: 0.15rem 0.3rem;
    border-radius: var(--radius);
    border: 1px solid var(--clr-black);
    background: var(--clr-white);
    color: var(--clr-black);
    margin-right: 0.5rem;
  }
  .active {
    background: var(--clr-black);
    color: var(--clr-white);
  }
  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  label {
    text-transform: capitalize;
    margin-right: 1.5rem;
    font-size: 1rem;
  }
  select {
    font-size: 1rem;
    padding: 0.2rem;
  }
`

export default Sort
