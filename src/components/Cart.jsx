import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cart() {
   

    let [apidata, setapidata] = useState([])

    useEffect(() => {
        cartproduct()
    }, [])

    let cartproduct = () => {
        axios.get("https://mern-backend-omega-five.vercel.app/cartproduct").then((res) => {
            if (res.data.status) {
                setapidata(res.data.product)
            }
        }).catch((err) => {
            console.log("cartproduct", err)
        })
    }


    // remove product 

    let removeproduct=(item)=>{
        axios.post("https://mern-backend-omega-five.vercel.app/removecartproduct",{item}).then((res) => {
            if (res.data.status) {
                alert(res.data.msg)
                window.location.reload()
            }
            else{
                alert(res.data.msg)
            }
        }).catch((err) => {
            console.log("cartproduct", err)
        })
    }


    let Cartitem=({data})=>{
        let [quantity,setquantity]= useState(data.productquantity)
        let increment=()=>{
            setquantity(++quantity)
            axios.post("https://mern-backend-omega-five.vercel.app/updatecartproduct",{quantity,data})
        }


        let decrement=()=>{
            setquantity(--quantity)
            axios.post("https://mern-backend-omega-five.vercel.app/updatecartproduct",{quantity,data})
        }

        return(
            <>
                <img src={data.productimage}/>
                    <p>{quantity}</p>
                    <p>{data.productprice}</p>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button onClick={()=>removeproduct(data)}>remove product</button>


            </>
        )
    }

  return (
    <>
        <h1>cart item</h1>
        {apidata.map((item)=>{
            return(
                <>
                        <Cartitem data={item}/>
                </>
            )
        })}

        <button>checkout</button>
    </>
  )
}
export default Cart