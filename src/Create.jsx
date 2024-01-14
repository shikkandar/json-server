import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const[values,setValues]=useState({
    name:'',
    email:'',
    phone:'',
    website:''
  })
  const navigate=useNavigate()
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/data',values)
    .then(res => 
        {
          console.log(res);
          navigate('/')
        }
      )
    .catch(err => console.log(err));
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form  onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' required
            onChange={e=>setValues({...values,name:e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' required
            onChange={e=>setValues({...values,email:e.target.value})}/>
            
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Phone:</label>
            <input type="number" name='phone' className='form-control' placeholder='Enter Number' required
            onChange={e=>setValues({...values,phone:e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Website:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Number' required
            onChange={e=>setValues({...values,website:e.target.value})} />
          </div>
          <Button variant='success' type='submit'>Submit</Button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create