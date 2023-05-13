import React from 'react'
import {Card} from 'react-bootstrap';

const Likert = (props) => {
    return (
        <Card style={{ width: '18rem', marginTop: '20px'}}>
            <Card.Body>
                <Card.Title> {props.text + ":"} </Card.Title>
                <Card.Text>
                    <input type="radio" id="very" />
                    <label for="very"> Very {props.subtext} </label><br></br>
                    <input type="radio" id="somewhat" />
                    <label for="somewhat"> Somewhat {props.subtext} </label><br></br>
                    <input type="radio" id="not" />
                    <label for="not"> Not {props.subtext} at all </label><br></br>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Likert