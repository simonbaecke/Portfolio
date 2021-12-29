import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'

const NavbarComponent = () => {
    return ( //navigatiebar met logo dat linkt naar homepagina
        <div className="NavbarComponent  page-host navbarpadding">
            <Navbar  variant ="light"
                sticky ="top" expand="sm" collapseOnSelect>
                    <Navbar.Brand as={Link} to='/'> 
                        <img src="http://localhost:5000/simon/mydata/logo.png" width="60px" height="50px"/>
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