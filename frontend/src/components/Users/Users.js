import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("http://localhost:8000/api/users/")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);

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
                    <button className="btn-comment-section">حذف</button>
                    <button className="btn-comment-section">جزئیات</button>
                    <button className="btn-comment-section">ویرایش</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}
    </div>
  );
};

export default Users;
