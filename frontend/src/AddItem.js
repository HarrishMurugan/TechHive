import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



function AddItem() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:1234/users/add', { username: username, password: password })
      .then((res) => {
        alert('Item Added');
      })
      .catch((e) => {
        console.log(e);
      });

    setUsername('');
    setPassword('');
    navigate('/');
  };

  return (
    <div style={{backgroundColor:'#fb93ff',height:'90.5vh'}}>
    <Container className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 pt-4">Add Item</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Label className="block mb-1 font-medium">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the Item"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
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
          <Button variant="primary" type="submit" className="w-full px-4 py-2 rounded-md bg-blue-500 text-white font-medium">
            Add Item
          </Button>
        </Form>
      </div>
    </Container>
    </div>
  );
}

export default AddItem;





// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function CreateUser() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     Axios.post('http://localhost:1234/users/add', { username: username, password: password })
//       .then((res) => {
//         alert('User Created');
//       })
//       .catch((e) => {
//         console.log(e);
//       });

//     setUsername('');
//     setPassword('');
//     navigate('/');
//   };

//   return (
//     <Container className="max-w-md mx-auto mt-8">
//       <Form onSubmit={submitHandler}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="block mb-1">Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Name of the Item"
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//             className="w-full px-4 py-2 border rounded-md"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label className="block mb-1">Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             placeholder="Description"
//             rows={4}
//             cols={40}
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             className="w-full px-4 py-2 border rounded-md"
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="px-4 py-2 rounded-md bg-blue-500 text-white">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default CreateUser;



// // import React, { useState } from 'react'
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import Container from 'react-bootstrap/Container';
// // import Axios from "axios"
// // import { useNavigate } from 'react-router-dom';


// // function CreateUser() {
// //   const navigate = useNavigate();
// //   const [username,setUsername] = useState("");
// //   const [password,setPassword] = useState("");
// //   const submitHandler = (e) => {
// //     e.preventDefault(); 
// //     Axios.post("http://localhost:1234/users/add",{username : username,password : password})
// //     .then(res => alert("User Created"))
// //     .catch(e => console.log(e))
// //     setUsername("");
// //     setPassword("");
// //     navigate('/')


// //   }
// //   return (
// //     <Container>
// //     <Form onSubmit={submitHandler}>
// //       <Form.Group className="mb-3 " controlId="formBasicEmail">
// //         <Form.Label>Name</Form.Label>
// //         <Form.Control type="text" placeholder="Name of the Item" onChange={(e)=>setUsername(e.target.value)} value={username}/>
// //       </Form.Group>

// //       <Form.Group className="mb-3" controlId="formBasicPassword">
// //         <Form.Label>Description</Form.Label>
// //         <Form.Control type="textarea" placeholder="Description" rows={4} cols={40} onChange={(e)=>setPassword(e.target.value)} value={password}/>
// //       </Form.Group> 
// //       <Button variant="primary" type="submit">
// //         Submit
// //       </Button>
// //     </Form>
// //     </Container>
// //   )
// // }

// // export default CreateUser








// // // import React, { useState } from 'react';

// // // const AddItemForm = ({ onAddItem }) => {
// // //   const [name, setName] = useState('');
// // //   const [description, setDescription] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     onAddItem({ name, description });
// // //     setName('');
// // //     setDescription('');
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="mb-4">
// // //       <input
// // //         type="text"
// // //         placeholder="Item Name"
// // //         value={name}
// // //         onChange={(e) => setName(e.target.value)}
// // //         className="border rounded p-2 mr-2"
// // //         required
// // //       />
// // //       <input
// // //         type="text"
// // //         placeholder="Item Description"
// // //         value={description}
// // //         onChange={(e) => setDescription(e.target.value)}
// // //         className="border rounded p-2 mr-2"
// // //         required
// // //       />
// // //       <button
// // //         type="submit"
// // //         className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
// // //       >
// // //         Add Item
// // //       </button>
// // //     </form>
// // //   );
// // // };

// // // export default AddItemForm;