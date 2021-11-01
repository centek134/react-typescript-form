import React ,{useState} from "react";
import styled from "styled-components";
import { Guests as Props } from "../App";

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

interface IProps{
  people:Props["people"]
  setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}

const Form: React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState({
    name:"",
    age:"",
    photoUrl:"",
    note:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = ():void => {
    if( !input.name || !input.age || !input.photoUrl){
      return;
    };
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        photoUrl: input.photoUrl,
        note: input.note
        
      }
    ]);
    setInput({
      name:"",
      age:"",
      photoUrl:"",
      note:""
    })
  };

  return (
    <FormContainer>
      <label htmlFor="name">Name:</label>
      <input value={input.name} onChange={handleChange} name="name" type="text" />
      <label htmlFor="age">Age:</label>
      <input value={input.age} onChange={handleChange} name="age" type="number" />
      <label htmlFor="photoUrl">ImgUrl:</label>
      <input value={input.photoUrl} onChange={handleChange} name="photoUrl" type="text" />
      <label htmlFor="note">Note</label>
      <input value={input.note} onChange={handleChange} name="note" type="text" />
      <button onClick={handleClick}>Add Person</button>
    </FormContainer>
  );
};
export default Form;
