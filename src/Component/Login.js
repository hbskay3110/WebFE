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
import { Navigate, useNavigate } from "react-router-dom";
import { set } from "firebase/database";
import { useTranslation } from "react-i18next";
import bcrypt from 'bcryptjs';

<style>

</style>
export default function Login() {
  
    const { t, i18n } = useTranslation();
    const[email, setEmail]= useState("");

    const[password, setPassword]= useState("");
    const[errorEmail, setErrorEmail]= useState("");
    const[errorPass, setErrorPass]= useState("");
    const[account,setAccount] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
		async function fetchPostList(){
			const requestUrl = "http://localhost:3000/account";
			// gửi một yêu cầu HTTP GET đến url
			const reponse  =  await fetch(requestUrl);
			//chuyển đổi phản hồi thành đối tượng Javascrip
			const reponseJson = await reponse.json();
			//cập nhật giá trị của account
			setAccount(reponseJson);
		} 
		fetchPostList()
	},[])
    const handleEncryptPassword = (pass) => {
        const salt = "$2a$10$OzxjyRiCqovM/1ANh3K0EO"
        const hashed = bcrypt.hashSync(pass, salt);
        return hashed;
      };
    async function login() {
        let isEmailValid = true;
        let isPasswordValid = true;
      
        for (var i = 0; i < account.length; i++) {
          if (account[i].email === email) {
            if (account[i].pass === handleEncryptPassword(password)) {
              // set password bằng rỗng để lưu vào localStorage
              account[i].pass = "";
              // lưu vào local storage
              localStorage.setItem("user-info", JSON.stringify(account[i]));
              // chuyển đến trang home 
              navigate("/");  
            }else{
                isEmailValid = true
                isPasswordValid = false
                break;
            }
          }else{
            isEmailValid = false;
          }
        
        }
      
        if (!isEmailValid) {
            setErrorPass("");
          setErrorEmail("Email không hợp lệ");
        }
        if (!isPasswordValid) {
            setErrorEmail("");
          setErrorPass("Mật khẩu không hợp lệ");
        }
      }
     
    
    return (
        <div>
            <div className="container mt-0">
                <div className="row align-items-center justify-contain-center">
                    <div className="col-xl-12 mt-5">
                        <div className="card border-0">
                            <div className="card-body login-bx">
                                <div className="row  mt-5">
                                    <div className="col-xl-8 col-md-6 sign text-center">
                                        <div>
                                            <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/4:3/w_3336,h_2502,c_limit/Smashburger-recipe-120219.jpg" className="food-img" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 pe-0">
                                        <div className="sign-in-your">
                                            <div className="text-center mb-3">
                                                <img src="images/logo-full.png" className="mb-3" alt="" />
                                                <h4 className="fs-20 font-w800 text-black">{t('loginAccount')}</h4>
                                                <span className="dlab-sign-up">{t('signin')}</span>
                                            </div>
                                            <form action="https://fooddesk.dexignlab.com/xhtml/index.html">
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>{t('emailAddress')}</strong></label>
                                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
                                                </div>
                                                <div className="mb-3">
                                                    <span className="mb-1 errorLogin">{errorEmail}</span>
                                                   
                                                </div>
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>{t('password')}</strong></label>
                                                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="" />
                                                </div>
                                                <div className="mb-3">
                                                    <span className="mb-1 errorLogin">{errorPass}</span>
                                                   
                                                </div>
                                                <div className="row d-flex justify-content-between mt-4 mb-2">
                                                    <div className="mb-3">
                                                        <div className="form-check custom-checkbox ms-1">
                                                            <input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
                                                            <label className="form-check-label" for="basic_checkbox_1">{t('rememberPassword')}</label>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <a href="page-forgot-password.html">{t('forgotPassword')}</a>
                                                    </div>
                                                </div>
                                               
                                                <div className="text-center">
                                                    <button type="button" onClick={login} className="btn btn-primary btn-block shadow">{t('signMeIn')}</button>
                                                </div>
                                            </form>
                                            <div className="text-center my-3">
                                                <span className="dlab-sign-up style-1">{t('continueWith')}</span>
                                            </div>
                                            <div className="mb-3 dlab-signup-icon">
                                                <button className="btn btn-outline-light"><i className="fa-brands fa-facebook me-2 facebook"></i>Facebook</button>
                                                <button className="btn btn-outline-light"><i className="fa-brands fa-google me-2 google"></i>Google</button>
                                                <button className="btn btn-outline-light mt-lg-0 mt-md-1 mt-sm-0 mt-1 linked-btn"><i className="fa-brands fa-linkedin me-2 likedin"></i>linkedin</button>
                                            </div>
                                            <div className="text-center">
                                                <span>{t('realy')}<a href="/register" className="text-primary"> {t('signUp')}</a></span>
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