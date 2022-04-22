import logo from './logo.svg';
import './App.css';
import MyHeader from './header.js';
import Home from './home.js';
import Mycart from './cart.js';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Manageproduct from './manageproduct';
import Myorder from './order';
import Account from './account';

function App() {
  return (
    <HashRouter>
      <Routes>
         <Route exact path="/" element={ <Home/>} />
         <Route exact path="/cart" element={ <Mycart/> } />
         <Route exact path="/Myproduct" element={ <Manageproduct/>} />
         <Route exact path="/order" element={ <Myorder/>} />
         <Route exact path="/account" element={ <Account/>} />
         
      </Routes>
    </HashRouter>
  );
}

export default App;
