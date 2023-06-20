import {useState} from 'react'
import "./pagesStyle.css"
import { useNavigate } from "react-router-dom"
import {Card, Button, Form} from 'react-bootstrap';
import axios from 'axios'

const WelcomePage = () => {
    const navigate = useNavigate()
    const [prolificId, setProlificId] = useState('')
    const baseUrl = `/api/questions/${prolificId}`

    const onClick = (e) => {
        e.preventDefault()
        axios.get(baseUrl)
        .then(response => {
            navigate('/questions', {state: {data: response.data}})
        }).catch(error => console.log(error))
    }

    return (
        <div align="center"> 
            <Card style={{ width: '50rem', marginTop: '20px'}}>
                <Card.Body>
                    <Card.Title> <b> Stage 2: Detailed Instructions </b> </Card.Title>
                    <Card.Text style={{textAlign: 'left'}}>
                        <p> Thank you for your interest in our task! We are conducting a study to understand how experts 
                        from various fields use AI / large language models in information-seeking scenarios. We are particularly 
                        interested in evaluating the accuracy and factual correctness of answers produced by such systems. We are inviting 
                        participants who are professionals / experts in these fields: </p>
                        
                        <p> [Anthropology / Architecture / Biology / Business / Chemistry / Classical Studies / Criminology / Culinary Arts / 
                        Environmental Science / Economics / Education / Engineering and Technology / Geography / History / Journalism / Law / 
                        Linguistics / Literature / Mathematics / Medicine / Music / Philosophy / Physics and Astronomy / Political Science / 
                        Psychology / Theology / Sociology / Visual Arts] </p>

                        <p> The study will proceed in two stages and we would request you in both stages. </p>

                        <p> 
                            <ol>
                                <li>
                                    Question Writing: We will ask you to write a question from your domain.
                                </li>
                                <li>
                                Answer Validation and Revision: We will show you an answer produced by an AI system, 
                            and ask you to validate different aspects of this answer. We will then ask you to revise this answer 
                            to be factually correct and well-supported with citations.
                                </li>
                            </ol>
                        </p>

                        <p> The current task is the <b> stage 2 </b> of the study. </p>

                        Please enter your prolific ID down below to begin task 2:
                        <Form style={{marginTop: '10px', width: '400px'}} onSubmit={onClick}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Enter Prolific ID" onChange={text => setProlificId(text.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
                <Button variant='outline-primary' onClick={onClick} style={{ marginTop: '20px'}} > Submit and start task </Button>
        </div>
    )
}

export default WelcomePage