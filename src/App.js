import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/About" element= {<About/>}/>

    </Routes>
  );
}

export default App;
