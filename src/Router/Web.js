import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import ProductList from "../Component/ProductList";
import App from "../App";
import ProductDetail from "../Component/Product-detail";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Cart from "../Component/Cart"
import Checkout from "../Component/Checkout"
import OrderDetail from "../Component/OrderDetail";
import Account from "../Component/Account";                
import OrderHistory from "../Component/OrderHistory";
import Sa from "../Component/Sa";

export const  webRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
        ,{
            path:"/listProduct",
            element:<ProductList/>
        },
        {
            path:'/product/:idProduct',
            element:<ProductDetail/>,
        },
        {
            path:'/checkout',
            element:<Checkout/>,
        },
        {
            path:'/cart',
            element:<Cart/>
        },
        {
            path:'/orderDetail/:id',
            element:<OrderDetail/>,
        },
        {
            path:'/account',
            element:<Account/>,
        }, {
            path:'/orderHistory',
            element:<OrderHistory/>,
        }, {
            path:'/test',
            element:<Sa/>,
        },
        
    ]

}])