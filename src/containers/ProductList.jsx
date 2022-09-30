// import React, {useEffect, useState} from "react";
import React from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
// import axios from 'axios';
import useGetProducts from "@hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  // 	getProducts()
  // }, [])

  // const getProducts = async () =>{
  // 	const response = await axios(API);
  // 	setProducts(response.data);
  // };
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {/* revuelve todos los prodcutos de una API */}
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
