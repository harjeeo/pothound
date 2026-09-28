import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:slug" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
