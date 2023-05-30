import Answerbox from "../components/Answerbox"
import { useState, useEffect } from 'react'
import axios from 'axios'
import QuestionAnswer from "../components/QuestionAnswer"
import "./pagesStyle.css"
import ClaimEvidence from "../components/ClaimEvidence"
import {Button, Alert} from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom"

const AnnotationPage = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        console.log('This is called')
        axios.get(`http://localhost:4000/api/questions/${location.state.id}`)
        .then(response => {
            console.log(response)
        })
    }, [location.state.id])
    
    return (
        <div align="center"> 
            <QuestionAnswer question="This is a question" answer="This is an answer" />
            <ClaimEvidence claim="This is claim 1" evidence="This is evidence 1" />
            <ClaimEvidence claim="This is claim 2" evidence="This is evidence 2" />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <b> Answer Revision </b> : After annotating each claim, we would like you to <b> revise the original answer </b> produced by the AI system. The text box is pre-filled with the original answer, and we ask you to edit the answer to be <b> factual </b> and <b> supported by the evidence presented.</b> Rely on your own annotations of the individual claims to revise the answer. Note that all informative claims, worthy of citations, need to be cited.
            </Alert>
            <Answerbox text="Revised Answer" />
            <div className="buttons"> 
                <Button variant='outline-primary' onClick={() => navigate('/welcome')}> Previous </Button>
                <Button variant='outline-primary' onClick={() => navigate('/submission')}> Submit </Button>
            </div>
        </div>
    )
}

export default AnnotationPage