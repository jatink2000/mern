import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    let [login, setlogin] = useState([])


    let inputvalue = (e) => {
        setlogin(
            { ...login, [e.target.name]: e.target.value }
        )
    }


    let go = useNavigate()

    let signup = () => {

        axios.get("https://mern-backend-omega-five.vercel.app/allusers").then((res) => {
            if (res.data.status) {
                let groot = res.data.users

                let filterdata = groot.filter(data => data.email == login.email)
                let existuser = filterdata[0]

                if (existuser) {
                    alert("already user")
                    go("/")
                }
                
                else {
                    axios.post("https://mern-backend-omega-five.vercel.app/signup", { login }).then((res) => {
                        if (res.data.stauts) {
                            alert(res.data.msg)
                        }
                        else {
                            alert(res.data.msg)
                        }
                    })
                }

            }
        })




    }




    return (
        <>
            <h1>signup</h1>
            <input type='email' placeholder=' email' name='email' onChange={inputvalue} />
            <input type='text' placeholder=' username' name='username' onChange={inputvalue} />
            <input type='password' placeholder=' password' name='password' onChange={inputvalue} />
            <button onClick={signup}>signup</button>
        </>
    )
}

export default Signup