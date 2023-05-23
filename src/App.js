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



const db = getDatabase();
function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
// Lấy dữ liệu từ đường dẫn '/products'
// const productsRef = ref(db, 'products');
// onValue(productsRef, (snapshot) => {
//   const data = snapshot.val(); // Dữ liệu trong DataSnapshot
//   console.log(data); // In ra dữ liệu lấy được từ Firebase
// });
// writeUserData('123456', 'Phan Thi An', '20130298@st.hcmuaf.edu.vn', '1234');

//  const starCountRef = ref(db, 'users');
//  onValue(starCountRef, (snapshot) => {
//    const data = snapshot.val();
//    for (const key in data) {
//     console.log(key);

//     const userData = data[key];
    
//    }
//  });

function App() {
  const[product,setProductList] = useState([]);
	useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/products";
			const reponse  =  await fetch(requestUrl);
			const reponseJson = await reponse.json();
			console.log(reponseJson)
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
