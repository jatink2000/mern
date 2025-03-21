import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Updateproduct() {
  let groot=useLocation()
  


  let [product,setproduct]=  useState(groot.state||{})

  let inputvalue=(e)=>{
    setproduct(
        {...product,[e.target.name]:e.target.value}
    )
  }


  let updateproduct=()=>{
    axios.post("http://localhost:8080/updateproduct",{product})
  }

  return (
    <>
    <h1>updateproduct</h1>
        <input type='text' placeholder='product-name' name='productname' value={product.productname} onChange={inputvalue}/>
        <input type='text' placeholder='product-image url' name='productimage' onChange={inputvalue} value={product.productimage}/>
        <input type='text' placeholder='product-price' name='productprice' onChange={inputvalue} value={product.productprice}/>
        <input type='text' placeholder='product-des' name='productdes' onChange={inputvalue} value={product.productdes}/>
        <input type='text' placeholder='product-quantity' name='productquantity' onChange={inputvalue} value={product.productquantity}/>
        <button onClick={updateproduct}>updateproduct</button>
    </>
  )
}

export default Updateproduct