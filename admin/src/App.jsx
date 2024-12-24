import Layout from './components/Layout'
import { FiHome, FiPlus, FiBox, FiDollarSign, FiUsers } from 'react-icons/fi';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import Payment from './pages/Payment';
import Users from './pages/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
