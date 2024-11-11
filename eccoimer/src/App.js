import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import CategoryMenu from './components/CategoryMenu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import ProductDetail from './components/ProductDetail';
import OrderPage from './components/Order';
import SignUp from './components/Signup';
import Login from './components/SignIn';
import CheckoutPage from "./components/Checkout"
import Categories from "./components/Categories"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductGrid />
              <CategoryMenu />
            </>
          } />
          
          {/* Search Results Page */}
          <Route path="/search/:query" element={<ListProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<Categories />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
