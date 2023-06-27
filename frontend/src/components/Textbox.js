import React from 'react'
import {Card} from 'react-bootstrap';

const Textbox = (props) => {
    const displayEvidence = () => {
        const result = []
        for (const item of props.text) {
            const parsed = item.split('\n\n')
            const e = parsed[0]
            result.push((<div> <a href={e.substring(e.indexOf(']') + 2)} target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}> {e} </a> <br></br> </div>))
            if (parsed.length > 1) {
                result.push(<div> {parsed[1]} </div>)
            }
            result.push(<br></br>)
        }
        return result
    }

    return (
        <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
            <Card.Body>
                <Card.Title> {props.title + ":"} </Card.Title>
                <Card.Text>
                    {props.title === 'Evidence' ? displayEvidence() : props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Textbox 