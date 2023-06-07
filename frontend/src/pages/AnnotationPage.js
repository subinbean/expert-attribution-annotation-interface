import { useState, useEffect } from 'react'
import QuestionAnswer from "../components/QuestionAnswer"
import "./pagesStyle.css"
import ClaimEvidence from "../components/ClaimEvidence"
import {Button, Alert, ProgressBar, Card, Form} from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom"

const AnnotationPage = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state.data
    console.log(data)
    const [seconds, setSeconds] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentClaim, setCurrentClaim] = useState(0)
    const [revisedClaims, setRevisedClaims] = useState(data[currentQuestion].claims.map(claim => claim.claim_string))

    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
        return () => clearInterval(interval);
    }, [seconds])

    const buttonInstructions = () => {
        if (currentClaim < data[currentQuestion].claims.length - 1) {
            return <div> Move onto the next claim below! </div> 
        }
        else if (currentClaim === data[currentQuestion].claims.length - 1) {
            return <div> Submit your final claim! </div> 
        }
        else if (currentQuestion < data.length - 1) {
            return <div> Move onto the next question! </div> 
        }
        else {
            return <div> You are now done with all the questions and this task! Press submit for the redemption code. </div> 
        }
    }

    const buttonText = () => {
        if (currentClaim <= data[currentQuestion].claims.length - 1) {
            return 'Submit claim' 
        }
        else if (currentQuestion < data.length - 1) {
            return 'Submit question'
        }
        else {
            return 'Submit question and finish task'
        }
    }

    const buttonAction = () => {
        if (currentClaim <= data[currentQuestion].claims.length - 1) {
            return () => {
                const element = document.getElementById('claim-evidence-section')
                element.scrollIntoView({ behavior: 'smooth'})
                setCurrentClaim(currentClaim + 1)
            }
        }
        else if (currentQuestion < data.length - 1) {
            return () => {
                setCurrentClaim(0)
                setCurrentQuestion(currentQuestion + 1)
                window.scrollTo(0, 0)
            }
        }
        else {
            return () => {
                navigate('/submission')
            }
        }
    }

    const renderClaimEvidence = () => {
        if (currentClaim < data[currentQuestion].claims.length) {
            return <div id="claim-evidence-section">
                <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> 3) Following this, you will be asked to annotate the individual claims contained in the answer. 
                Each claim is a sentence, accompanied with the evidence for the sentence returned by the system. 
                The evidence can be presented in the form of a URL to a webpage, or a set of paragraphs. </p>
                <p>
                    You are on <b> question {currentQuestion + 1}</b>. This question has <b> {data[currentQuestion].claims.length} claims. </b>
                </p>
                <p>
                    Current Claim: {currentClaim + 1} out of {data[currentQuestion].claims.length}
                </p>
                <ProgressBar variant='primary' now={(currentClaim + 1) * 100.0 / data[currentQuestion].claims.length} style={{ width: '38rem', marginTop: '20px'}} />
                </Alert> 
                <ClaimEvidence claim={data[currentQuestion].claims[currentClaim].claim_string} evidence={data[currentQuestion].claims[currentClaim].evidence} currentClaim={currentClaim} revisedClaims={revisedClaims} setRevisedClaims={setRevisedClaims} /> 
                </div>
        }
        else {
            return <div>
                <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> 5) <b> Answer Revision </b> : Based on the changes to the individual claims, this is your edited answer. Would you like to add, edit or delete it any further? Note that we require the answer to be <b>factual</b>, <b>complete</b> and <b> supported by evidence.</b></p>
                <p>
                After annotating each claim, you will be presented a revised answer with your edited claims. The text box is pre-filled with the edited claims, and we ask you to further edit the answer to be <b>factual</b>, <b>complete</b> and <b> supported by evidence.</b>
                </p>
                <p>
                Note that all informative claims, worthy of citations, deserve to be cited. However, finding evidence for claims is non-trivial, so we request that you make a best-effort attempt at providing evidence for claims where it’s missing or incorrect.
                </p>
            </Alert>
            <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <Card.Body>
                    <Card.Title> {'Revise answer below:'} </Card.Title>
                    <Card.Text>
                        <Form style={{marginTop: '21px', width: '400px' }}>
                            <Form.Group className="mb-3">
                                <Form.Control style={{height: '200px', width: '600px'}}as='textarea' defaultValue={revisedClaims ? revisedClaims.join(' ') : ''} />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        }
    }

    return (
        <div align="center"> 
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> <h3> Expert Attribution: Stage 2 </h3></p>
                <p>
                    This task has <b> {data.length} questions. </b>
                </p>
                 Current Question: {currentQuestion + 1} out of {data.length}
            <ProgressBar variant='primary' now={(currentQuestion + 1) * 100.0 / data.length} style={{ width: '38rem', marginTop: '20px', marginBottom: '20px'}} />
            <p> Follow the instructions carefully! </p>
            </Alert>
            <QuestionAnswer question={data[currentQuestion].question_string} answer={data[currentQuestion].answer_string} />
            {renderClaimEvidence()}
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                {buttonInstructions()}
            </Alert>
            <div className="buttons"> 
                <Button variant='outline-primary' style={{marginRight: '216px'}}onClick={() => navigate('/')}> Previous </Button>
                <Button variant='outline-primary' style={{marginLeft: '216px'}}onClick={buttonAction()}> {buttonText()} </Button>
            </div>
        </div>
    )
}

export default AnnotationPage