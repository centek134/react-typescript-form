import React, {useState} from 'react';
import Form from './components/Form';
import  GuestList  from './components/GuestList';
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface Guests {
  people:{
    name: string;
    age: number;
    photoUrl: string;
    note?:string;
  }[]
}

const App = () => {

  const [guests,setGuests] = useState<Guests["people"]>([
    {
      name:"James",
      age:30,
      photoUrl:"https://upload.wikimedia.org/wikipedia/commons/8/82/Kobe_Bryant_2015.jpg",
      note:"He's very talented basketball player."
    }
  ]);
  return (
    <Container>
      <Form people={guests} setPeople={setGuests}/>
      <GuestList people={guests}/>
    </Container>
  );
}

export default App;
