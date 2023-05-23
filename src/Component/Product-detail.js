import React from "react";

import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";


export default function ProductDetail(){
    return(
        <div> 
               <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
            <div className="content-body">
        <div className="container">
            <div className="row page-titles">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="javasc~ript:void(0)">Layout</a></li>
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Blank</a></li>
                </ol>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                                   
                                    <div className="tab-content" id="nav-tabContent">
                                      <div className="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">
                                        <img className="img-fluid rounded" src="https://freepngimg.com/thumb/food/4-2-food-png.png" alt=""/>
                                      </div>
                                      <div className="tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
                                        <img className="img-fluid rounded" src="images/product/2.jpg" alt=""/>
                                      </div>
                                      <div className="tab-pane fade" id="nav-third" role="tabpanel" aria-labelledby="nav-third-tab">
                                         <img className="img-fluid rounded" src="images/product/3.jpg" alt=""/>
                                      </div>
                                      <div className="tab-pane fade" id="nav-for" role="tabpanel" aria-labelledby="nav-for-tab">
                                         <img className="img-fluid rounded" src="images/product/4.jpg" alt=""/>
                                      </div>
                                    </div>
                                    <nav>
                                      <div className="product-detail-tab nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-first-tab" data-bs-toggle="tab" data-bs-target="#nav-first" type="button" role="tab" aria-controls="nav-first" aria-selected="true">
                                            <img className="img-fluid" src="images/tab/1.jpg" alt="" width="50"/>
                                        </button>
                                        <button className="nav-link" id="nav-second-tab" data-bs-toggle="tab" data-bs-target="#nav-second" type="button" role="tab" aria-controls="nav-second" aria-selected="false">
                                            <img className="img-fluid" src="images/tab/2.jpg" alt="" width="50"/>
                                        </button>
                                        <button className="nav-link" id="nav-third-tab" data-bs-toggle="tab" data-bs-target="#nav-third" type="button" role="tab" aria-controls="nav-third" aria-selected="false">
                                            <img className="img-fluid" src="images/tab/3.jpg" alt="" width="50"/>
                                        </button>
                                        <button className="nav-link" id="nav-for-tab" data-bs-toggle="tab" data-bs-target="#nav-for" type="button" role="tab" aria-controls="nav-for" aria-selected="false">
                                            <img className="img-fluid" src="images/tab/4.jpg" alt="" width="50"/>
                                        </button>
                                      </div>
                                    </nav>
                                </div>
                                
                                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                                    <div className="product-detail-content">
                                        
                                        <div className="new-arrival-content pr">
                                            <h4>Solid Women's V-neck Dark T-Shirt</h4>
                                            <div className="comment-review star-rating">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half-empty"></i></li>
                                                    <li><i className="fa fa-star-half-empty"></i></li>
                                                </ul>
                                                <span className="review-text">(34 reviews) / </span><a className="product-review" href="#"  data-bs-toggle="modal" data-bs-target="#reviewModal">Write a review?</a>
                                            </div>
                                            <div className="d-table mb-2">
                                                <p className="price float-start d-block">$325.00</p>
                                            </div>
                                            <p>Availability: <span className="item"> In stock <i
                                                        className="fa fa-shopping-basket"></i></span>
                                            </p>
                                            <p>Product code: <span className="item">0405689</span> </p>
                                            <p>Brand: <span className="item">Lee</span></p>
                                            <p>Product tags:&nbsp;&nbsp;
                                                <span className="badge badge-success light">bags</span>
                                                <span className="badge badge-success light">clothes</span>
                                                <span className="badge badge-success light">shoes</span>
                                                <span className="badge badge-success light">dresses</span>
                                            </p>
                                            <p className="text-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                                            <div className="d-flex align-items-end flex-wrap mt-4">
                                                
                                                
                                                <div className="filtaring-area me-3">
                                                    <div className="size-filter">
                                                        <h4 className="m-b-15">Select size</h4>
                                                        <div className="d-flex select-size mb-2" role="group" aria-label="Basic radio toggle button group">
                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio1">XS</label>

                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio2">SM</label>

                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio3">MD</label>
                                                          
                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio4"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio4">LG</label>
                                                          
                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio5"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio5">XL</label>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            
                                                <div className="col-2 px-0  mb-2 me-3">
                                                    <input type="number" name="num" className="form-control input-btn input-number" value="1"/>
                                                </div>
                                                
                                                <div className="shopping-cart  mb-2 me-3">
                                                    <a className="btn btn-primary" href=""><i
                                                            className="fa fa-shopping-basket me-2"></i>Add
                                                        to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="modal fade" id="reviewModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Review</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="text-center mb-4">
                                        <img className="img-fluid rounded" width="78" src="images/avatar/1.jpg" alt="DexignZone"/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="rating-widget mb-4 text-center">
                                            
                                            <div className="rating-stars">
                                                <ul id="stars">
                                                    <li className="star" title="Poor" data-value="1">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="Fair" data-value="2">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="Good" data-value="3">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="Excellent" data-value="4">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="WOW!!!" data-value="5">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Comment" rows="5"></textarea>
                                    </div>
                                    <button className="btn btn-success btn-block">RATE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
            </div>
            <Footer/>
        </div>
        
    )
}