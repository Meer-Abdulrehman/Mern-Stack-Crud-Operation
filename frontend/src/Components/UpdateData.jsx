import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateData() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

 
  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
      })
      .catch(err => console.log(err));
  }, [id]);

  
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then(res => {
        console.log("Updated:", res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5 w-50 bg-light p-4 rounded shadow">
      <h3 className="text-center mb-4">Update User</h3>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input type="number" className="form-control" value={age}
            onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateData;
