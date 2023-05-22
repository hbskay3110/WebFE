import logo from './logo.svg';
import Header from "./Component/Header";
import ProductDetail from './Component/Product-detail';
import Home from './Component/Home';
import ProductList from './Component/Product-list';
import Login from './Component/Login';
import Register from './Component/Register';
import NavHeader from './Component/NavHeader';
import NavMenu from './Component/NavMenu';

import {Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductList" element={<ProductList/>}/>
        <Route path="/ProductDetail" element={<ProductDetail/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
