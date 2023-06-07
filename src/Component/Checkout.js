import React, { useEffect, useState } from "react";
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
	const [showDialog, setShowDialog] = useState(false);
	const [cities, setCities] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [wards, setWards] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const [selectedWard, setSelectedWard] = useState("");
	const [result, setResult] = useState("");
	useEffect(() => {
		fetchCities();
	  }, []);
	  const fetchCities = () => {
		axios
		  .get("https://provinces.open-api.vn/api/?depth=1")
		  .then((response) => {
			setCities(response.data);
		  })
		  .catch((error) => {
			console.error("Error fetching cities:", error);
		  });
	  };
	
	  const fetchDistricts = (cityId) => {
		axios
		  .get(`https://provinces.open-api.vn/api/p/${cityId}?depth=2`)
		  .then((response) => {
			setDistricts(response.data.districts);
		  })
		  .catch((error) => {
			console.error("Error fetching districts:", error);
		  });
	  };
	
	  const fetchWards = (districtId) => {
		axios
		  .get(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
		  .then((response) => {
			setWards(response.data.wards);
		  })
		  .catch((error) => {
			console.error("Error fetching wards:", error);
		  });
	  };
	  const handleCityChange = (event) => {
		const cityId = event.target.value;
		setSelectedCity(cityId);
		setSelectedDistrict("");
		setSelectedWard("");
		fetchDistricts(cityId);
	
	  };
	
	  const handleDistrictChange = (event) => {
		const districtId = event.target.value;
		setSelectedDistrict(districtId);
		setSelectedWard("");
		fetchWards(districtId);
		
	  };
	
	  const handleWardChange = (event) => {
		const wardId = event.target.value;
		setSelectedWard(wardId);
	
	  };
	const handleClick = () => {
		setShowDialog(true);
	  };

    return (
        <div> 
               <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
                    <form>
						<div className="main-content-wrap section-ptb checkout-page">
							<div className="container">
								<div className="row">
									<div className="col">
										<div className="coupon-area">
										
										</div>
									</div>
								</div>
							
								<div className="checkout-details-wrapper">
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="billing-details-wrap">

													<h3 className="shoping-checkboxt-title">Hóa đơn</h3>
													<div className="row">
														<div className="col-lg-12">
															<p className="single-form-row">
																<label>Tên người nhận <span className="required">*</span></label> <input
																	type="text" name="Firstname"/>
															</p>
														</div>
														<div className="col-lg-12">
															<p className="single-form-row">
																<label>Địa chỉ<span className="required">*</span></label>

															
															<div>											
														<select  id="address" name="address" value={selectedCity} onChange={handleCityChange}>
															<option value="" disabled>Chọn tỉnh thành</option>
															{cities.map((city) => (
																<option key={city.code} value={city.code}>
																{city.name}
																</option>
															))}
														</select>
														<select id="huyen" name="district"  value={selectedDistrict} onChange={handleDistrictChange}>
															<option value="" disabled> Chọn quận huyện</option>
															{districts.map((district) => (
																<option key={district.code} value={district.code}>
																{district.name}
																</option>
															))}
														</select>
														
														<select id="xa" name="ward" value={selectedWard} onChange={handleWardChange}>
															<option value="" disabled>Chọn phường xã </option>
															{wards.map((ward) => (
																<option key={ward.code} value={ward.code}>
																{ward.name}
																</option>
															))}		
														</select>
														</div>
														</p>
													</div>
													
													<div className="col-lg-12">
														<p className="single-form-row">
															<label for="address-details">Địa chỉ chi tiết</label>
															<input type="text" id="address-details" name="address-details"/>
														</p>
													</div>

													<div className="col-lg-12">
														<p className="single-form-row">
															<label>Phone<span className="required">*</span></label>
															<input type="text" name="telephone"/>
														</p>
													</div>
													<input type="hidden" id="idOder" name="idOder" value="" />
													<input type="hidden" name="dateDeliveryOder" id="dateDeliveryOder" value=""/>
													<input type="hidden" name="addressOder" id="addressOder" value=""/>

													<div className="col-lg-12">
														<p className="single-form-row ">
															<label>Ghi chú<span className="required">*</span></label>
															<input type="text" name="note"
																rows="2" cols="5"/>
														</p>
													</div>
												</div>
												<div className={`dialog ${showDialog ? "show" : ""}`}>
													<p className="dialong__title">Xác nhận</p>
													<div className="dialog__main">
														<p className="dialog__text">Bạn có chắc muốn thanh toán</p>
														<button className="dialog__btn " type="button">Thoát</button>
														<button className="dialog__btn dialog__btn-ok" type="submit">Xác nhận</button>
													</div>
												</div>
											</div>

										</div>
										<div className="col-lg-6 col-md-6">
										
											<div className="your-order-wrapper">
												<h3 className="shoping-checkboxt-title">Đơn hàng</h3>
											
												<div className="your-order-wrap">
												
													<div className="your-order-table table-responsive">
														<table>
															<thead>
															<tr>
																<th className="product-name">SẢN PHẨM</th>
																<th className="product-total">TỔNG</th>
															</tr>
															</thead>
															<tbody>
														
																<tr className="cart_item">
																	<td className="product-name">Sản phẩm 1<strong
																			className="product-quantity"> x
																			3</strong>
																	</td>
																	<td className="product-total"><span className="amount">500.000
																				₫</span></td>
																</tr>
															
															</tbody>
															<tfoot>
															<tr className="cart-subtotal">
																<th>Giỏ hàng</th>
																<td><span className="amount" id="total">500.0</span>00
																	₫</td>
															</tr>
															<tr className="cart-subtotal">
																<th>Mã giảm giá</th>
																<td>
																	<p className="checkout-coupon">
																		<input type="text" placeholder="Mã giảm giá"/>
																	</p>
																</td>
															</tr>
															<tr className="shipping">
																<th>Phí vận chuyển</th>
																<td>
																	<ul>
																		<li><label><span className="amount" id="fee" name="fee"></span>
																		</label></li>
																	</ul>
																</td>
															</tr>
															<tr className="order-total">
																<th>Ngày dự kiến nhận hàng</th>
																<td><strong><span className="amount" id="delivery" name="delivery">
																				</span></strong></td>
															</tr>

															<tr className="order-total">
																<th>Tổng hóa đơn</th>
																<td><strong><span className="amount" id="totalPrice">30</span>00
																	₫</strong></td>
															</tr>

															</tfoot>
														</table>
													</div>

											

												
													<div className="payment-method">
														<div className="payment-accordion">
														
															<h5><input type="radio" name="radio_button" value="button1"/>
																Thanh toán khi nhận hàng</h5>
															<div className="payment-content">
																<p>Bạn sẽ được kiểm tra sản phẩm khi nhận hàng.</p>
															</div>
												
														
															<h5><input type="radio" name="radio_button" value="button2"/>
																Thanh toán bằng tài khoản paypal</h5>
															<div className="payment-content">
																<p>PayPal</p>
															</div>
														
														</div>
														<div className="order-button-payment ">
															<input onClick={handleClick} className="btn-primary btn-checkOut" type="button" value="Thanh toán"/>
														</div>
													</div>
										

												</div>
											</div>
										</div>
									</div>
								</div>
							
							</div>
						</div>
		
					</form>
                </div>
            <Footer/>
        </div>
        
    )
}
    

