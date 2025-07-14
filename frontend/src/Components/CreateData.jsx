import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  

function CreateData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/CreateData", { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5 w-50 bg-light p-4 rounded shadow">
      <h3 className="text-center mb-4">Add New User</h3>

      <form onSubmit={Submit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateData;
