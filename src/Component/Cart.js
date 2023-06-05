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


export default function Cart() {
	const dispatch = useDispatch();
	// Kiểm tra xem có giỏ hàng trong Session Storage không
	useEffect(()=> {
		const savedCart = sessionStorage.getItem('cart');
		if (savedCart) {
		// Parse giỏ hàng từ JSON
		const parsedCart = JSON.parse(savedCart);
		// Cập nhật giỏ hàng trong Redux Store nếu có
		dispatch(setCart(parsedCart));
	  	}
	},[]);
	//lấy cart từ store
	const cart = useSelector(state => state.root.cart);
	
	//tổng tiền
	const [total, setTotal] = useState(0);
	// Tính tổng tiền khi giỏ hàng thay đổi
	useEffect(() => {
	const calculateTotal = () => {
		let totalPrice = 0;
		for (const item of cart) {
		const price=item.product.price;
		const quantity = item.quantity;
		totalPrice += price * quantity;
			
		}
		setTotal(totalPrice);
	};
	calculateTotal();
	}, [cart]);

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
										{cart ? (
												<div>
												{cart.map(cartItem => (
													<CartItem id={cartItem.product.id} img={cartItem.product.img} name={cartItem.product.name} quantity={cartItem.quantity} price={cartItem.product.price}/>
													)) }
												</div>
											) : (
												<p>Cart is empty</p>
											)}
									</div>
										
									<div className="d-flex align-items-center justify-content-between">
										<h4 className="font-w500 mb-0">Total</h4>
										<h4 class="cate-title text-primary">{total}</h4>
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
    );

}
const CartItem = (prop) =>{
	const dispatch = useDispatch();
	//tính sô lượng của mỗi item
	const [quantityItem, setQuantityItem] = useState(prop.quantity.toString());
	//sự kiện khi thay đổi input
	const handleInputQuantity=(e)=>{
		const newValue =e.target.value.toString();
 			if(newValue>=0){
				setQuantityItem(newValue);
			}
		dispatch(updateQuantityCart(prop.id,newValue));
	}
	// suej kiên click tăng sl
	const handleClickIncrease=()=>{
			const newValue =parseInt(quantityItem)+1;
			setQuantityItem(newValue.toString());
			dispatch(updateQuantityCart(prop.id,newValue));
		
	}
	//sự kiện click giảm
	const handleClickDecrease=()=>{
		if(quantityItem>1){
			const newValue =parseInt(quantityItem)-1;
			setQuantityItem(newValue.toString());
			dispatch(updateQuantityCart(prop.id,newValue));
		}
		
	}
	//sự kiên click remove item
	const handleClickRemove=()=>{
		dispatch(removeItemCart(prop.id));
	}

	return(
		<div className="d-flex align-items-center mb-4">
			<input className="checkboxCartItem" type="checkbox"/>
			<img className="me-3" src={prop.img} alt=""/>
			<div>
			<h4 className="font-w600 text-nowrap mb-0">{prop.name}</h4>
				<div className="quantityIp">
				<button className="quantity-input__modifier quantity-input__modifier--left" onClick={handleClickDecrease} >-</button>
				<input className="quantityItemCard" value={quantityItem} onChange={handleInputQuantity}/>
				<button className="quantity-input__modifier quantity-input__modifier--right" onClick={handleClickIncrease} >+</button>  
				</div>  
			</div>
			<button className="removeItemCart" onClick={handleClickRemove} >X</button>  
			<h4 className="text-primary mb-0 ms-auto">{prop.price}</h4>
		</div>
	)
}
