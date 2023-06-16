import React from 'react'
import {Card} from 'react-bootstrap';

const Likert = (props) => {
    const options = []
    const changeFunction = (event) => {
        const newState = {
            ...props.state,
        }
        newState[props.toChange] = event.target.value
        props.setState(newState)
    }
    props.options?.map(option => options.push(
        <div onChange={changeFunction}>
            <input type="radio" value={option} id={option} name='option'/>
            <label for={option} style={{marginLeft: '10px'}}> {option} </label><br></br>
        </div>
    ))
    return (
        <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
            <Card.Body>
                <Card.Title> {props.title} </Card.Title>
                <Card.Text>
                    <form>
                    <fieldset id={props.title}>
                        {options}
                    </fieldset>
                    </form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Likert