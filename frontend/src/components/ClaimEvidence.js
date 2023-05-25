import Textbox from "./Textbox"
import Likert from "./Likert"
import Answerbox from "./Answerbox";
import {Alert} from 'react-bootstrap';
import "./componentStyle.css"

const ClaimEvidence = (props) => {
    return (
        <div>
            <Alert style={{ width: '40rem', marginTop: '20px'}}>
                <p> 3) Following this, you will be asked to annotate the individual claims contained in the answer. 
                Each claim is a sentence, accompanied with the evidence for the sentence returned by the system. 
                The evidence can be presented in the form of a URL to a webpage, or a set of paragraphs. </p>
            </Alert> 
            <div className='claimEvidence'>
                <Textbox title="Claim" text={props.claim} />
                <Textbox title="Evidence" text={props.evidence} />
            </div>
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> You will need to mark the following: </p>
                <p> <b>Supported: </b> Is the claim supported by the evidence?</p>
                <ol>
                    <li> Complete: The claim is fully entailed by the evidence. </li>
                    <li> Partial: Not all facts in the claim are fully entailed by the evidence. </li>
                    <li> Incomplete: The evidence does not entail the claim at all. </li>
                </ol>
                <p>
                Note that you can assume that certain common sense facts don’t need to be explicitly stated in the evidence to judge support.
                </p>
            </Alert>
            <Likert title="Supported" options={['Complete', 'Partial', 'Incomplete']} />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                If the claim is partially supported, we ask you to write 1 sentence stating the reason why this is the case. 
            </Alert>
            <Answerbox text="If partial support, provide the reason why" />
            <Likert title="Informative" options={['Very relevant', 'A bit relevant', 'Not too important', 'Uninformative']} />
            <Likert title="Worthiness" options={['Needs evidence', 'Does not need evidence']} />
            <Likert title="Correctness" options={['Definitely correct', 'Probably correct', 'Unsure', 'Likely incorrect', 'Definitely incorrect']} />
        </div>
    )
}

export default ClaimEvidence