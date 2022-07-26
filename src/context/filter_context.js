import { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  UPDATE_SORT,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from '../actions'
import { useProductsContext } from './products-context'
import { useEffect } from 'react'

const FilterContext = createContext()

const initialState = {
  sort: 'price-lowest',
  grid_view: false,
  all_products: [],
  filtered_products: [],
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
    dispatch({ type: FILTER_PRODUCTS })
  }, [state.sort, state.filters])

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        setListView,
        setGridView,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
