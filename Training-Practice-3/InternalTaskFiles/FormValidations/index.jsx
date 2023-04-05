import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Index = () => {
  const initailValues = {
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initailValues);
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  function onChangeInputValues(event) {
    const text = event.target.value;
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
    if (event.target.name == "email") {
      if (text === "") {
        setemailError("Email is required");
      } else {
        const condition = text.includes("@gmail.com") === true;
        if (condition) {
          setemailError("");
        } else {
          setemailError("Invalid Email Address");
        }
      }
    } else {
      if (text === "") {
        setpasswordError("Password is required.");
      } else if (text.length < 8) {
        setpasswordError("Password must be at least 8 characters long.");
      } else if (!/[A-Z]/.test(text)) {
        setpasswordError(
          "Password must contain at least one uppercase letter."
        );
      } else if (!/[a-z]/.test(text)) {
        setpasswordError(
          "Password must contain at least one lowercase letter."
        );
      } else if (!/\d/.test(text)) {
        setpasswordError("Password must contain at least one number.");
      } else if (!/\W/.test(text)) {
        setpasswordError(
          "Password must contain at least one special character."
        );
      } else {
        setpasswordError("");
      }
    }
  }

  function onSubmitData(event) {
    event.preventDefault();
    if (inputValues.email == "" && inputValues.password == "") {
      setemailError("Email is required");
      setpasswordError("Password is required");
    } else if (inputValues.email == "" && inputValues.password != "") {
      setemailError("Email is required");
      setpasswordError("");
    } else if (inputValues.email != "" && inputValues.password == "") {
      setemailError("");
      setpasswordError("Password is required");
    } else {
      setemailError("");
      setpasswordError("");
    }
  }

  return (
    <div>
      <Form onSubmit={(event) => onSubmitData(event)}>
        <h2 className="fw-bold mb-4">Login Page Validations</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={inputValues.email}
            placeholder="Enter email"
            onChange={(event) => onChangeInputValues(event)}
          />
          <Form.Text className="text-danger">{emailError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={inputValues.password}
            onChange={(event) => onChangeInputValues(event)}
          />
          <Form.Text className="text-danger">{passwordError}</Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Index;
