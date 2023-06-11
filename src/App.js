import logo from './logo.svg';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Header from "./Component/Header";
import Login from './Component/Login';
import Register from './Component/Register';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { child, getDatabase, ref, set,get ,Database ,off,onValue} from 'firebase/database';
import firebaseConfig from './FireBase/firebaseData';
import ProductList from './Component/ProductList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from "react";

import { loadProduct } from './Store/Action.js';
import { Outlet } from 'react-router-dom';




function App() {

  const[product,setProductList] = useState([]);
	useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/products";
			const reponse  =  await fetch(requestUrl);
			const reponseJson = await reponse.json();
			setProductList(reponseJson);
		} 
		fetchPostList()
	},[])
  const dispatch =useDispatch();
    useEffect(()=>{
      // đưa dữ liệu vào store
      dispatch(loadProduct(product))
    })
  

  return (
    <div>
      
      <Outlet/>

    </div>
   
  );
  
 
 
}

export default App;
