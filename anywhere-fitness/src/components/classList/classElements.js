import styled from "styled-components";

export const ClassWrapper = styled.div`
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

export const ClassH2 = styled.h2`
  font-size: 2rem;
  margin: 0%;
  padding: 0%;
  padding-top: 2%;
  align-self: flex-start;
  width: 100%;
  border-bottom: 1px solid black;
`

export const ClassH4 = styled.h4`
  font-size: 1.25rem;
  margin: 0%;
  padding: 0%;
  align-self: flex-start;
`

export const ClassButton = styled.button`
  margin-top: 5%;
  padding: 1%;
  padding-left: 4%;
  padding-right: 4%;
  border-radius: 10px;
  background-color: #f5853f;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #008dd5;
  }
`