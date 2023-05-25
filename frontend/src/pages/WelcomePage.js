import React from 'react'
import "./pagesStyle.css"
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import {Card} from 'react-bootstrap';

const WelcomePage = () => {
    const navigate = useNavigate()

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

                        Please proceed to the next page to begin task 2:
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="buttons"> 
                <Button variant='outline-primary' onClick={() => navigate('/question1')}> Next </Button>
            </div>
        </div>
    )
}

export default WelcomePage