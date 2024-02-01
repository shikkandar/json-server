// Import necessary dependencies
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  // Initial state with the same structure as the provided data
  const [values, setValues] = useState({
    id: null,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the API endpoint with the form data
    axios
      .post('https://mock-api-bdg1.onrender.com/data', values)
      .then((res) => {
        console.log(res.data); // Log the response data for verification
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex w-100 my-5 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter Name'
              required
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          {/* Username input field */}
          <div className='mb-2'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              name='username'
              className='form-control'
              placeholder='Enter Username'
              required
              onChange={(e) => setValues({ ...values, username: e.target.value })}
            />
          </div>

          {/* Email input field */}
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          {/* Address input fields */}
          <div className='mb-2'>
            <label htmlFor='street'>Street:</label>
            <input
              type='text'
              name='street'
              className='form-control'
              placeholder='Enter Street'
              required
              onChange={(e) => setValues({ ...values, address: { ...values.address, street: e.target.value } })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='suite'>Suite:</label>
            <input
              type='text'
              name='suite'
              className='form-control'
              placeholder='Enter Suite'
              required
              onChange={(e) => setValues({ ...values, address: { ...values.address, suite: e.target.value } })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='city'>City:</label>
            <input
              type='text'
              name='city'
              className='form-control'
              placeholder='Enter City'
              required
              onChange={(e) => setValues({ ...values, address: { ...values.address, city: e.target.value } })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='zipcode'>Zipcode:</label>
            <input
              type='text'
              name='zipcode'
              className='form-control'
              placeholder='Enter Zipcode'
              required
              onChange={(e) => setValues({ ...values, address: { ...values.address, zipcode: e.target.value } })}
            />
          </div>

          {/* Phone input field */}
          <div className='mb-2'>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              name='phone'
              className='form-control'
              placeholder='Enter Phone'
              required
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          {/* Website input field */}
          <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input
              type='text'
              name='website'
              className='form-control'
              placeholder='Enter Website'
              required
              onChange={(e) => setValues({ ...values, website: e.target.value })}
            />
          </div>

          {/* Company input fields */}
          <div className='mb-2'>
            <label htmlFor='companyName'>Company Name:</label>
            <input
              type='text'
              name='companyName'
              className='form-control'
              placeholder='Enter Company Name'
              required
              onChange={(e) => setValues({ ...values, company: { ...values.company, name: e.target.value } })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='catchPhrase'>Catch Phrase:</label>
            <input
              type='text'
              name='catchPhrase'
              className='form-control'
              placeholder='Enter Catch Phrase'
              required
              onChange={(e) => setValues({ ...values, company: { ...values.company, catchPhrase: e.target.value } })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='bs'>BS:</label>
            <input
              type='text'
              name='bs'
              className='form-control'
              placeholder='Enter BS'
              required
              onChange={(e) => setValues({ ...values, company: { ...values.company, bs: e.target.value } })}
            />
          </div>

          {/* Submit button */}
          <Button variant='success' type='submit'>
            Submit
          </Button>

          {/* Back button to navigate back to the home page */}
          <Link to='/' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
