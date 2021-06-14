import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';

import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setProducts } from '../redux/actions/productActions';

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    // const fetchProducts = async() => {
    //     const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
    //         console.log("Error While Fetching the Products",err);
    //     });
    //     dispatch(setProducts(response.data));
    // }

    useEffect(() => {
        // fetchProducts();
        dispatch(fetchProducts());
    },[])
    return (
        <div className="ui grid container gridContainer">
            <ProductComponent/>
        </div>
    )
}

export default ProductList;