import React, { useState } from "react";

import {
  LoginWrapper,
  Form,
  Input,
  Button,
} from "./loginElements";

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formFields)
  }

  return (
    <>
      <LoginWrapper>
        <h1> Login</h1>

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
          <Button onClick={handleClick}>Submit</Button>
        </Form>
      </LoginWrapper>
    </>
  );
};

export default Login;