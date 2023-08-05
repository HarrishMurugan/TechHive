import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UpdateItem({ id }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const updateHandler = (id) => {
    Axios.put(`http://localhost:1234/users/update/${id}`, {
      username: username,
      password: password,
    })
      .then(() => alert('Item Updated'))
      .catch((err) => console.log(err));
    setUsername('');
    setPassword('');
    navigate('/');
  };

  return (
    <div style={{backgroundColor:'#fb93ff',height:'90.5vh'}}>
    <Container class="focus : bg-red-600 p-4"> 
      <h2 className="text-3xl font-bold mb-4 pt-4">Update Item</h2>
      <Form onSubmit={(e) => { e.preventDefault(); updateHandler(id); }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Item name to update"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-4">
          <Form.Label className="block mb-1 font-medium">Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Description..."
            rows={4}
            cols={40}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Item
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default UpdateItem;







// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Axios from "axios"
// import { useNavigate } from 'react-router-dom';



// function UpdateItem({id}) {
//   const [username,setUsername] = useState("");
//   const [password,setPassword] = useState("");
//   const navigate = useNavigate();
//   const updateHandler = (id) =>{
//     Axios.post(`http://localhost:1234/users/update/${id}`,{username : username,password  : password})
//     .then(() => alert("Item Updated"))
//     .catch(err => console.log(err))
//     setUsername("");
//     setPassword("");
//     navigate('/')

//   }
//   return (
//     <Container>
//       <h2 className="text-2xl font-bold mb-4">Update Item</h2>
//     <Form onSubmit={(e) => {e.preventDefault(); updateHandler(id);}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Item Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter the Item name to update" onChange={(e)=>setUsername(e.target.value)} value={username}/>
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword" className="mb-4">
//             <Form.Label className="block mb-1 font-medium">Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               placeholder="Description"
//               rows={4}
//               cols={40}
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//             />
//           </Form.Group>
//       <Button variant="primary" type="submit">
//         Update Item
//       </Button>
//     </Form>
//     </Container>
//   )
// }

// export default UpdateItem









// // import React, { useState } from 'react';

// // const EditItemForm = ({ item, onUpdateItem }) => {
// //   const [name, setName] = useState(item.name);
// //   const [description, setDescription] = useState(item.description);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onUpdateItem({ ...item, name, description });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="mb-4">
// //       <input
// //         type="text"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         className="border rounded p-2 mr-2"
// //         required
// //       />
// //       <input
// //         type="text"
// //         value={description}
// //         onChange={(e) => setDescription(e.target.value)}
// //         className="border rounded p-2 mr-2"
// //         required
// //       />
// //       <button
// //         type="submit"
// //         className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2"
// //       >
// //         Update Item
// //       </button>
// //     </form>
// //   );
// // };

// // export default EditItemForm;