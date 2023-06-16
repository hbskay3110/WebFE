import React from "react";

import clsx from "clsx";
import "../images/favicon.png";
import "../vendor/jquery-nice-select/css/nice-select.css";
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../vendor/swiper/css/swiper-bundle.min.css";
import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css";
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../vendor/swiper/css/swiper-bundle.min.css";

import "../vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css";
import "../css/style.css";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const [account, setAccount] = useState(null);

  //kiểm tra có account trong localStorage không
  useEffect(() => {
    const checkUser = localStorage.getItem("user-info");
    if (checkUser) {
      setAccount(JSON.parse(checkUser));
    } else {
      setAccount(null);
    }
  }, [account]);

  const [tab, setTab] = useState(0);
  //sự kiện chọn tab account
  const handleChooseTabAccount = () => {
    setTab(0);
  };
  //sự kiện chọn tab changePass
  const handleChooseTabChangeP = () => {
    setTab(1);
  };
  //sự kiên đăng xuất
  const handleChooseLogout = () => {
    localStorage.removeItem("user-info");
  };

  return (
    <div>
      <div id="main-wrapper">
        <NavHeader />
        <Header />
        <div className={"d-flex"}>
          <NavMenu />
          <div className="content-body">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body px-3">
                      <div
                        className="nav nav-tabs border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          href="#"
                          className={`${
                            tab == 0
                              ? "nav-link active setting-bx d-flex"
                              : "nav-link setting-bx d-flex"
                          }`}
                          id="pills-account-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-account"
                          role="tab"
                          aria-controls="pills-account"
                          aria-selected="true"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C13.2426 6 14.25 4.99264 14.25 3.75C14.25 2.50736 13.2426 1.5 12 1.5C10.7574 1.5 9.75 2.50736 9.75 3.75C9.75 4.99264 10.7574 6 12 6Z"
                              fill="#3D4152"
                            />
                            <path
                              d="M13.5 6.75H10.5C9.50544 6.75 8.55161 7.14509 7.84835 7.84835C7.14509 8.55161 6.75 9.50544 6.75 10.5V14.25C6.75 14.4489 6.82902 14.6397 6.96967 14.7803C7.11032 14.921 7.30109 15 7.5 15C7.69891 15 7.88968 14.921 8.03033 14.7803C8.17098 14.6397 8.25 14.4489 8.25 14.25V10.5C8.2513 10.0358 8.39616 9.58335 8.6647 9.2047C8.93325 8.82605 9.31234 8.53974 9.75 8.385V21.75C9.75 21.9489 9.82902 22.1397 9.96967 22.2803C10.1103 22.421 10.3011 22.5 10.5 22.5C10.6989 22.5 10.8897 22.421 11.0303 22.2803C11.171 22.1397 11.25 21.9489 11.25 21.75V15.615C11.7331 15.799 12.2669 15.799 12.75 15.615V21.75C12.75 21.9489 12.829 22.1397 12.9697 22.2803C13.1103 22.421 13.3011 22.5 13.5 22.5C13.6989 22.5 13.8897 22.421 14.0303 22.2803C14.171 22.1397 14.25 21.9489 14.25 21.75V8.385C14.6877 8.53974 15.0668 8.82605 15.3353 9.2047C15.6038 9.58335 15.7487 10.0358 15.75 10.5V14.25C15.75 14.4489 15.829 14.6397 15.9697 14.7803C16.1103 14.921 16.3011 15 16.5 15C16.6989 15 16.8897 14.921 17.0303 14.7803C17.171 14.6397 17.25 14.4489 17.25 14.25V10.5C17.25 10.0075 17.153 9.51991 16.9645 9.06494C16.7761 8.60997 16.4999 8.19657 16.1517 7.84835C15.8034 7.50013 15.39 7.22391 14.9351 7.03545C14.4801 6.847 13.9925 6.75 13.5 6.75Z"
                              fill="#3D4152"
                            />
                          </svg>
                          <div
                            className="setting-info"
                            onClick={handleChooseTabAccount}
                          >
                            <h6>{t("account")}</h6>
                            <p className="mb-0">{t("manageAccount")}</p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className={`${
                            tab == 1
                              ? "nav-link active setting-bx d-flex"
                              : "nav-link setting-bx d-flex"
                          }`}
                          id="pills-notification-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-notification"
                          role="tab"
                          aria-controls="pills-notification"
                          aria-selected="false"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0003 22.5C11.8942 22.4995 11.7894 22.4765 11.6928 22.4325C7.55282 20.595 4.79282 17.01 3.44282 11.7675L2.25032 6.93C2.21223 6.77899 2.22209 6.61987 2.27854 6.47473C2.33498 6.32958 2.43521 6.2056 2.56532 6.12L3.12032 5.7525C5.79533 3.97063 8.69586 2.55315 11.7453 1.5375C11.8987 1.48659 12.0644 1.48659 12.2178 1.5375C15.2677 2.5555 18.1682 3.97551 20.8428 5.76L21.3978 6.1275C21.5333 6.20741 21.6402 6.32789 21.7035 6.4719C21.7668 6.61591 21.7831 6.77617 21.7503 6.93L20.5428 11.7675C19.2303 17.0175 16.4628 20.595 12.2928 22.4325C12.2009 22.4745 12.1014 22.4974 12.0003 22.5ZM3.85532 7.08L4.93532 11.4C6.09782 16.0425 8.47532 19.245 12.0003 20.925C15.5253 19.245 17.9028 16.0425 19.0653 11.4075L20.1453 7.0875L20.0328 7.0125C17.5381 5.34834 14.8381 4.01472 12.0003 3.045C9.16549 4.01281 6.46803 5.34389 3.97532 7.005L3.85532 7.08Z"
                              fill="#3D4152"
                            />
                            <path
                              d="M12.4357 1.6425C12.3395 1.57281 12.2282 1.52695 12.1108 1.50869C11.9935 1.49044 11.8735 1.50031 11.7607 1.5375C8.71343 2.55612 5.81545 3.97611 3.14318 5.76L2.58818 6.1275C2.45543 6.20953 2.35157 6.33093 2.29107 6.47477C2.23058 6.61862 2.21646 6.77775 2.25068 6.93L3.45818 11.7675C4.77068 17.0175 7.53818 20.595 11.7082 22.4325C11.8216 22.4805 11.9451 22.4999 12.0677 22.4889C12.1904 22.4779 12.3085 22.4369 12.4115 22.3694C12.5146 22.3019 12.5994 22.2101 12.6586 22.1021C12.7177 21.9941 12.7493 21.8732 12.7507 21.75V2.25C12.7501 2.13102 12.7213 2.01387 12.6665 1.90823C12.6117 1.8026 12.5326 1.71152 12.4357 1.6425Z"
                              fill="#3D4152"
                            />
                          </svg>
                          <div
                            className="setting-info"
                            onClick={handleChooseTabChangeP}
                          >
                            <h6>{t("changePassword")}</h6>
                            <p className="mb-0">{t("changePass")}</p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="nav-link setting-bx d-flex"
                          id="pills-notification-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-notification"
                          role="tab"
                          aria-controls="pills-notification"
                          aria-selected="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-box-arrow-right"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                            />
                          </svg>
                          <div
                            className="setting-info"
                            onClick={handleChooseLogout}
                          >
                            <h6>{t("logOut")}</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={`${
                        tab == 0 ? "tab-pane fade show active" : "tab-pane fade"
                      }`}
                      //   className="tab-pane fade show active"
                      id="pills-account"
                      role="tabpanel"
                      tabindex="0"
                      aria-labelledby="pills-account-tab"
                    >
                      <div className="setting-right">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="mb-4">{t("account")}</h3>
                            {account ? (
                              <AccountForm id={account.id} />
                            ) : (
                              <AccountFormLogin />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        tab == 1 ? "tab-pane fade show active" : "tab-pane fade"
                      }`}
                      //   className="tab-pane fade"
                      id="pills-notification"
                      role="tabpanel"
                      tabindex="0"
                      aria-labelledby="pills-notification-tab"
                    >
                      <div className="setting-right">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="mb-4">Change password</h3>
                            {account ? (
                              <AccountFormChangeP id={account.id} />
                            ) : (
                              <AccountFormLogin />
                            )}
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
      </div>
      <Footer />
    </div>
  );
}

const AccountForm = (props) => {
  const { t, i18n } = useTranslation();
  const [acc, setAcc] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  //load account
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = "http://localhost:3000/account/" + props.id;
      // gửi một yêu cầu HTTP GET đến url
      const reponse = await fetch(requestUrl);
      //chuyển đổi phản hồi thành đối tượng JSON
      const reponseJson = await reponse.json();
      //cập nhật giá trị của products
      setAcc(reponseJson);
    }
    fetchPostList();
  }, []);

  useEffect(() => {
    // kiểm tra sự thay đổi của acc, nếu đã load xong
    if (acc) {
      setName(acc.name);
      setPhone(acc.phone);
      setDob(acc.dob);
      setAddress(acc.address);
    }
  }, [acc]);

  // Nếu account chưa load xong
  if (acc === null) {
    return <div>Loading...</div>;
  }
  // cập nhật info acc lên server
  const updateAccountOnServer = async (updatedAccount) => {
    try {
      const response = await fetch(
        "http://localhost:3000/account/" + updatedAccount.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAccount),
        }
      );
      const responseData = await response.json();
      setMessage("Update successful !!!");

      // cập nhật dữ liệu vào local
      updatedAccount.pass = "";
      localStorage.setItem("user-info", JSON.stringify(updatedAccount));
      console.log(responseData); // Dữ liệu phản hồi từ server
    } catch (error) {
      setMessage("Update failed !!!");
      console.error(error);
    }

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  // sự kiện update info account
  const handleClickUpdateInfo = () => {
    //tạo account với thông tin mới
    const updatedAccount = {
      id: acc.id,
      email: acc.email,
      pass: acc.pass,
      name: name,
      phone: phone,
      address: address,
      dob: dob,
    };
    updateAccountOnServer(updatedAccount);
  };
  return (
    <div className="row">
      <div className="col-xl-6 col-sm-6">
        <div className="setting-input">
          <label for="exampleInputtext" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputtext"
            placeholder="Nguyen Van A"
            value={name}
            onChange={(e) => setName(e.target.value.toString())}
          />
        </div>
        <div className="setting-input">
          <label for="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="+1233456778"
            value={phone}
            onChange={(e) => setPhone(e.target.value.toString())}
          />
        </div>
        <p className="messAcount">{message}</p>
      </div>
      <div className="col-xl-6 col-sm-6">
        <div className="setting-input">
          <label for="exampleInputnumber" className="form-label">
            D.O.B
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputnumber"
            placeholder="dd/mm/yyyy"
            value={dob}
            onChange={(e) => setDob(e.target.value.toString())}
          />
        </div>
        <div className="setting-input">
          <label for="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Street, commune, district, province/city"
            value={address}
            onChange={(e) => setAddress(e.target.value.toString())}
          />
        </div>
        <a
          href="javascript:void(0);"
          className="btn btn-primary float-end w-50 btn-md"
          onClick={handleClickUpdateInfo}
        >
          Update
        </a>
      </div>
    </div>
  );
};
const AccountFormLogin = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  //sự kiện click chuyến đên login
  const handleClickLogin = () => {
    navigate("/login");
  };
  return (
    <div className="row">
      <div className="col-xl-6 col-sm-6">
        <div className="setting-input">
          <p>{t("cusNotLogAcc")}</p>
        </div>
        <button className="loginbtnAc" onClick={handleClickLogin}>
          {t("login")}
        </button>
      </div>
    </div>
  );
};
const AccountFormChangeP = (props) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [pass, setPass] = useState("");
  const [mess, setMess] = useState("");
  const [acc, setAcc] = useState(null);

  //load account
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = "http://localhost:3000/account/" + props.id;
      // gửi một yêu cầu HTTP GET đến url
      const reponse = await fetch(requestUrl);
      //chuyển đổi phản hồi thành đối tượng JSON
      const reponseJson = await reponse.json();
      //cập nhật giá trị của products
      setAcc(reponseJson);
    }
    fetchPostList();
  }, []);

  useEffect(() => {
    // kiểm tra sự thay đổi của acc, nếu đã load xong
    if (acc) {
      setPass(acc.pass);
    }
  }, [acc]);

  // Nếu account chưa load xong
  if (acc === null) {
    return <div>Loading...</div>;
  }

  // cập nhật account lên server
  const updateAccountOnServer = async (updatedAccount) => {
    try {
      const response = await fetch(
        "http://localhost:3000/account/" + updatedAccount.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAccount),
        }
      );
      const responseData = await response.json();
      setMess("Change password successful !!!");
      console.log(responseData); // Dữ liệu phản hồi từ server
    } catch (error) {
      setMess("Password change failed !!!");
      console.error(error);
    }
  };

  //sự kiện click change pass
  const handleClickChangePass = () => {
    // kiểm tra mật khẩu
    if (pass.toString() === oldPass.toString()) {
      if (newPass.trim().length < 8) {
        setMess("Password must be at least 8 characters !!!");
      } else {
        const updatedAccount = {
          id: props.id,
          email: props.email,
          pass: newPass,
          name: props.name,
          phone: props.phone,
          address: props.address,
          dob: props.dob,
        };
        updateAccountOnServer(updatedAccount);
      }
    } else {
      setMess("Wrong password !!!");
    }
    setTimeout(() => {
      setMess("");
    }, 5000);
    setOldPass("");
    setNewPass("");
  };

  return (
    <div className="row">
      <div className="col-xl-6 col-sm-6">
        <div className="setting-input">
          <label for="exampleInputtext" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputtext"
            disabled
            value={acc.email}
          />
        </div>
        <p className="messAcount">{mess}</p>
      </div>
      <div className="col-xl-6 col-sm-6">
        <div className="setting-input">
          <label for="exampleInputnumber" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputnumber"
            placeholder="********"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value.toString())}
          />
        </div>
        <div className="setting-input">
          <label for="exampleInputPassword1" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="********"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value.toString())}
          />
        </div>
        <a
          href="javascript:void(0);"
          className="btn btn-primary float-end w-50 btn-md"
          onClick={handleClickChangePass}
        >
          Save
        </a>
      </div>
    </div>
  );
};
