
import './App.css';
import NavBar from './components/navbar/NavBar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Products from './pages/Products';
import Shop from './pages/Shop';
import ShopCategories from './pages/ShopCategories';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategories category="men" />} />
        <Route path="/womens" element={<ShopCategories category="women" />} />
        <Route path="/kids" element={<ShopCategories category="kids"/> } />
        <Route path="/products" element={<Products /> }>
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignup />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
