import React, {  useRef  } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import "../images/favicon.png"
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"

import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
import "../css/style.css"
import pic1 from '../images/banner-img/pic-1.png';
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";

export default function Home() {
    const[products,setProducts] = useState([]);
    const[typeImg,setTypeImg] = useState({});
    useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/products";
         
			// gửi một yêu cầu HTTP GET đến url
			const reponse  =  await fetch(requestUrl);
			//chuyển đổi phản hồi thành đối tượng JSON
			const reponseJson = await reponse.json();
			//cập nhật giá trị của products
			setProducts(reponseJson);
		} 
		fetchPostList()
	},[])
    useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/typeImages";
			// gửi một yêu cầu HTTP GET đến url
			const reponse  =  await fetch(requestUrl);
			//chuyển đổi phản hồi thành đối tượng JSON
			const reponseJson = await reponse.json();
			setTypeImg(reponseJson);
		} 
		fetchPostList()
	},[])
    console.log(typeImg)
    const uniqueTypes = [...new Set(products.map((product) => product.type))];
    const productPopular = products.slice(0, 6);
    const productRecentOrder = products.slice(6, 12);
    return (
        <div>
            <div id="main-wrapper">
                <NavHeader/>
                <Header />
                <div className={"d-flex"}>
                    <NavMenu/>
                    <div className="content-body">

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-xxl-10">
                                    <div className="row">

                                        <div className="col-xl-12">
                                            <div className="d-flex align-items-center justify-content-between mb-2 gap">
                                                <h4 className=" mb-0 cate-title">Category</h4>
                                                <a href="favorite-menu.html" className="text-primary">View all <i
                                                    className="fa-solid fa-angle-right ms-2"></i></a>
                                            </div>
                                            <div className="swiper mySwiper-2">
                                                <div className="swiper-wrapper">
                                                    {uniqueTypes.map((type)=>(
                                                        <div className="swiper-slide1">
                                                            <div className="cate-bx text-center">
                                                                <div className="card">
                                                                    <Link to={`/listProduct?search=${type}`}>
                                                                     <div className="card-body">
                                                                        <img className="img-typeProduct" src={typeImg[type]}/>
                                                                        <a href="javascript:void(0);"><h6
                                                                            className="mb-0 font-w500">{type}</h6></a>
                                                                    </div>
                                                                    </Link>
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                   
                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h4 className=" mb-0 cate-title">Popular Dishes</h4>
                                                <a href="favorite-menu.html" className="text-primary">View all <i
                                                    className="fa-solid fa-angle-right ms-2"></i></a>
                                            </div>
                                            <div className="swiper mySwiper-3">
                                            <Swiper
                                                modules={[ Pagination, Autoplay]}
                                                slidesPerView={4} // Hiển thị 3 slide cùng lúc
                                              
                                                autoplay={{ delay: 1000 }}
                                                pagination={{ clickable: true }}
                                               
                                                >
                                                {productPopular.map((product)=>(
                                                 
                                                        <SwiperSlide>
                                                               <Link to={`/product/${product.id}`} state={{ product: product }}>
                                                        <div className="swiper-slide1" key={product.id}>
                                                            <div className="card dishe-bx">
                                                                <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                                    <span
                                                                        className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                                    <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                                </div>
                                                                <div className="card-body p-0 text-center">
                                                                    <img src={product.img} alt=""/>
                                                                </div>
                                                                <div className="card-footer border-0 px-3">
                                                                    <ul className="d-flex align-items-center mb-2">
                                                                        <li>
                                                                            <svg width="18" height="17" viewBox="0 0 18 17"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                    fill="#FC8019"/>
                                                                            </svg>
                                                                        </li>
                                                                        <li>
                                                                            <svg width="18" height="17" viewBox="0 0 18 17"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                    fill="#FC8019"/>
                                                                            </svg>
                                                                        </li>
                                                                        <li>
                                                                            <svg width="18" height="17" viewBox="0 0 18 17"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                    fill="#FC8019"/>
                                                                            </svg>
                                                                        </li>
                                                                        <li>
                                                                            <svg width="18" height="17" viewBox="0 0 18 17"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                    fill="#DBDBDB"/>
                                                                            </svg>
                                                                        </li>
                                                                        <li>
                                                                            <svg width="18" height="17" viewBox="0 0 18 17"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                    fill="#DBDBDB"/>
                                                                            </svg>
                                                                        </li>
                                                                    </ul>
                                                                    <div
                                                                        className="common d-flex align-items-end justify-content-between">
                                                                        <div>
                                                                            <a href="javascript:void(0);"><h4>{product.name}</h4>
                                                                            </a>
                                                                            <h3 className="font-w700 mb-0 text-primary">{product.price}</h3>
                                                                        </div>
                                                                        <div className="plus c-pointer">
                                                                            <div className="sub-bx">
                                                                                <a href="javascript:void(0);"></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            </Link>
                                                        </SwiperSlide>
                                                   
                                                   
                                                ))}
                                                </Swiper>
                                                <div className="swiper-wrapper">
                                                
                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h4 className=" mb-0 cate-title">Recent Order</h4>
                                                <a href="favorite-menu.html" className="text-primary">View all <i
                                                    className="fa-solid fa-angle-right ms-2"></i></a>
                                            </div>
                                            <div className="swiper mySwiper-3">
                                            <Swiper
                                                modules={[ Pagination, Autoplay]}
                                                slidesPerView={4} // Hiển thị 3 slide cùng lúc
                                              
                                                autoplay={{ delay: 1000 }}
                                                pagination={{ clickable: true }}
                                               
                                                >
                                                {productRecentOrder.map((product)=>(
                                                    <SwiperSlide>
                                                    <Link to={`/product/${product.id}`} state={{ product: product }}>
                                                    <div className="swiper-slide1" key={product.id}>
                                                        <div className="card dishe-bx">
                                                            <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                                <span
                                                                    className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                                <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                            </div>
                                                            <div className="card-body p-0 text-center">
                                                                <img src={product.img} alt=""/>
                                                            </div>
                                                            <div className="card-footer border-0 px-3">
                                                                <ul className="d-flex align-items-center mb-2">
                                                                    <li>
                                                                        <svg width="18" height="17" viewBox="0 0 18 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                fill="#FC8019"/>
                                                                        </svg>
                                                                    </li>
                                                                    <li>
                                                                        <svg width="18" height="17" viewBox="0 0 18 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                fill="#FC8019"/>
                                                                        </svg>
                                                                    </li>
                                                                    <li>
                                                                        <svg width="18" height="17" viewBox="0 0 18 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                fill="#FC8019"/>
                                                                        </svg>
                                                                    </li>
                                                                    <li>
                                                                        <svg width="18" height="17" viewBox="0 0 18 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                fill="#DBDBDB"/>
                                                                        </svg>
                                                                    </li>
                                                                    <li>
                                                                        <svg width="18" height="17" viewBox="0 0 18 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z"
                                                                                fill="#DBDBDB"/>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                                <div
                                                                    className="common d-flex align-items-end justify-content-between">
                                                                    <div>
                                                                        <a href="javascript:void(0);"><h4>{product.name}</h4>
                                                                        </a>
                                                                        <h3 className="font-w700 mb-0 text-primary">{product.price}</h3>
                                                                    </div>
                                                                    <div className="plus c-pointer">
                                                                        <div className="sub-bx">
                                                                            <a href="javascript:void(0);"></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                    </SwiperSlide>
                                                ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Location Details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body add-loaction">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="form-label">Location Name</label>
                                                        <input type="Text" className="form-control"
                                                               placeholder="HOUSE/FLAT/BLOCK NO."/>

                                                    </div>
                                                </form>

                                            </div>
                                            <div className="col-xl-12">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="form-label">LANDMARK</label>
                                                        <input type="Text" className="form-control"
                                                               placeholder="LANDMARK"/>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xl-6">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="form-label">Available For Order</label>
                                                        <input type="Text" className="form-control" placeholder="Yes"/>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xl-6">
                                                <p className="mb-1">Address type</p>
                                                <select className="form-control default-select ms-0 py-4 wide">
                                                    <option>Home</option>
                                                    <option>Office</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModal2" tabIndex="-1"
                             aria-labelledby="exampleModalLabel2"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel2">Manage Route Notes</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body add-note">
                                        <div className="row align-items-center">
                                            <div className="col-xl-12">
                                                <form className="mb-3">
                                                    <label className="form-label">Update Type</label>
                                                    <input type="Text" className="form-control"
                                                           placeholder="Drop Off Occurred"/>
                                                </form>

                                            </div>

                                            <div className="col-xl-12">
                                                <form className=" mb-3">
                                                    <label className="form-label">Drop Off Location</label>
                                                    <input type="Text" className="form-control"
                                                           placeholder="Front Door"/>
                                                </form>

                                            </div>

                                            <div className="col-xl-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Notes</label>
                                                    <textarea className="form-control"
                                                              placeholder="Delivery was successful."
                                                              id="floatingTextarea"></textarea>

                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="mb-3">
                                                    <label className="from-label">Address</label>
                                                    <input type="Text" className="form-control"
                                                           placeholder="Elm Street, 23"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
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