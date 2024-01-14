import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([]);
  const {id}=useParams();
  useEffect(() => {
    axios.get(`https://json-api-0rw1.onrender.com/data/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);
  
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' disabled
           value={data.name} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' className='form-control'  disabled
            value={data.email} />
            
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Phone:</label>
            <input type="text" name='phone' className='form-control'  disabled
           value={data.phone}  />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Website:</label>
            <input type="text" name='phone' className='form-control'  disabled
            value={data.website} />
          </div>
          <Link to={`/update/${id}`}><Button variant='warning'>Edit</Button></Link>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form >
          <div className='mb-2'>
           <strong>Name:{data.name}</strong>
          </div>
          <div className='mb-2'>
            
          <strong>Email:{data.email}</strong>
          </div>
          <div className='mb-2'>
          <strong>Phone:{data.phone}</strong>
          </div>
          <div className='mb-2'>
          <strong>Phone:{data.website}</strong>
          </div>
          <Link to={`/update/${id}`}><Button variant='warning'>Edit</Button></Link>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Read