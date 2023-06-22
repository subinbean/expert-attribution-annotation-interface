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
    const [seconds, setSeconds] = useState()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentClaim, setCurrentClaim] = useState(0)
    const [revisedClaims, setRevisedClaims] = useState(data[currentQuestion].claims.map(claim => claim.claim_string))
    const emptyQuestion = {
        usefulness: '',
        revised_answer: '',
    }
    const emptyClaim = {
        support: '',
        reason_missing_support: '',
        informativeness: '',
        correctness: '',
        reliability: '',
        worthiness: '',
    }
    const [questionAnnotation, setQuestionAnnotation] = useState(emptyQuestion)
    const [claimAnnotation, setClaimAnnotation] = useState(emptyClaim)
    const [missingFields, setMissingFields] = useState([])

    useEffect(() => {
        setSeconds(new Date())
    }, [])

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
                // validation logic
                const new_array = []
                const mapping = {'support': 'Supported', 'reason_missing_support' : 'Reason for partial support', 'informativeness' : 'Informative', 'correctness': 'Correctness', 'reliability': 'Reliability of Source', 'worthiness': 'Worthiness'}
                for (var field in claimAnnotation) {
                    if (claimAnnotation[field] === '') {
                        new_array.push(mapping[field])
                    }
                }
                setMissingFields(new_array)
                if (new_array.length > 0) {
                    return () => {}
                }
                setMissingFields([])

                const element = document.getElementById('claim-evidence-section')
                element.scrollIntoView({ behavior: 'smooth'})
                setCurrentClaim(currentClaim + 1)
                setClaimAnnotation(emptyClaim)
            }
        }
        else {
            if (currentQuestion < data.length - 1) {
                return () => {
                    if (questionAnnotation.usefulness === '') {
                        setMissingFields(missingFields.concat('Usefulness'))
                        return () => {}
                    }
                    if (missingFields.length > 0) {
                        setMissingFields([])
                    }
                    setCurrentClaim(0)
                    setRevisedClaims(data[currentQuestion + 1].claims.map(claim => claim.claim_string))
                    setCurrentQuestion(currentQuestion + 1)
                    window.scrollTo(0, 0)
                    const endTime = new Date()
                    console.log(endTime - seconds)
                    setSeconds(endTime)

                    setQuestionAnnotation(emptyQuestion)
                }
            }
            else {
                return () => {
                    if (questionAnnotation.usefulness === '') {
                        setMissingFields(missingFields.concat('Usefulness'))
                        return () => {}
                    }
                    if (missingFields) {
                        setMissingFields([])
                    }
                    const endTime = new Date()
                    console.log(endTime - seconds)
                    navigate('/submission')
                }
            }
        }
    }

    const answerChange = (event) => {
        const newState = {
            ...questionAnnotation,
        }
        newState['revised_answer'] = event.target.value
        setQuestionAnnotation(newState)
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
                <ClaimEvidence claim={data[currentQuestion].claims[currentClaim].claim_string} evidence={data[currentQuestion].claims[currentClaim].evidence} currentClaim={currentClaim} revisedClaims={revisedClaims} setRevisedClaims={setRevisedClaims} claimAnnotation={claimAnnotation} setClaimAnnotation={setClaimAnnotation} questionAnnotation={questionAnnotation} setQuestionAnnotation={setQuestionAnnotation}/> 
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
                <Card.Title>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {'Revise answer below:'}
                        <div style={{color: 'red', marginLeft: '3px', fontSize: '17px'}}> * </div>
                    </div>
                </Card.Title>
                    <Card.Text>
                        <Form style={{marginTop: '21px', width: '400px' }}>
                            <Form.Group className="mb-3">
                                <Form.Control style={{height: '200px', width: '600px'}}as='textarea' defaultValue={revisedClaims ? revisedClaims.join('\n\n') : ''} onChange={answerChange}/> 
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        }
    }

    const renderAlert = () => {
        if (missingFields.length > 0) {
            return <Alert variant="danger" style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}> Please submit the following required fields before submitting: {missingFields.join(', ')} </Alert>
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
            <QuestionAnswer question={data[currentQuestion].question_string} answer={data[currentQuestion].answer_string} questionAnnotation={questionAnnotation} setQuestionAnnotation={setQuestionAnnotation}/>
            {renderClaimEvidence()}
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                {buttonInstructions()}
            </Alert>
            {renderAlert()}
            <div className="buttons"> 
                <Button variant='outline-primary' style={{marginRight: '216px'}}onClick={() => navigate('/')}> Previous </Button>
                <Button variant='outline-primary' style={{marginLeft: '216px'}}onClick={buttonAction()}> {buttonText()} </Button>
            </div>
        </div>
    )
}

export default AnnotationPage