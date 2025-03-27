import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    let [apidata, setapidata] = useState([])

    useEffect(() => {
        ourproduct()
    }, [])

    let ourproduct = () => {
        axios.get("https://mern-backend-omega-five.vercel.app/ourproduct").then((res) => {
            if (res.data.status) {
                setapidata(res.data.product)
            }
        }).catch((err) => {
            console.log("ourproduct", err)
        })
    }


    // addtocart ----------

    let addtocart = (item) => {
        axios.get("https://mern-backend-omega-five.vercel.app/cartproduct").then((res) => {
            if (res.data.status) {
                let alreadycartitem = res.data.product
                let filtercartitem = alreadycartitem.filter(data => data.productid == item._id)
                let existdata = filtercartitem[0]   
                if (existdata) {
                    alert("already in cart")
                }
                else {
                    axios.post("https://mern-backend-omega-five.vercel.app/addtocart",{item}).then((res) => {
                        if (res.data.status) {
                           alert(res.data.msg)
                        }
                        else{
                            alert(res.data.msg)
                        }
                    }).catch((err) => {
                        console.log("ourproduct", err)
                    })
                }
            }
        })
    }
    return (
        <>
            <h1>our products</h1>
            {apidata.map((item) => {
                return (
                    <>
                        <img src={item.productimage} />
                        <h4>{item.productname}</h4>
                        <p>{item.productprice}</p>
                        <button onClick={() => addtocart(item)}>add to cart</button>
                        <p>{item.productdes}</p>
                    </>
                )
            })}

        </>
    )
}
export default Products