import React, { useEffect, useState } from "react";

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
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

   
export default function Header(){
    const { t, i18n } = useTranslation();
   
    const changeLanguage = (lng)=>{
        i18n.changeLanguage(lng)
    }
    const currentLanguage = i18n.language
    const handleChangeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  
    const [user1, setUser] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchKeyword(searchTerm);
      
      };
    
    const user = localStorage.getItem("user-info");
    const userObject = JSON.parse(user);
    console.log(userObject)
    console.log(user)
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // Xử lý sự kiện khi nhấn phím Enter
          handleSearch();
        }
    };
    const handleSearch = () => {
        // Chuyển hướng đến trang danh sách sản phẩm với từ khóa tìm kiếm
        window.location.href = `/listProduct?search=${searchKeyword}`;
    };
    
    return (
        <div>
                <div className="header">
                    <div className="header-content">
                        <nav className="navbar navbar-expand">
                            <div className="container d-block my-0">
                                <div className={clsx("d-flex","align-items-center"," justify-content-sm-between", "justify-content-end")}>
                                    <div className="header-left">
                                        <div className="nav-item d-flex align-items-center">
                                            <div className="d-flex header-bx">
                                                <select className="selectpicker">
                                                    <option data-icon="fa-solid fa-location-dot mx-2">India</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Nepal</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Bangladesh</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Brazil</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">China</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Denmark</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Germany</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Japan</option>
                                                    <option data-icon="fa-solid fa-location-dot mx-2">Lithuania</option>
                                                </select>
                                                <div className="input-group search-area2 ps-3" id="Serach-bar">
											
                                                    <input type="text" className="form-control"  placeholder={t('whateattoday')}  onKeyDown={handleKeyDown} onChange={handleSearchChange}/>
                                                    <span className="input-group-text h-search"><a href="javascript:void(0)" onClick={handleSearchChange}>
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.3" d="M16.6751 19.4916C16.2195 19.036 16.2195 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9917 22.5084C23.4473 22.964 23.4473 23.7027 22.9917 24.1583C22.5361 24.6139 21.7974 24.6139 21.3417 24.1583L16.6751 19.4916Z" fill="var(--primary)"/>
											<path d="M12.8333 18.6667C16.055 18.6667 18.6666 16.055 18.6666 12.8333C18.6666 9.61168 16.055 7 12.8333 7C9.61163 7 6.99996 9.61168 6.99996 12.8333C6.99996 16.055 9.61163 18.6667 12.8333 18.6667ZM12.8333 21C8.32297 21 4.66663 17.3437 4.66663 12.8333C4.66663 8.32301 8.32297 4.66667 12.8333 4.66667C17.3436 4.66667 21 8.32301 21 12.8333C21 17.3437 17.3436 21 12.8333 21Z" fill="var(--primary)"/>
											</svg>
											</a></span>
                                                </div>
                                                <div className="search-drop">
                                                    <div className="card tag-bx">
                                                        <div className="card-header d-block border-0">
                                                            <h4>Recently Searched</h4>
                                                            <ul className="d-flex align-items-center flex-wrap">
                                                                <li><a href="javascript:void(0);" className="btn btn-outline-light btn-rounded me-2">Bakery</a></li>
                                                                <li><a href="javascript:void(0);" className="btn btn-outline-light btn-rounded me-2">Burger</a></li>
                                                                <li><a href="javascript:void(0);" className="btn btn-outline-light btn-rounded me-2">Beverage</a></li>
                                                                <li><a href="javascript:void(0);" className="btn btn-outline-light btn-rounded me-2">Chicken</a></li>
                                                                <li><a href="javascript:void(0);" className="btn btn-outline-light btn-rounded mt-3 mt-xl-0">Pizza</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="card-body pt-0">
                                                            <h4>popular Cuisines</h4>
                                                            <div className="swiper mySwiper-4">
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <div className="card mb-0">
                                                                            <div className="card-body pb-2 pt-3">
                                                                                <div className="text-center pop-cousin">
                                                                                    <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                                                    <a href= "javascript:void(0);"><h6>Fish Burger</h6></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <div className="card mb-0">
                                                                            <div className="card-body pb-2 pt-3">
                                                                                <div className="text-center pop-cousin">
                                                                                    <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                                                    <a href= "javascript:void(0);"><h6>Fish Burger</h6></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <div className="card mb-0">
                                                                            <div className="card-body pb-2 pt-3">
                                                                                <div className="text-center pop-cousin">
                                                                                    <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                                                    <a href="javascript:void(0);"><h6>Fish Burger</h6></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <div className="card mb-0">
                                                                            <div className="card-body pb-2 pt-3">
                                                                                <div className="text-center pop-cousin">
                                                                                    <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                                                    <a href="javascript:void(0);"><h6>Fish Burger</h6></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <div className="card mb-0">
                                                                            <div className="card-body pb-2 pt-3">
                                                                                <div className="text-center pop-cousin">
                                                                                    <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                                                    <a href="javascript:void(0);"><h6>Fish Burger</h6></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <div className="card mb-0">
                                                                            <div className="card-body pb-2 pt-3">
                                                                                <div className="text-center pop-cousin">
                                                                                    <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                                                    <a href="javascript:void(0);"><h6>Fish Burger</h6></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="close-searchbox"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="navbar-nav header-right ">
                                    <a>
                                              <li className="nav-item d-flex align-items-center header-profile2">
                                              <i class="header__navbar-icon fas fa-globe"></i>
                                              <h4 className="font-w500 mb-0 ms-2 text-while">{currentLanguage=='vi'?'Việt Nam':"English"}</h4>
                                              <ul class="header__navbar-user-menu">
                                                <a href="javascript:void(0);" class="header__navbar-languge-link" onClick={()=>changeLanguage('vi')}><li class="header__navber-languge-item">Tiếng Việt</li></a>
                                                <a	href="javascript:void(0);" class="header__navbar-languge-link" onClick={()=>changeLanguage('en')}><li class="header__navber-languge-item">English</li></a>
                                            </ul>
                                              </li>
                                        </a>
                                    
                                        <li>
                                       
                                            <div className="header-profile2 ">
                                                <Link to="/cart">
                                                    <div className="header-info2 d-flex align-items-center">
                                                        <img src="https://banner2.cleanpng.com/20180703/vtz/kisspng-shopping-cart-software-computer-icons-mayline-5b3b72a89c95a3.3174593115306226326414.jpg" alt="avt"></img>
                                                        <div className="d-flex align-items-center sidebar-info">
                                                            
                                                            <p className="totalcard">1</p>
                                                        </div>

                                                    </div>
                                                    </Link>
                                                
                                            </div>
                                        </li>
                                        {!user ? (
                                          <li className="nav-item d-flex align-items-center header-profile2">
                                            <Link to={"/register"}>
                                            <a href="" className="header-item_login">
                                                <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate js-form-register">
                                                {t('signUp')}
                                                </li>
                                            </a>
                                            </Link>
                                            <Link to={"/login"}>
                                            <a href="" className="header-item_register">
                                                <li className="header__navbar-item header__navbar-item--strong js-form-login">
                                                {t('signin')}
                                                </li>
                                            </a>
                                            </Link>
                                        </li>
                                        ) : (
                                        <a>
                                              <li className="nav-item d-flex align-items-center header-profile2">
                                              <img className="img-avt" src="https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-11.jpg"></img>
                                                <h4 className="font-w500 mb-0 ms-2 text-while">{userObject.name}</h4>
                                                <ul class="header__navbar-user-menu">
                                                    <li class="header__navbar-user-item">
                                                        <Link to={"/account"}><a
                                                        href="">{t('myAccount')} </a></Link></li>

                                                    <li class="header__navbar-user-item"><Link to={"/cart"}><a href="">{t('order')}</a></Link></li>
                                                    <li
                                                        class="header__navbar-user-item header__navbar-user-item--separate">
                                                        <a href="">{t('logOut')}</a>
                                                    </li>

                                                </ul>
                                              </li>
                                        </a>
                                        )}
                                      
                                            {/*  */}
                                          
                                           
                                      
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
        </div>
    )

}
