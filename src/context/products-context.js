import { createContext, useContext, useReducer, useState } from 'react'
import reducer from '../reducers/product_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_ERROR,
} from '../actions'
import { useEffect } from 'react'
import axios from 'axios'
import { products_url } from '../utils/constants'

const ProductsContext = createContext()

const initialState = {
  isSidebarOpen: false,
  products: [],
  product_loading: false,
  product_error: false,
  featured: [],
  single_product: [],
  single_product_loading: false,
  single_product_error: false,
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCTS_BEGIN })
    try {
      const response = await axios(url)
      const data = response.data
      dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCTS_ERROR })
    }
  }

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios(url)
      const data = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }
  useEffect(() => {
    fetchProducts(products_url)
  }, [])

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
