import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { TiInputChecked } from "react-icons/ti";
import { MdTransitEnterexit } from "react-icons/md";

import showNotification from "../../shared/Toast";
import { ToastContainer } from 'react-toastify';

import "./ProductTable.css";

const ProductTable = () => {

  const [isShowModal, setIsShowModal] = useState(false);
  const [isDetailsModal, setDetailsModal] = useState(false);
  const [isEditeModal, setEditeModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);

  useEffect(() => {

    getAllProducts();

  }, []);

  const getAllProducts = () => {

    fetch("http://localhost:8000/api/products/")
      .then((response) => response.json())
      .then((products) => setAllProducts(products));
  
  };

  const deleteModalCancelAction = () => setIsShowModal(false);

  const deleteModalSubmitAction = () => {

    fetch(`http://localhost:8000/api/products/${productID}`, {

      method: "DELETE",
    })
      .then(response => response.json())
      .then(result => {
        setIsShowModal(false);
        showNotification("محصول با موفقیت حذف شد");
        getAllProducts();
      });

  };
  const ModalDetailHandler = () => setDetailsModal(true);
  const closeDetailsModalAction = () => setDetailsModal(false);
  const ModalEditeHandler = () => setEditeModal(true);
  const updateProductInfo = (event) => event.preventDefault();

  return (
    <>
      {allProducts.length ? (
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
            {allProducts.map((product) => {
              const { id, title, price, colors, img, count, popularity } =
                product;
              return (
                <tr className="product-table-tr" key={id}>
                  <td>
                    <img src={img} alt="img" className="product-table-img" />
                  </td>
                  <td>{title}</td>
                  <td>{price}</td>
                  <td>{count}</td>
                  <td>
                    <button
                      className="product-table-btn"
                      onClick={ModalDetailHandler}
                    >
                      جزئیات
                    </button>
                    <button
                      className="product-table-btn"
                      onClick={() => {
                        setIsShowModal(true)
                        setProductID(id)
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="product-table-btn"
                      onClick={ModalEditeHandler}
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
        <ErrorBox msg="هیچ محصولی یافت نشد" />
      )}

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
              <TiInputChecked className="edit-icon-form" />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle className="edit-icon-form" />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <MdTransitEnterexit className="edit-icon-form" />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <BiImage className="edit-icon-form" />
            </span>
            <input
              type="text"
              placeholder="آدرس عکس جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
      <ToastContainer />
    </>
  );
};

export default ProductTable;
