import React from "react";
import "./AddNewProduct.css";

const AddNewProduct = () => {
  return (
    <div className="product-main">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form className="product-from">
        <div className="product-form-wrapp">
          <div className="product-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="product-input"
            />
          </div>
          <div className="product-form-group">
            <input
              type="text"
              placeholder="تعداد رنگبندی محصول را بنویسید"
              className="product-input"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
