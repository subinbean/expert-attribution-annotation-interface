import Textbox from "./Textbox"
import Likert from "./Likert"
import Answerbox from "./Answerbox";
import {Alert} from 'react-bootstrap';
import "./componentStyle.css"

const ClaimEvidence = (props) => {
    return (
        <div>
            <Textbox title="Claim" text={props.claim} />
            <Textbox title="Evidence" text={props.evidence} />
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
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> <b>Informative: </b>  Is the claim relevant to answering the question? </p>
                <ol>
                    <li> Very relevant: This claim is central to answering the question. </li>
                    <li> A bit relevant: The claim makes a relevant point that is slightly important to answer the question. </li>
                    <li> Not too important: The claim makes a relevant point, but isn’t too relevant to answering the question. </li>
                    <li> Uninformative: The claim makes a peripheral point that is not relevant to answering the question. </li>
                </ol>
            </Alert>
            <Likert title="Informative" options={['Very relevant', 'A bit relevant', 'Not too important', 'Uninformative']} />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> <b>Worthiness: </b>  Is the claim necessary to be cited? </p>
                <p> Note that if the claim states a commonly known fact or common sense, then it might not need to be supported by evidence. </p>
                <ol>
                    <li> Needs evidence </li>
                    <li> Does not need evidence </li>
                </ol>
            </Alert>
            <Likert title="Worthiness" options={['Needs evidence', 'Does not need evidence']} />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> <b>Correctness: </b> Is the claim factually correct?</p>
                <ol>
                    <li> Definitely correct </li>
                    <li> Probably correct </li>
                    <li> Unsure </li>
                    <li> Likely incorrect </li>
                    <li> Definitely incorrect </li>
                </ol>
                <p>
                Judge whether the claim is factually correct. This can be based on your own expertise, the evidence returned by the system as well as minimal browsing on the internet to verify correctness. Please don’t spend longer than 2-3 minutes verifying the correctness of each claim.
                </p>
            </Alert>
            <Likert title="Correctness" options={['Definitely correct', 'Probably correct', 'Unsure', 'Likely incorrect', 'Definitely incorrect']} />
        </div>
    )
}

export default ClaimEvidence