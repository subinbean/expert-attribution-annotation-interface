import Answerbox from "../components/Answerbox"
import { useState } from 'react'
import QuestionAnswer from "../components/QuestionAnswer"
import "./pagesStyle.css"
import ClaimEvidence from "../components/ClaimEvidence"
import {Button, Alert, ProgressBar} from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom"

const AnnotationPage = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state.data
    console.log(data)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentClaim, setCurrentClaim] = useState(0)

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
                <ClaimEvidence claim={data[currentQuestion].claims[currentClaim].claim_string} evidence={data[currentQuestion].claims[currentClaim].evidence} /> 
                </div>
        }
        else {
            return <div>
                <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <b> Answer Revision </b> : After annotating each claim, we would like you to <b> revise the original answer </b> produced by the AI system. The text box is pre-filled with the original answer, and we ask you to edit the answer to be <b> factual </b> and <b> supported by the evidence presented.</b> Rely on your own annotations of the individual claims to revise the answer. Note that all informative claims, worthy of citations, need to be cited.
            </Alert>
            <Answerbox text="Revised Answer" />
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
                <Button variant='outline-primary' style={{marginLeft: '315px'}}onClick={() => navigate('/')}> Previous </Button>
                <Button variant='outline-primary' style={{marginRight: '20px'}}onClick={buttonAction()}> {buttonText()} </Button>
            </div>
        </div>
    )
}

export default AnnotationPage