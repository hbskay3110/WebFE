import React, { useState } from "react";

import clsx from "clsx";
import "../images/favicon.png"
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"

import { removeItemCart } from "../Store/Action";
import { setCart } from "../Store/Action";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { updateQuantityCart } from "../Store/Action";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";


export default function OrderHistory() {
    const [orderList, setOrderList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(2);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };
    
    const existOrderJson = localStorage.getItem('order');
    useEffect(() => {
        if (existOrderJson != null) {
          setOrderList(JSON.parse(existOrderJson));
        }
      }, []);
    console.log(orderList)
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    // Lọc danh sách đơn hàng dựa trên từ khóa tìm kiếm
    const filteredOrders = orderList.filter((order) => {
        const searchString = searchQuery.toLowerCase();
        return (
        order.address.toLowerCase().includes(searchString) ||
        order.price.toString().includes(searchString) ||
        order.status.toString().includes(searchString)
        );
    });
    
    // Tính toán chỉ mục bắt đầu và chỉ mục kết thúc của danh sách đơn hàng trên trang hiện tại
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
    console.log(currentOrders)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(orderList)
    return(
            <div>
            <div id="main-wrapper">
                <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
                    <div class="content-body">
                      
                        <div class="container">
                        <h1 className="title">Order History</h1>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class=" order-history d-flex algn-items-center justify-content-between mb-4">
                                        <div class="input-group search-area2">
                                            <span class="input-group-text p-0"><a href="javascript:void(0)"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z" fill="var(--primary)"/>
                                            </svg>
                                            </a></span>
                                            <input type="text" class="form-control p-0" placeholder="Search here" onChange={handleSearch}/>
                                        </div>
                                        <select class="form-control default-select border w-auto d-none">
                                            <option>Recently</option>
                                            <option>Oldest</option>
                                            <option>Newest</option>
                                        </select>
                                    </div>
                                    <div class="card h-auto">
                                        <div class="card-body p-0">
                                            <div class="table-responsive">
                                                <table class="table table-list i-table style-1 mb-4 border-0" id="guestTable-all3">
                                                    <thead>
                                                        <tr>
                                                            <th class="bg-none">
                                                                <div class="form-check style-3">
                                                                <input class="form-check-input" type="checkbox" value="" id="checkAll"/>
                                                                </div>
                                                            </th>
                                                            <th>ID</th>
                                                            <th>Date</th>
                                                            <th>Address</th>
                                                            <th>Total</th>
                                                            <th>Status</th>
                                                            
                                                            <th class="bg-none"></th>
                                                            <th class="bg-none"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {currentOrders.map((order,index)=>(
                                                            <tr>
                                                            <td>
                                                                <div class="form-check style-3">
                                                                <input class="form-check-input" type="checkbox" value=""/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="media-bx d-flex py-3  align-items-center">
                                                                
                                                                    <div>
                                                                        <h5 class="mb-0">{index+1}</h5>
                                                            
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div>
                                                                    <p class="mb-0">{order.createAt}</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex align-items-center">
                                                                    <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20.4604 9.63C20.32 8.16891 19.8036 6.76908 18.9616 5.56681C18.1195 4.36455 16.9805 3.40083 15.6554 2.76949C14.3303 2.13815 12.8642 1.86072 11.4001 1.9642C9.93592 2.06768 8.5235 2.54856 7.30037 3.36C6.24957 4.06264 5.36742 4.98929 4.71731 6.07339C4.0672 7.15748 3.66526 8.3721 3.54037 9.63C3.41785 10.8797 3.57504 12.1409 4.00054 13.3223C4.42604 14.5036 5.10917 15.5755 6.00037 16.46L11.3004 21.77C11.3933 21.8637 11.5039 21.9381 11.6258 21.9889C11.7477 22.0397 11.8784 22.0658 12.0104 22.0658C12.1424 22.0658 12.2731 22.0397 12.3949 21.9889C12.5168 21.9381 12.6274 21.8637 12.7204 21.77L18.0004 16.46C18.8916 15.5755 19.5747 14.5036 20.0002 13.3223C20.4257 12.1409 20.5829 10.8797 20.4604 9.63ZM16.6004 15.05L12.0004 19.65L7.40037 15.05C6.72246 14.372 6.20317 13.5523 5.87984 12.6498C5.5565 11.7472 5.43715 10.7842 5.53037 9.83C5.62419 8.8611 5.93213 7.92516 6.43194 7.08984C6.93175 6.25452 7.61093 5.5407 8.42037 5C9.48131 4.29523 10.7267 3.91929 12.0004 3.91929C13.2741 3.91929 14.5194 4.29523 15.5804 5C16.3874 5.53861 17.065 6.24928 17.5647 7.08093C18.0644 7.91259 18.3737 8.8446 18.4704 9.81C18.5666 10.7674 18.4488 11.7343 18.1254 12.6405C17.8019 13.5468 17.281 14.3698 16.6004 15.05ZM12.0004 6C11.1104 6 10.2403 6.26392 9.5003 6.75838C8.76028 7.25285 8.18351 7.95565 7.84291 8.77792C7.50232 9.60019 7.4132 10.505 7.58684 11.3779C7.76047 12.2508 8.18905 13.0526 8.81839 13.682C9.44773 14.3113 10.2495 14.7399 11.1225 14.9135C11.9954 15.0872 12.9002 14.998 13.7224 14.6575C14.5447 14.3169 15.2475 13.7401 15.742 13.0001C16.2364 12.26 16.5004 11.39 16.5004 10.5C16.4977 9.30733 16.0228 8.16428 15.1794 7.32093C14.3361 6.47759 13.193 6.00264 12.0004 6ZM12.0004 13C11.5059 13 11.0226 12.8534 10.6114 12.5787C10.2003 12.304 9.87989 11.9135 9.69067 11.4567C9.50145 10.9999 9.45194 10.4972 9.54841 10.0123C9.64487 9.52732 9.88297 9.08186 10.2326 8.73223C10.5822 8.3826 11.0277 8.1445 11.5126 8.04803C11.9976 7.95157 12.5003 8.00108 12.9571 8.1903C13.4139 8.37952 13.8043 8.69995 14.079 9.11107C14.3537 9.52219 14.5004 10.0055 14.5004 10.5C14.5004 11.163 14.237 11.7989 13.7681 12.2678C13.2993 12.7366 12.6634 13 12.0004 13Z" fill="var(--primary)"/>
                                                                    </svg>
                                                                    <span>{order.address.length>20?order.address.slice(0, 25)+" ...":order.address}</span>
                                                                </div>
                                                                <span>2,97 Km</span>
                                                            </td>
                                                            <td>
                                                                <div>
                                                                    <h4 class="text-primary">{numberWithCommas(order.price)} đ</h4>
                                                                </div>
                                                            </td>
                                                            <td><span class={`badge badge-xl light  ${order.status>=3 ? "badge-success" : "badge-danger"}`}>{order.status>=3 ? "Completed" : "Canceled"}</span></td>
                                                            <td>
                                                                <Link to={`/orderDetail/${order.id}`}>
                                                                <div>
                                                                    <a href="javascript:void(0);" class="btn btn-detail btn-detail-order-primary">Order Detail</a>
                                                                </div>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <div class="dropdown dropstart">
                                                                    <a href="javascript:void(0);" class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        </svg>
                                                                    </a>
                                                                    <div class="dropdown-menu">
                                                                        <a class="dropdown-item" href="javascript:void(0);">Edit</a>
                                                                        <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        ))}
                                                       
                                                     
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap pagination-bx px-4 py-3">
                                                <div class="mb-sm-0 mb-3 pagination-title">
                                                    <p class="mb-0"><span>Showing {indexOfFirstOrder+1}-{indexOfLastOrder>orderList.length?orderList.length: indexOfLastOrder}</span> from <span>{orderList.length}</span> data</p>
                                                </div>
                                                <nav>
                                                    <ul class="pagination pagination-gutter mb-0">
                                                        <li class="page-item page-indicator">
                                                            <a class="page-link" href="javascript:void(0) "onClick={() => paginate(currentPage-1)}>
                                                                <i class="la la-angle-left"></i></a>
                                                        </li>
                                                        {Array.from({ length: Math.ceil(filteredOrders.length / ordersPerPage) }).map((_, index) => (
                                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                            <a className="page-link" href="javascript:void(0)" onClick={() => paginate(index + 1)}>{index + 1}</a>
                                                        
                                                        </li>
                                                        ))}
                                                     
                                                        <li class="page-item page-indicator">
                                                            <a class="page-link" href="javascript:void(0)" onClick={() => paginate(currentPage+1)}>
                                                                <i class="la la-angle-right" ></i></a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}