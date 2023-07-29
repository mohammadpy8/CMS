import React from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';
import AddNewProduct from '../AddNewProduct/AddNewProduct';

import "./Products.css";

const Products = () => {
    return (
        <>
            <ErrorBox msg="هیچ محصولی یافت نشد" />
            <AddNewProduct />
        </>
    );
};

export default Products;