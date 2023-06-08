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
	const [cities, setCities] = useState([]);
	const [districts, setDistricts] = useState([]);
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
	for(var i=0;i<cart.length;i++){
		var cart_item = cart[i]
		const resultTotal =( cart_item.product.price * cart_item.quantity)
		totalMoney += resultTotal
	}
	

 
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
		// lấy ra giá trị được chọn
		console.log(event.target)
		const cityId = event.target.value;
		setSelectedDistrict("");
		setSelectedWard("");
		fetchDistricts(cityId);
		 // Lấy tên của tỉnh và lưu vào state selectedCityName
		 const selectedCityObj = cities.find((city) => city.code == cityId);
		 if (selectedCityObj) {
			setSelectedCity(selectedCityObj.name);
		 }
	  };
	
	  const handleDistrictChange = (event) => {
		const districtId = event.target.value;
		setSelectedWard("");
		fetchWards(districtId);
	
		 // tìm ra huyện có code bằng với code chọn từ option
		 const selectedDistrictObj = districts.find((district) => district.code == districtId);
		 // nếu có tồn tại
		 if (selectedDistrictObj) {
			// Lấy tên của huyện  và lưu vào state selectedDistrict
			setSelectedDistrict(selectedDistrictObj.name);
		 }
	  };
	
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
	const handleClick = () => {
		setShowDialog(true);
	  };

	function checkNameRecipient() {
        if (nameRecipient === "") {
          setErrorNameRecipient("Vui lòng nhập trường này");
          return false;
        
        }
        return true;
        
      }
	  function checkAddressDetail() {
        if (addressDetail === "") {
          setErrorAddressDetail("Vui lòng nhập trường này");
          return false;
        
        }
        return true;
        
      }
	  function checkPhone() {
		// Xác định một pattern cho số điện thoại
		var pattern =/^0\d{9}$/; // Ví dụ: 10 chữ số liên tiếp
  
        if (phone === "" ) {
          setErrorPhone("Vui lòng nhập trường này");
          return false;
        
        }else if(!pattern.test(phone) ){
			setErrorPhone("Số điện thoại không hợp lệ")
			return false;
		}
        return true;
        
      }
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
      async function confirmPayment(){
		checkNameRecipient();
		checkAddressDetail();
		checkPhone();
		if(selectedCity=="" || selectedDistrict== "" || selectedWard==""){
			setErrorSelectedCity("Vui lòng chọn tỉnh, quận, xã")
			return;
		}
		else if(!checkNameRecipient() || !checkAddressDetail() ||!checkPhone()){
			console.warn(selectedCity,selectedDistrict,selectedWard)
            console.log("no")
            return;
		}else{
			if(userInfoJSON){
			// Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
			const userInfo = JSON.parse(userInfoJSON);
			console.log("yes")
			const currentDate = new Date();
			const day = currentDate.getDate();
			const month = currentDate.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0, nên cần cộng 1
			const year = currentDate.getFullYear();
			const hours = currentDate.getHours();
			const minutes = currentDate.getMinutes();
			const seconds = currentDate.getSeconds();
			const date = day+"/"+month+"/"+year+" " +hours+":"+minutes+":"+seconds
			const address = addressDetail + "," +selectedWard + "," +selectedDistrict+","+selectedCity
			const resultTotalMoney= totalMoney + fee
			 // Lấy sản phẩm từ cart và tạo mảng mới
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
			const order = {				
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
			try{
				  // Sử dụng phương thức fetch để gửi yêu cầu tới API
				const response = await fetch("http://localhost:3000/order",{
					// sử dụng POST để tạo một đơn hàng mới.
					method:"POST",
					// Đặt tiêu đề yêu cầu để chỉ định rằng dữ liệu được gửi đi là dạng JSON.
					headers : {
						"Content-Type": "application/json",
                },
				  // Chuyển đổi đối tượng JavaScript order thành một chuỗi JSON, và gán nó vào thuộc tính body của yêu cầu
               		 body: JSON.stringify(order),
            });
			// nếu thành công chuyển về trang home
			if (response.ok) {
			
				cart.map((cart_item)=>{
					dispatch(removeItemCart(cart_item.product.id));
				})
				
                navigate("/")
            } else {
                console.error("Lỗi khi gửi yêu cầu đăng ký:", response.status, response.statusText);
            
            }
            } catch (error) {
            // Xảy ra lỗi khi gửi yêu cầu đăng ký
            console.error("Lỗi khi gửi yêu cầu đăng ký:", error.message);
            // Xử lý lỗi và hiển thị thông báo cho người dùng
            }
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
    

