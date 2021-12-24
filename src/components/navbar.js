import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'
import { Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'

const NavbarComponent = () => {
    return (
        <div className="NavbarComponent">
            <Navbar variant ="light"
                sticky ="top" expand="sm" collapseOnSelect>
                    <Navbar.Brand>
                        <img src={logo} width="60px" height="50px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>       
                        <Nav>
                            <Nav.Link as={Link} to='/' eventKey="0" >Home</Nav.Link>
                            <Nav.Link as={Link} to='/projects' eventKey="1" >Projects</Nav.Link>
                            <Nav.Link as={Link} to='/aboutme' eventKey="2" >About me</Nav.Link>
                            <Nav.Link as={Link} to='/contact' eventKey="3" >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent