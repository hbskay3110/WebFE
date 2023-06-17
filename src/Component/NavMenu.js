import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
export default function NavMenu() {

  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="dlabnav border-right">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <a
                className="has-arrow "
                href="javascript:void(0);"
                aria-expanded="false"
              >
                <NavLink exact to="/" activeClassName="active">
                  <i class="bi bi-house-fill"></i>
                  <span className="nav-text">Home</span>
                </NavLink>
              </a>
            </li>

            <li>
              <a
                className="has-arrow "
                href="javascript:void(0);"
                aria-expanded="false"
              >
                <NavLink to={"/listProduct"} activeClassName="active">
                  <i class="bi bi-list"></i>
                  <span className="nav-text">{t('menu')}</span>
                </NavLink>
              </a>
            </li>

            <li>
              <a
                className="has-arrow "
                href="javascript:void(0);"
                aria-expanded="false"
              >
                <NavLink to={"/orderHistory"} activeClassName="active">
                  <i class="bi bi-clock-history"></i>
                  <span className="nav-text">{t('Order History')}</span>
                </NavLink>
              </a>
            </li>

            <li>
              <a
                className="has-arrow "
                href="javascript:void(0);"
                aria-expanded="false"
              >
                <NavLink to={"/account"} activeClassName="active">
                  <i class="bi bi-person"></i>
                  <span className="nav-text">{t('account')}</span>
                </NavLink>
              </a>
            </li>

            <li>
              <a
                className="has-arrow "
                href="javascript:void(0);"
                aria-expanded="false"
              >
                <NavLink to={"/history"} activeClassName="active">
                  <i class="bi bi-clock-history"></i>
                  <span className="nav-text">{t('history')}</span>
                </NavLink>
              </a>
            </li>

            <li>
              <a
                className="has-arrow "
                href="javascript:void(0);"
                aria-expanded="false"
              >
                <NavLink to={"/favoriteList"} activeClassName="active">
                  <i class="bi bi-heart"></i>
                  <span className="nav-text">{t('favorite List')}</span>
                </NavLink>
              </a>
            </li>
          </ul>
          <div className="plus-box">
            <div className="d-flex align-items-center">
              <h5>Upgrade your Account to Get Free Voucher</h5>
            </div>
            <a href="javascript:void(0);" className="btn bg-white btn-sm">
              Upgrade
            </a>
          </div>
          <div className="copyright mt-0">
            <p>
              <strong>Food Desk - Online Food Delivery</strong> © 2023 All
              Rights Reserved
            </p>
            <p className="fs-12">
              Made with <span className="heart"></span> by FE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
