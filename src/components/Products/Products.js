import React, { useEffect, useState } from 'react';
import SingleProduct from '../Single-Product/SingleProduct';

const Products = (props) => {
   
    
    const [Products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    
    return (
        <div>
           <h1>All products</h1>
           <div className="row">
           {
                Products.map(product=>(<SingleProduct product={product} key={product.id} setCart={props.Cart} deleteCart={props.minusCart}  ></SingleProduct>))
               
            }
             
           </div>
         
           
           

            
        </div>
    );
};

export default Products;