import React from 'react'
import {Navbar, Container} from 'react-bootstrap';

const navbar = () => {
    return (
        <Navbar bg="light"> 
        <Container>
        <Navbar.Brand> Expert Attribution Task </Navbar.Brand>
        </Container>
        </Navbar>
    )
}

export default navbar