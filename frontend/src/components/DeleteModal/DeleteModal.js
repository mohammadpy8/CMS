import React from "react";
import reactDOM from "react-dom";

import "./DeleteModal.css";

const DeleteModal = (props) => {

  const { deleteModalCancelAction, deleteModalSubmitAction } = props;

  return reactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف مطمعن هستید؟</h1>
        <div className="delete-modal-btn">
          <button
            className="delete-btn delete-modal-accept"
            onClick={() => deleteModalSubmitAction()}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject"
            onClick={() => deleteModalCancelAction()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
};

export default DeleteModal;
