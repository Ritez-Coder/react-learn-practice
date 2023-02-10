//* useState hook : used to store data or variable in a component
import "../../App.css"
import React from 'react'
import { useState } from 'react'
import { useEffect } from "react"

export default function UseState() {

     const [db, setDB] = useState([])
     const [formData, setFormData] = useState({
          username: "",
          email: "",
          password: ""
     })

     const handleChange = (e) => {
          const name = e.target.name;
          const value = e.target.value;
          setFormData((prevFormData) => {
               return { ...prevFormData, [name]: value }
          })

     }

     useEffect(() => {
          return () => {
               setFormData({
                    username: "",
                    email: "",
                    password: ""
               })
          }
     }, [db])

     const handleFormSubmit = (e) => {
          e.preventDefault()
          setDB(prevArr => [...prevArr, {
               username: formData.username,
               email: formData.email,
               password: formData.password
          }])

     }
     return (
          <div>
               <h1>React useState Hook</h1>
               <h2>Registration Form</h2>
               <form>
                    <input value={formData.username} name="username" onChange={handleChange} autoComplete="off" required type="text" id='name' placeholder='Name' />
                    <br />
                    <input value={formData.email} name="email" onChange={handleChange} autoComplete="off" required type="email" id='email' placeholder='Email' />
                    <br />
                    <input value={formData.password} name="password" onChange={handleChange} autoComplete="off" required type="password" placeholder='Password' />
                    <br />
                    <button onClick={handleFormSubmit} >Submit</button>
               </form>

               <div>
                    {
                         db.map((val, ind) => {
                              return <li key={ind.toString()}>{`${val.username} - ${val.email} - ${val.password}`}</li>
                         })
                    }
               </div>
          </div>
     )
}

