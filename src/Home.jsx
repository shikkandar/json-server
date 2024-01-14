import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    const handleDelete=(id)=>{
        const confirm=window.confirm("Would you like to delete user data");
        if (confirm) {
            axios.delete('http://localhost:3000/data/'+id)
            .catch(err=>console.log(err));
            location.reload()
        }
    }
    return (
        <Container fluid className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='h2'>User Data</h1>
            <div className=' p-2'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='mb-2'><Button variant='success'>Add +</Button></Link>
                </div>
    <Table striped bordered hover>
      <thead>
        <tr>
            <th className='p-3'>S.No</th>
            <th className='p-3'>Name</th>
            <th className='p-3'>Email</th>
            <th className='p-3'>phone</th>
            <th className='p-3'>Website</th>
            <th className='p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
            {data.map((item, i) => (
                <tr key={i}>
                    <td className='p-3'>{i+1}</td>
                    <td className='p-3'>{item.name}</td>
                    <td className='p-3'>{item.email}</td>
                    <td className='p-3'>{item.phone}</td>
                    <td className='p-3'>{item.website}</td>
                    <td className='p-3'>
                        <Link to={`/read/${item.id}`}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#0033ff" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg></Link>
                        <Link to={`update/${item.id}`}><svg className='mx-3' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ddce27" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></Link>
                        <svg onClick={event=>handleDelete(item.id)} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#d01b24" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
                
            </div>
        </Container>
    );
}

export default Home;
