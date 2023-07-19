import { useState } from "react";
import "./pagesStyle.css";
import { useNavigate } from "react-router-dom";
import { Card, Button, Alert, Form } from "react-bootstrap";
import axios from "axios";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [selectedField, setSelectedField] = useState("");
  const fields = [
    "Anthropology",
    "Architecture",
    "Aviation",
    "Biology",
    "Business",
    "Chemistry",
    "Classical Studies",
    "Climate Science",
    "Criminology",
    "Culinary Arts",
    "Economics",
    "Education",
    "Environmental Science",
    "History",
    "Journalism",
    "Linguistics",
    "Literature",
    "Mathematics",
    "Military or Law Enforcement",
    "Music",
    "Nuclear Science",
    "Philosophy",
    "Physics and Astronomy",
    "Political Science",
    "Psychology",
    "Sociology",
    "Visual Arts",
  ];

  const onClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/questions/field/${selectedField}`)
      .then((response) => {
        if (response.data.length === 0) {
          setAlert(true);
        } else {
          navigate("/questions", { state: { data: response.data } });
        }
      })
      .catch((error) => console.log(error));
  };

  const renderAlert = () => {
    if (alert) {
      return (
        <Alert
          variant="danger"
          style={{ width: "50rem", marginTop: "20px", textAlign: "left" }}>
          {" "}
          No questions matched the field you selected or all questions have been
          answered in that field{" "}
        </Alert>
      );
    }
  };

  return (
    <div align="center">
      <Card style={{ width: "50rem", marginTop: "20px" }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <b> Stage 2: Detailed Instructions </b>{" "}
          </Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            <p>
              {" "}
              Thank you for your interest in our task! We are a group of
              researchers at the University of Pennsylvania conducting a study
              to understand how experts from various fields use AI / large
              language models in information-seeking scenarios. We are
              particularly interested in evaluating the accuracy and factual
              correctness of answers produced by such systems. We are inviting
              participants who are professionals / experts in these fields:{" "}
            </p>
            <p>
              {" "}
              [Anthropology / Architecture / Biology / Business / Chemistry /
              Classical Studies / Criminology / Culinary Arts / Environmental
              Science / Economics / Education / Engineering and Technology /
              Geography / History / Journalism / Law / Linguistics / Literature
              / Mathematics / Medicine / Music / Philosophy / Physics and
              Astronomy / Political Science / Psychology / Theology / Sociology
              / Visual Arts]{" "}
            </p>
            <p>
              {" "}
              The study will proceed in two stages and we would request you in
              both stages.{" "}
            </p>
            <p>
              <ol>
                <li>
                  Question Writing: We will ask you to write a question from
                  your domain.
                </li>
                <li>
                  Answer Validation and Revision: We will show you an answer
                  produced by an AI system, and ask you to validate different
                  aspects of this answer. We will then ask you to revise this
                  answer to be factually correct and well-supported with
                  citations.
                </li>
              </ol>
            </p>
            <p>
              {" "}
              The current task is the <b> stage 2 </b> of the study.{" "}
            </p>
            <p>
              <b>
                {" "}
                <i> Note about completion time: </i>
              </b>{" "}
              Note that we have made a best estimate for how long it should take
              to complete this task, based on a small number of participants.
              However, the time spent can vary across participants and across
              questions. If you end up spending more time than the allocated
              time, please feel free to let us know and we would be happy to
              bonus you for the extra time spent. Please prioritize{" "}
              <b> quality </b> and do not rush through the task. You will get a
              completion code after you finish annotating all 3 questions.{" "}
            </p>
            <p>
              {" "}
              <font color="maroon">
                {" "}
                <b>
                  **Before moving on, please watch the following instruction
                  video for this task{" "}
                  <a
                    href="https://www.loom.com/share/29690d5feb9b4663b77e2dc807a6b0b9?sid=2b00e524-3f02-4c60-a260-73cb32e9b15e"
                    target="_blank"
                    rel="noreferrer noopener">
                    {" "}
                    here
                  </a>{" "}
                  **{" "}
                </b>{" "}
              </font>{" "}
            </p>
            Please choose your field of expertise below to begin task 2:
            <Form.Select
              style={{ marginTop: "10px", width: "400px" }}
              onChange={(field) => setSelectedField(field.target.value)}>
              <option> Choose your field of expertise </option>
              {fields.map((field) => (
                <option> {field} </option>
              ))}
            </Form.Select>
          </Card.Text>
        </Card.Body>
      </Card>
      {renderAlert()}
      <Button
        variant="outline-primary"
        onClick={onClick}
        style={{ marginTop: "20px" }}>
        {" "}
        Submit and start task{" "}
      </Button>
    </div>
  );
};

export default WelcomePage;
