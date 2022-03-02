import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`

export const ListButton = styled.button`
  margin-top: 5%;
  margin-bottom: 5%;
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