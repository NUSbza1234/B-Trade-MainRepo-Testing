import Home from './Home';
import Login from './Login';
import Register from './Register';
import Homet from './Homet';
import Aboutus from './About us/Aboutus';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Livenews from './Live News Feed/Livenews';
import MarketData from './MarketData';
import Trade from './Trading/Trade';
import Portfolio from './Portfolio/Portfolio';
import { useUser } from './UserContext';

function App() {
  const { user } = useUser();

// was -3.5rem
  return (
    <div style={{marginTop : '0rem'}}> 
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path='/homet' element ={<Homet/>} />
          <Route path='/aboutus' element ={<Aboutus/>} />
          <Route path='/livenews' element ={<Livenews/>} />
          <Route path='/marketdata' element ={<MarketData/>} />
          <Route path='/trade' element ={<Trade/>} />
          <Route path='/portfolio' element ={<Portfolio/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
