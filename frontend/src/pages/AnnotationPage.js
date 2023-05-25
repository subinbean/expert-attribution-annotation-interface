import Answerbox from "../components/Answerbox"
import React from 'react'
import QuestionAnswer from "../components/QuestionAnswer"
import "./pagesStyle.css"
import ClaimEvidence from "../components/ClaimEvidence"
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

const AnnotationPage = () => {
    const navigate = useNavigate()

    return (
        <div align="center"> 
            <QuestionAnswer question="This is a question" answer="This is an answer" />
            <ClaimEvidence claim="This is claim 1" evidence="This is evidence 1" />
            <Answerbox text="Revised Answer" />
            <div className="buttons"> 
                <Button variant='outline-primary' onClick={() => navigate('/welcome')}> Previous </Button>
                <Button variant='outline-primary' onClick={() => navigate('/submission')}> Submit </Button>
            </div>
        </div>
    )
}

export default AnnotationPage