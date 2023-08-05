import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <div style={{backgroundColor:'#f04eff', borderBottom:'1px solid gray'}}>
    <Navbar>
        <Container>
          <Navbar.Brand >CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">ItemsList</Nav.Link>
            <Nav.Link href="/createForm">AddItem</Nav.Link>
            <Nav.Link href="/updateForm">UpdateItem</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </div>

    
  )
}

export default Navigation