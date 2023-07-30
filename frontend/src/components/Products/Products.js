import React from 'react';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import ProductTable from '../ProductTable/ProductTable';

import "./Products.css";

const Products = () => {
    return (
        <>
            <AddNewProduct />
            <ProductTable />
        </>
    );
};

export default Products;