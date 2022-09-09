import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Order from './components/Order';
import FeaturedProducts from './components/products/FeaturedProducts';
import NewProducts from './components/products/NewProducts';
import Product from './components/Product';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/About" element= {<About/>}/>
      <Route path="/Order" element= {<Order/>}/>
      <Route path="/Product" element= {<Product/>}>
      <Route path="FeatureProducts" element= {<FeaturedProducts/>}/>
      <Route path="NewProducts" element= {<NewProducts/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
