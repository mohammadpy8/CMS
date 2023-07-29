import React from "react";
import { TiInputChecked } from "react-icons/ti";
import { BiDollar, BiImage } from "react-icons/bi";
import {
  MdTransitEnterexit,
  MdOutlinePayments,
  MdOutlineColorLens,
} from "react-icons/md";
import { LuPanelTopOpen } from "react-icons/lu";

import "./AddNewProduct.css";

const AddNewProduct = () => {
  return (
    <div className="product-main">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form className="product-from">
        <div className="product-form-wrapp">
          <div className="product-form-group">
            <TiInputChecked className="icon"/>
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <BiDollar className="icon"/>
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <MdTransitEnterexit className="icon"/>
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <BiImage className="icon"/>
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <LuPanelTopOpen className="icon"/>
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <MdOutlinePayments className="icon"/>
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <MdOutlineColorLens className="icon"/>
            <input
              type="text"
              placeholder="تعداد رنگبندی محصول را بنویسید"
              className="product-input"
            />
          </div>
        </div>
        <button className="admin-btn">ثبت محصول</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
