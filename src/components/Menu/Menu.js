import React from 'react';
import "./Menu.css"


const Menu = (props) => {
    
    return (
        <div className='row'>
            <div className="col-md-2 logo  fs-2"> Logo</div>
            <div className="col-md-10 menubar d-flex justify-content-end  ">
               
                <li className=' fs-2'>Home</li>
                <li className=' fs-2'>Product</li>
                <li className=' fs-2'>cart <sup>{props.count}</sup> </li>
                <li className=' fs-2'>Contact</li>
                
            </div>
            
        </div>
    );
};

export default Menu;