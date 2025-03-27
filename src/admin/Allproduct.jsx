import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Allproduct() {

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


        let deleteprouct=(item)=>{
            axios.post("https://mern-backend-omega-five.vercel.app/deleteproduct",{item}).then((res)=>{
                if(res.data.status){
                    alert(res.data.msg)
                }
                else{
                    alert(res.data.msg)
                }
            }).catch((err)=>{
                console.log(err)
            })
        }

       let loc= useNavigate()

        let updateproduct=(item)=>{
            loc("/updateproduct",{state:item})
        }

  return (
    
    <>
        <h1>Allproducts</h1>
        <table border={1}>
                <tr>
                    <th>productname</th>
                    <th>productimage</th>
                    <th>productprice</th>
                    <th>button</th>
                </tr>

                {apidata.map((item)=>{
                    return(
                        <>
                            <tr>
                                <td>{item.productname}</td>
                                <td><img src={item.productimage}/></td>
                                <td>{item.productprice}</td>
                                <td><button onClick={()=>updateproduct(item)}>edit</button><button onClick={()=>deleteprouct(item)}>delete</button></td>
                            </tr>
                        </>
                    )
                })}
                
        </table>
    </>
  )
}

export default Allproduct