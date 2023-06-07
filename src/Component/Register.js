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

export default function Register(){
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
    const[account,setAccount] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/account";
			// gửi một yêu cầu HTTP GET đến url
			const reponse  =  await fetch(requestUrl);
			//chuyển đổi phản hồi thành đối tượng JSON
			const reponseJson = await reponse.json();
			//cập nhật giá trị của products
			setAccount(reponseJson);
		} 
		fetchPostList()
	},[])
    console.log(account)
     function checkEmail() {
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
        checkUserName()
        checkEmail()
        checkPassWord()
        checkConfirmPass()
        checkPhone()
        console.warn(checkEmail())
        if(!checkEmail() || !checkUserName() || !checkPassWord() || !checkConfirmPass() || !checkPhone()){
            console.log("no")
            return;
        }else{
            const userData = {
                email: email,
                pass: password,
                name: username,
                phone: phone,
                // address: "Linh Tây, Thủ Đức",
                // dob: "21/09/2002"
            };
            try {
            
            const response = await fetch("http://localhost:3000/account", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
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
                                    <h4 className="text-center mb-4">Sign up your account</h4>
                                    <form action="https://fooddesk.dexignlab.com/xhtml/index.html">
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Username</strong></label>
                                            <input type="text" onBlur={checkUserName} onChange={handleUserName} className="form-control" placeholder="username"/>
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
                                            <label className="mb-1"><strong>Password</strong></label>
                                            <input type="password" onBlur={checkPassWord} onChange={handlePassword} className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="mb-3">
                                                    <span className="mb-1 errorLogin">{errorPass}</span>                                       
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Confirm Password</strong></label>
                                            <input type="password" onBlur={checkConfirmPass}  onChange={handleConfirmPassword} className="form-control" placeholder="Confirm Password"/>
                                        </div>
                                        <div className="mb-3">
                                            <span className="mb-1 errorLogin">{errorConfimPass}</span>                                       
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Phone number</strong></label>
                                            <input type="text" onBlur={checkPhone} onChange={handlePhone} className="form-control" placeholder="Phone number"/>
                                        </div>
                                        <div className="mb-3">
                                             <span className="mb-1 errorLogin">{errorPhone}</span>                                       
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="button" onClick={registerUser} className="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Already have an account? <a className="text-primary" href="page-login.html">Sign in</a></p>
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