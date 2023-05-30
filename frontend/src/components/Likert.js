import React from 'react'
import {Card} from 'react-bootstrap';

const Likert = (props) => {
    const options = []
    props.options?.map(option => options.push(
        <div>
            <input type="radio" id={option} name='option'/>
            <label for={option} style={{marginLeft: '10px'}}> {option} </label><br></br>
        </div>
    ))
    return (
        <Card style={{ width: '40rem', marginTop: '20px'}}>
            <Card.Body>
                <Card.Title> {props.title} </Card.Title>
                <Card.Text>
                    {options}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Likert