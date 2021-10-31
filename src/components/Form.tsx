import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  width: 50%;
  background-color: white;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  & > label {
    align-items: flex-start;
    font-size: 26px;
  }
  & > input {
    width: 100%;
    font-size: 20px;
    align-items: center;
    padding: 5px 0 5px 5px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid black;
    outline: none;
    &:focus {
      border: 2px solid black;
    }
  }
  & > button {
      font-size: 20px;
      width: 60%;
      margin: 20px auto 0 auto;
      padding: 10px 20px;
      cursor: pointer;
      background-color: blueviolet;
      color: white;
      border: 2px solid white;
      transition: 0.5s;
      font-weight: 500;
      &:hover{
          color: blueviolet;
          background-color: white;
          border: 2px solid blueviolet;
      }
  }
`;

const Form: React.FC = () => {
  return (
    <FormContainer>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" />
      <label htmlFor="surname">Surname:</label>
      <input name="surname" type="text" />
      <label htmlFor="age">Age:</label>
      <input name="age" type="number" />
      <label htmlFor="img">ImgUrl:</label>
      <input name="img" type="text" />
      <button>Add Person</button>
    </FormContainer>
  );
};
export default Form;
