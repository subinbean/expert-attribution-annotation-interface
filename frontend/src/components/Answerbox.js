import React from 'react'
import {Card, Form} from 'react-bootstrap';

const Answerbox= (props) => {
    return (
    <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
        <Card.Body>
            <Card.Title> {props.text + ":"} </Card.Title>
            <Card.Text>
                <Form style={{marginTop: '21px', width: '400px' }}>
                    <Form.Group className="mb-3">
                        <Form.Control as='textarea' defaultValue={props.default ? props.default : ''}/>
                    </Form.Group>
                </Form>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Answerbox