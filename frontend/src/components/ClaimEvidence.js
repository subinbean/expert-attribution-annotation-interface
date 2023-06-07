import Textbox from "./Textbox"
import Likert from "./Likert"
import Answerbox from "./Answerbox";
import {Alert, Card, Form} from 'react-bootstrap';
import "./componentStyle.css"

const ClaimEvidence = (props) => {

    const reviseClaim = (text) => {
        const newClaim = props.revisedClaims.map((c, i) => {
            if (i === props.currentClaim) {
                return text.target.value;
            }
            else {
                return c;
            }
        })
        props.setRevisedClaims(newClaim)
    }

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
                Note that you can assume that certain common sense facts don’t need to be explicitly stated in the evidence to judge support. While judging support, you may be directed to very long documents. Please only skim the article and use Ctrl+F keyword searches to find relevant evidence.
                </p>
                <p>
                If the evidence includes multiple documents, please judge the support for the claim collectively using all documents.
                </p>
                <p>
                If the claim does not contain any accompanying evidence, please mark it as <b>“Missing”</b>.
                </p>
                <p>
                If the evidence directs you to a link that is inaccessible, please mark it as <b>“N/A”.</b>
                </p>
                <p>
                If the claim is partially supported, we ask you to write 1 sentence stating the reason why this is the case. First, mention the span(s) of the claim that is not fully supported, then describe why it is not fully supported.
                </p>
            </Alert>
            <Likert title="Supported" options={['Complete', 'Partial', 'Incomplete']} />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                If the claim is partially supported, we ask you to write 1 sentence stating the reason why this is the case. First, mention the span(s) of the claim that is not fully supported, then describe why it is not fully supported.
            </Alert>
            <Answerbox text="If partial support, provide the reason why" />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <p> <b>Reliability of Source: </b> Is the evidence found on a website you would consider reliable? </p>
                <ol>
                    <li> Reliable: Very reliable source. </li>
                    <li> Somewhat reliable: It isn’t the most trustworthy source, but the source often contains factual information. </li>
                    <li> Not reliable at all: This isn’t a source I would trust for work in my profession. </li>
                </ol>
            </Alert>
            <Likert title="Reliable" options={['Reliable', 'Somewhat reliable', 'Not reliable at all']} />
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
                    <li> Definitely correct: Absolutely sure that every word of the claim is correct. </li>
                    <li> Probably correct: Not completely sure, but it is likely that this claim is entirely correct. </li>
                    <li> Unsure: Cannot make an informed judgment about the claim. </li>
                    <li> Likely incorrect: Not completely sure, but there are parts in the claim that are likely incorrect. </li>
                    <li> Definitely incorrect: Absolutely sure that there is at least a part of the claim that is incorrect. </li>
                </ol>
                <p>
                Judge whether the claim is factually correct. This can be based on your own expertise, the evidence returned by the system as well as minimal browsing on the internet to verify correctness. Note that for a claim to be definitely correct, you would need to be sure of every single aspect of that claim.
                </p>
                <p>
                Please don’t spend longer than 2-3 minutes verifying the correctness of each claim.
                </p>
            </Alert>
            <Likert title="Correctness" options={['Definitely correct', 'Probably correct', 'Unsure', 'Likely incorrect', 'Definitely incorrect']} />
            <Alert style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
            4) <b> Claim Revision: </b> Please edit the above claim to ensure that it is factually correct and is supported by reliable references. If the claim is not informative, simply delete the text in the edited claim textbox.
            </Alert>
            <Card style={{ width: '40rem', marginTop: '20px', textAlign: 'left'}}>
                <Card.Body>
                    <Card.Title> {'Revise claim below:'} </Card.Title>
                    <Card.Text>
                        <Form style={{marginTop: '21px', width: '400px' }}>
                            <Form.Group className="mb-3">
                                <div key={props.claim}>
                                    <Form.Control style={{height: '200px', width: '600px'}}as='textarea' defaultValue={props.claim} onChange={reviseClaim}/>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClaimEvidence

