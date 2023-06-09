import React, { useState } from "react";

import clsx from "clsx";
import "../images/favicon.png";
import "../vendor/jquery-nice-select/css/nice-select.css";
import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css";
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../vendor/swiper/css/swiper-bundle.min.css";
import "../css/style.css";

import { removeItemCart } from "../Store/Action";
import { setCart } from "../Store/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { updateQuantityCart } from "../Store/Action";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Cart() {
  const { t, i18n } = useTranslation();
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const dispatch = useDispatch();
  // Kiểm tra xem có giỏ hàng trong Session Storage không
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      // Parse giỏ hàng từ JSON
      const parsedCart = JSON.parse(savedCart);
      // Cập nhật giỏ hàng trong Redux Store nếu có
      dispatch(setCart(parsedCart));
    }
  }, []);
  //lấy cart từ store
  const cart = useSelector((state) => state.root.cart);

  //tổng tiền
  const [total, setTotal] = useState(0);
  // Tính tổng tiền khi giỏ hàng thay đổi
  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      for (const item of cart) {
        const price = item.product.price;
        const quantity = item.quantity;
        totalPrice += price * quantity;
      }
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cart]);
  // cartitem
  //sự kiên click remove item
  const handleClickRemove = (id) => {
    dispatch(removeItemCart(id));
  };
  const CartItem = (props) => {
    //tính sô lượng của mỗi item
    const [quantityItem, setQuantityItem] = useState(props.quantity.toString());
    //sự kiện khi thay đổi input
    const handleQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value);
      if (Number.isNaN(newQuantity) || newQuantity <= 0) {
        // Invalid quantity entered, reset it to 1 or any appropriate default value
        setQuantityItem(1);
        dispatch(updateQuantityCart(props.id, 1));
        return;
      }
      setQuantityItem(newQuantity);
      // Update the quantity in the cart
      dispatch(updateQuantityCart(props.id, newQuantity));
    };
    return (
      <div className="d-flex align-items-center mb-4">
        <input className="checkboxCartItem" type="checkbox" />
        <Link to={`/product/${props.id}`} state={{ product: props }}>
          <img className="me-3" src={props.img} alt="" />
        </Link>
        <div>
          <Link to={`/product/${props.id}`} state={{ product: props }}>
            <h4 className="font-w600 text-nowrap mb-0">{props.name}</h4>
          </Link>
          <div className="quantityIp">
            <input
              className="quantityItemCard"
              type="number"
              value={quantityItem}
              onChange={handleQuantityChange}
            />
          </div>
        </div>
        <button
          className="removeItemCart"
          onClick={() => handleClickRemove(props.id)}
        >
          X
        </button>
        <h4 className="text-primary mb-0 ms-auto">{numberWithCommas(props.price)} đ</h4>
      </div>
    );
  };
  return (
    <div>
      <div id="main-wrapper">
        <NavHeader />
        <Header />
        <div className={"d-flex"}>
          <NavMenu />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="card border-0">
                  <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">
                    Order Details
                  </h4>
                  <div className="card h-auto">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between border-bottom flex-wrap">
                        <div className="mb-4">
                          <h4 className="font-w500">{t("order")} #1</h4>
                          <span>June 20, 2023, 08:22 AM</span>
                        </div>
                        <div className="orders-img d-flex mb-4">
                          
                          <div>
                          
                          </div>
                        </div>
                      </div>
                      <div className="order-menu style-1 mt-3">
                        <h4>{t("orderMenu")}</h4>
                        {cart ? (
                          <div>
                            {cart.map((cartItem) => (
                              <CartItem
                                id={cartItem.product.id}
                                img={cartItem.product.img}
                                name={cartItem.product.name}
                                quantity={cartItem.quantity}
                                price={cartItem.product.price}
                              />
                            ))}
                          </div>
                        ) : (
                          <p>Cart is empty</p>
                        )}
                      </div>

                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="font-w500 mb-0">{t("total")}</h4>
                        <h4 class="cate-title text-primary">{numberWithCommas(total)} đ</h4>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                  
                    <Link to={"/checkout"}><a href="javascript:void(0);" className="btn btn-primary">
                      {t("acceptOrder")}
                    </a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
