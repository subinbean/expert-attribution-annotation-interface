import React from 'react'
import {Card, Form} from 'react-bootstrap';

const Answerbox= (props) => {
    const changeFunction = (event) => {
        const newState = {
            ...props.state,
        }
        newState[props.toChange] = event.target.value
        props.setState(newState)
    }
    const redDot = () => {
        if (props.state.support === 'Partial') {
            return (<div style={{color: 'red', marginLeft: '3px', fontSize: '17px'}}> * </div>)
        }
        else {
            return <></>
        }
    }
    return (
    <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
        <Card.Body>
            <Card.Title>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {props.text + ':'}
                    {redDot()}
                </div>
            </Card.Title>
            <Card.Text>
                <Form style={{marginTop: '21px', width: '400px' }}>
                    <Form.Group className="mb-3">
                        <Form.Control as='textarea' value={props.state.reason_missing_support} onChange={changeFunction}/>
                    </Form.Group>
                </Form>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Answerbox