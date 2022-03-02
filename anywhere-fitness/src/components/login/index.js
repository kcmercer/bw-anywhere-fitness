import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  LoginWrapper,
  Form,
  Input,
  Button,
  SignupWrapper,
  Button2
} from "./loginElements";

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate()

  const redirectToSignup = () => {
    navigate('/signup')
  }

  const redirectToClasses = () => {
    navigate('/classes')
  }

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  // Kenneth, Mercer, Token 
  function handleClick(e) {
    e.preventDefault();
    console.log(formFields)

    axios.post('https://anywhere-fitness-01.herokuapp.com/api/auth/login', formFields)
    .then(resp => {
      localStorage.setItem('token', resp.data.token)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      redirectToClasses()
    })  
  }

  function handleSignup(e) {
    e.preventDefault()
    redirectToSignup()
  }

  return (
    <>
      <LoginWrapper>
        <h1> Login </h1>

        <Form>
          <Input
            value={formFields.username}
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <Input
            value={formFields.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="password"
          />

          <Input
            value={formFields.role}
            onChange={handleInputChange}
            type="text"
            name="role"
            placeholder="Token"
          />
          <Button onClick={handleClick}>Submit</Button>
        </Form>
      </LoginWrapper>

      <SignupWrapper>
        <h2> Need an account? </h2>
        <Button2 onClick={handleSignup}> Sign up! </Button2>
      </SignupWrapper>
    </>
  );
};

export default Login;