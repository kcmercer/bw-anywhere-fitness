import styled from "styled-components";

export const SignupWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  min-width: 350px;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 2%;
  padding: 2%;
`;

export const Button = styled.button`
  padding: 2%;
  border-radius: 10px;
  margin-top: 4%;
  background-color: #f5853f;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #008dd5;
  }
`;