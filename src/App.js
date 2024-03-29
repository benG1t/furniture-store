import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  ErrorPage,
  CartPage,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<SingleProductPage />} />
          <Route
            path='/checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
