import React from 'react'
import {Card} from 'react-bootstrap';

const Textbox = (props) => {
    return (
        <Card style={{ width: '18rem', marginTop: '20px'}}>
            <Card.Body>
                <Card.Title> {props.title + ":"} </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Textbox