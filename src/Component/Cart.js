import React from "react";

import clsx from "clsx";
import "../images/favicon.png"
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"



import { useSelector } from 'react-redux';
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";


export default function Cart() {
	const cart = useSelector(state => state.cart);

    return (
        <div>
            <div id="main-wrapper">
                <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
			        <div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="card border-0">
							<h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Order Details</h4>
							<div className="card h-auto">
								<div className="card-body">
									<div className="d-flex align-items-center justify-content-between border-bottom flex-wrap">
										<div className="mb-4">
											<h4 className="font-w500">Order #1</h4>
											<span>June 1, 2020, 08:22 AM</span>
										</div>
										<div className="orders-img d-flex mb-4">
											<img src="images/chat-img/orders-img/pic-1.jpg" alt=""/>
											<div>
												<h6 className="font-w500">Ruby Roben</h6>
												<span>User since 2020</span>
											</div>
										</div>
									</div>
									<div className="order-menu style-1 mt-3">
										<h4>Order Menu</h4>
										{cart.map(cartItem => (
											<div className="d-flex align-items-center mb-4">
											<img className="me-3" src={cartItem.product.img} alt=""/>
											<div>
												<h4 className="font-w600 text-nowrap mb-0"><a href="">{cartItem.product.name}</a></h4>
                                                <div className="quantity-input">
                                                <button className="quantity-input__modifier quantity-input__modifier--left" >-</button>
                                                <input className="quantityItemCard" type="text" value="1" readonly />
                                                <button className="quantity-input__modifier quantity-input__modifier--right" >+</button>  
                                                </div>  
											</div>
                                            <button className="" >X</button>  
											<h4 className="text-primary mb-0 ms-auto">{cartItem.product.price}</h4>
										</div>
										)) }
									
										
									</div>
										
									<div className="d-flex align-items-center justify-content-between">
										<h4 className="font-w500 mb-0">Total</h4>
										<h4 className="cate-title text-primary">$12.59</h4>
									</div>
								</div>
							</div>
							<div className="text-end">
								<a href="javascript:void(0);" className="btn btn-outline-danger me-sm-4 me-2">Reject Order</a>
								<a href="javascript:void(0);" className="btn btn-primary">Accept Order</a>
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
