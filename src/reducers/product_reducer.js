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

const productReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, product_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProduct = action.payload.filter(
      (product) => product.featured === true
    )
    return {
      ...state,
      products: action.payload,
      product_loading: false,
      featured: featuredProduct,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, product_error: true }
  }

  if (action.type === GET_SINGLE_PRODUCTS_BEGIN) {
    return { ...state, single_product_loading: true }
  }
  if (action.type === GET_SINGLE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      single_product: action.payload,
      single_product_loading: false,
    }
  }
  if (action.type === GET_SINGLE_PRODUCTS_ERROR) {
    return { ...state, single_product_error: true }
  }

  // return state
  throw new Error(`there is no matching state ${action.type}`)
}

export default productReducer
