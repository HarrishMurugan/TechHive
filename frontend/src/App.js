import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import CreateUser from './AddItem'
import UpdateUser from './UpdateItem'
import Home from './ItemsList'
import Navigation from './Navigation'


function App() {
  const [id,setId] = useState("");
  const getId = (id) =>{
    setId(id);
  }
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/createForm' element={<CreateUser/>}/>
        <Route path='/updateForm' element={<UpdateUser id={id}/>}/>
        <Route path='/' element={<Home getId = {getId}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App









// import React, { useState } from 'react';
// import ItemList from './ItemList';
// import AddItemForm from './AddItemForm';
// import EditItemForm from './EditItemForm';

// const App = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: 'Item 1', description: 'Description for Item 1' },
//     { id: 2, name: 'Item 2', description: 'Description for Item 2' },
//   ]);

//   const handleAddItem = (newItem) => {
//     setItems([...items, { ...newItem, id: items.length + 1 }]);
//   };

//   const handleUpdateItem = (updatedItem) => {
//     setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-4">My Item List</h1>
//       <ItemList items={items} />
//       <AddItemForm onAddItem={handleAddItem} />
//       <EditItemForm item={items[0]} onUpdateItem={handleUpdateItem} />
//     </div>
//   );
// };

// export default App;





// // import React from 'react'
// // import { BrowserRouter, Route, Routes } from "react-router-dom"
// // import CreateUser from './AddItemForm'
// // import Home from './ItemList'
// // import UpdateUser from './EditItemForm'

// // function App() {
// //     return ( 
// //         <BrowserRouter>
// //             <Routes>
// //                 <Route path = '/createForm' element = {<CreateUser/>}/> 
// //                 <Route path = '/updateForm' element = {<UpdateUser/>}/> 
// //                 <Route path = '/' element = {<Home/>}/> 
// //             </Routes> 
// //         </BrowserRouter>


// //     )
// // }

// // export default App