import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import ProductsContext from "./components/ProductsContext";
import Products2 from "./components/Products2";
import Products3 from "./components/Products3";
import Footer from "./components/Footer";
import Para   from "./components/Para"

function App() {
  return (
    <div>
      <Navbar  />
      <Menu />
      <Banner />
      <Para />
      <ProductsContext />
      <Products2 />
      <Products3 />
      <Footer />
      


    </div>
  );
}

export default App;
