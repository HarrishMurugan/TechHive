import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';


function ItemsList({getId}) {
  const navigate = useNavigate();
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:1234/users')
    .then(res => setUsers(res.data))
  })

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:1234/users/${id}`)
    .then(() => alert("Item Deleted"))
    .catch((e) => console.log(e))
  }
  const updateUser = (id) => {
    getId(id)
    navigate('/updateForm');
  }
  return (
    <div style={{backgroundColor:'#fb93ff',height:'90.5vh'}}>
    <Container>
    <h2 className="text-2xl font-bold mb-4 pt-4">Items List</h2>
      <Table striped bordered hover size="sm" className='text-center'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Item Name</th>
          <th>Description</th>
          <th>Update Item</th>
          <th>Delete Item</th>
        </tr>
      </thead>
      <tbody>

        {users.map((user,index) => {
          return(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td><button className='btn btn-primary' onClick={() => updateUser(user._id)}>Update</button></td>
            <td><button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button></td>
          </tr>
          )
        })}
      </tbody>
    </Table>
    </Container>
    </div>
  )
}

export default ItemsList








// import React from 'react';

// const ItemList = ({ items }) => {
//   return (
//     <div className="grid gap-4">
//       {items.map((item) => (
//         <div key={item.id} className="bg-gray-200 p-4 rounded">
//           <h3 className="font-bold text-lg">{item.name}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;