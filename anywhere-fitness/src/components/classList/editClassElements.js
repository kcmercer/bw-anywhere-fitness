import styled from "styled-components";

export const EditWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  align-items: center;
  margin-top: 2%;
  padding: 1%;
  border: 2px solid black;
  border-radius: 15px;
  background: #35baf6;
`;

export const Form = styled.form`
  display: flex;
  min-width: 350px;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 2%;
  padding: 2%;
  width: 80%;
`;

export const Button = styled.button`
  padding: 2%;
  border-radius: 10px;
  margin-top: 4%;
  width: 87%;
  background-color: #f5853f;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #008dd5;
  }
`;