import React from 'react'
import {Navbar, Container} from 'react-bootstrap';
import logo from '../upenn.png'

const navbar = () => {
    return (
        <Navbar bg="light"> 
        <Container>
            <Navbar.Brand>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={logo} width="50" height="30" alt="UPenn logo" style={{marginLeft: ''}}/>
                <div style={{marginLeft: "-2px"}}> Expert Evaluation of AI Answers </div>
                </div>
            </Navbar.Brand>
        </Container>
        </Navbar>
    )
}

export default navbar