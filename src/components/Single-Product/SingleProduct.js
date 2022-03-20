import React, { useState } from 'react';
import Products from '../Products/Products';
import ReactModal from '../ReactModal/ReactModal';

const SingleProduct = (props) => {
    const {product,setCart,deleteCart}=props;
    
    console.log({product})
    
   
    
    return (
        <div 
        
        className='col-md-3'>
            <div  
            className="card p-3 border m-2 ">
                <img className='w-50 p-3 mx-auto' src={product.image} alt="" />
                <h2> {product.title}</h2>
                <p>Description: {product.description.slice(1,100)}</p>
                <h1>${product.price}</h1>
                <small>Rating: {product.rating.rate}  Count:{product.rating.count}</small>
                <div className='d-flex g-3 justify-content-evenly'>
                    <button onClick={setCart} className='btn btn-primary p-2 m-2  bg-primary'>Add to Card</button>
                    <button onClick={deleteCart} className='btn btn-primary p-2 m-2  bg-danger'>Delete</button>
                    {/* <button className='btn btn-primary p-2 m-2  bg-success'>Details</button> */}
                    <ReactModal ModalProduct={product} ></ReactModal>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;