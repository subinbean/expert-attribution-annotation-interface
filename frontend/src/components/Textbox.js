import React from 'react'
import {Card} from 'react-bootstrap';

const Textbox = (props) => {
    return (
        <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
            <Card.Body>
                <Card.Title> {props.title + ":"} </Card.Title>
                <Card.Text>
                    {props.title === 'Evidence' ? props.text.map(e => <div> <a href={e} target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}> {e} </a> <br></br> </div>) : props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Textbox 