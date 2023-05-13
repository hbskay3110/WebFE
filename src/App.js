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

import {products as p, products} from "./data/ProductData.js";
import { loadProduct } from './Store/Action.js';



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

 const starCountRef = ref(db, 'users');
 onValue(starCountRef, (snapshot) => {
   const data = snapshot.val();
   for (const key in data) {
    console.log(key);

    const userData = data[key];
    
   }
 });

function App() {
  const dispatch =useDispatch();
    useEffect(()=>{
      // đưa dữ liệu vào store
      dispatch(loadProduct(products))
    })
  

  return (
    <div>
    <ProductList/>
 
    </div>
   
  );
  
 
 
}

export default App;
