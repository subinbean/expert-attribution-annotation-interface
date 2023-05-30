import React from 'react'
import {Card} from 'react-bootstrap';

const Textbox = (props) => {
    return (
        <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
            <Card.Body>
                <Card.Title> {props.title + ":"} </Card.Title>
                <Card.Text>
                    {props.title === 'Evidence' ? <a href={props.text} style={{ textDecoration: 'none' }}> {props.text} </a>: props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Textbox 