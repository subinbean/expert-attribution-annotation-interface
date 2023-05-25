import {Card} from 'react-bootstrap';

const SubmissionPage = () => {
    return (
        <div align="center"> 
            <Card style={{ width: '40rem', marginTop: '20px'}}>
                <Card.Body>
                    <Card.Title> You have submitted! </Card.Title>
                    <Card.Text>
                        <br/>
                        <p> Thank you for participating in this task. </p>
                        <p> Your submission code is: </p>
                        <h2> XYZ1234 </h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SubmissionPage