import React from "react";
import "./ProductTable.css";

const ProductTable = () => {
  return (
    <table className="product-table">
      <tr className="product-table-heading-tr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>

      <tr className="product-table-tr">
        <td>
          <img src="logo192.png" alt="img" className="product-table-img" />
        </td>
        <td>ریکت</td>
        <td>920000</td>
        <td>82</td>
        <td>
          <button className="product-table-btn">جزئیات</button>
          <button className="product-table-btn">حذف</button>
          <button className="product-table-btn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
};

export default ProductTable;
