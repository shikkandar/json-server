import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://mock-api-bdg1.onrender.com/data/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Read a User</h1>
        <form>
          <div className='mb-2'>
            <strong>Name:</strong> {data.name}
          </div>
          <div className='mb-2'>
            <strong>Email:</strong> {data.email}
          </div>
          <div className='mb-2'>
            <strong>Phone:</strong> {data.phone}
          </div>
          <div className='mb-2'>
            <strong>Website:</strong> {data.website}
          </div>
          <div className='mb-2'>
            <strong>Address:</strong>
            {data.address && (
              <div>
                <div>Street: {data.address.street}</div>
                <div>Suite: {data.address.suite}</div>
                <div>City: {data.address.city}</div>
                <div>Zipcode: {data.address.zipcode}</div>
              </div>
            )}
          </div>
          <div className='mb-2'>
            <strong>Company:</strong>
            {data.company && (
              <div>
                <div>Name: {data.company.name}</div>
                <div>Catch Phrase: {data.company.catchPhrase}</div>
                <div>BS: {data.company.bs}</div>
              </div>
            )}
          </div>
          <Link to={`/update/${id}`}>
            <Button variant='warning'>Edit</Button>
          </Link>
          <Link to='/' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Read;
