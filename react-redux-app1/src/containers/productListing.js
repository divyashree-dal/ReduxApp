import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../containers/productComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Get error", err);
        });

        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>

    )


}

export default ProductListing;