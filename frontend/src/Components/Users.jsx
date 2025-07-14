import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';    
import axios from 'axios';            

function Users() {
  const [users, setUsers] = useState([]);
    useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result=> setUsers(result.data))
    .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(() => {
      //  Remove user from UI after delete
      setUsers(users.filter(user => user._id !== id));
    })
    .catch(err => console.log(err));
};

  return (
    <div className="container mt-4">
      <h2 className="text-center">User Data</h2>

      <div className="text-end mb-3 w-75 mx-auto">
        <Link to="/createdata">
          <button className="btn btn-success">Add +</button>
        </Link>
      </div>

      <table className="table table-bordered table-hover w-75 mx-auto rounded-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td>{u.email}</td>
              <td>
              <Link to={`/update/${u._id}`}>
                  <button className="btn btn-success me-2">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(u._id)}>
  Delete
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
