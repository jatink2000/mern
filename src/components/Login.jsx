import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let [login, setlogin] = useState([])


    let inputvalue = (e) => {
        setlogin(
            { ...login, [e.target.name]: e.target.value }
        )
    }
    let go = useNavigate()

    let logapi = () => {
        axios.post("https://mern-backend-omega-five.vercel.app/admin", { login }).then((res) => {
            if (res.data.status) {
                go("/admindashboard")
            }
            else {
                axios.post("https://mern-backend-omega-five.vercel.app/login",{login}).then((res)=>{
                    if(res.data.status){
                        alert(res.data.msg)
                        go("/home")
                    }
                    else{
                        alert(res.data.msg)
                    }
                }).catch((err)=>{
                    console.log("login",err)
                })
            }
        }).catch((err) => {
            console.log(err)
        })



    }


    return (
        <>
            <h1>login</h1>
            <input type='email' placeholder=' email' name='email' onChange={inputvalue} />
            <input type='password' placeholder=' password' name='password' onChange={inputvalue} />
            <button onClick={logapi}>login</button>
        </>
    )
}

export default Login