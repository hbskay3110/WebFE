import React, { useEffect, useState } from "react";
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { removeItemCart } from "../Store/Action";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { setCart } from "../Store/Action";
export default function Checkout() {
	const [showDialog, setShowDialog] = useState(false);
	const [wards, setWards] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const [selectedWard, setSelectedWard] = useState("");
	//error của tỉnh, quận, huyện
	const [errorSelectedCity, setErrorSelectedCity] = useState("");
	const [nameRecipient, setNameRecipient]= useState("");
	const [addressDetail, setAddressDetail]= useState("");
	const [phone, setPhone] = useState("");
	const [note, setNote] = useState("");
	const [errorNameRecipient, setErrorNameRecipient]= useState("");
	const [errorAddressDetail, setErrorAddressDetail]= useState("");
	const [errorPhone, setErrorPhone] = useState("");
	// chuyển trang
	const navigate = useNavigate();
	var totalMoney=0;	
	var fee = 20000;
   // Lấy dữ liệu account từ localStorage
	const userInfoJSON = localStorage.getItem("user-info");
	
	// biến tính tổng tiền
	
	// chuyển số thành kiểu tiền
	const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
	//lấy cart từ store
	const dispatch = useDispatch();
	// Kiểm tra xem có giỏ hàng trong Session Storage không
	useEffect(()=> {
		const savedCart = sessionStorage.getItem('cart');
		// nếu tồn tại giỏ hàng
		if (savedCart) {
		// chuyển đổi một chuỗi JSON thành một đối tượng JavaScript.
		const parsedCart = JSON.parse(savedCart);
		// Cập nhật giỏ hàng trong Redux Store nếu có
		//gửi action setCart tới Store 
		dispatch(setCart(parsedCart));
	  	}
	},[]);
	// truy cập vào giá trị của cart từ Redux store
	const cart = useSelector(state => state.root.cart);
	console.log(cart)
	// duyệt qua giỏ hàng lấy ra sản phẩm 
	for(var i=0;i<cart.length;i++){
		var cart_item = cart[i]
    // tính tổng tiền của sản phẩm đó
		const resultTotal =( cart_item.product.price * cart_item.quantity)
		totalMoney += resultTotal
	}		
	// gọi tới API để lấy danh sách các xã của tp thủ đức
	  const fetchWards = () => {
		axios
		  .get(`https://provinces.open-api.vn/api/d/769?depth=2`)
		  .then((response) => {
	// set lại cái mảng xã bằng dữ liệu lấy về
			setWards(response.data.wards);
		  })
		  .catch((error) => {
			console.error("Error fetching wards:", error);
		  });
	  };
     // hàm thay đổi thành phố
	  const handleCityChange = (event) => {
		// lấy ra giá trị được chọn
		console.log(event.target)
		const cityId = event.target.value;
		setSelectedDistrict("");
		setSelectedWard("");
		setSelectedCity(cityId)
		
	  };
	// hàm thay đổi quận,huyện
	  const handleDistrictChange = (event) => {
		const districtId = event.target.value;
		setSelectedWard("");
		// gửi tới API
		fetchWards();
		setSelectedDistrict(districtId)
		
	  };
	// hàm thay đổi xã
	  const handleWardChange = (event) => {
		const wardId = event.target.value;
		 // tìm ra xã có code bằng với code chọn từ option
		 const selectedWardObj = wards.find((ward) => ward.code == wardId);
		 // nếu có tồn tại
		 if (selectedWardObj) {
			// Lấy tên của huyện  và lưu vào state selectedDistrict
			setSelectedWard(selectedWardObj.name);
		 }
	
	  };
	  // hàm hiển thị thông báo xác nhận khi click vào nút Thanh toán
	const handleClick = () => {
		setShowDialog(true);
	  };
	// hàm kiểm tra tên người nhận có nhập chưa
	function checkNameRecipient() {
        if (nameRecipient === "") {
          setErrorNameRecipient("Vui lòng nhập trường này");
          return false;
        
        }
        return true;
        
      }
	  // hàm kiểm tra địa chỉ có nhập chưa
	  function checkAddressDetail() {
        if (addressDetail === "") {
          setErrorAddressDetail("Vui lòng nhập trường này");
          return false;
        
        }
        return true;
        
      }
	  // // hàm kiểm tra số điện thoại có nhập chưa
	  function checkPhone() {
		// Xác định một pattern cho số điện thoại
		var pattern =/^0\d{9}$/; // Ví dụ: 10 chữ số liên tiếp
  
        if (phone === "" ) {
          setErrorPhone("Vui lòng nhập trường này");
          return false;
        
        }
		// nếu có nhập nhưng không đúng định dạng thì báo lỗi
		else if(!pattern.test(phone) ){
			setErrorPhone("Số điện thoại không hợp lệ")
			return false;
		}
        return true;
        
      }
	  // hàm cập nhật tên người nhận khi thay đổi
	  async function handleNameRecipient(e){
        setNameRecipient(e.target.value)
        setErrorNameRecipient("")
      }
	  async function handleAddressDetail(e){
        setAddressDetail(e.target.value)
        setErrorAddressDetail("")
      }
	  async function handlePhone(e){
        setPhone(e.target.value)
        setErrorPhone("")
      }
	  async function handleNote(e){
        setNote(e.target.value)
       
      }
	  // hàm xác nhận thanh toán
      async function confirmPayment(){
		
		// nếu chưa chọn tỉnh quận , xã thì báo lỗi
		if(selectedCity=="" || selectedDistrict== "" || selectedWard==""){
			setErrorSelectedCity("Vui lòng chọn tỉnh, quận, xã")
			return;
		}
		// nếu không đúng
		else if(!checkNameRecipient() || !checkAddressDetail() ||!checkPhone()){
            return;
		}
		// 
		else{
			// nếu đã đăng nhập
			if(userInfoJSON){
			// Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
			const userInfo = JSON.parse(userInfoJSON);
			const currentDate = new Date();
			const day = currentDate.getDate();
			const month = currentDate.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0, nên cần cộng 1
			const year = currentDate.getFullYear();
			const hours = currentDate.getHours();
			const minutes = currentDate.getMinutes();
			const seconds = currentDate.getSeconds();
			const date = day+"/"+month+"/"+year+" " +hours+":"+minutes+":"+seconds
			const address = addressDetail + "," +selectedWard + "," +selectedDistrict+","+selectedCity
			// tổng tiền của đơn hàng
			const resultTotalMoney= totalMoney + fee
			 // Lấy sản phẩm từ giỏ hàng và tạo mảng mới
			const products = cart.map((cart_item) => {
				return {
				id: cart_item.product.id,
				des: cart_item.product.des,
				img: cart_item.product.img,
				name: cart_item.product.name,
				price: cart_item.product.price,
				quantity: cart_item.quantity
				};
			});
			
		
		 // lấy dữ liệu đơn hàng hiện có từ localStorage
		 	const existOrderJson = localStorage.getItem('order');
		 // tạo mảng chứa danh sách các đơn hàng
			let existOrders = [];
		 // kiểm tra xem nếu đơn hàng tồn tại thì
		    if(existOrderJson){
				// gán danh sách đơn hàng bằng danh sách các đơn hàng được lấy từ local storage 
				existOrders = JSON.parse(existOrderJson);
			}	
			// tạo ra 1 đơn hàng
			const order = {	
				id: existOrders.length,			
				email: userInfo.email,
				products:products,
				name:nameRecipient,
				createAt: date,
				address: address,
				price: resultTotalMoney,
				phone:phone,
				note: note,
				status:0
				};
		 // sau đó thêm đơn hàng vào danh sách đơn hàng
			existOrders.push(order);
		 // Chuyển đổi đối tượng JavaScript order thành một chuỗi JSON, và gán nó vào thuộc tính body của yêu cầu
    		 var updateOrdersJSON = JSON.stringify(existOrders);
		 // Sử dụng phương thức localStorage.setItem() để lưu chuỗi JSON vào localStorage.
		 	localStorage.setItem("order", updateOrdersJSON); 
			
		 // xóa sản phẩm trong giỏ hàng sau khi đặt hàng
				cart.map((cart_item)=>{
					dispatch(removeItemCart(cart_item.product.id));
				})
				// chuyển về trang home
                navigate("/")
			}
		}
	}
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
																	type="text" onBlur={checkNameRecipient} onChange={handleNameRecipient} name="Firstname"/>
																	<div className="mb-3">
																		<span className="mb-1 errorLogin">{errorNameRecipient}</span>      
																	</div>
															</p>
														</div>

														<div className="col-lg-12">
															<p className="single-form-row">
																<label>Địa chỉ<span className="required">*</span></label>

															
															<div>											
														<select  id="address" name="address" value={selectedCity} onChange={handleCityChange}>
															<option value="" disabled>Chọn tỉnh thành</option>
														
																<option key="79" value="Thành phố Hồ Chí Minh">
																Thành phố Hồ Chí Minh
																</option>
															
														</select>
														<select id="huyen" name="district"  value={selectedDistrict} onChange={handleDistrictChange}>
															<option value="" disabled> Chọn quận huyện</option>
															
																<option key="769" value="Thành phố Thủ Đức">
																Thành phố Thủ Đức
																</option>
														
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
														<div className="mb-3">
																		<span className="mb-1 errorLogin">{errorSelectedCity}</span>      
																	</div>
														</p>
													</div>
													
													<div className="col-lg-12">
														<p className="single-form-row">
															<label for="address-details">Địa chỉ chi tiết</label>
															<input type="text" onBlur={checkAddressDetail} onChange={handleAddressDetail} id="address-details" name="address-details"/>
															<div className="mb-3">
																		<span className="mb-1 errorLogin">{errorAddressDetail}</span>      
																	</div>
														</p>
													</div>

													<div className="col-lg-12">
														<p className="single-form-row">
															<label>Phone<span className="required">*</span></label>
															<input type="text" onBlur={checkPhone} onChange={handlePhone} name="telephone"/>
															<div className="mb-3">
																		<span className="mb-1 errorLogin">{errorPhone}</span>      
																	</div>
														</p>
													</div>
													<input type="hidden" id="idOder" name="idOder" value="" />
													<input type="hidden" name="dateDeliveryOder" id="dateDeliveryOder" value=""/>
													<input type="hidden" name="addressOder" id="addressOder" value=""/>

													<div className="col-lg-12">
														<p className="single-form-row ">
															<label>Ghi chú<span className="required">*</span></label>
															<input type="text" onChange={handleNote} name="note"
																rows="2" cols="5"/>
														</p>
													</div>
												</div>
												<div className={`dialog ${showDialog ? "show" : ""}`}>
													<p className="dialong__title">Xác nhận</p>
													<div className="dialog__main">
														<p className="dialog__text">Bạn có chắc muốn thanh toán</p>
														<button className="dialog__btn " type="button">Thoát</button>
														<button className="dialog__btn dialog__btn-ok" type="button" onClick={confirmPayment}>Xác nhận</button>
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
														{cart.map((cart_item) => (
														
															<tr className="cart_item">
															<td className="product-name">{cart_item.product.name}<strong
																	className="product-quantity"> x{cart_item.quantity}
																	</strong>
															</td>
															<td className="product-total"><span className="amount">{numberWithCommas(cart_item.product.price * cart_item.quantity)}
																		₫</span></td>
														</tr>

													
														))}
			
																
															</tbody>
															<tfoot>
															<tr className="cart-subtotal">
																<th>Giỏ hàng</th>
																<td><span className="amount" id="total">{numberWithCommas(totalMoney)}</span>
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
																		<li><label><span className="amount" id="fee" name="fee">{numberWithCommas(fee)}</span>đ
																		</label></li>
																	</ul>
																</td>
															</tr>
														

															<tr className="order-total">
																<th>Tổng hóa đơn</th>
																<td><strong><span className="amount" id="totalPrice">{numberWithCommas(totalMoney + fee)}</span>
																	₫</strong></td>
															</tr>

															</tfoot>
														</table>
													</div>

											

												
													<div className="payment-method">
														<div className="payment-accordion">
														
															<h5><input type="radio" name="radio_button" value="button1" className="radio_payment"/>
																 Thanh toán khi nhận hàng</h5>
															<div className="payment-content">
																<p>Bạn sẽ được kiểm tra sản phẩm khi nhận hàng.</p>
															</div>
												
														
															<h5><input type="radio" name="radio_button" value="button2"  className="radio_payment"/>
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
    

