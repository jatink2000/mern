import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Addproduct() {


  let [product,setproduct]=  useState([])

  let inputvalue=(e)=>{
    setproduct(
        {...product,[e.target.name]:e.target.value}
    )
  }


  let addproduct=()=>{
    axios.post("http://localhost:8080/addproduct",{product})
  }

  return (
    <>
    <h1>Addproduct</h1>
        <input type='text' placeholder='product-name' name='productname' value={product.productname} onChange={inputvalue}/>
        <input type='text' placeholder='product-image url' name='productimage' onChange={inputvalue}/>
        <input type='text' placeholder='product-price' name='productprice' onChange={inputvalue}/>
        <input type='text' placeholder='product-des' name='productdes' onChange={inputvalue}/>
        <input type='text' placeholder='product-quantity' name='productquantity' onChange={inputvalue}/>
        <button onClick={addproduct}>addproduct</button>
    </>
  )
}

export default Addproduct