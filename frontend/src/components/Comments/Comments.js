import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";

import { MdClose } from "react-icons/md";

import "./Comments.css";

const Comments = () => {
    
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");

    useEffect(() => {
      
    fetch("http://localhost:8000/api/comments/")
      .then((response) => response.json())
      .then((comment) => {
        setAllComments(comment);
        console.log(comment);
      })
            .catch((err) => console.log(err));
        
  }, []);

  const closeDetailModal = () => setIsShowDetailsModal(false);

    useEffect(() => {
      
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        setIsShowDetailsModal(false);
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="cms-main">
      <h1 className="title-comment">کامنت ها بررسی نشده</h1>
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr className="tr-border">
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ </th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => {
              const { id, userID, productID, body, hour, date } = comment;
              return (
                <tr key={id}>
                  <td>{userID}</td>
                  <td>{productID}</td>
                  <td>
                    <button
                      className="btn-comment"
                      onClick={() => {
                        setIsShowDetailsModal(true);
                        setMainCommentBody(body);
                      }}
                    >
                      دیدن کامنت
                    </button>
                  </td>
                  <td>{date}</td>
                  <td>{hour}</td>
                  <td>
                    <button className="btn-comment-section">حذف</button>
                    <button className="btn-comment-section">ویرایش</button>
                    <button className="btn-comment-section">پاسخ</button>
                    <button className="btn-comment-section">تایید</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد" />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailModal}>
          <MdClose
            className="icon-close-comment"
            onClick={() => setIsShowDetailsModal(false)}
          />
          <p className="text-modal">{mainCommentBody}</p>
          <button
            className="text-modal-close-btn"
            onClick={() => setIsShowDetailsModal(false)}
          >
            بستن
          </button>
        </DetailsModal>
      )}
    </div>
  );
};

export default Comments;
