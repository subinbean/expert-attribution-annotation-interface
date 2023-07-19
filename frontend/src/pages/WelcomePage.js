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
              Thank you for <b>previously participating in stage 2 </b> of our
              study! We are a group of researchers at the University of
              Pennsylvania conducting a study to understand how experts from
              various fields use AI / large language models in
              information-seeking scenarios. We are interested in evaluating the
              accuracy and factual correctness of answers produced by such
              systems.{" "}
            </p>
            <p>
              Just a reminder that in stage 2, we will show you an answer
              produced by an AI system, and ask you to validate different
              aspects of this answer. We will then ask you to revise this answer
              to be factually correct and supported with accurate citations.
            </p>
            <p>
              In this version of the task, we will first ask you to select{" "}
              <b> your field </b> from the dropdown and then work on the
              questions. A single study contains 2 questions, but you can feel
              free to work on more than 2 if you wish (you can just use the same
              link and select your field again). Please let us know if you work
              on more than 2 questions and we will be happy to bonus you for
              your time.
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
              bonus you for the extra time spent. Please prioritize quality and
              do not rush through the task. You will get a completion code after
              you finish annotating both questions.
            </p>
            <p>
              {" "}
              <font color="maroon">
                {" "}
                <b>
                  **If you haven’t already, please watch the following
                  instruction video for this task{" "}
                  <a
                    href="https://www.loom.com/share/29690d5feb9b4663b77e2dc807a6b0b9?sid=2b00e524-3f02-4c60-a260-73cb32e9b15e"
                    target="_blank"
                    rel="noreferrer noopener">
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
