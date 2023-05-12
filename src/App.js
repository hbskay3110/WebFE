import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header";
<<<<<<< HEAD
import ProductDetail from './Component/Product-detail';
import ProductList from './Component/Product-list';


function App() {
  return (
    <ProductList/>
=======
import Login from './Component/Login';
import Register from './Component/Register';
import { child, getDatabase, ref, set } from 'firebase/database';
// import {firebase } from "../firebase"

function App() {
  
  // const usersRef = firebase.database()
//   const user = {
//     id: 1,
//     name: 'John',
//     email: 'john@example.com',
//     address: '123 Main St',
//   };
//   // Lưu trữ đối tượng dữ liệu vào collection 'users'
//   usersRef.ref('users/' + user.id).set(user)
//     .then(() => {
//   console.log('Dữ liệu đã được lưu trữ vào Firebase.');
// })
// .catch((error) => {
//   console.error('Lỗi khi lưu trữ dữ liệu vào Firebase: ', error);
// });
  return (
   <Register></Register>
>>>>>>> 9317df37f0ff1a59129b3353b9e49d99a0b5061f

  );
}

export default App;
