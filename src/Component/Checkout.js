import React from "react";
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { useLocation } from "react-router-dom";

export default function Checkout() {
    return (
        <div> 
               <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
                    <form>
						<div class="main-content-wrap section-ptb checkout-page">
							<div class="container">
								<div class="row">
									<div class="col">
										<div class="coupon-area">
										
										</div>
									</div>
								</div>
							
								<div class="checkout-details-wrapper">
									<div class="row">
										<div class="col-lg-6 col-md-6">
										
											<div class="billing-details-wrap">

													<h3 class="shoping-checkboxt-title">Hóa đơn</h3>
													<div class="row">
														<div class="col-lg-12">
															<p class="single-form-row">
																<label>Tên người nhận <span class="required">*</span></label> <input
																	type="text" name="Firstname"/>
															</p>
														</div>
														<div class="col-lg-12">
															<p class="single-form-row">
																<label>Địa chỉ<span class="required">*</span></label>

														</p>
														<select id="address" name="address">
														</select>
														<select id="huyen" name="district">
														</select>
														<select id="xa" name="ward"></select>
													
													</div>
													
													<div class="col-lg-12">
														<p class="single-form-row">
															<label for="address-details">Địa chỉ chi tiết</label>
															<input type="text" id="address-details" name="address-details"/>
														</p>
													</div>

													<div class="col-lg-12">
														<p class="single-form-row">
															<label>Phone<span class="required">*</span></label>
															<input type="text" name="telephone"/>
														</p>
													</div>
													<input type="hidden" id="idOder" name="idOder" value="" />
													<input type="hidden" name="dateDeliveryOder" id="dateDeliveryOder" value=""/>
													<input type="hidden" name="addressOder" id="addressOder" value=""/>

													<div class="col-lg-12">
														<p class="single-form-row ">
															<label>Ghi chú<span class="required">*</span></label>
															<input type="text" name="note"
																rows="2" cols="5"/>
														</p>
													</div>
												</div>
												<div class="dialog">
													<p class="dialong__title">Xác nhận</p>
													<div class="dialog__main">
														<p class="dialog__text">Bạn có chắc muốn thanh toán</p>
														<button class="dialog__btn " type="button">Thoát</button>
														<button class="dialog__btn dialog__btn-ok" type="submit">Xác nhận</button>
													</div>
												</div>
											</div>

										</div>
										<div class="col-lg-6 col-md-6">
										
											<div class="your-order-wrapper">
												<h3 class="shoping-checkboxt-title">Đơn hàng</h3>
											
												<div class="your-order-wrap">
												
													<div class="your-order-table table-responsive">
														<table>
															<thead>
															<tr>
																<th class="product-name">SẢN PHẨM</th>
																<th class="product-total">TỔNG</th>
															</tr>
															</thead>
															<tbody>
														
																<tr class="cart_item">
																	<td class="product-name">Sản phẩm 1<strong
																			class="product-quantity"> x
																			3</strong>
																	</td>
																	<td class="product-total"><span class="amount">500.000
																				₫</span></td>
																</tr>
															
															</tbody>
															<tfoot>
															<tr class="cart-subtotal">
																<th>Giỏ hàng</th>
																<td><span class="amount" id="total">500.0</span>00
																	₫</td>
															</tr>
															<tr class="cart-subtotal">
																<th>Mã giảm giá</th>
																<td>
																	<p class="checkout-coupon">
																		<input type="text" placeholder="Mã giảm giá"/>
																	</p>
																</td>
															</tr>
															<tr class="shipping">
																<th>Phí vận chuyển</th>
																<td>
																	<ul>
																		<li><label><span class="amount" id="fee" name="fee"></span>
																		</label></li>
																	</ul>
																</td>
															</tr>
															<tr class="order-total">
																<th>Ngày dự kiến nhận hàng</th>
																<td><strong><span class="amount" id="delivery" name="delivery">
																				</span></strong></td>
															</tr>

															<tr class="order-total">
																<th>Tổng hóa đơn</th>
																<td><strong><span class="amount" id="totalPrice">30</span>00
																	₫</strong></td>
															</tr>

															</tfoot>
														</table>
													</div>

											

												
													<div class="payment-method">
														<div class="payment-accordion">
														
															<h5><input type="radio" name="radio_button" value="button1"/>
																Thanh toán khi nhận hàng</h5>
															<div class="payment-content">
																<p>Bạn sẽ được kiểm tra sản phẩm khi nhận hàng.</p>
															</div>
												
														
															<h5><input type="radio" name="radio_button" value="button2"/>
																Thanh toán bằng tài khoản paypal</h5>
															<div class="payment-content">
																<p>PayPal</p>
															</div>
														
														</div>
														<div class="order-button-payment ">
															<input class="btn-primary btn-checkOut" type="button" />
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
    

