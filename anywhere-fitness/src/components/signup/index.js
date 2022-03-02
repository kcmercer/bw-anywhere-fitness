import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Styling Imports
import {
  SignupWrapper,
  Form,
  Input,
  Button,
} from "./signupElements";

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    role:"",
  });

  const navigate = useNavigate()

  const redirectToWalkthrough = () => {
    navigate('/walkthrough')
  }

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(formFields)

    axios.post('https://anywhere-fitness-01.herokuapp.com/api/auth/register', formFields)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        redirectToWalkthrough()
      })
  }

  return (
    <>
      <SignupWrapper>
        <h1> Sign Up</h1>

        <Form>
          <Input
            value={formFields.username}
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="Create Username"
          />
          <Input
            value={formFields.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="Create Password"
          />
          <Input
            value={formFields.role}
            onChange={handleInputChange}
            type="text"
            name="role"
            placeholder="Enter Instructor Token"
          />
          <Button onClick={handleClick}>Create Account</Button>
        </Form>
      </SignupWrapper>
    </>
  );
};

export default SignUp;