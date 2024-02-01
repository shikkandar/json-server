import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://mock-api-bdg1.onrender.com/data/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const update = window.confirm('Are you sure you want to update?');
    if (update) {
      axios
        .put(`https://mock-api-bdg1.onrender.com/data/${id}`, values)
        .then((res) => {
          console.log(res);
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter Name'
              required
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              required
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              name='phone'
              className='form-control'
              placeholder='Enter Number'
              required
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input
              type='text'
              name='website'
              className='form-control'
              placeholder='Enter Website'
              required
              value={values.website}
              onChange={(e) => setValues({ ...values, website: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='street'>Street:</label>
            <input
              type='text'
              name='street'
              className='form-control'
              placeholder='Enter Street'
              required
              value={values.address.street}
              onChange={(e) =>
                setValues({
                  ...values,
                  address: { ...values.address, street: e.target.value },
                })
              }
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
              value={values.address.suite}
              onChange={(e) =>
                setValues({
                  ...values,
                  address: { ...values.address, suite: e.target.value },
                })
              }
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
              value={values.address.city}
              onChange={(e) =>
                setValues({
                  ...values,
                  address: { ...values.address, city: e.target.value },
                })
              }
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
              value={values.address.zipcode}
              onChange={(e) =>
                setValues({
                  ...values,
                  address: { ...values.address, zipcode: e.target.value },
                })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='companyName'>Company Name:</label>
            <input
              type='text'
              name='companyName'
              className='form-control'
              placeholder='Enter Company Name'
              required
              value={values.company.name}
              onChange={(e) =>
                setValues({
                  ...values,
                  company: { ...values.company, name: e.target.value },
                })
              }
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
              value={values.company.catchPhrase}
              onChange={(e) =>
                setValues({
                  ...values,
                  company: { ...values.company, catchPhrase: e.target.value },
                })
              }
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
              value={values.company.bs}
              onChange={(e) =>
                setValues({
                  ...values,
                  company: { ...values.company, bs: e.target.value },
                })
              }
            />
          </div>
          <Button variant='warning' type='submit'>
            Update
          </Button>
          <Link to='/' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
