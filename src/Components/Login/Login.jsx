import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { userContext } from '../Context/Context';


export default function Login() {
    let navigate =useNavigate()
 const { setuserLogin } = useContext(userContext); 

async function hlogin(formvalues) {
 
    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formvalues);

    if (data.message === 'success') {
      localStorage.setItem('userToken', data.token); 
      setuserLogin(data.token);                      
      navigate('/');                                 
    } 
   
}
    let formik = useFormik({
        initialValues:{
          email:'',
          password:''
        },
        onSubmit:hlogin
    })

    return (
      <>
<div className="bg-white min-h-screen flex items-center justify-center px-4">
  <form onSubmit={formik.handleSubmit} className="w-full max-w-sm bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
    <h1 className="font-bold text-3xl mb-6 text-center text-gray-900 dark:text-white">Login Now</h1>

    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-gray-400 hover:bg-gray-600 text-dark font-medium rounded-lg text-sm px-5 py-2.5  "
    >
      Login
    </button>
  </form>
</div>

      </>
    )
  }



