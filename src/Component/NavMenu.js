import React from "react";
import clsx from "clsx";

export default function NavMenu() {
    return (
        <div>
            <div className="dlabnav border-right">
                <div className="dlabnav-scroll">
                    <p className={clsx("menu-title", "style-1")}> Main Menu</p>
                    <ul className="metismenu" id="menu">
                        <li className="menu-title">Other</li>
                        <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                            <i className="bi bi-info-circle"></i>
                            <span className="nav-text">Apps</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="app-profile.html">Profile</a></li>
                                <li><a href="post-details.html">Post Details</a></li>
                                <li><a className="has-arrow" href="javascript:void(0);"
                                       aria-expanded="false">Email</a>
                                    <ul aria-expanded="false">
                                        <li><a href="email-compose.html">Compose</a></li>
                                        <li><a href="email-inbox.html">Inbox</a></li>
                                        <li><a href="email-read.html">Read</a></li>
                                    </ul>
                                </li>
                                <li><a href="app-calender.html">Calendar</a></li>
                                <li><a className="has-arrow" href="javascript:void(0);"
                                       aria-expanded="false">Shop</a>
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
                            <i className="bi bi-file-earmark-break"></i>
                            <span className="nav-text">Pages</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="page-login.html">Login</a></li>
                                <li><a href="page-register.html">Register</a></li>
                                <li><a className="has-arrow" href="javascript:void(0);"
                                       aria-expanded="false">Error</a>
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
                        <p><strong>Food Desk - Online Food Delivery Admin Dashboard</strong> © 2022 All Rights
                            Reserved</p>
                        <p className="fs-12">Made with <span className="heart"></span> by DexignLab</p>
                    </div>
                </div>
            </div>
        </div>
    );
}