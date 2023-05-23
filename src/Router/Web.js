import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import ProductList from "../Component/ProductList";
import App from "../App";
import ProductDetail from "../Component/Product-detail";
import Login from "../Component/Login";
import Register from "../Component/Register";

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
        },{
        path:"/listProduct",
        element:<ProductList/>
    },
    {
        path:'/product/:idProduct',
        element:<ProductDetail/>,
    }]
}])