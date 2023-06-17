import React, { useEffect, useState } from "react";
import "../images/favicon.png"
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"

import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
import "../css/style.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
   
export default function Register(){
    const { t, i18n } = useTranslation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorConfimPass, setErrorConfimPass]= useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [errorCapcha, setErrorCapcha] = useState("");
    const[account,setAccount] = useState([]);
    const [hashedPassword, setHashedPassword] = useState('');
    const navigate = useNavigate();
    const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    const [verfied,setVerfied] = useState(false)
    const handleRecaptchaChange = (value) => {
        setVerfied(true)
        
      };
    useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/account";
			// gửi một yêu cầu HTTP GET đến url
			const reponse  =  await fetch(requestUrl);
			//chuyển đổi phản hồi thành đối tượng javascrip để sử dụng
			const reponseJson = await reponse.json();
			//cập nhật giá trị của account bằng giá trị nhận về
			setAccount(reponseJson);
		} 
        // gọi tới hàm để thực thi
		fetchPostList()
	},[])
    
     function checkEmail() {
        // cho định dạng email theo dạng dưới
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
          setErrorEmail("Vui lòng nhập trường này");
            return false;
        }else if (!emailRegex.test(email)) {
            setErrorEmail("Email không đúng định dạng");
        } else {
                for(var i = 0 ; i<account.length;i++){
                    if(account[i].email == email){
                        setErrorEmail("Email này đã được sử dụng")
                        return false;
                        
                    }
                }
        }
        return true;
      }
       function checkUserName() {
        if (username === "") {
          setErrorName("Vui lòng nhập trường này");
          return false;
        
        }
        return true;
        
      }
       function checkPassWord() {
        if (password === "") {
          setErrorPass("Vui lòng nhập trường này");
          return false;
        } else{
            const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{8,}$/;
            if(!passwordRegex.test(password)){
                setErrorPass("Password phải bao gồm các chữ cái, số và kí tự đặc biệt")
                return false
            }
        }
        return true;
        
      }
       function checkConfirmPass() {
        if (confirmPassword === "") {
          setErrorConfimPass("Vui lòng nhập trường này");
          return false;
      
        }else{
            if(confirmPassword != password){
                setErrorConfimPass("Mật khẩu xác nhận không khớp")
                return false;
               
            }
        }
        return true
        
      }
       function checkPhone() {
        if (phone === "") {
          setErrorPhone("Vui lòng nhập trường này");
          return false;
        }
        return true;
      }
      async function handleUserName(e){
        setUsername(e.target.value) 
        setErrorName("")
      }
      async function handleEmail(e){
        setEmail(e.target.value)
        setErrorEmail("")
      }
      async function handlePassword(e){
        setPassword(e.target.value)
        setErrorPass("")
      }
      async function handleConfirmPassword(e){
        setConfirmPassword(e.target.value)
        setErrorConfimPass("")
      }
      async function handlePhone(e){
        setPhone(e.target.value)
        setErrorPhone("")
      }
      
      
    async function registerUser() {
  
    
        if(!checkEmail() || !checkUserName() || !checkPassWord() || !checkConfirmPass() || !checkPhone()){
            return;
        }else if(!verfied){
            setErrorCapcha("Vui lòng xác nhận");
            return;

        } 
        else{
            const userData = {
                email: email,
                pass: password,
                name: username,
                phone: phone,
                // address: "Linh Tây, Thủ Đức",
                // dob: "21/09/2002"
            };
            try {
            // Sử dụng phương thức fetch để gửi yêu cầu tới API
            const response = await fetch("http://localhost:3000/account", {
                // sử dụng POST để tạo một tài khoản mới.
                method: "POST",
                // Đặt tiêu đề yêu cầu để chỉ định rằng dữ liệu được gửi đi là dạng JSON.
                headers: {
                "Content-Type": "application/json",
                },
                // Chuyển đổi đối tượng JavaScript userData thành một chuỗi JSON, và gán nó vào thuộc tính body của yêu cầu
                body: JSON.stringify(userData),
            });
        
            if (response.ok) {
                navigate("/login")
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
      
    return(
        <div>
            <div className="authincation ">
        <div className="container">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<a href="index.html"><img src="images/logo-full.png" alt=""/></a>
									</div>
                                    <h4 className="text-center mb-4">{t('signUpAccount')}</h4>
                                    <form action="https://fooddesk.dexignlab.com/xhtml/index.html">
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>{t('username')}</strong></label>
                                            <input type="text" onBlur={checkUserName} onChange={handleUserName} className="form-control" placeholder="Phan Thị An"/>
                                        </div>
                                        <div className="mb-3">
                                                    <span className="mb-1 errorLogin">{errorName}</span>      
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Email</strong></label>
                                            <input type="email" onBlur={checkEmail}  onChange={handleEmail} className="form-control" placeholder="hello@example.com"/>
                                        </div>
                                        <div className="mb-3">
                                                    <span className="mb-1 errorLogin">{errorEmail}</span>                                       
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>{t('password')}</strong></label>
                                            <input type="password" onBlur={checkPassWord} onChange={handlePassword} className="form-control" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                                    <span className="mb-1 errorLogin">{errorPass}</span>                                       
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>{t('confirmPass')}</strong></label>
                                            <input type="password" onBlur={checkConfirmPass}  onChange={handleConfirmPassword} className="form-control" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                            <span className="mb-1 errorLogin">{errorConfimPass}</span>                                       
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>{t('phoneNum')}</strong></label>
                                            <input type="text" onBlur={checkPhone} onChange={handlePhone} className="form-control" placeholder="0356940356"/>
                                        </div>
                                        <div className="mb-3">
                                             <span className="mb-1 errorLogin">{errorPhone}</span>                                       
                                        </div>
                                        <ReCAPTCHA
                                                            sitekey={key}
                                                            onChange={handleRecaptchaChange}
                                                />
                                        <div className="mb-3">
                                             <span className="mb-1 errorLogin">{errorCapcha}</span>                                       
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="button" onClick={registerUser} className="btn btn-primary btn-block">{t('signMeUp')}</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>{t('realy')}<a className="text-primary" href="page-login.html">{t('signin')}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

    );
}