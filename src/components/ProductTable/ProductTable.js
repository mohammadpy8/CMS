import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { TiInputChecked } from "react-icons/ti";
import { MdTransitEnterexit } from "react-icons/md";

import "./ProductTable.css";

const ProductTable = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isDetailsModal, setDetailsModal] = useState(false);
  const [isEditeModal, setEditeModal] = useState(false);

  const ModalHandler = () => setIsShowModal(true);
  const deleteModalCancelAction = () => setIsShowModal(false);
  const deleteModalSubmitAction = () => setIsShowModal(false);
  const ModalDetailHandler = () => setDetailsModal(true);
  const closeDetailsModalAction = () => setDetailsModal(false);
  const ModalEditeHandler = () => setEditeModal(true);
  const updateProductInfo = (event) => event.preventDefault();

  return (
    <>
      <table className="product-table">
        <thead>
          <tr className="product-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>

        <tbody>
          <tr className="product-table-tr">
            <td>
              <img src="logo192.png" alt="img" className="product-table-img" />
            </td>
            <td>ریکت</td>
            <td>920000</td>
            <td>82</td>
            <td>
              <button
                className="product-table-btn"
                onClick={ModalDetailHandler}
              >
                جزئیات
              </button>
              <button className="product-table-btn" onClick={ModalHandler}>
                حذف
              </button>
              <button className="product-table-btn" onClick={ModalEditeHandler}>
                ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {isShowModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
        />
      )}
      {isDetailsModal && (
        <DetailsModal closeDetailsModalAction={closeDetailsModalAction} />
      )}
      {isEditeModal && (
        <EditModal
          onClose={() => setEditeModal(false)}
          onSubmit={updateProductInfo}
        >
          <div className="edit-product-form-group">
            <span>
              <TiInputChecked className="edit-icon-form"/>
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle className="edit-icon-form"/>
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <MdTransitEnterexit className="edit-icon-form"/>
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <BiImage className="edit-icon-form"/>
            </span>
            <input
              type="text"
              placeholder="آدرس عکس جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
};

export default ProductTable;
