
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';





function App() {
  const [count,setCount]= useState(0);
  
  function Cart(){
    setCount(count+1);
  }
  const minusCart=()=>{
    if(count<=0){
      return
    }
    setCount(count-1);
  }

  
 
   
  return (
    <div className="App">
      <Menu count={count}></Menu>
      <Products Cart={Cart} minusCart={minusCart}></Products>
     

      
    </div>
  );
}

export default App;
