import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import DetailsModal from "../DetailsModal/DetailsModal";

import showNotification from "../../shared/Toast";
import { ToastContainer } from "react-toastify";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { TiInputChecked } from "react-icons/ti";
import {
  MdTransitEnterexit,
  MdClose,
  MdOutlineInvertColors,
} from "react-icons/md";
import { LiaLeanpub } from "react-icons/lia";
import { GiMoneyStack } from "react-icons/gi";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditeModal, setIsShowEditeModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [userID, setUserID] = useState(null);
  const [mainUserInfo, setMainUserInfo] = useState({});

  const [userNewFirstName, setUserNewFirstName] = useState("");
  const [userNewLastNmae, setUserNewLastNmae] = useState("");
  const [userNewUserName, setUserNewUserName] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");

  const getAllUsers = () => {
    fetch("http://localhost:8000/api/users/")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteModalCancel = () => setIsShowDeleteModal(false);
  const closeEditModal = () => setIsShowEditeModal(false);

  const deleteUser = () => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        showNotification("کاربر با موفقیت حذف شد");
        setIsShowDeleteModal(false);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (event) => {
    event.preventDefault();

    const userNewInfos = {
      firsname: userNewFirstName,
      lastname: userNewLastNmae,
      username: userNewUserName,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    setIsShowEditeModal(false);

    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setIsShowEditeModal(false);
        showNotification("اطلاعات کاربر با موفقیت ویرایش شد");
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cms-main">
      <h1 className="users-list">لیست کاربران</h1>
      {users.length ? (
        <table className="cms-table">
          <thead>
            <tr className="tr-border">
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>گزرواژه</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              const {
                id,
                firsname,
                lastname,
                email,
                password,
                phone,
                username,
                city,
                address,
                buy,
                score,
              } = user;
              return (
                <tr key={id}>
                  <td>{`${firsname} ${lastname}`}</td>
                  <td>{username}</td>
                  <td>{password}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>
                    <button
                      className="btn-comment-section"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setUserID(id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="btn-comment-section"
                      onClick={() => {
                        setMainUserInfo(user);
                        setIsShowDetailsModal(true);
                      }}
                    >
                      جزئیات
                    </button>
                    <button
                      className="btn-comment-section"
                      onClick={() => {
                        setIsShowEditeModal(true);
                        setUserID(id);
                        setUserNewFirstName(firsname);
                        setUserNewLastNmae(lastname);
                        setUserNewUserName(username);
                        setUserNewPassword(password);
                        setUserNewPhone(phone);
                        setUserNewCity(city);
                        setUserNewEmail(email);
                        setUserNewAddress(address);
                        setUserNewScore(score);
                        setUserNewBuy(buy);
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف کاربر مطمعن هستید؟"
          deleteModalCancelAction={deleteModalCancel}
          deleteModalSubmitAction={deleteUser}
        />
      )}
      {isShowEditeModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewFirstName}
              onChange={(event) => setUserNewFirstName(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewLastNmae}
              onChange={(event) => setUserNewLastNmae(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewUserName}
              onChange={(event) => setUserNewUserName(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewPassword}
              onChange={(event) => setUserNewPassword(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewPhone}
              onChange={(event) => setUserNewPhone(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewCity}
              onChange={(event) => setUserNewCity(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewEmail}
              onChange={(event) => setUserNewEmail(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewAddress}
              onChange={(event) => setUserNewAddress(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewScore}
              onChange={(event) => setUserNewScore(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              value={userNewBuy}
              onChange={(event) => setUserNewBuy(event.target.value)}
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
        </EditModal>
      )}
      {isShowDetailsModal && (
        <DetailsModal
          closeDetailsModalAction={() => setIsShowDetailsModal(false)}
        >
          <MdClose
            className="close-icon"
            onClick={() => setIsShowDetailsModal(false)}
          />
          <table className="cms-table">
            <thead>
              <tr className="tr-border">
                <th>شهر</th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>مقدار خرید</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{mainUserInfo.city}</td>
                <td>{mainUserInfo.address}</td>
                <td>{mainUserInfo.score}</td>
                <td>{mainUserInfo.buy}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="close-modal-details"
            onClick={() => setIsShowDetailsModal(false)}
          >
            بستن
          </button>
        </DetailsModal>
      )}
      <ToastContainer />
    </div>
  );
};

export default Users;
