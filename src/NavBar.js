import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Todo Application with React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://www.facebook.com/itsmeabjs.me/">Facebook</Nav.Link>
                        <Nav.Link href="https://www.instagram.com/abjs">Instagram</Nav.Link>
                        <Nav.Link href="https://twitter.com/itsmeabjs">Twitter</Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCt8GRf1R6LeTmC3xNlc0lHw">Youtube</Nav.Link>
                        <Nav.Link href="https://github.com/abjs">Github</Nav.Link>
                        <Nav.Link href="https://dev.to/abjs">DEV</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
