import React from "react";


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
export default function Header(){
    return (
        <div>


    <div id="main-wrapper">
        <div className="nav-header">
            <a href="index.html" className="brand-logo">
                <svg className="logo-abbr" width="39" height="31" viewBox="0 0 39 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M25.125 21.125L26.9952 23.2623C27.6771 24.0417 28.8616 24.1206 29.6409 23.4387C29.7036 23.3839 29.7625 23.325 29.8173 23.2623L31.6875 21.125H36.375C35.2848 26.5762 30.4985 30.5 24.9393 30.5H14.0607C8.5015 30.5 3.71523 26.5762 2.625 21.125H25.125Z"
                          fill="var(--primary)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M36.375 9.875H2.625C3.71523 4.4238 8.5015 0.5 14.0607 0.5H24.9393C30.4985 0.5 35.2848 4.4238 36.375 9.875Z"
                          fill="var(--primary)"/>
                    <path opacity="0.3"
                          d="M36.375 13.625H2.625C1.58947 13.625 0.75 14.4645 0.75 15.5C0.75 16.5355 1.58947 17.375 2.625 17.375H36.375C37.4105 17.375 38.25 16.5355 38.25 15.5C38.25 14.4645 37.4105 13.625 36.375 13.625Z"
                          fill="var(--primary)"/>
                </svg>
                <svg className="brand-title" width="147" height="22" viewBox="0 0 147 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.532 1.344V5.18H5.524V9.324H11.516V13.048H5.524V21H0.736V1.344H13.532ZM23.1605 21.224C21.6298 21.224 20.2485 20.8973 19.0165 20.244C17.8032 19.5907 16.8418 18.6573 16.1325 17.444C15.4418 16.2307 15.0965 14.812 15.0965 13.188C15.0965 11.5827 15.4512 10.1733 16.1605 8.96C16.8698 7.728 17.8405 6.78533 19.0725 6.132C20.3045 5.47867 21.6858 5.152 23.2165 5.152C24.7472 5.152 26.1285 5.47867 27.3605 6.132C28.5925 6.78533 29.5632 7.728 30.2725 8.96C30.9818 10.1733 31.3365 11.5827 31.3365 13.188C31.3365 14.7933 30.9725 16.212 30.2445 17.444C29.5352 18.6573 28.5552 19.5907 27.3045 20.244C26.0725 20.8973 24.6912 21.224 23.1605 21.224ZM23.1605 17.08C24.0752 17.08 24.8498 16.744 25.4845 16.072C26.1378 15.4 26.4645 14.4387 26.4645 13.188C26.4645 11.9373 26.1472 10.976 25.5125 10.304C24.8965 9.632 24.1312 9.296 23.2165 9.296C22.2832 9.296 21.5085 9.632 20.8925 10.304C20.2765 10.9573 19.9685 11.9187 19.9685 13.188C19.9685 14.4387 20.2672 15.4 20.8645 16.072C21.4805 16.744 22.2458 17.08 23.1605 17.08ZM40.9886 21.224C39.458 21.224 38.0766 20.8973 36.8446 20.244C35.6313 19.5907 34.67 18.6573 33.9606 17.444C33.27 16.2307 32.9246 14.812 32.9246 13.188C32.9246 11.5827 33.2793 10.1733 33.9886 8.96C34.698 7.728 35.6686 6.78533 36.9006 6.132C38.1326 5.47867 39.514 5.152 41.0446 5.152C42.5753 5.152 43.9566 5.47867 45.1886 6.132C46.4206 6.78533 47.3913 7.728 48.1006 8.96C48.81 10.1733 49.1646 11.5827 49.1646 13.188C49.1646 14.7933 48.8006 16.212 48.0726 17.444C47.3633 18.6573 46.3833 19.5907 45.1326 20.244C43.9006 20.8973 42.5193 21.224 40.9886 21.224ZM40.9886 17.08C41.9033 17.08 42.678 16.744 43.3126 16.072C43.966 15.4 44.2926 14.4387 44.2926 13.188C44.2926 11.9373 43.9753 10.976 43.3406 10.304C42.7246 9.632 41.9593 9.296 41.0446 9.296C40.1113 9.296 39.3366 9.632 38.7206 10.304C38.1046 10.9573 37.7966 11.9187 37.7966 13.188C37.7966 14.4387 38.0953 15.4 38.6926 16.072C39.3086 16.744 40.074 17.08 40.9886 17.08ZM50.7528 13.16C50.7528 11.5547 51.0514 10.1453 51.6488 8.932C52.2648 7.71867 53.0954 6.78533 54.1408 6.132C55.1861 5.47867 56.3528 5.152 57.6408 5.152C58.6674 5.152 59.6008 5.36667 60.4408 5.796C61.2994 6.22533 61.9714 6.804 62.4568 7.532V0.28H67.2448V21H62.4568V18.76C62.0088 19.5067 61.3648 20.104 60.5248 20.552C59.7034 21 58.7421 21.224 57.6408 21.224C56.3528 21.224 55.1861 20.8973 54.1408 20.244C53.0954 19.572 52.2648 18.6293 51.6488 17.416C51.0514 16.184 50.7528 14.7653 50.7528 13.16ZM62.4568 13.188C62.4568 11.9933 62.1208 11.0507 61.4488 10.36C60.7954 9.66933 59.9928 9.324 59.0408 9.324C58.0888 9.324 57.2768 9.66933 56.6048 10.36C55.9514 11.032 55.6248 11.9653 55.6248 13.16C55.6248 14.3547 55.9514 15.3067 56.6048 16.016C57.2768 16.7067 58.0888 17.052 59.0408 17.052C59.9928 17.052 60.7954 16.7067 61.4488 16.016C62.1208 15.3253 62.4568 14.3827 62.4568 13.188ZM78.0727 1.344C80.1447 1.344 81.9553 1.75467 83.5047 2.576C85.054 3.39733 86.2487 4.55467 87.0887 6.048C87.9473 7.52267 88.3767 9.23067 88.3767 11.172C88.3767 13.0947 87.9473 14.8027 87.0887 16.296C86.2487 17.7893 85.0447 18.9467 83.4767 19.768C81.9273 20.5893 80.126 21 78.0727 21H70.7087V1.344H78.0727ZM77.7647 16.856C79.5753 16.856 80.9847 16.3613 81.9927 15.372C83.0007 14.3827 83.5047 12.9827 83.5047 11.172C83.5047 9.36133 83.0007 7.952 81.9927 6.944C80.9847 5.936 79.5753 5.432 77.7647 5.432H75.4967V16.856H77.7647ZM105.78 12.936C105.78 13.384 105.752 13.8507 105.696 14.336H94.8604C94.9351 15.3067 95.2431 16.0533 95.7844 16.576C96.3444 17.08 97.0257 17.332 97.8284 17.332C99.0231 17.332 99.8537 16.828 100.32 15.82H105.416C105.155 16.8467 104.679 17.7707 103.988 18.592C103.316 19.4133 102.467 20.0573 101.44 20.524C100.414 20.9907 99.2657 21.224 97.9964 21.224C96.4657 21.224 95.1031 20.8973 93.9084 20.244C92.7137 19.5907 91.7804 18.6573 91.1084 17.444C90.4364 16.2307 90.1004 14.812 90.1004 13.188C90.1004 11.564 90.4271 10.1453 91.0804 8.932C91.7524 7.71867 92.6857 6.78533 93.8804 6.132C95.0751 5.47867 96.4471 5.152 97.9964 5.152C99.5084 5.152 100.852 5.46933 102.028 6.104C103.204 6.73867 104.119 7.644 104.772 8.82C105.444 9.996 105.78 11.368 105.78 12.936ZM100.88 11.676C100.88 10.8547 100.6 10.2013 100.04 9.716C99.4804 9.23067 98.7804 8.988 97.9404 8.988C97.1377 8.988 96.4564 9.22133 95.8964 9.688C95.3551 10.1547 95.0191 10.8173 94.8884 11.676H100.88ZM114.662 21.224C113.3 21.224 112.086 20.9907 111.022 20.524C109.958 20.0573 109.118 19.4227 108.502 18.62C107.886 17.7987 107.541 16.884 107.466 15.876H112.198C112.254 16.4173 112.506 16.856 112.954 17.192C113.402 17.528 113.953 17.696 114.606 17.696C115.204 17.696 115.661 17.584 115.978 17.36C116.314 17.1173 116.482 16.8093 116.482 16.436C116.482 15.988 116.249 15.6613 115.782 15.456C115.316 15.232 114.56 14.9893 113.514 14.728C112.394 14.4667 111.461 14.196 110.714 13.916C109.968 13.6173 109.324 13.16 108.782 12.544C108.241 11.9093 107.97 11.06 107.97 9.996C107.97 9.1 108.213 8.288 108.698 7.56C109.202 6.81333 109.93 6.22533 110.882 5.796C111.853 5.36667 113.001 5.152 114.326 5.152C116.286 5.152 117.826 5.63733 118.946 6.608C120.085 7.57867 120.738 8.86667 120.906 10.472H116.482C116.408 9.93067 116.165 9.50133 115.754 9.184C115.362 8.86667 114.84 8.708 114.186 8.708C113.626 8.708 113.197 8.82 112.898 9.044C112.6 9.24933 112.45 9.53867 112.45 9.912C112.45 10.36 112.684 10.696 113.15 10.92C113.636 11.144 114.382 11.368 115.39 11.592C116.548 11.8907 117.49 12.1893 118.218 12.488C118.946 12.768 119.581 13.2347 120.122 13.888C120.682 14.5227 120.972 15.3813 120.99 16.464C120.99 17.3787 120.729 18.2 120.206 18.928C119.702 19.6373 118.965 20.1973 117.994 20.608C117.042 21.0187 115.932 21.224 114.662 21.224ZM133.468 21L128.708 14.448V21H123.92V0.28H128.708V11.732L133.44 5.376H139.348L132.852 13.216L139.404 21H133.468ZM143.468 21.224C142.628 21.224 141.938 20.9813 141.396 20.496C140.874 19.992 140.612 19.376 140.612 18.648C140.612 17.9013 140.874 17.276 141.396 16.772C141.938 16.268 142.628 16.016 143.468 16.016C144.29 16.016 144.962 16.268 145.484 16.772C146.026 17.276 146.296 17.9013 146.296 18.648C146.296 19.376 146.026 19.992 145.484 20.496C144.962 20.9813 144.29 21.224 143.468 21.224Z"
                        fill="var(--primary)"/>
                </svg>
            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>


            <div className="chatbox">
                <div className="chatbox-close"></div>
                <div className="custom-tab-1">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="chat" role="tabpanel">
                            <div className="card mb-sm-3 mb-md-0 contacts_card dlab-chat-user-box">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/></g></svg></a>
                                    <div>
                                        <h6 className="mb-1">Chat List</h6>
                                        <p className="mb-0">Show All</p>
                                    </div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
                                </div>
                                <div className="card-body contacts_body p-0 dlab-scroll  " id="DLAB_W_Contacts_Body">
                                    <ul className="contacts">
                                        <li className="name-first-letter">A</li>
                                        <li className="active dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Archie Parker</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Alfie Mason</span>
                                                    <p>Taherah left 7 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>AharlieKane</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Athan Jacoby</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">B</li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Bashid Samim</span>
                                                    <p>Rashid left 50 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Breddie Ronan</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Ceorge Carson</span>
                                                    <p>Taherah left 7 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">D</li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Darry Parker</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Denry Hunter</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">J</li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Jack Ronan</span>
                                                    <p>Rashid left 50 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Jacob Tucker</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>James Logan</span>
                                                    <p>Taherah left 7 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Joshua Weston</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">O</li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Oliver Acker</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dlab-chat-user">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt=""/>
                                                    <span className="online_icon offline"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Oscar Weston</span>
                                                    <p>Rashid left 50 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card chat dlab-chat-history-box d-none">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);" className="dlab-chat-history-back">
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 0 24 0 24 24 0 24"/><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x="14" y="7" width="2" height="10" rx="1"/><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "/></g></svg>
                                    </a>
                                    <div>
                                        <h6 className="mb-1">Chat with Khelesh</h6>
                                        <p className="mb-0 text-success">Online</p>
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg"  height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2"></i> View profile</li>
                                            <li className="dropdown-item"><i className="fa fa-users text-primary me-2"></i> Add to btn-close friends</li>
                                            <li className="dropdown-item"><i className="fa fa-plus text-primary me-2"></i> Add to group</li>
                                            <li className="dropdown-item"><i className="fa fa-ban text-primary me-2"></i> Block</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body msg_card_body dlab-scroll" id="DLAB_W_Contacts_Body3">
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            Hi, how are you samim?
                                            <span className="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Hi Khalid i am good tnx how about you?
                                            <span className="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            I am good too, thank you for your chat template
                                            <span className="msg_time">9:00 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            You are welcome
                                            <span className="msg_time_send">9:05 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            I am looking for your next templates
                                            <span className="msg_time">9:07 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Ok, thank you have a good day
                                            <span className="msg_time_send">9:10 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            Bye, see you
                                            <span className="msg_time">9:12 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            Hi, how are you samim?
                                            <span className="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Hi Khalid i am good tnx how about you?
                                            <span className="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            I am good too, thank you for your chat template
                                            <span className="msg_time">9:00 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            You are welcome
                                            <span className="msg_time_send">9:05 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            I am looking for your next templates
                                            <span className="msg_time">9:07 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Ok, thank you have a good day
                                            <span className="msg_time_send">9:10 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
                                        </div>
                                        <div className="msg_cotainer">
                                            Bye, see you
                                            <span className="msg_time">9:12 AM, Today</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer type_msg">
                                    <div className="input-group">
                                        <textarea className="form-control" placeholder="Type your message..."></textarea>
                                        <div className="input-group-append">
                                            <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="alerts" role="tabpanel">
                            <div className="card mb-sm-3 mb-md-0 contacts_card">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
                                    <div>
                                        <h6 className="mb-1">Notications</h6>
                                        <p className="mb-0">Show All</p>
                                    </div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"/></g></svg></a>
                                </div>
                                <div className="card-body contacts_body p-0 dlab-scroll" id="DLAB_W_Contacts_Body1">
                                    <ul className="contacts">
                                        <li className="name-first-letter">SEVER STATUS</li>
                                        <li className="active">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont primary">KK</div>
                                                <div className="user_info">
                                                    <span>David Nester Birthday</span>
                                                    <p className="text-primary">Today</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">SOCIAL</li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont success">RU</div>
                                                <div className="user_info">
                                                    <span>Perfection Simplified</span>
                                                    <p>Jame Smith commented on your status</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="name-first-letter">SEVER STATUS</li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont primary">AU</div>
                                                <div className="user_info">
                                                    <span>AharlieKane</span>
                                                    <p>Sami is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont info">MO</div>
                                                <div className="user_info">
                                                    <span>Athan Jacoby</span>
                                                    <p>Nargis left 30 mins ago</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="notes">
                            <div className="card mb-sm-3 mb-md-0 note_card">
                                <div className="card-header chat-list-header text-center">
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/></g></svg></a>
                                    <div>
                                        <h6 className="mb-1">Notes</h6>
                                        <p className="mb-0">Add New Nots</p>
                                    </div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"/></g></svg></a>
                                </div>
                                <div className="card-body contacts_body p-0 dlab-scroll" id="DLAB_W_Contacts_Body2">
                                    <ul className="contacts">
                                        <li className="active">
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>New order placed..</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>Youtube, a video-sharing website..</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>john just buy your product..</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex bd-highlight">
                                                <div className="user_info">
                                                    <span>Athan Jacoby</span>
                                                    <p>10 Aug 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="container d-block my-0">
                            <div className="d-flex align-items-center justify-content-sm-between justify-content-end">
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
											<span className="input-group-text h-search"><a href="javascript:void(0)"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.3" d="M16.6751 19.4916C16.2195 19.036 16.2195 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9917 22.5084C23.4473 22.964 23.4473 23.7027 22.9917 24.1583C22.5361 24.6139 21.7974 24.6139 21.3417 24.1583L16.6751 19.4916Z" fill="var(--primary)"/>
											<path d="M12.8333 18.6667C16.055 18.6667 18.6666 16.055 18.6666 12.8333C18.6666 9.61168 16.055 7 12.8333 7C9.61163 7 6.99996 9.61168 6.99996 12.8333C6.99996 16.055 9.61163 18.6667 12.8333 18.6667ZM12.8333 21C8.32297 21 4.66663 17.3437 4.66663 12.8333C4.66663 8.32301 8.32297 4.66667 12.8333 4.66667C17.3436 4.66667 21 8.32301 21 12.8333C21 17.3437 17.3436 21 12.8333 21Z" fill="var(--primary)"/>
											</svg>
											</a></span>
                                                <input type="text" className="form-control"  placeholder="What do you want eat today"/>

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

                                    <li className="nav-item d-flex align-items-center">

                                    </li>
                                    <li>

                                        <div className="dropdown header-profile2 ">
                                            <a className="nav-link " href="javascript:void(0);"  role="button" data-bs-toggle="dropdown">
                                                <div className="header-info2 d-flex align-items-center">
                                                    <img src={pic1} alt="avt"></img>
                                                    <div className="d-flex align-items-center sidebar-info">
                                                        <div>
                                                            <h6 className="font-w500 mb-0 ms-2">Joshua</h6>
                                                        </div>
                                                        <i className="fas fa-chevron-down"></i>
                                                    </div>

                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="app-profile.html" className="dropdown-item ai-icon ">
                                                    <svg  xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                    <span className="ms-2">Profile</span>
                                                </a>
                                                <a href="email-inbox.html" className="dropdown-item ai-icon">
                                                    <svg  xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    <span className="ms-2">Inbox</span>
                                                </a>
                                                <a href="edit-profile.html" className="dropdown-item ai-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    <span className="ms-2">Edit Profile</span>
                                                </a>
                                                <a href="message.html" className="dropdown-item ai-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="var(--primary)"/>
                                                        </g>
                                                    </svg>
                                                    <span className="ms-2">Message</span>
                                                </a>
                                                <a href="notification.html" className="dropdown-item ai-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="var(--primary)"/>
                                                            <circle fill="var(--primary)" opacity="0.3" cx="19.5" cy="17.5" r="2.5"/>
                                                        </g>
                                                    </svg>
                                                    <span className="ms-2">Notification </span>
                                                </a>
                                                <a href="setting.html" className="dropdown-item ai-icon ">
                                                    <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"/>
                                                            <path d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z" fill="var(--primary)" fill-rule="nonzero" opacity="0.3"/>
                                                            <path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="var(--primary)"/>
                                                        </g>
                                                    </svg>
                                                    <span className="ms-2">Settings </span>
                                                </a>
                                                <a href="page-login.html" className="dropdown-item ai-icon ms-1">
                                                    <svg  xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                    <span className="ms-1">Logout </span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>



            <div className="dlabnav border-right">
                <div className="dlabnav-scroll">
                    <p className="menu-title style-1"> Main Menu</p>
                    <ul className="metismenu" id="menu">
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-grid"></i>
                            <span className="nav-text">Dashboard</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="index.html">Dashboard Light</a></li>
                                <li><a href="index-2.html">Dashboard Dark</a></li>
                                <li><a href="food-order.html">Food Order</a></li>
                                <li><a href="favorite-menu.html">Favorite Menu</a></li>
                                <li><a href="message.html">Message</a></li>
                                <li><a href="order-history.html">Order History</a></li>
                                <li><a href="notification.html">Notification</a></li>
                                <li><a href="bill.html">Bill</a></li>
                                <li><a href="setting.html">Setting</a></li>
                            </ul>

                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">

                            <i className="bi bi-shop-window"></i>
                            <span className="nav-text">Restaurant</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="menu.html">Menu</a></li>
                                <li><a href="orders.html">Orders</a></li>
                                <li><a href="customer-reviews.html">Reviews</a></li>
                                <li><a href="restro-setting.html">Setting</a></li>

                            </ul>

                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-bicycle"></i>

                            <span className="nav-text">Drivers</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="deliver-main.html">Dashboard</a></li>
                                <li><a href="deliver-order.html">Orders</a></li>
                                <li><a href="feedback.html">Feedback</a></li>
                            </ul>

                        </li>
                        <li className="menu-title">Other</li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-info-circle"></i>
                            <span className="nav-text">Apps</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="app-profile.html">Profile</a></li>
                                <li><a href="post-details.html">Post Details</a></li>
                                <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Email</a>
                                    <ul aria-expanded="false">
                                        <li><a href="email-compose.html">Compose</a></li>
                                        <li><a href="email-inbox.html">Inbox</a></li>
                                        <li><a href="email-read.html">Read</a></li>
                                    </ul>
                                </li>
                                <li><a href="app-calender.html">Calendar</a></li>
                                <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Shop</a>
                                    <ul aria-expanded="false">
                                        <li><a href="ecom-product-grid.html">Product Grid</a></li>
                                        <li><a href="ecom-product-list.html">Product List</a></li>
                                        <li><a href="ecom-product-detail.html">Product Details</a></li>
                                        <li><a href="ecom-product-order.html">Order</a></li>
                                        <li><a href="ecom-checkout.html">Checkout</a></li>
                                        <li><a href="ecom-invoice.html">Invoice</a></li>
                                        <li><a href="ecom-customers.html">Customers</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-pie-chart"></i>
                            <span className="nav-text">Charts</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="chart-flot.html">Flot</a></li>
                                <li><a href="chart-morris.html">Morris</a></li>
                                <li><a href="chart-chartjs.html">Chartjs</a></li>
                                <li><a href="chart-chartist.html">Chartist</a></li>
                                <li><a href="chart-sparkline.html">Sparkline</a></li>
                                <li><a href="chart-peity.html">Peity</a></li>
                            </ul>
                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-star"></i>
                            <span className="nav-text">Bootstrap</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="ui-accordion.html">Accordion</a></li>
                                <li><a href="ui-alert.html">Alert</a></li>
                                <li><a href="ui-badge.html">Badge</a></li>
                                <li><a href="ui-button.html">Button</a></li>
                                <li><a href="ui-modal.html">Modal</a></li>
                                <li><a href="ui-button-group.html">Button Group</a></li>
                                <li><a href="ui-list-group.html">List Group</a></li>
                                <li><a href="ui-card.html">Cards</a></li>
                                <li><a href="ui-carousel.html">Carousel</a></li>
                                <li><a href="ui-dropdown.html">Dropdown</a></li>
                                <li><a href="ui-popover.html">Popover</a></li>
                                <li><a href="ui-progressbar.html">Progressbar</a></li>
                                <li><a href="ui-tab.html">Tab</a></li>
                                <li><a href="ui-typography.html">Typography</a></li>
                                <li><a href="ui-pagination.html">Pagination</a></li>
                                <li><a href="ui-grid.html">Grid</a></li>

                            </ul>
                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-heart"></i>
                            <span className="nav-text">Plugins</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="uc-select2.html">Select 2</a></li>
                                <li><a href="uc-nestable.html">Nestedable</a></li>
                                <li><a href="uc-noui-slider.html">Noui Slider</a></li>
                                <li><a href="uc-sweetalert.html">Sweet Alert</a></li>
                                <li><a href="uc-toastr.html">Toastr</a></li>
                                <li><a href="map-jqvmap.html">Jqv Map</a></li>
                                <li><a href="uc-lightgallery.html">Light Gallery</a></li>
                            </ul>
                        </li>
                        <li><a href="widget-basic.html" className="" aria-expanded="false">
                            <i className="bi bi-gear-wide"></i>
                            <span className="nav-text">Widget</span>
                        </a>
                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-file-earmark-check"></i>
                            <span className="nav-text">Forms</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="form-element.html">Form Elements</a></li>
                                <li><a href="form-wizard.html">Wizard</a></li>
                                <li><a href="form-ckeditor.html">CkEditor</a></li>
                                <li><a href="form-pickers.html">Pickers</a></li>
                                <li><a href="form-validation.html">Form Validate</a></li>
                            </ul>
                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-file-earmark-spreadsheet"></i>
                            <span className="nav-text">Table</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                                <li><a href="table-datatable-basic.html">Datatable</a></li>
                            </ul>
                        </li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-file-earmark-break"></i>
                            <span className="nav-text">Pages</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="page-login.html">Login</a></li>
                                <li><a href="page-register.html">Register</a></li>
                                <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.html">Error 400</a></li>
                                        <li><a href="page-error-403.html">Error 403</a></li>
                                        <li><a href="page-error-404.html">Error 404</a></li>
                                        <li><a href="page-error-500.html">Error 500</a></li>
                                        <li><a href="page-error-503.html">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.html">Lock Screen</a></li>
                                <li><a href="empty-page.html">Empty Page</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="plus-box">
                        <div className="d-flex align-items-center">
                            <h5>Upgrade your Account to Get Free Voucher</h5>

                        </div>
                        <a href="javascript:void(0);" className="btn bg-white btn-sm">Upgrade</a>
                    </div>
                    <div className="copyright mt-0">
                        <p><strong>Food Desk - Online Food Delivery Admin Dashboard</strong> © 2022 All Rights Reserved</p>
                        <p className="fs-12">Made with <span className="heart"></span> by DexignLab</p>
                    </div>
                </div>
            </div>
            <div className="content-body">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-xxl-7">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="position-relative ">
                                        <div className="swiper-pagination-banner"></div>
                                        <div className="swiper mySwiper-1">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="banner-bx">
                                                        <img src="images/banner-img/pic-1.jpg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="banner-bx">
                                                        <img src="images/banner-img/pic-3.jpg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="banner-bx">
                                                        <img src="images/banner-img/pic-4.jpg" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-button-next-1"></div>
                                            <div className="swiper-button-prev-1"></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="d-flex align-items-center justify-content-between mb-2 gap">
                                        <h4 className=" mb-0 cate-title">Category</h4>
                                        <a href="favorite-menu.html" className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></a>
                                    </div>
                                    <div className="swiper mySwiper-2">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M33.5417 33.0729H16.6146V44.6354H33.5417V33.0729Z" fill="#A6C44A"/>
                                                                <path d="M38.0208 10.4167C37.8125 10.4167 37.5521 10.4167 37.3438 10.4688C35.7292 5.26043 30.5208 1.45834 24.3229 1.45834C18.8542 1.45834 14.1146 4.42709 11.9792 8.75001C6.04167 9.37501 1.40625 14.0104 1.40625 19.6875C1.40625 25.7813 6.82292 30.7813 13.4375 30.7813C17.3958 30.7813 20.9375 29.0104 23.125 26.3021C23.4896 26.3542 23.9063 26.3542 24.3229 26.3542C26.0417 26.3542 27.7083 26.0417 29.2708 25.4688C31.1458 28.0729 34.375 29.7917 38.0729 29.7917C43.9063 29.7917 48.6458 25.4688 48.6458 20.1042C48.6458 14.7396 43.8542 10.4167 38.0208 10.4167Z" fill="#FC8019"/>
                                                                <path d="M13.4895 31.7708C6.24996 31.7708 0.416626 26.3542 0.416626 19.6875C0.416626 13.75 5.10413 8.69791 11.3541 7.76041C13.802 3.28124 18.8541 0.416656 24.3229 0.416656C30.5208 0.416656 36.0416 4.06249 38.0729 9.42707C44.427 9.42707 49.6354 14.2187 49.6354 20.1562C49.6354 26.0417 44.427 30.8854 38.0729 30.8854C34.4791 30.8854 31.0937 29.3229 28.9062 26.7187C27.3958 27.1875 25.8854 27.3958 24.3229 27.3958C24.0625 27.3958 23.802 27.3958 23.5937 27.3958C21.0937 30.1562 17.4479 31.7708 13.4895 31.7708ZM24.3229 2.44791C19.427 2.44791 14.9479 5.10416 12.9166 9.16666L12.6562 9.68749L12.0833 9.73957C6.61454 10.3646 2.44788 14.6354 2.44788 19.6875C2.44788 25.2083 7.39579 29.7396 13.4895 29.7396C17.0312 29.7396 20.2604 28.2292 22.3437 25.625L22.7083 25.2083L23.2291 25.2604C23.5416 25.2604 23.9062 25.3125 24.3229 25.3125C25.8854 25.3125 27.4479 25.0521 28.9062 24.5312L29.6354 24.2708L30.1041 24.8958C31.875 27.3437 34.8437 28.8021 38.0729 28.8021C43.3333 28.8021 47.6041 24.8958 47.6041 20.1562C47.6041 15.4167 43.2812 11.4583 38.0208 11.4583C37.8645 11.4583 37.7083 11.4583 37.552 11.4583L36.6145 11.5104L36.3541 10.7292C34.8437 5.88541 29.8958 2.44791 24.3229 2.44791Z" fill="#3D4152"/>
                                                                <path d="M37.8125 49.5833H12.1875L7.13538 28.0729L8.95829 28.8542C10.4166 29.4271 11.927 29.7396 13.4895 29.7396C17.0312 29.7396 20.2604 28.2292 22.3437 25.625L22.7083 25.2083L23.2291 25.2604C23.5416 25.2604 23.9062 25.3125 24.3229 25.3125C25.8854 25.3125 27.4479 25.0521 28.9062 24.5313L29.6354 24.2708L30.1041 24.8958C31.875 27.3438 34.8437 28.8021 38.0729 28.8021C39.1666 28.8021 40.2604 28.6458 41.302 28.2813L43.0208 27.7083L37.8125 49.5833ZM13.802 47.5521H36.25L40.2604 30.625C39.5312 30.7292 38.802 30.8333 38.0729 30.8333C34.4791 30.8333 31.0937 29.2708 28.9062 26.6667C27.3958 27.1354 25.8854 27.3438 24.3229 27.3438C24.0625 27.3438 23.802 27.3438 23.5937 27.3438C21.0937 30.1563 17.4479 31.7708 13.4895 31.7708C12.2916 31.7708 11.0937 31.6146 9.99996 31.3542L13.802 47.5521Z" fill="#3D4152"/>
                                                                <path d="M21.0416 35.2083H19.0104V42.0312H21.0416V35.2083Z" fill="#3D4152"/>
                                                                <path d="M26.0937 35.2083H24.0625V42.0312H26.0937V35.2083Z" fill="#3D4152"/>
                                                                <path d="M31.0938 35.2083H29.0625V42.0312H31.0938V35.2083Z" fill="#3D4152"/>
                                                                <path d="M12.1088 24.8571L10.4757 23.3246L9.08571 24.8058L10.7188 26.3383L12.1088 24.8571Z" fill="#3D4152"/>
                                                                <path d="M13.7297 15.7257L12.0966 14.1931L10.7066 15.6743L12.3397 17.2069L13.7297 15.7257Z" fill="#3D4152"/>
                                                                <path d="M39.8665 16.5007L38.2336 14.9679L36.8434 16.4489L38.4763 17.9817L39.8665 16.5007Z" fill="#3D4152"/>
                                                                <path d="M31.5916 18.5252L29.9585 16.9926L28.5685 18.4738L30.2016 20.0064L31.5916 18.5252Z" fill="#3D4152"/>
                                                                <path d="M42.2828 24.0549L40.6497 22.5223L39.2597 24.0035L40.8928 25.5361L42.2828 24.0549Z" fill="#3D4152"/>
                                                                <path d="M21.5555 20.0502L19.9224 18.5176L18.5324 19.9988L20.1655 21.5313L21.5555 20.0502Z" fill="#3D4152"/>
                                                                <path d="M23.0601 11.1296L21.427 9.59708L20.037 11.0783L21.6701 12.6108L23.0601 11.1296Z" fill="#3D4152"/>
                                                                <path d="M30.8003 8.65548L29.1672 7.12292L27.7772 8.6041L29.4103 10.1367L30.8003 8.65548Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javascript:void(0);"><h6 className="mb-0 font-w500">Bakery</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M49.7396 22.2396H0.260376V21.1979C0.260376 11.8229 10.8333 1.30209 25 1.30209C39.1666 1.30209 49.7396 11.8229 49.7396 21.1979V22.2396ZM2.39579 20.1563H47.6562C46.875 12.0313 37.4479 3.33334 25 3.33334C12.552 3.33334 3.12496 12.0313 2.39579 20.1563Z" fill="#3D4152"/>
                                                                <path d="M8.12504 16.0417C11.0417 11.4583 17.5 7.5 25 7.5C32.5 7.5 38.9063 11.4583 41.875 16.0417H8.12504ZM46.7188 47.6563H3.28129C2.18754 47.6563 1.30212 46.7708 1.30212 45.6771V39.0104H48.698V45.6771C48.698 46.7708 47.8125 47.6563 46.7188 47.6563Z" fill="#A6C44A"/>
                                                                <path d="M46.7187 48.6979H3.28121C1.61454 48.6979 0.260376 47.3437 0.260376 45.6771V38.0208H49.7396V45.7291C49.7396 47.3437 48.3854 48.6979 46.7187 48.6979ZM2.34371 40.0521V45.6771C2.34371 46.1979 2.76038 46.6146 3.28121 46.6146H46.7708C47.2916 46.6146 47.7083 46.1979 47.7083 45.6771V40.0521H2.34371Z" fill="#3D4152"/>
                                                                <path d="M44.2188 34.5312H5.78129C3.28129 34.5312 1.30212 32.5 1.30212 30.0521C1.30212 27.5521 3.33337 25.5729 5.78129 25.5729H44.2188C46.7188 25.5729 48.698 27.6042 48.698 30.0521C48.698 32.5521 46.7188 34.5312 44.2188 34.5312Z" fill="#FC8019"/>
                                                                <path d="M44.2187 35.5729H5.78121C2.70829 35.5729 0.260376 33.0729 0.260376 30.0521C0.260376 27.0313 2.76038 24.5312 5.78121 24.5312H44.2187C47.2916 24.5312 49.7396 27.0313 49.7396 30.0521C49.7396 33.0729 47.2396 35.5729 44.2187 35.5729ZM5.78121 26.5625C3.85413 26.5625 2.29163 28.125 2.29163 30.0521C2.29163 31.9792 3.85413 33.5417 5.78121 33.5417H44.2187C46.1458 33.5417 47.7083 31.9792 47.7083 30.0521C47.7083 28.125 46.1458 26.5625 44.2187 26.5625H5.78121Z" fill="#FC8019"/>
                                                                <path d="M27.5 31.9792C26.5104 31.9792 25.625 31.6146 24.7917 31.3021C24.1146 31.0417 23.4896 30.7813 22.9167 30.7813C22.2396 30.7292 21.4583 30.9896 20.6771 31.1979C19.4792 31.5625 18.125 31.9792 16.7708 31.5104C16.3542 31.3542 15.9896 31.1458 15.6771 30.9896C15.4687 30.8854 15.2604 30.7292 15.0521 30.6771C14.0625 30.2604 12.8646 30.5208 11.5625 30.8333L11.1979 30.9375C9.6875 31.25 7.5 31.5625 5.9375 30.2083L7.29167 28.6458C7.96875 29.2188 9.0625 29.3229 10.7812 28.9583L11.1458 28.8542C12.6042 28.5417 14.2708 28.1771 15.8854 28.8021C16.1979 28.9583 16.4583 29.1146 16.7708 29.2188C17.0312 29.375 17.2917 29.5313 17.5 29.5833C18.2292 29.8438 19.1146 29.5833 20.1562 29.2708C21.0937 29.0104 22.0312 28.6979 23.125 28.75C24.0625 28.8021 24.8437 29.1146 25.625 29.4271C26.4583 29.7396 27.2396 30.0521 27.9167 29.9479C28.1771 29.8958 28.4896 29.7917 28.8542 29.6354C29.0104 29.5833 29.1146 29.5313 29.2708 29.4792C30.8333 28.8542 32.6562 28.6979 34.3229 29.0625C34.5833 29.1146 34.8958 29.1667 35.1562 29.2708C35.6771 29.4271 36.1979 29.5313 36.6667 29.5313C37.3437 29.5313 38.0729 29.2188 38.8021 28.9583C39.1146 28.8542 39.4271 28.6979 39.7396 28.5938C41.5104 27.9688 43.0729 28.125 44.1146 29.0104L42.7604 30.5729C42.0833 30 40.8854 30.3646 40.3646 30.5208C40.1042 30.625 39.7917 30.7292 39.5312 30.8333C38.6458 31.1979 37.7083 31.5625 36.6146 31.5625C36.6146 31.5625 36.6146 31.5625 36.5625 31.5625C35.8333 31.5625 35.1562 31.4063 34.5312 31.25C34.2708 31.1979 34.0625 31.1458 33.8021 31.0938C32.5 30.8333 31.1458 30.9375 29.9479 31.4063C29.8437 31.4583 29.6875 31.5104 29.5833 31.5625C29.1667 31.7188 28.75 31.9271 28.2292 31.9792C27.9687 31.9271 27.7604 31.9792 27.5 31.9792Z" fill="#3D4152"/>
                                                                <path d="M8.14084 16.5725L6.9325 14.8754L5.36267 15.9931L6.57102 17.6903L8.14084 16.5725Z" fill="#3D4152"/>
                                                                <path d="M35.7987 10.161L34.5901 8.46405L33.0204 9.58199L34.229 11.2789L35.7987 10.161Z" fill="#3D4152"/>
                                                                <path d="M30.8066 8.06964L29.5983 6.37253L28.0284 7.49025L29.2368 9.18736L30.8066 8.06964Z" fill="#3D4152"/>
                                                                <path d="M12.0382 12.6452L10.6487 11.0929L9.71733 11.9266L11.1069 13.4789L12.0382 12.6452Z" fill="#3D4152"/>
                                                                <path d="M18.7691 9.29224L17.9674 7.36932L16.4771 7.99061L17.2788 9.91353L18.7691 9.29224Z" fill="#3D4152"/>
                                                                <path d="M13.8011 17.4814L12.9171 15.5949L11.8324 16.1032L12.7163 17.9897L13.8011 17.4814Z" fill="#3D4152"/>
                                                                <path d="M23.8021 8.22916L22.5 6.61457C23.125 6.09374 23.9063 5.72916 24.6875 5.57291L25.1563 7.55207C24.6355 7.70832 24.1667 7.91666 23.8021 8.22916ZM15.8855 14.3229L15.3646 12.3437C15.8334 12.2396 16.3021 12.0312 16.7188 11.8229L17.6563 13.6458C17.0834 13.9062 16.5105 14.1146 15.8855 14.3229Z" fill="#3D4152"/>
                                                                <path d="M27.5591 17.1271L26.897 15.1518L25.1686 15.7312L25.8307 17.7065L27.5591 17.1271Z" fill="#3D4152"/>
                                                                <path d="M38.0465 17.7757L37.3844 15.8004L35.656 16.3797L36.3181 18.3551L38.0465 17.7757Z" fill="#3D4152"/>
                                                                <path d="M31.823 18.1771L30.9896 16.3021C31.5105 16.0938 32.0313 15.8854 32.5521 15.7813L32.9688 17.8125C32.5521 17.9167 32.1355 18.0208 31.823 18.1771ZM29.1667 14.1667L28.3334 12.2917C28.8542 12.0833 29.375 11.9271 29.8959 11.7708L30.3125 13.8021C29.8959 13.8542 29.5313 14.0104 29.1667 14.1667Z" fill="#3D4152"/>
                                                                <path d="M24.0456 12.8497L23.3812 10.8752L22.1965 11.2738L22.8608 13.2484L24.0456 12.8497Z" fill="#3D4152"/>
                                                                <path d="M14.3077 10.3037L13.6425 8.32947L12.4579 8.72862L13.1232 10.7029L14.3077 10.3037Z" fill="#3D4152"/>
                                                                <path d="M21.4415 17.8644L20.7762 15.8901L19.5917 16.2893L20.2569 18.2635L21.4415 17.8644Z" fill="#3D4152"/>
                                                                <path d="M42.9686 16.3L42.3042 14.3254L41.1195 14.7241L41.7838 16.6986L42.9686 16.3Z" fill="#3D4152"/>
                                                                <path d="M39.2227 14.0316L38.5583 12.057L37.3736 12.4557L38.038 14.4302L39.2227 14.0316Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javascript:void(0);"><h6 className="mb-0 font-w500">Burger</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.2605 44.1667C9.73963 43.6979 9.21879 43.125 8.75004 42.6042L10.3125 41.25C10.7292 41.7188 11.198 42.2396 11.6667 42.6563L10.2605 44.1667ZM6.82296 40C6.45837 39.375 6.09379 38.75 5.72921 38.125L7.55212 37.1875C7.86462 37.7604 8.17712 38.3333 8.54171 38.9063L6.82296 40ZM4.53129 35.1042C4.32296 34.4271 4.11462 33.6979 3.95837 33.0208L5.98962 32.6042C6.14587 33.2292 6.30212 33.8542 6.51046 34.4792L4.53129 35.1042ZM3.54171 29.7917C3.48962 29.3229 3.48962 28.9063 3.48962 28.4375C3.48962 28.1771 3.48962 27.9167 3.48962 27.6042L5.57296 27.7083C5.57296 27.9688 5.57296 28.1771 5.57296 28.4375C5.57296 28.8542 5.57296 29.2708 5.62504 29.6354L3.54171 29.7917ZM5.88546 24.7917L3.85421 24.4271C4.01046 23.6979 4.16671 23.0208 4.37504 22.3438L6.35421 22.9167C6.14587 23.5417 5.98962 24.1667 5.88546 24.7917ZM7.39587 20.1563L5.52087 19.2708C5.83337 18.6458 6.14587 17.9688 6.56254 17.3438L8.33338 18.3854C7.96879 19.0104 7.65629 19.5833 7.39587 20.1563ZM40.5209 43.3854L39.0625 41.9271C39.5313 41.4583 39.948 40.9375 40.3646 40.4688L41.9792 41.7188C41.5105 42.2917 41.0417 42.8646 40.5209 43.3854ZM43.75 39.0104L41.9792 38.0208C42.2917 37.4479 42.6042 36.875 42.8646 36.25L44.7396 37.0833C44.4271 37.7604 44.1146 38.3854 43.75 39.0104ZM45.7813 34.0625L43.8021 33.5417C43.9584 32.9167 44.1146 32.2917 44.2188 31.6146L46.2501 31.9271C46.1459 32.6042 45.9896 33.3333 45.7813 34.0625ZM46.5105 28.6979H44.4271V28.4896C44.4271 27.9167 44.375 27.2917 44.323 26.7188L46.3542 26.5104C46.4063 27.1354 46.4584 27.8125 46.4584 28.4375L46.5105 28.6979ZM43.9063 23.8021C43.7501 23.1771 43.5417 22.5521 43.3334 21.9271L45.2605 21.25C45.5209 21.9271 45.7292 22.6042 45.8855 23.3333L43.9063 23.8021ZM42.1355 19.2708C41.823 18.6979 41.5105 18.125 41.1459 17.6042L42.8646 16.4583C43.2813 17.0313 43.6459 17.6563 44.0105 18.3333L42.1355 19.2708Z" fill="#3D4152"/>
                                                                <path d="M11.5105 1.30209H38.4896L41.9792 8.22918H8.02087L11.5105 1.30209Z" fill="#A6C44A"/>
                                                                <path d="M43.6979 9.27082H6.35413L10.8854 0.260406H39.1666L43.6979 9.27082ZM9.68746 7.18749H40.3645L37.9166 2.29166H12.1875L9.68746 7.18749Z" fill="#3D4152"/>
                                                                <path d="M15 48.6979H35L36.25 38.8542H13.75L15 48.6979Z" fill="white"/>
                                                                <path d="M35.9375 49.7396H14.0625L12.6041 37.8125H37.4479L35.9375 49.7396ZM15.8854 47.6563H34.1145L35.1041 39.8438H14.8958L15.8854 47.6563Z" fill="#3D4152"/>
                                                                <path d="M40.052 8.22919H9.94788L11.1458 18.0729H38.8541L40.052 8.22919Z" fill="white"/>
                                                                <path d="M39.7396 19.1146H10.2605L8.80212 7.1875H41.25L39.7396 19.1146ZM12.0834 17.0313H37.9167L38.9063 9.21875H11.0938L12.0834 17.0313Z" fill="#3D4152"/>
                                                                <path d="M11.1459 18.0729L13.75 38.8542H36.25L38.8542 18.0729H11.1459Z" fill="#FC8019"/>
                                                                <path d="M37.1354 39.8958H12.8646L10 17.0833H40L37.1354 39.8958ZM14.6354 37.8125H35.3125L37.6563 19.1146H12.3437L14.6354 37.8125Z" fill="#FC8019"/>
                                                                <path d="M25 35.5729C28.1353 35.5729 30.677 32.4016 30.677 28.4896C30.677 24.5776 28.1353 21.4062 25 21.4062C21.8646 21.4062 19.3229 24.5776 19.3229 28.4896C19.3229 32.4016 21.8646 35.5729 25 35.5729Z" fill="white"/>
                                                                <path d="M25 36.5625C21.3021 36.5625 18.2812 32.9167 18.2812 28.4375C18.2812 23.9583 21.3021 20.3646 25 20.3646C28.6979 20.3646 31.7188 24.0104 31.7188 28.4896C31.7188 32.9688 28.6979 36.5625 25 36.5625ZM25 22.3958C22.4479 22.3958 20.3646 25.1042 20.3646 28.4375C20.3646 31.7708 22.4479 34.4792 25 34.4792C27.5521 34.4792 29.6354 31.7708 29.6354 28.4375C29.6354 25.1042 27.5521 22.3958 25 22.3958Z" fill="#3D4152"/>
                                                                <path d="M24.5313 35.7812C23.9584 34.3229 23.9063 32.7604 24.3229 31.25C24.4271 30.8854 24.5834 30.5208 24.6875 30.2083C24.8438 29.7396 25 29.3229 25.1042 28.9583C25.2084 28.2812 25.1042 27.5 24.7917 26.7187C24.4792 25.9375 23.9584 25.1562 23.4375 24.4271C23.125 24.0104 22.8646 23.5417 22.6563 23.0208C22.3959 22.2917 22.3438 21.5625 22.6042 20.9375L24.5313 21.7187C24.4792 21.875 24.4792 22.0833 24.5834 22.2917C24.6875 22.6042 24.8959 22.9167 25.1563 23.2292C25.7292 24.0625 26.3021 24.9479 26.7188 25.9375C27.1875 27.0833 27.3438 28.2812 27.1875 29.3229C27.0834 29.9479 26.875 30.4687 26.6667 30.9896C26.5625 31.3021 26.4584 31.5625 26.3542 31.875C26.0417 32.9167 26.0938 34.0625 26.5104 35.0521L24.5313 35.7812Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javscript:void(0);"><h6 className="mb-0 font-w500">Beverage</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.8646 49.2187C8.90625 49.2187 4.94791 47.8125 2.5 44.6354C0.364579 41.875 -0.260421 38.1771 0.624996 34.1667C1.45833 30.5208 3.54166 27.0833 6.25 25.0521C10.6771 21.6667 31.3021 11.3542 36.7708 18.4896C39.1146 21.6146 37.9687 26.875 33.4375 33.6979C29.8958 39.0104 25.1042 44.1146 22.3958 46.1458C19.8437 48.125 16.3542 49.2187 12.8646 49.2187ZM30.3646 18.0208C23.2812 18.0208 11.5104 23.6458 7.5 26.6667C5.20833 28.4375 3.38541 31.4062 2.65625 34.5833C1.875 37.9687 2.44791 41.0937 4.16666 43.3854C7.96875 48.3333 16.5104 48.0729 21.1458 44.5833C23.75 42.6042 28.4375 37.5521 31.7187 32.6042C35.6771 26.6146 36.875 22.0833 35.1042 19.7396C34.1667 18.5417 32.4479 18.0208 30.3646 18.0208Z" fill="#3D4152"/>
                                                                <path d="M12.9166 44.0625C10.1562 44.0625 7.86451 43.125 6.61451 41.5104C5.46868 40 5.1041 37.7083 5.67701 35.3125C6.19785 32.8125 7.6041 30.4688 9.37493 29.1667C13.0728 26.3542 24.1666 21.1458 30.3645 21.1458C31.9791 21.1458 32.6041 21.5104 32.7083 21.6146C33.0208 21.9792 33.2812 24.6875 29.1666 30.8854C25.7291 35.9896 21.1978 40.625 19.2187 42.1354C17.6562 43.3333 15.2603 44.0625 12.9166 44.0625Z" fill="#FC8019"/>
                                                                <path d="M47.9688 14.5833C47.5521 14.0104 47.0313 13.5938 46.4584 13.2813C45.3646 12.7083 44.5313 11.6667 44.323 10.4688C44.1667 9.84375 43.9063 9.21875 43.4896 8.69792C42.1875 7.08334 39.5313 6.71875 37.8125 7.91667C35.8855 9.27084 35.4688 11.9792 36.875 13.8542C37.2396 14.3229 37.1875 15 36.7188 15.3125L33.8021 17.5521C34.6355 17.9167 35.3646 18.3854 35.8855 19.1146C36.4063 19.7917 36.7188 20.625 36.823 21.5104L39.7396 19.2708C40.2084 18.9063 40.8334 19.0104 41.198 19.4792C42.6563 21.3542 45.3646 21.6667 47.1875 20.1563C48.8542 18.9063 49.1667 16.25 47.9688 14.5833Z" fill="#A6C44A"/>
                                                                <path d="M36.0417 23.4375L35.8334 21.6667C35.7292 20.8854 35.5209 20.2604 35.1042 19.7396C34.6875 19.2188 34.1667 18.8021 33.4375 18.5417L31.7709 17.8646L36.1459 14.5313L36.0938 14.4792C35.2084 13.3333 34.8438 11.9271 35.1042 10.5208C35.3125 9.11459 36.0938 7.86459 37.2396 7.03126C39.375 5.52084 42.6042 5.93751 44.2709 8.02084C44.7917 8.69792 45.1563 9.42709 45.3125 10.2083C45.5209 11.1458 46.0938 11.9271 46.9271 12.3438C47.6563 12.7083 48.2813 13.2813 48.8021 13.9583C50.3646 16.0938 49.8959 19.3229 47.8646 20.9896C46.7709 21.9271 45.3646 22.2917 43.9584 22.1354C42.5521 21.9792 41.3021 21.25 40.4167 20.1042L40.3646 20.0521L36.0417 23.4375ZM40.3646 18.0729C40.4688 18.0729 40.573 18.0729 40.625 18.0729C41.198 18.125 41.6667 18.4375 42.0313 18.9063C42.5521 19.5833 43.3334 20.0521 44.1667 20.1563C45.0521 20.2604 45.8855 20 46.5625 19.4271C47.7605 18.4375 48.0209 16.4063 47.1355 15.1563C46.823 14.7396 46.4584 14.4271 46.0417 14.1667C44.6355 13.4375 43.6459 12.1875 43.3334 10.625C43.2292 10.1563 43.0209 9.68751 42.7084 9.27084C41.7188 8.07292 39.6875 7.81251 38.4375 8.69792C37.7084 9.21876 37.2396 9.94792 37.1355 10.7813C36.9792 11.6146 37.2396 12.5 37.7605 13.1771C38.125 13.6458 38.2813 14.1667 38.1771 14.7396C38.125 15.2604 37.8125 15.7813 37.3959 16.0938L35.7292 17.3958C36.1459 17.7083 36.4584 18.0208 36.7709 18.4375C37.0834 18.8542 37.2917 19.2708 37.5 19.7396L39.1667 18.4375C39.5313 18.2292 39.948 18.0729 40.3646 18.0729Z" fill="#3D4152"/>
                                                                <path d="M7.05716 32.7157L5.56018 32.5147L5.28284 34.5795L6.77982 34.7805L7.05716 32.7157Z" fill="#3D4152"/>
                                                                <path d="M18.2008 33.0269L16.7039 32.8258L16.4265 34.8906L17.9235 35.0917L18.2008 33.0269Z" fill="#3D4152"/>
                                                                <path d="M28.3617 30.6803L26.8647 30.4792L26.5874 32.544L28.0844 32.745L28.3617 30.6803Z" fill="#3D4152"/>
                                                                <path d="M13.3053 42.451L11.8083 42.2499L11.531 44.3147L13.028 44.5158L13.3053 42.451Z" fill="#3D4152"/>
                                                                <path d="M16.898 27.0875L15.401 26.8865L15.1237 28.9513L16.6206 29.1523L16.898 27.0875Z" fill="#3D4152"/>
                                                                <path d="M27.4235 22.1383L25.9265 21.9373L25.6492 24.002L27.1462 24.2031L27.4235 22.1383Z" fill="#3D4152"/>
                                                                <path d="M13.9583 0.78125H11.875V7.23958H13.9583V0.78125Z" fill="#3D4152"/>
                                                                <path d="M7.81246 9.79166H5.72913V16.25H7.81246V9.79166Z" fill="#3D4152"/>
                                                                <path d="M20.1563 7.76041H18.073V14.2187H20.1563V7.76041Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javascript:void(0);"><h6 className="mb-0 font-w500">Chicken</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M28.3333 43.5937C20 47.2396 10.2604 43.4375 6.61457 35.1042C2.96874 26.7708 6.77082 17.0312 15.1042 13.3854C19.2708 11.5625 23.8021 11.6146 27.7083 13.125L29.4271 8.69791C24.375 6.71875 18.5417 6.66666 13.1771 9.01041C2.4479 13.6979 -2.44793 26.25 2.23957 36.9792C6.92707 47.7083 19.4792 52.6042 30.2083 47.9167C40.9375 43.2292 45.8333 30.6771 41.1458 19.9479L36.8229 21.875C40.4687 30.2083 36.6667 39.9479 28.3333 43.5937Z" fill="#FC8019"/>
                                                                <path d="M34.6875 6.04168C38.6458 7.55209 41.9792 10.625 43.8021 14.7917L48.125 12.8646C45.7813 7.50001 41.5104 3.59376 36.4063 1.61459L34.6875 6.04168Z" fill="#A6C44A"/>
                                                                <path d="M43.2812 16.1458L42.8646 15.2083C41.1979 11.4062 38.1771 8.54165 34.3229 7.03124L33.3333 6.61457L35.8333 0.260406L36.8229 0.62499C42.3437 2.81249 46.7187 6.97915 49.1146 12.4479L49.5312 13.3854L43.2812 16.1458ZM36.0416 5.46874C39.6354 7.1354 42.5 9.89582 44.3229 13.4375L46.7708 12.3958C44.6875 8.22915 41.3021 4.94791 37.0312 3.02082L36.0416 5.46874Z" fill="#3D4152"/>
                                                                <path d="M43.8021 14.7917C41.9792 10.625 38.6459 7.60416 34.6875 6.04166L28.6979 21.4062L43.8021 14.7917Z" fill="#FC8019"/>
                                                                <path d="M26.8229 23.3854L34.1146 4.6875L35.1042 5.05208C39.4792 6.77083 42.9167 10.0521 44.7917 14.375L45.2084 15.3125L26.8229 23.3854ZM35.2604 7.39583L30.5729 19.4271L42.3959 14.2708C40.8334 11.25 38.3334 8.85417 35.2604 7.39583Z" fill="#3D4152"/>
                                                                <path d="M21.7188 46.0417C14.9479 46.0417 8.4896 42.1354 5.62501 35.5208C1.71876 26.6666 5.78126 16.3021 14.6354 12.3958C18.9063 10.5208 23.6979 10.4167 28.0729 12.1354L29.0625 12.5L23.5938 26.5104L37.3438 20.4687L37.7604 21.4062C39.6354 25.6771 39.7396 30.4687 38.0209 34.8437C36.3021 39.2187 33.0209 42.6562 28.6979 44.5312C26.4583 45.5729 24.1146 46.0417 21.7188 46.0417ZM7.5521 34.6875C10.9896 42.5 20.1042 46.0416 27.9167 42.6562C31.7188 40.9896 34.5834 37.9687 36.0938 34.1146C37.4479 30.5729 37.5 26.7708 36.25 23.2812L19.8438 30.4687L26.3542 13.75C22.8125 12.6042 18.9583 12.8125 15.5208 14.3229C7.70835 17.7604 4.16668 26.875 7.5521 34.6875Z" fill="#3D4152"/>
                                                                <path d="M15.9896 39.7396C17.4278 39.7396 18.5938 38.5737 18.5938 37.1354C18.5938 35.6972 17.4278 34.5312 15.9896 34.5312C14.5514 34.5312 13.3854 35.6972 13.3854 37.1354C13.3854 38.5737 14.5514 39.7396 15.9896 39.7396Z" fill="#A6C44A"/>
                                                                <path d="M15.9895 40.7813C14.5833 40.7813 13.2291 39.9479 12.6041 38.5937C12.1875 37.7083 12.1875 36.7187 12.552 35.7812C12.9166 34.8437 13.5937 34.1667 14.4791 33.75C15.3645 33.3333 16.3541 33.3333 17.2916 33.6979C18.2291 34.0625 18.9062 34.7396 19.3229 35.625C19.7395 36.5104 19.7395 37.5 19.375 38.4375C19.0104 39.375 18.3333 40.0521 17.4479 40.4687C16.9791 40.6771 16.4583 40.7813 15.9895 40.7813ZM15.9895 35.5208C15.7812 35.5208 15.5729 35.5729 15.3645 35.6771C15 35.8333 14.6875 36.1458 14.5312 36.5625C14.375 36.9792 14.375 37.3958 14.5312 37.7604C14.8958 38.5417 15.8333 38.9062 16.6145 38.5937C16.9791 38.4375 17.2916 38.125 17.4479 37.7083C17.6041 37.2917 17.6041 36.875 17.4479 36.5104C17.2916 36.1458 16.9791 35.8333 16.5625 35.6771C16.3541 35.5729 16.1458 35.5208 15.9895 35.5208Z" fill="#A6C44A"/>
                                                                <path d="M14.2709 23.3333C15.5365 23.3333 16.5625 22.3073 16.5625 21.0417C16.5625 19.776 15.5365 18.75 14.2709 18.75C13.0052 18.75 11.9792 19.776 11.9792 21.0417C11.9792 22.3073 13.0052 23.3333 14.2709 23.3333Z" fill="#A6C44A"/>
                                                                <path d="M14.2708 24.375C13.8542 24.375 13.4375 24.3229 13.0729 24.1667C12.2396 23.8542 11.6146 23.2292 11.25 22.3958C10.8854 21.5625 10.8854 20.6771 11.1979 19.8438C11.5104 19.0104 12.1354 18.3854 12.9687 18.0208C14.6354 17.2917 16.6146 18.0729 17.3437 19.7396C18.0729 21.4063 17.2917 23.3854 15.625 24.1146C15.2083 24.2708 14.7396 24.375 14.2708 24.375ZM14.2708 19.8438C14.1146 19.8438 13.9583 19.8958 13.8021 19.9479C13.4896 20.1042 13.2812 20.3125 13.125 20.625C13.0208 20.9375 13.0208 21.25 13.125 21.5625C13.2292 21.875 13.4896 22.0833 13.8021 22.2396C14.1146 22.3438 14.4271 22.3438 14.7396 22.2396C15.3646 21.9792 15.625 21.25 15.3646 20.625C15.2083 20.1042 14.7396 19.8438 14.2708 19.8438Z" fill="#A6C44A"/>
                                                                <path d="M29.4271 39.1667C29.0104 39.1667 28.6458 39.1146 28.2292 38.9583C27.3958 38.6458 26.7708 38.0208 26.4062 37.2396L28.3333 36.4063C28.4375 36.7188 28.6979 36.9271 28.9583 37.0313C29.2708 37.1354 29.5833 37.1354 29.8438 37.0313C30.4167 36.7708 30.7292 36.0938 30.4688 35.4688L32.3958 34.6354C33.125 36.3021 32.3438 38.2292 30.7292 38.9583C30.3125 39.1146 29.8958 39.1667 29.4271 39.1667ZM36.1979 15.7292C34.9479 15.7292 33.75 15 33.1771 13.75L35.1042 12.9167C35.3646 13.4896 36.0417 13.8021 36.6667 13.5417C37.2396 13.2813 37.5521 12.6042 37.2917 11.9792L39.2188 11.1458C39.9479 12.8125 39.1667 14.7396 37.5521 15.4688C37.0833 15.6771 36.6667 15.7292 36.1979 15.7292Z" fill="#3D4152"/>
                                                                <path d="M9.70388 29.8397L7.63013 29.6406L7.48081 31.1959L9.55456 31.395L9.70388 29.8397Z" fill="#3D4152"/>
                                                                <path d="M12.0833 34.1146L10.0521 33.6979C10.1562 33.125 10.4166 32.5521 10.7812 32.0833L12.4479 33.3333C12.2396 33.5937 12.1354 33.8542 12.0833 34.1146ZM14.6875 29.5312L12.9687 28.3333C13.2291 27.9167 13.5937 27.6042 14.0104 27.2917L15.2083 29.0104C15 29.1146 14.8437 29.3229 14.6875 29.5312Z" fill="#3D4152"/>
                                                                <path d="M20.6437 23.9917L18.7612 23.0992L18.2926 24.0875L20.1751 24.98L20.6437 23.9917Z" fill="#3D4152"/>
                                                                <path d="M37.5399 9.7654L35.6562 8.87543L35.189 9.86436L37.0726 10.7543L37.5399 9.7654Z" fill="#3D4152"/>
                                                                <path d="M23.2292 18.5417L21.1458 18.1771C21.25 17.6562 21.4583 17.1354 21.7708 16.7187L23.4896 17.9167C23.3333 18.0729 23.2812 18.3333 23.2292 18.5417ZM19.4271 17.1354L17.3958 16.5625C17.5521 16.0417 17.8125 15.5208 18.2292 15.1042L19.7396 16.5625C19.6354 16.7187 19.4792 16.9271 19.4271 17.1354ZM8.43749 24.8437C8.22916 24.2708 8.22916 23.6458 8.54166 23.0729L10.4167 24.0625L8.43749 24.8437Z" fill="#3D4152"/>
                                                                <path d="M21.0815 33.8223L20.2463 31.9137L19.4351 32.2687L20.2703 34.1772L21.0815 33.8223Z" fill="#3D4152"/>
                                                                <path d="M23.3484 37.8959L22.5113 35.9881L21.7005 36.3439L22.5376 38.2517L23.3484 37.8959Z" fill="#3D4152"/>
                                                                <path d="M22.2532 41.8217L21.8372 39.7803L20.5614 40.0404L20.9774 42.0817L22.2532 41.8217Z" fill="#3D4152"/>
                                                                <path d="M28.0084 41.1457L26.8884 39.3891L25.4392 40.3131L26.5592 42.0697L28.0084 41.1457Z" fill="#3D4152"/>
                                                                <path d="M23.9062 33.8021C23.9062 33.0729 24.2187 32.3959 24.7917 31.9792L26.0937 33.6459C26.0417 33.6459 26.0417 33.6979 26.0417 33.75L23.9062 33.8021Z" fill="#3D4152"/>
                                                                <path d="M29.4826 28.8412L28.3087 27.1201L27.233 27.8538L28.4069 29.5749L29.4826 28.8412Z" fill="#3D4152"/>
                                                                <path d="M30.3646 33.5417L29.7917 31.5104C29.9479 31.4583 30.1563 31.3542 30.2604 31.25L31.6146 32.8646C31.25 33.1771 30.8334 33.3854 30.3646 33.5417Z" fill="#3D4152"/>
                                                                <path d="M35.2013 28.177L33.6899 26.7432L32.507 27.9901L34.0184 29.4239L35.2013 28.177Z" fill="#3D4152"/>
                                                                <path d="M18.4758 29.8661L16.6481 28.8662L16.2981 29.5059L18.1258 30.5058L18.4758 29.8661Z" fill="#3D4152"/>
                                                                <path d="M34.475 16.5408L32.6477 15.5402L32.2975 16.1797L34.1248 17.1804L34.475 16.5408Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javascript:void(0);"><h6 className="mb-0 font-w500">Pizza</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.8646 49.2187C8.90625 49.2187 4.94791 47.8125 2.5 44.6354C0.364579 41.875 -0.260421 38.1771 0.624996 34.1667C1.45833 30.5208 3.54166 27.0833 6.25 25.0521C10.6771 21.6667 31.3021 11.3542 36.7708 18.4896C39.1146 21.6146 37.9687 26.875 33.4375 33.6979C29.8958 39.0104 25.1042 44.1146 22.3958 46.1458C19.8437 48.125 16.3542 49.2187 12.8646 49.2187ZM30.3646 18.0208C23.2812 18.0208 11.5104 23.6458 7.5 26.6667C5.20833 28.4375 3.38541 31.4062 2.65625 34.5833C1.875 37.9687 2.44791 41.0937 4.16666 43.3854C7.96875 48.3333 16.5104 48.0729 21.1458 44.5833C23.75 42.6042 28.4375 37.5521 31.7187 32.6042C35.6771 26.6146 36.875 22.0833 35.1042 19.7396C34.1667 18.5417 32.4479 18.0208 30.3646 18.0208Z" fill="#3D4152"/>
                                                                <path d="M12.9166 44.0625C10.1562 44.0625 7.86451 43.125 6.61451 41.5104C5.46868 40 5.1041 37.7083 5.67701 35.3125C6.19785 32.8125 7.6041 30.4688 9.37493 29.1667C13.0728 26.3542 24.1666 21.1458 30.3645 21.1458C31.9791 21.1458 32.6041 21.5104 32.7083 21.6146C33.0208 21.9792 33.2812 24.6875 29.1666 30.8854C25.7291 35.9896 21.1978 40.625 19.2187 42.1354C17.6562 43.3333 15.2603 44.0625 12.9166 44.0625Z" fill="#FC8019"/>
                                                                <path d="M47.9688 14.5833C47.5521 14.0104 47.0313 13.5938 46.4584 13.2813C45.3646 12.7083 44.5313 11.6667 44.323 10.4688C44.1667 9.84375 43.9063 9.21875 43.4896 8.69792C42.1875 7.08334 39.5313 6.71875 37.8125 7.91667C35.8855 9.27084 35.4688 11.9792 36.875 13.8542C37.2396 14.3229 37.1875 15 36.7188 15.3125L33.8021 17.5521C34.6355 17.9167 35.3646 18.3854 35.8855 19.1146C36.4063 19.7917 36.7188 20.625 36.823 21.5104L39.7396 19.2708C40.2084 18.9063 40.8334 19.0104 41.198 19.4792C42.6563 21.3542 45.3646 21.6667 47.1875 20.1563C48.8542 18.9063 49.1667 16.25 47.9688 14.5833Z" fill="#A6C44A"/>
                                                                <path d="M36.0417 23.4375L35.8334 21.6667C35.7292 20.8854 35.5209 20.2604 35.1042 19.7396C34.6875 19.2188 34.1667 18.8021 33.4375 18.5417L31.7709 17.8646L36.1459 14.5313L36.0938 14.4792C35.2084 13.3333 34.8438 11.9271 35.1042 10.5208C35.3125 9.11459 36.0938 7.86459 37.2396 7.03126C39.375 5.52084 42.6042 5.93751 44.2709 8.02084C44.7917 8.69792 45.1563 9.42709 45.3125 10.2083C45.5209 11.1458 46.0938 11.9271 46.9271 12.3438C47.6563 12.7083 48.2813 13.2813 48.8021 13.9583C50.3646 16.0938 49.8959 19.3229 47.8646 20.9896C46.7709 21.9271 45.3646 22.2917 43.9584 22.1354C42.5521 21.9792 41.3021 21.25 40.4167 20.1042L40.3646 20.0521L36.0417 23.4375ZM40.3646 18.0729C40.4688 18.0729 40.573 18.0729 40.625 18.0729C41.198 18.125 41.6667 18.4375 42.0313 18.9063C42.5521 19.5833 43.3334 20.0521 44.1667 20.1563C45.0521 20.2604 45.8855 20 46.5625 19.4271C47.7605 18.4375 48.0209 16.4063 47.1355 15.1563C46.823 14.7396 46.4584 14.4271 46.0417 14.1667C44.6355 13.4375 43.6459 12.1875 43.3334 10.625C43.2292 10.1563 43.0209 9.68751 42.7084 9.27084C41.7188 8.07292 39.6875 7.81251 38.4375 8.69792C37.7084 9.21876 37.2396 9.94792 37.1355 10.7813C36.9792 11.6146 37.2396 12.5 37.7605 13.1771C38.125 13.6458 38.2813 14.1667 38.1771 14.7396C38.125 15.2604 37.8125 15.7813 37.3959 16.0938L35.7292 17.3958C36.1459 17.7083 36.4584 18.0208 36.7709 18.4375C37.0834 18.8542 37.2917 19.2708 37.5 19.7396L39.1667 18.4375C39.5313 18.2292 39.948 18.0729 40.3646 18.0729Z" fill="#3D4152"/>
                                                                <path d="M7.05716 32.7157L5.56018 32.5147L5.28284 34.5795L6.77982 34.7805L7.05716 32.7157Z" fill="#3D4152"/>
                                                                <path d="M18.2008 33.0269L16.7039 32.8258L16.4265 34.8906L17.9235 35.0917L18.2008 33.0269Z" fill="#3D4152"/>
                                                                <path d="M28.3617 30.6803L26.8647 30.4792L26.5874 32.544L28.0844 32.745L28.3617 30.6803Z" fill="#3D4152"/>
                                                                <path d="M13.3053 42.451L11.8083 42.2499L11.531 44.3147L13.028 44.5158L13.3053 42.451Z" fill="#3D4152"/>
                                                                <path d="M16.898 27.0875L15.401 26.8865L15.1237 28.9513L16.6206 29.1523L16.898 27.0875Z" fill="#3D4152"/>
                                                                <path d="M27.4235 22.1383L25.9265 21.9373L25.6492 24.002L27.1462 24.2031L27.4235 22.1383Z" fill="#3D4152"/>
                                                                <path d="M13.9583 0.78125H11.875V7.23958H13.9583V0.78125Z" fill="#3D4152"/>
                                                                <path d="M7.81246 9.79166H5.72913V16.25H7.81246V9.79166Z" fill="#3D4152"/>
                                                                <path d="M20.1563 7.76041H18.073V14.2187H20.1563V7.76041Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javascript:void(0);"><h6 className="mb-0 font-w500">Chicken</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cate-bx text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M49.7396 22.2396H0.260376V21.1979C0.260376 11.8229 10.8333 1.30209 25 1.30209C39.1666 1.30209 49.7396 11.8229 49.7396 21.1979V22.2396ZM2.39579 20.1563H47.6562C46.875 12.0313 37.4479 3.33334 25 3.33334C12.552 3.33334 3.12496 12.0313 2.39579 20.1563Z" fill="#3D4152"/>
                                                                <path d="M8.12504 16.0417C11.0417 11.4583 17.5 7.5 25 7.5C32.5 7.5 38.9063 11.4583 41.875 16.0417H8.12504ZM46.7188 47.6563H3.28129C2.18754 47.6563 1.30212 46.7708 1.30212 45.6771V39.0104H48.698V45.6771C48.698 46.7708 47.8125 47.6563 46.7188 47.6563Z" fill="#A6C44A"/>
                                                                <path d="M46.7187 48.6979H3.28121C1.61454 48.6979 0.260376 47.3437 0.260376 45.6771V38.0208H49.7396V45.7291C49.7396 47.3437 48.3854 48.6979 46.7187 48.6979ZM2.34371 40.0521V45.6771C2.34371 46.1979 2.76038 46.6146 3.28121 46.6146H46.7708C47.2916 46.6146 47.7083 46.1979 47.7083 45.6771V40.0521H2.34371Z" fill="#3D4152"/>
                                                                <path d="M44.2188 34.5312H5.78129C3.28129 34.5312 1.30212 32.5 1.30212 30.0521C1.30212 27.5521 3.33337 25.5729 5.78129 25.5729H44.2188C46.7188 25.5729 48.698 27.6042 48.698 30.0521C48.698 32.5521 46.7188 34.5312 44.2188 34.5312Z" fill="#FC8019"/>
                                                                <path d="M44.2187 35.5729H5.78121C2.70829 35.5729 0.260376 33.0729 0.260376 30.0521C0.260376 27.0313 2.76038 24.5312 5.78121 24.5312H44.2187C47.2916 24.5312 49.7396 27.0313 49.7396 30.0521C49.7396 33.0729 47.2396 35.5729 44.2187 35.5729ZM5.78121 26.5625C3.85413 26.5625 2.29163 28.125 2.29163 30.0521C2.29163 31.9792 3.85413 33.5417 5.78121 33.5417H44.2187C46.1458 33.5417 47.7083 31.9792 47.7083 30.0521C47.7083 28.125 46.1458 26.5625 44.2187 26.5625H5.78121Z" fill="#FC8019"/>
                                                                <path d="M27.5 31.9792C26.5104 31.9792 25.625 31.6146 24.7917 31.3021C24.1146 31.0417 23.4896 30.7813 22.9167 30.7813C22.2396 30.7292 21.4583 30.9896 20.6771 31.1979C19.4792 31.5625 18.125 31.9792 16.7708 31.5104C16.3542 31.3542 15.9896 31.1458 15.6771 30.9896C15.4687 30.8854 15.2604 30.7292 15.0521 30.6771C14.0625 30.2604 12.8646 30.5208 11.5625 30.8333L11.1979 30.9375C9.6875 31.25 7.5 31.5625 5.9375 30.2083L7.29167 28.6458C7.96875 29.2188 9.0625 29.3229 10.7812 28.9583L11.1458 28.8542C12.6042 28.5417 14.2708 28.1771 15.8854 28.8021C16.1979 28.9583 16.4583 29.1146 16.7708 29.2188C17.0312 29.375 17.2917 29.5313 17.5 29.5833C18.2292 29.8438 19.1146 29.5833 20.1562 29.2708C21.0937 29.0104 22.0312 28.6979 23.125 28.75C24.0625 28.8021 24.8437 29.1146 25.625 29.4271C26.4583 29.7396 27.2396 30.0521 27.9167 29.9479C28.1771 29.8958 28.4896 29.7917 28.8542 29.6354C29.0104 29.5833 29.1146 29.5313 29.2708 29.4792C30.8333 28.8542 32.6562 28.6979 34.3229 29.0625C34.5833 29.1146 34.8958 29.1667 35.1562 29.2708C35.6771 29.4271 36.1979 29.5313 36.6667 29.5313C37.3437 29.5313 38.0729 29.2188 38.8021 28.9583C39.1146 28.8542 39.4271 28.6979 39.7396 28.5938C41.5104 27.9688 43.0729 28.125 44.1146 29.0104L42.7604 30.5729C42.0833 30 40.8854 30.3646 40.3646 30.5208C40.1042 30.625 39.7917 30.7292 39.5312 30.8333C38.6458 31.1979 37.7083 31.5625 36.6146 31.5625C36.6146 31.5625 36.6146 31.5625 36.5625 31.5625C35.8333 31.5625 35.1562 31.4063 34.5312 31.25C34.2708 31.1979 34.0625 31.1458 33.8021 31.0938C32.5 30.8333 31.1458 30.9375 29.9479 31.4063C29.8437 31.4583 29.6875 31.5104 29.5833 31.5625C29.1667 31.7188 28.75 31.9271 28.2292 31.9792C27.9687 31.9271 27.7604 31.9792 27.5 31.9792Z" fill="#3D4152"/>
                                                                <path d="M8.14084 16.5725L6.9325 14.8754L5.36267 15.9931L6.57102 17.6903L8.14084 16.5725Z" fill="#3D4152"/>
                                                                <path d="M35.7987 10.161L34.5901 8.46405L33.0204 9.58199L34.229 11.2789L35.7987 10.161Z" fill="#3D4152"/>
                                                                <path d="M30.8066 8.06964L29.5983 6.37253L28.0284 7.49025L29.2368 9.18736L30.8066 8.06964Z" fill="#3D4152"/>
                                                                <path d="M12.0382 12.6452L10.6487 11.0929L9.71733 11.9266L11.1069 13.4789L12.0382 12.6452Z" fill="#3D4152"/>
                                                                <path d="M18.7691 9.29224L17.9674 7.36932L16.4771 7.99061L17.2788 9.91353L18.7691 9.29224Z" fill="#3D4152"/>
                                                                <path d="M13.8011 17.4814L12.9171 15.5949L11.8324 16.1032L12.7163 17.9897L13.8011 17.4814Z" fill="#3D4152"/>
                                                                <path d="M23.8021 8.22916L22.5 6.61457C23.125 6.09374 23.9063 5.72916 24.6875 5.57291L25.1563 7.55207C24.6355 7.70832 24.1667 7.91666 23.8021 8.22916ZM15.8855 14.3229L15.3646 12.3437C15.8334 12.2396 16.3021 12.0312 16.7188 11.8229L17.6563 13.6458C17.0834 13.9062 16.5105 14.1146 15.8855 14.3229Z" fill="#3D4152"/>
                                                                <path d="M27.5591 17.1271L26.897 15.1518L25.1686 15.7312L25.8307 17.7065L27.5591 17.1271Z" fill="#3D4152"/>
                                                                <path d="M38.0465 17.7757L37.3844 15.8004L35.656 16.3797L36.3181 18.3551L38.0465 17.7757Z" fill="#3D4152"/>
                                                                <path d="M31.823 18.1771L30.9896 16.3021C31.5105 16.0938 32.0313 15.8854 32.5521 15.7813L32.9688 17.8125C32.5521 17.9167 32.1355 18.0208 31.823 18.1771ZM29.1667 14.1667L28.3334 12.2917C28.8542 12.0833 29.375 11.9271 29.8959 11.7708L30.3125 13.8021C29.8959 13.8542 29.5313 14.0104 29.1667 14.1667Z" fill="#3D4152"/>
                                                                <path d="M24.0456 12.8497L23.3812 10.8752L22.1965 11.2738L22.8608 13.2484L24.0456 12.8497Z" fill="#3D4152"/>
                                                                <path d="M14.3077 10.3037L13.6425 8.32947L12.4579 8.72862L13.1232 10.7029L14.3077 10.3037Z" fill="#3D4152"/>
                                                                <path d="M21.4415 17.8644L20.7762 15.8901L19.5917 16.2893L20.2569 18.2635L21.4415 17.8644Z" fill="#3D4152"/>
                                                                <path d="M42.9686 16.3L42.3042 14.3254L41.1195 14.7241L41.7838 16.6986L42.9686 16.3Z" fill="#3D4152"/>
                                                                <path d="M39.2227 14.0316L38.5583 12.057L37.3736 12.4557L38.038 14.4302L39.2227 14.0316Z" fill="#3D4152"/>
                                                            </svg>
                                                            <a href="javscript:void(0);"><h6 className="mb-0 font-w500">Burger</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <h4 className=" mb-0 cate-title">Popular Dishes</h4>
                                        <a href="favorite-menu.html" className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></a>
                                    </div>
                                    <div className="swiper mySwiper-3">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="card dishe-bx">
                                                    <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                        <span className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                        <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                    </div>
                                                    <div className="card-body p-0 text-center">
                                                        <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="card-footer border-0 px-3">
                                                        <ul className="d-flex align-items-center mb-2">
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                        </ul>
                                                        <div className="common d-flex align-items-end justify-content-between" >
                                                            <div>
                                                                <a href="javascript:void(0);"><h4>Fish Burger</h4></a>
                                                                <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                                            </div>
                                                            <div className="plus c-pointer">
                                                                <div className="sub-bx">
                                                                    <a href="javascript:void(0);"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card dishe-bx exclusive">
                                                    <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                        <span className="badge badge-lg badge-warning side-badge">Exclusive</span>
                                                        <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                    </div>
                                                    <div className="card-body p-0 text-center text-center">
                                                        <img src="images/popular-img/pic-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="card-footer border-0 px-3">
                                                        <ul className="d-flex align-items-center mb-2">
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                        </ul>
                                                        <div className="common d-flex align-items-end justify-content-between" >
                                                            <div>
                                                                <a href="javascript:void(0);"><h4>Beef Burger</h4></a>
                                                                <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                                            </div>
                                                            <div className="plus c-pointer">
                                                                <div className="sub-bx">
                                                                    <a href="javascript:void(0);" className="text-white"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card dishe-bx">
                                                    <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                        <span className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                        <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                    </div>
                                                    <div className="card-body p-0 text-center">
                                                        <img src="images/popular-img/pic-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="card-footer border-0 px-3">
                                                        <ul className="d-flex align-items-center mb-2">
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                        </ul>
                                                        <div className="common d-flex align-items-end justify-content-between" >
                                                            <div>
                                                                <a href="javascript:void(0);"><h4>Cheese Burger</h4></a>
                                                                <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                                            </div>
                                                            <div className="plus c-pointer">
                                                                <div className="sub-bx">
                                                                    <a href="javascript:void(0);" className="text-white"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card dishe-bx">
                                                    <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                        <span className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                        <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                    </div>
                                                    <div className="card-body p-0 text-center">
                                                        <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="card-footer border-0 px-3">
                                                        <ul className="d-flex align-items-center mb-2">
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                        </ul>
                                                        <div className="common d-flex align-items-end justify-content-between" >
                                                            <div>
                                                                <a href="javascript:void(0);"><h4>Fish Burger</h4></a>
                                                                <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                                            </div>
                                                            <div className="plus c-pointer">
                                                                <div className="sub-bx">
                                                                    <a href="javascript:void(0);" className="text-white"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card dishe-bx pt-0">
                                                    <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                        <span className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                        <i className="fa-solid fa-heart ms-auto c-heart c-pointer"></i>
                                                    </div>
                                                    <div className="card-body p-0 text-center">
                                                        <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="card-footer border-0 px-3">
                                                        <ul className="d-flex align-items-center mb-2">
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                        </ul>
                                                        <div className="common d-flex align-items-end justify-content-between" >
                                                            <div>
                                                                <a href="javascript:void(0);"><h4>Fish Burger</h4></a>
                                                                <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                                            </div>
                                                            <div className="plus c-pointer">
                                                                <div className="sub-bx">
                                                                    <a href="javascript:void(0);" className="text-white"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="card dishe-bx">
                                                    <div className="card-header border-0 pb-0 pt-0 pe-3">
                                                        <span className="badge badge-lg badge-danger side-badge">15% Off</span>
                                                        <i className="fa-solid fa-heart ms-auto c-heart c-pointer style-1"></i>
                                                    </div>
                                                    <div className="card-body p-0 text-center">
                                                        <img src="images/popular-img/pic-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="card-footer border-0 px-3">
                                                        <ul className="d-flex align-items-center mb-2">
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                            <li><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                                            </svg>
                                                            </li>
                                                        </ul>
                                                        <div className="common d-flex align-items-end justify-content-between" >
                                                            <div>
                                                                <a href="javascript:void(0);"><h4>Fish Burger</h4></a>
                                                                <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                                            </div>
                                                            <div className="plus c-pointer">
                                                                <div className="sub-bx">
                                                                    <a href="javascript:void(0);" className="text-white"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <h4 className=" mb-0 cate-title">Recent Order</h4>
                                        <a href="favorite-menu.html" className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></a>
                                    </div>
                                    <div className="swiper mySwiper-3">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="swiper-slide">
                                                    <div className="card dishe-bx b-hover review style-1">
                                                        <div className="card-body text-center py-3 d-flex justify-content-center">
                                                            <img src="images/popular-img/review-img/pic-1.jpg" alt=""/>
                                                            <i className="fa-solid fa-heart c-heart c-pointer style-1"></i>
                                                        </div>
                                                        <div className="card-footer pt-0 border-0 text-center">
                                                            <div>
                                                                <a href="javascript:void(0);"><h4 className="mb-0">Pepperoni Pizza</h4></a>
                                                                <h3 className="font-w700 text-primary">$5.59</h3>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <p className="mb-0 pe-2">4.97 km</p>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="3" cy="3.5" r="3" fill="#C4C4C4"/>
                                                                    </svg>
                                                                    <p className="mb-0 ps-2">21 min</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="swiper-slide">
                                                    <div className="card dishe-bx b-hover review style-1">
                                                        <div className="card-header border-0 pt-0 pb-0">
                                                            <i className="fa-solid fa-heart c-heart c-pointer style-1"></i>
                                                        </div>
                                                        <div className="card-body text-center py-3">
                                                            <img src="images/popular-img/review-img/pic-2.jpg" alt=""/>
                                                        </div>
                                                        <div className="card-footer pt-0 border-0 text-center">
                                                            <div>
                                                                <a href="javascript:void(0);"><h4 className="mb-0">Japan Ramen</h4></a>
                                                                <h3 className="font-w700 text-primary">$5.59</h3>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <p className="mb-0 pe-2">4.97 km</p>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="3" cy="3.5" r="3" fill="#C4C4C4"/>
                                                                    </svg>
                                                                    <p className="mb-0 ps-2">21 min</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="swiper-slide">
                                                    <div className="card dishe-bx b-hover review style-1">
                                                        <div className="card-header border-0 pt-0 pb-0">
                                                            <i className="fa-solid fa-heart c-heart c-pointer style-1"></i>
                                                        </div>
                                                        <div className="card-body text-center py-3">
                                                            <img src="images/popular-img/review-img/pic-3.jpg" alt=""/>
                                                        </div>
                                                        <div className="card-footer pt-0 border-0 text-center">
                                                            <div>
                                                                <a href="javascript:void(0);"><h4 className="mb-0">Fried Rice</h4></a>
                                                                <a href="javascript:void(0);"><h3 className="font-w700 text-primary">$5.59</h3></a>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <p className="mb-0 pe-2">4.97 km</p>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="3" cy="3.5" r="3" fill="#C4C4C4"/>
                                                                    </svg>
                                                                    <p className="mb-0 ps-2">21 min</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="swiper-slide">
                                                    <div className="card dishe-bx b-hover review style-1">
                                                        <div className="card-header border-0 pt-0 pb-0">
                                                            <i className="fa-solid fa-heart ms-auto c-heart c-pointer style-1"></i>
                                                        </div>
                                                        <div className="card-body text-center py-3">
                                                            <img src="images/popular-img/review-img/pic-1.jpg" alt=""/>
                                                        </div>
                                                        <div className="card-footer pt-0 border-0 text-center">
                                                            <div>
                                                                <a href="javascript:void(0);"><h4 className="mb-0">Pepperoni Pizza</h4></a>
                                                                <h3 className="font-w700 text-primary">$5.59</h3>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <p className="mb-0 pe-2">4.97 km</p>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="3" cy="3.5" r="3" fill="#C4C4C4"/>
                                                                    </svg>
                                                                    <p className="mb-0 ps-2">21 min</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="swiper-slide">
                                                    <div className="card dishe-bx b-hover review style-1">
                                                        <div className="card-header border-0 pt-0 pb-0">
                                                            <i className="fa-solid fa-heart ms-auto c-heart c-pointer style-1"></i>
                                                        </div>
                                                        <div className="card-body text-center py-3">
                                                            <img src="images/popular-img/review-img/pic-1.jpg" alt=""/>
                                                        </div>
                                                        <div className="card-footer pt-0 border-0 text-center">
                                                            <div>
                                                                <a href="javscript:void(0);"><h4 className="mb-0">Pepperoni Pizza</h4></a>
                                                                <h3 className="font-w700 text-primary">$5.59</h3>
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <p className="mb-0 pe-2">4.97 km</p>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="3" cy="3.5" r="3" fill="#C4C4C4"/>
                                                                    </svg>
                                                                    <p className="mb-0 ps-2">21 min</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xxl-5">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card dlab-bg dlab-position">
                                        <div className="card-header border-0 pb-0">
                                            <h4 className="cate-title">Your Balance</h4>
                                        </div>
                                        <div className="card-body pt-0 pb-2">
                                            <div className="card bg-primary blance-card">
                                                <div className="card-body">
                                                    <h4 className="mb-0">Balance</h4>
                                                    <h2>$12.000</h2>
                                                    <div className="change-btn d-flex">
                                                        <a href="javascript:void(0);" className="btn me-1">
                                                            {/*<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                                                            {/*    <path opacity="0.3" d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z" fill="#3D4152"/>*/}
                                                            {/*    <path d="M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V2C11 1.44771 11.4477 1 12 1C12.5523 1 13 1.44771 13 2V14Z" fill="#3D4152"/>*/}
                                                            {/*    <path d="M12.0362 13.622L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.669 16.0832 12.2736 16.0991 12.669 15.7433L17.669 11.2433C18.0795 10.8738 18.1128 10.2415 17.7433 9.83103C17.3738 9.42052 16.7415 9.38725 16.331 9.7567L12.0362 13.622Z" fill="#3D4152"/>*/}
                                                            {/*</svg>*/}
                                                            Top Up</a>
                                                        <a href="javascript:void(0);" className="btn ms-1">
                                                            {/*<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                                                            {/*    <path opacity="0.3" d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z" fill="#3D4152"/>*/}
                                                            {/*    <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V3Z" fill="#3D4152"/>*/}
                                                            {/*    <path d="M12.0362 3.37798L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289L11.2929 1.2929C11.669 0.916813 12.2736 0.900912 12.669 1.25671L17.669 5.75671C18.0795 6.12617 18.1128 6.75846 17.7433 7.16897C17.3738 7.57948 16.7415 7.61275 16.331 7.2433L12.0362 3.37798Z" fill="#3D4152"/>*/}
                                                            {/*</svg>*/}

                                                            Transfer</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bb-border">
                                                <p className="font-w500 text-primary fs-15 mb-2">Your Address</p>
                                                <div className="d-flex  align-items-center justify-content-between mb-2">
                                                    <h4 className="mb-0">
                                                        {/*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                                                        {/*    <path d="M20.46 9.63C20.3196 8.16892 19.8032 6.76909 18.9612 5.56682C18.1191 4.36456 16.9801 3.40083 15.655 2.7695C14.3299 2.13816 12.8639 1.86072 11.3997 1.96421C9.93555 2.06769 8.52314 2.54856 7.3 3.36C6.2492 4.06265 5.36706 4.9893 4.71695 6.07339C4.06684 7.15749 3.6649 8.37211 3.54 9.63C3.41749 10.8797 3.57468 12.1409 4.00017 13.3223C4.42567 14.5036 5.1088 15.5755 6 16.46L11.3 21.77C11.393 21.8637 11.5036 21.9381 11.6254 21.9889C11.7473 22.0397 11.878 22.0658 12.01 22.0658C12.142 22.0658 12.2727 22.0397 12.3946 21.9889C12.5164 21.9381 12.627 21.8637 12.72 21.77L18 16.46C18.8912 15.5755 19.5743 14.5036 19.9998 13.3223C20.4253 12.1409 20.5825 10.8797 20.46 9.63ZM16.6 15.05L12 19.65L7.4 15.05C6.72209 14.3721 6.20281 13.5523 5.87947 12.6498C5.55614 11.7472 5.43679 10.7842 5.53 9.83C5.62382 8.86111 5.93177 7.92516 6.43157 7.08985C6.93138 6.25453 7.61056 5.54071 8.42 5C9.48095 4.29524 10.7263 3.9193 12 3.9193C13.2737 3.9193 14.5191 4.29524 15.58 5C16.387 5.53862 17.0647 6.24928 17.5644 7.08094C18.064 7.9126 18.3733 8.84461 18.47 9.81C18.5663 10.7674 18.4484 11.7343 18.125 12.6406C17.8016 13.5468 17.2807 14.3698 16.6 15.05ZM12 6C11.11 6 10.24 6.26392 9.49994 6.75839C8.75992 7.25286 8.18314 7.95566 7.84255 8.77793C7.50195 9.6002 7.41284 10.505 7.58647 11.3779C7.7601 12.2508 8.18869 13.0526 8.81802 13.682C9.44736 14.3113 10.2492 14.7399 11.1221 14.9135C11.995 15.0872 12.8998 14.9981 13.7221 14.6575C14.5443 14.3169 15.2471 13.7401 15.7416 13.0001C16.2361 12.26 16.5 11.39 16.5 10.5C16.4974 9.30734 16.0224 8.16428 15.1791 7.32094C14.3357 6.4776 13.1927 6.00265 12 6ZM12 13C11.5055 13 11.0222 12.8534 10.6111 12.5787C10.2 12.304 9.87952 11.9135 9.6903 11.4567C9.50109 10.9999 9.45158 10.4972 9.54804 10.0123C9.6445 9.52733 9.88261 9.08187 10.2322 8.73224C10.5819 8.38261 11.0273 8.1445 11.5123 8.04804C11.9972 7.95158 12.4999 8.00109 12.9567 8.1903C13.4135 8.37952 13.804 8.69996 14.0787 9.11108C14.3534 9.5222 14.5 10.0056 14.5 10.5C14.5 11.163 14.2366 11.7989 13.7678 12.2678C13.2989 12.7366 12.663 13 12 13Z" fill="var(--primary)"/>*/}
                                                        {/*</svg>*/}
                                                        Elm Street, 23
                                                    </h4>
                                                    <a href="javascript:void(0);" className="btn btn-outline-primary btn-sm change">Change</a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt. </p>
                                                <div className="d-flex">
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        Add Details
                                                    </button>


                                                    <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        Add Note
                                                    </button>

                                                </div>
                                            </div>
                                            <div className="order-check d-flex align-items-center my-3">
                                                <div className="dlab-media">
                                                    <img src="images/popular-img/review-img/pic-1.jpg" alt=""/>
                                                </div>
                                                <div className="dlab-info">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h4 className="dlab-title"><a href="javascript:void(0);">Pepperoni Pizza</a></h4>
                                                        <h4 className="text-primary ms-2">+$5.59</h4>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span>x1</span>
                                                        <div className="quntity">
                                                            <button data-decrease>-</button>
                                                            <input data-value type="text" value="1"  />
                                                            <button data-increase>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-check d-flex align-items-center my-3">
                                                <div className="dlab-media">
                                                    <img src="images/popular-img/review-img/pic-2.jpg" alt=""/>
                                                </div>
                                                <div className="dlab-info">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h4 className="dlab-title"><a href="javascript:void(0);">Japan Ramen</a></h4>
                                                        <h4 className="text-primary ms-2">+$5.59</h4>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span>x1</span>
                                                        <div className="quntity">
                                                            <button data-decrease>-</button>
                                                            <input data-value type="text" value="1"  />
                                                            <button data-increase>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-check d-flex align-items-center my-3">
                                                <div className="dlab-media">
                                                    <img src="images/popular-img/review-img/pic-2.jpg" alt=""/>
                                                </div>
                                                <div className="dlab-info">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h4 className="dlab-title"><a href="javascript:void(0);">Japan Ramen</a></h4>
                                                        <h4 className="text-primary ms-2">+$5.59</h4>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span>x1</span>
                                                        <div className="quntity">
                                                            <button data-decrease>-</button>
                                                            <input data-value type="text" value="1"  />
                                                            <button data-increase>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-check d-flex align-items-center my-3">
                                                <div className="dlab-media">
                                                    <img src="images/popular-img/review-img/pic-3.jpg" alt=""/>
                                                </div>
                                                <div className="dlab-info">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h4 className="dlab-title"><a href="javascript:void(0);">Fried Rice</a></h4>
                                                        <h4 className="text-primary ms-2">+$5.59</h4>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span>x1</span>
                                                        <div className="quntity">
                                                            <button data-decrease>-</button>
                                                            <input data-value type="text" value="1"  />
                                                            <button data-increase>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-2 text-primary" />
                                        </div>
                                        <div className="card-footer  pt-0 border-0">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p>Service</p>
                                                <h4 className="font-w500">+$1.00</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h4 className="font-w500">Total</h4>
                                                <h3 className="font-w500 text-primary">$202.00</h3>
                                            </div>
                                            <a href="checkout-page.html" className="btn btn-primary btn-block">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card bg-primary blance-card-1 border-primary h-100">
                                        <div className="card-body pe-0 p-4 pb-3">
                                            <div className="dlab-media d-flex justify-content-between">
                                                <div className="dlab-content">
                                                    <h4 className="cate-title">Get Discount VoucherUp To 20%  </h4>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                                <div className="dlab-img">
                                                    <img src="images/banner-img/pic-2.jpg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
                {/*    <div className="modal-dialog">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h5 className="modal-title" id="exampleModalLabel">Add Location Details</h5>*/}
                {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body add-loaction">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-xl-12">*/}
                {/*                        <form>*/}
                {/*                            <div className="mb-3">*/}
                {/*                                <label className="form-label">Location Name</label>*/}
                {/*                                <input type="Text" className="form-control" placeholder="HOUSE/FLAT/BLOCK NO."/>*/}

                {/*                            </div>*/}
                {/*                        </form>*/}

                {/*                    </div>*/}
                {/*                    <div className="col-xl-12">*/}
                {/*                        <form>*/}
                {/*                            <div className="mb-3">*/}
                {/*                                <label className="form-label">LANDMARK</label>*/}
                {/*                                <input type="Text" className="form-control" placeholder="LANDMARK"/>*/}

                {/*                            </div>*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-xl-6">*/}
                {/*                        <form>*/}
                {/*                            <div className="mb-3">*/}
                {/*                                <label className="form-label">Available For Order</label>*/}
                {/*                                <input type="Text" className="form-control" placeholder="Yes"/>*/}

                {/*                            </div>*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-xl-6">*/}
                {/*                        <p className="mb-1">Address type</p>*/}
                {/*                        <select className="form-control default-select ms-0 py-4 wide" style="display: none;">*/}
                {/*                            <option>Home</option>*/}
                {/*                            <option>Office</option>*/}
                {/*                            <option>Other</option>*/}
                {/*                        </select>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">*/}
                {/*    <div className="modal-dialog">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h5 className="modal-title" id="exampleModalLabel2">Manage Route Notes</h5>*/}
                {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body add-note">*/}
                {/*                <div className="row align-items-center">*/}
                {/*                    <div className="col-xl-12">*/}
                {/*                        <form className="mb-3">*/}
                {/*                            <label className="form-label">Update Type</label>*/}
                {/*                            <input type="Text" className="form-control" placeholder="Drop Off Occurred"/>*/}
                {/*                        </form>*/}

                {/*                    </div>*/}

                {/*                    <div className="col-xl-12">*/}
                {/*                        <form className=" mb-3">*/}
                {/*                            <label className="form-label">Drop Off Location</label>*/}
                {/*                            <input type="Text" className="form-control" placeholder="Front Door"/>*/}
                {/*                        </form>*/}

                {/*                    </div>*/}

                {/*                    <div className="col-xl-12">*/}
                {/*                        <div className="mb-3">*/}
                {/*                            <label className="form-label">Notes</label>*/}
                {/*                            <textarea className="form-control" placeholder="Delivery was successful." id="floatingTextarea"></textarea>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-xl-12">*/}
                {/*                        <div className="mb-3">*/}
                {/*                            <label className="from-label">Address</label>*/}
                {/*                            <input type="Text" className="form-control" placeholder="Elm Street, 23"/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>






            <div className="footer">
                <div className="copyright border-top">
                    <p>Copyright © Designed   by <a href="https://themeforest.net/user/dexignlabs" target="_blank">DexignLab</a> 2022</p>
                </div>
            </div>
        </div>




        </div>
    )
}