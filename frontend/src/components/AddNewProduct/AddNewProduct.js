import React, { useState } from "react";

import { TiInputChecked } from "react-icons/ti";
import { BiDollar, BiImage } from "react-icons/bi";
import {
  MdTransitEnterexit,
  MdOutlinePayments,
  MdOutlineColorLens,
} from "react-icons/md";
import { LuPanelTopOpen } from "react-icons/lu";

import showNotification from "../../shared/Toast";
import { ToastContainer } from "react-toastify";

import "./AddNewProduct.css";

const AddNewProduct = ({getAllProducts}) => {

  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopular, setNewProductPopular] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const newProductsInfos = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopular,
    sale: newProductSale,
    colors: newProductColors,
  };

  const addNewProduct = (event) => {

    event.preventDefault();

    fetch(`http://localhost:8000/api/products`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProductsInfos),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        showNotification("محصول با موفقیت اضافه شد");
        getAllProducts();
        clearInput();
      })
      .catch(err => console.log(err));   

  };

  const clearInput = () => {

    setNewProductTitle("");
    setNewProductPrice("");
    setNewProductCount("");
    setNewProductImg("");
    setNewProductPopular("");
    setNewProductSale("");
    setNewProductColors("");

  };

  return (
    <div className="product-main">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form className="product-from">
        <div className="product-form-wrapp">
          <div className="product-form-group">
            <TiInputChecked className="icon"/>
            <input
              type="text"
              value={newProductTitle}
              placeholder="اسم محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductTitle(event.target.value) }
            />
          </div>
          <div className="product-form-group">
            <BiDollar className="icon"/>
            <input
              type="text"
              value={newProductPrice}
              placeholder="قیمت محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductPrice(event.target.value) }
            />
          </div>
          <div className="product-form-group">
            <MdTransitEnterexit className="icon"/>
            <input
              type="text"
              value={newProductCount}
              placeholder="موجودی محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductCount(event.target.value) }
            />
          </div>
          <div className="product-form-group">
            <BiImage className="icon"/>
            <input
              type="text"
              value={newProductImg}
              placeholder="آدرس عکس محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductImg(event.target.value) }
            />
          </div>
          <div className="product-form-group">
            <LuPanelTopOpen className="icon"/>
            <input
              type="text"
              value={newProductPopular}
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductPopular(event.target.value) }
            />
          </div>
          <div className="product-form-group">
            <MdOutlinePayments className="icon"/>
            <input
              type="text"
              value={newProductSale}
              placeholder="میزان فروش محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductSale(event.target.value) }
            />
          </div>
          <div className="product-form-group">
            <MdOutlineColorLens className="icon"/>
            <input
              type="text"
              value={newProductColors}
              placeholder="تعداد رنگبندی محصول را بنویسید"
              className="product-input"
              onChange={(event) => setNewProductColors(event.target.value) }
            />
          </div>
        </div>
        <button className="admin-btn" onClick={addNewProduct}>ثبت محصول</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNewProduct;
