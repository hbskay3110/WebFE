import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function OrderDetail() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    useEffect(() => {
        const fetchOrder = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/order/${id}`);
            setOrder(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchOrder();
      }, [id]);
    
    if (!order) {
        return <p>Loading...</p>;
    }
    console.log(order.status<=0)
    return(
        <div> 
               <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
                    <div className="content-body">
                        <div className="container">
                            <article className="card">
                                <header className="card-header"> My Orders / Tracking </header>
                                <div className="card-body">
                                    <h6>Order ID: {order.id}</h6>
                                    <article className="card">
                                        <div className="card-body row">
                                            <div className="col"> <strong>Estimated Delivery time:</strong> <br/>{order.createAt} </div>
                                            <div className="col"> <strong>Name:</strong> <br/>{order.name}, <br/> <i className="fa fa-phone"></i> +{order.phone} </div>
                                            <div className="col"> <strong>Address:</strong> <br/> {order.address} </div>
                                            <div className="col"> <strong>Total Price:</strong> <br/> {order.address} </div>
                                        </div>
                                    </article>
                                    <div className="track">
                                        <div className={`step ${order.status>=0 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                                        <div className={`step ${order.status>=1 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                                        <div className={`step ${order.status>=2 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                                        <div className={`step ${order.status>=3 ? "active" : ""}`}> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                                    </div>
                                    <hr/>
                                    <ul className="row">
                                        <li className="col-md-4">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src="https://i.imgur.com/iDwDQ4o.png" className="img-sm border"/></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">Dell Laptop with 500GB HDD <br/> 8GB RAM</p> <span className="text-muted">$950 </span>
                                                </figcaption>
                                            </figure>
                                        </li>
                                        <li className="col-md-4">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border"/></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">HP Laptop with 500GB HDD <br/> 8GB RAM</p> <span className="text-muted">$850 </span>
                                                </figcaption>
                                            </figure>
                                        </li>
                                        <li className="col-md-4">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border"/></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">ACER Laptop with 500GB HDD <br/> 8GB RAM</p> <span className="text-muted">$650 </span>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    </ul>
                                    <hr/>
                                    <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left"></i> Back to orders</a>
                                </div>
                                
                            </article>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}