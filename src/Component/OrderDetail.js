import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
export default function OrderDetail() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [orderList, setOrderList] = useState([]);
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
      const existOrderJson = localStorage.getItem('order');
   
      useEffect(() => {
          if (existOrderJson != null) {
            setOrderList(JSON.parse(existOrderJson));
          }
        }, []);
        useEffect(() => {
            const result = orderList.find((order) => `${order.id}` === id );
            setOrder(result)
         }, [orderList, id]);
       
    if (!order) {
        return <p>Loading...</p>;
    }

    return(
        <div> 
               <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
                    <div className="content-body">
                        <div className="container">
                            <article className="card">
                                <header className="card-header">{t('my Orders')} / {t('tracking')} </header>
                                <div className="card-body">
                                    <h6>Order ID: {order.id}</h6>
                                    <article className="card">
                                        <div className="card-body row">
                                            <div className="col"> <strong>{t('Estimated Delivery time')}:</strong> <br/>{order.createAt} </div>
                                            <div className="col"> <strong>{t('name')}:</strong> <br/>{order.name}, <br/> <i className="fa fa-phone"></i> +{order.phone} </div>
                                            <div className="col"> <strong>{t('address')}:</strong> <br/> {order.address} </div>
                                            <div className="col"> <strong>{t('total')}:</strong> <br/> {numberWithCommas(order.price)} đ</div>
                                        </div>
                                    </article>
                                    <div className="track">
                                        <div className={`step ${order.status>=0 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">{t('order confirmed')}</span> </div>
                                        <div className={`step ${order.status>=1 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> {t('picked by courier')}</span> </div>
                                        <div className={`step ${order.status>=2 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> {t('on the way')} </span> </div>
                                        <div className={`step ${order.status>=3 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">{t('ready for pickup')}</span> </div>
                                    </div>
                                    <hr/>
                                    <ul className="row">
                                    {order.products.map((product) => (
                                        // <Link to={`/product/${product.id}` }  state={{ product: product }}>
                                        <li className="col-md-4">
                                            <Link to={`/product/${product.id}` }  state={{ product: product }}>
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src= {product.img} className="img-sm border"/></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">{product.name} x {product.quantity} </p><span className="text-muted">{numberWithCommas(product.price)} đ</span>
                                                </figcaption>
                                            </figure>
                                            </Link>
                                        </li>
                                     
                            
                                    ))}
                                       
                                    </ul>
                                    <hr/>
                                    <Link to={"/orderHistory"}><a href="javascript:void(0)" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left"></i> {t("back")}</a></Link>
                                </div>
                                
                            </article>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}