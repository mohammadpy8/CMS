import React, {useEffect, useState} from 'react';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import ProductTable from '../ProductTable/ProductTable';

import "./Products.css";

const Products = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {

        getAllProducts();

      }, []);
       
    const getAllProducts = () => {
    
        fetch("http://localhost:8000/api/products/")
            .then((response) => response.json())
            .then((product) => setAllProducts(product)); 
    };

    return (
        <>
            <AddNewProduct getAllProducts={getAllProducts} />
            <ProductTable getAllProducts={getAllProducts} allProducts={allProducts} />
        </>
    );
};

export default Products;