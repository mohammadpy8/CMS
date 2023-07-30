import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { TiInputChecked } from "react-icons/ti";
import { MdTransitEnterexit, MdClose, MdOutlineInvertColors } from "react-icons/md";
import { LiaLeanpub } from "react-icons/lia";
import { GiMoneyStack } from "react-icons/gi";

import showNotification from "../../shared/Toast";
import { ToastContainer } from "react-toastify";

import "./ProductTable.css";

const ProductTable = () => {

  const [isShowModal, setIsShowModal] = useState(false);
  const [isDetailsModal, setDetailsModal] = useState(false);
  const [isEditeModal, setEditeModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [mainProductInfo, setMainProductInfo] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopular, setProductNewPopular] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

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
      .then((response) => response.json())
      .then((result) => {
        setIsShowModal(false);
        showNotification("محصول با موفقیت حذف شد");
        getAllProducts();
      });
    
  };

  const closeDetailsModalAction = () => setDetailsModal(false);

  const updateProductInfo = (event) => {
    
    event.preventDefault();

    const productNewInfos = {

      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopular,
      sale: productNewSale,
      colors: productNewColors,

    };

    fetch(`http://localhost:8000/api/products/${productID}`, {

      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productNewInfos),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        showNotification("ویرایش محصول با موفقیت انجام شد");
        getAllProducts();
        setEditeModal(false);
      });
    
  };

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
                  <td>{price.toLocaleString()}</td>
                  <td>{count}</td>
                  <td>
                    <button
                      className="product-table-btn"
                      onClick={() => {
                        setDetailsModal(true);
                        setMainProductInfo(product);
                      }}
                    >
                      جزئیات
                    </button>
                    <button
                      className="product-table-btn"
                      onClick={() => {
                        setIsShowModal(true);
                        setProductID(id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="product-table-btn"
                      onClick={() => {

                        setEditeModal(true)
                        setProductID(product.id)
                        setMainProductInfo(product)
                        setProductNewTitle(product.title)
                        setProductNewPrice(product.price)
                        setProductNewCount(product.count)
                        setProductNewImg(product.img)
                        setProductNewPopular(product.popularity)
                        setProductNewSale(product.sale)
                        setProductNewColors(product.colors)
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
        <ErrorBox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
        />
      )}
      {isDetailsModal && (
        <DetailsModal closeDetailsModalAction={closeDetailsModalAction}>
          <MdClose
            className="close-icon"
            onClick={() => closeDetailsModalAction()}
          />
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگبندی</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{mainProductInfo.popularity}</td>
                <td>{mainProductInfo.sale.toLocaleString()}</td>
                <td>{mainProductInfo.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
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
              value={productNewTitle}
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewTitle(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle className="edit-icon-form" />
            </span>
            <input
              type="text"
              value={productNewPrice}
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewPrice(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <MdTransitEnterexit className="edit-icon-form" />
            </span>
            <input
              type="text"
              value={productNewCount}
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewCount(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <BiImage className="edit-icon-form" />
            </span>
            <input
              type="text"
              value={productNewImg}
              placeholder="آدرس عکس جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewImg(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <LiaLeanpub className="edit-icon-form" />
            </span>
            <input
              type="text"
              value={productNewPopular}
              placeholder=" میزان محبوبیت جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewPopular(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <GiMoneyStack className="edit-icon-form" />
            </span>
            <input
              type="text"
              value={productNewSale}
              placeholder=" میزان فروش جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewSale(event.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <MdOutlineInvertColors className="edit-icon-form" />
            </span>
            <input
              type="text"
              value={productNewColors}
              placeholder=" تعداد رنگبندی جدید را وارد کنید"
              className="edit-product-input"
              onChange={(event) => setProductNewColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
      <ToastContainer />
    </>
  );
};

export default ProductTable;
