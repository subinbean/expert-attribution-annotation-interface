import React from 'react'
import {Card} from 'react-bootstrap';

const Answerbox= (props) => {
    return (
    <Card style={{ width: '18rem', marginTop: '20px'}}>
        <Card.Body>
            <Card.Title> {props.text + ":"} </Card.Title>
            <Card.Text>
            <p>{props.text}</p>
            <input type="text" id="textbox"/>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Answerbox