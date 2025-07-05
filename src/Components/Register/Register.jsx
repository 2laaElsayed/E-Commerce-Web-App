import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { Component, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { userContext } from '../Context/Context'

export default function Register() {

    let{setuserLogin}=useContext(userContext)

    let U  =Yup.object().shape({
        name:Yup.string().min(3,'name minlenght is 3').max(10,'name max').required('name is Required'),
        phone:Yup.string().matches(/^01[0125][0-9]{8}$/,'Egypt number') .required('number is Required'),
        email:Yup.string().email('The email is invalid').required('email is Required'),
        password:Yup.string().matches(/^[A-Z][a-z0-9]{4,9}$/,'must be start oneletter with uppercase').required('password is Required'),
        rePassword:Yup.string().oneOf([Yup.ref('password')],'paaassw').required('repassword is Required')
    }) 


    let navigate =useNavigate()

function hregister(formvalues) {
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formvalues).then((apiResponse) => {
    if (apiResponse?.data?.message === 'success') {
  localStorage.setItem('userToken', apiResponse.data.token);
  setuserLogin(apiResponse.data.token);
  navigate('/'); 
}
    })
}



    let formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            password:'',
            rePassword:''
        },

        validationSchema: U ,

        onSubmit:hregister
    })

    return (
      <>
      <div className="bg-white dark:bg-zinc-800 min-h-screen flex items-center justify-center px-4">
  <form onSubmit={formik.handleSubmit} className="w-full max-w-sm bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
    <h1 className="font-bold text-3xl mb-6 text-center text-gray-900 dark:text-white">Register Now</h1>

    <div className="mb-6">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
      <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
      {formik.errors.name && formik.touched.name && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
      )}
    </div>

    <div className="mb-6">
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
      <input type="tel" id="phone" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
      {formik.errors.phone && formik.touched.phone && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
      )}
    </div>

    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
      <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
      {formik.errors.email && formik.touched.email && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
      )}
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
      <input type="password" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
      {formik.errors.password && formik.touched.password && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
      )}
    </div>

    <div className="mb-6">
      <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
      <input type="password" id="rePassword" name="rePassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
      {formik.errors.rePassword && formik.touched.rePassword && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.rePassword}</div>
      )}
    </div>

    <button type="submit"  className="w-full bg-gray-400 hover:bg-gray-600 text-dark font-medium rounded-lg text-sm px-5 py-2.5  "
>
      Submit
    </button>
  </form>
</div>


      </>
    )
  }



