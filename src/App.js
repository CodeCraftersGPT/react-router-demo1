import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Order from './components/Order';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/About" element= {<About/>}/>
      <Route path="/Order" element= {<Order/>}/>
    </Routes>
    </>
  );
}

export default App;
