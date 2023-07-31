import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

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
  const [userID, setUserID] = useState(null);

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

        setIsShowEditeModal(false);

        fetch(`http://localhost:8000/api/users/${userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })

    }

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
                    <button className="btn-comment-section">جزئیات</button>
                    <button
                      className="btn-comment-section"
                      onClick={() => {
                          setIsShowEditeModal(true);
                          setUserID(id);
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
              <EditModal onClose={closeEditModal}
              onSubmit={updateUser}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
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
              className="edit-user-info-input"
              placeholder="نام جدید کاربر را وارد کنید"
            />
          </div>
        </EditModal>
      )}
      <ToastContainer />
    </div>
  );
};

export default Users;
