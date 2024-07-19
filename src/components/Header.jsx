import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary p-3">
        <Container>
          <Navbar.Brand href="/"><h2 style={{color:"#ff4915"}}><i class="fa-solid fa-utensils" style={{color:"#149466"}}></i> Recipe</h2> </Navbar.Brand>
          
        </Container>
      </Navbar>
     
      </>
  )
}

export default Header