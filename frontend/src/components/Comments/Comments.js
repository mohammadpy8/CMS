import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

import { MdClose } from "react-icons/md";

import showNotification from "../../shared/Toast";
import { ToastContainer } from "react-toastify";

import "./Comments.css";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [commentID, setCommentId] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [textComment, setTextComment] = useState({});

  useEffect(() => {
    getCommentsApi();
  }, []);

  const getCommentsApi = () => {
    fetch("http://localhost:8000/api/comments/")
      .then((response) => response.json())
      .then((comment) => {
        setAllComments(comment);
        console.log(comment);
      })
      .catch((err) => console.log(err));
  };

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

  const deleteModalCancelAction = () => setIsShowDeleteModal(false);

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        showNotification("کامنت با موفقیت حذف شد");
        setIsShowDeleteModal(false);
        getCommentsApi();
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (event) => {
    const newCommentEdite = {
      body: newComment,
    };

    event.preventDefault();

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentEdite),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        showNotification("ویرایش کامنت با موفقیت انجام شد");
        getCommentsApi();
          setIsShowEditModal(false);
          setNewComment("");
      })
      .catch((err) => console.log(err));
  };

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
                    <button
                      className="btn-comment-section"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setCommentId(id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="btn-comment-section"
                      onClick={() => {
                        setIsShowEditModal(true);
                        setTextComment(body);
                      }}
                    >
                      ویرایش
                    </button>
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
      {isShowDeleteModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
        />
      )}
      {isShowEditModal && (
        <EditModal
          onSubmit={onSubmit}
          onClose={() => setIsShowEditModal(false)}
        >
          <h1 className="comment-now">کامنت فعلی</h1>
          <p className="text-comment">{textComment}</p>
          <textarea
            placeholder="کامنت جدید را وارد کنید"
            className="comment-edit-text"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
        </EditModal>
      )}
      <ToastContainer />
    </div>
  );
};

export default Comments;
