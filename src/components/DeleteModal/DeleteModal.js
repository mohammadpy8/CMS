import React from "react";
import reactDOM from "react-dom";

import "./DeleteModal.css";

const DeleteModal = () => {

  return reactDOM.createPortal(
      <div className="delete-modal">
        <h1>آیا از حذف مطمعن هستید؟</h1>
        <div className="delete-modal-btn">
          <button className="delete-btn delete-modal-accept">بله</button>
          <button className="delete-btn delete-modal-reject">خیر</button>
        </div>
      </div>,
      document.getElementById("modals-parent")
  );
};

export default DeleteModal;