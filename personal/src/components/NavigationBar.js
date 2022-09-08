import React from 'react'
import{Navbar,Nav,NavLink,} from 'react-bootstrap'
import{Link} from 'react-router-dom'
import "../styles/NavigationBar.css";
function NavigationBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="navbarScrolls" data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScrolls">
        
            <Nav className="navbar-light bg-dark ">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink className="nav-link  mx-4 my-2 " as={Link} to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-4 my-2"as={Link} to="/projects" >Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link mx-4 my-2"as={Link} to="/experience" >Experience</NavLink>
                </li>
              </ul>
            </Nav> 
     
        
        </Navbar.Collapse>
  </Navbar>
  </>
  )
}

export default NavigationBar