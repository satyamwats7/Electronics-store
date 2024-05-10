import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
 const {id} = useParams()

 const [Product, setProduct] = useState({});
 const [relatedProducts, setRelatedProducts] = useState([])


 useEffect(() => {
  const filterProduct = items.filter((Product) => Product.id == id)
  setProduct(filterProduct[0])

  const relatedProducts = items.filter((Satyam) => Satyam.category === Product.category)
  
  setRelatedProducts(relatedProducts)
 
 }, [id, Product.category]);
 


 return (
  <>
   <div className="container con">
    <div className="img">
     <img src={Product.imgSrc} alt=""/>

    </div>
    <div className="text-center">
     <h1 className="card-title">{Product.title}</h1>
     <p className="card-text">{Product.description} </p>


     <button type="button" className="btn btn-primary mx-3">{Product.price}{" "}₹</button>

     <button type="button" className="btn btn-warning">Add To Cart</button>
    </div>
    
   </div>
   <h1 className="text-center">Related Products</h1>
   {/* comsole.log(items); */}
   {/* <Product items={items} /> */}
   {/* console.log("relatedProducts"); */}
   

  </>
 );
};

export default ProductDetail;
