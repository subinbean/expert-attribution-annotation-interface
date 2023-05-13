import Answerbox from "../components/Answerbox"
import Textbox from "../components/Textbox"
import Likert from "../components/Likert"
import React from 'react'

const AnnotationPage = () => {
    return (
        <div align="center"> 
            <Textbox title="Quesiton" text="This is a question" />
            <Textbox title="Answer" text="This is an answer" />
            <Likert text="Usefulness" subtext="useful" />
            <Textbox title="Claim" text="This is claim 1" />
            <Textbox title="Evidence" text="This is evidence 1" />
            <Likert text="Supported by evidence" subtext="supported" />
            <Answerbox text="If partial support, provide the reason why?" />
            <Likert text="Informative" subtext="informative" />
            <Likert text="Worthiness" subtext="worthy" />
            <Answerbox text="Revised Answer?" />
        </div>
    )
}

export default AnnotationPage