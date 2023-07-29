import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

import "./ProductTable.css";

const ProductTable = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const ModalHandler = () => setIsShowModal(true);
  const deleteModalCancelAction = () => setIsShowModal(false);
  const deleteModalSubmitAction = () => setIsShowModal(false);

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
              <button className="product-table-btn">جزئیات</button>
              <button className="product-table-btn" onClick={ModalHandler}>
                حذف
              </button>
              <button className="product-table-btn">ویرایش</button>
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
    </>
  );
};

export default ProductTable;
