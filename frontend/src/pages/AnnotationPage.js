import Answerbox from "../components/Answerbox"
import Textbox from "../components/Textbox"
import Likert from "../components/Likert"

const AnnotationPage = () => {
    return (
        <div> 
            <Textbox text="Question: This is a question" />
            <Textbox text="Answer: This is an answer" />
            <Likert text="Usefulness" subtext="useful" />
            <Textbox text="Claim: This is claim 1" />
            <Textbox text="Evidence: This is evidence 1" />
            <Likert text="Supported by evidence" subtext="supported" />
            <Answerbox text="If partial support, provide the reason why?" />
            <Likert text="Informative" subtext="informative" />
            <Likert text="Worthiness" subtext="worthy" />
            <Answerbox text="Revised Answer?" />
        </div>
    )
}

export default AnnotationPage