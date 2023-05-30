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
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <b> Answer Revision </b> : After annotating each claim, we would like you to <b> revise the original answer </b> produced by the AI system. The text box is pre-filled with the original answer, and we ask you to edit the answer to be <b> factual </b> and <b> supported by the evidence presented.</b> Rely on your own annotations of the individual claims to revise the answer. Note that all informative claims, worthy of citations, need to be cited.
            </Alert>
            <Answerbox text="Revised Answer" />
            <div className="buttons"> 
                <Button variant='outline-primary' onClick={() => navigate('/')}> Previous </Button>
                <Button variant='outline-primary' onClick={() => navigate('/submission')}> Submit </Button>
            </div>
        </div>
    )
}

export default AnnotationPage