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

interface Guests {
  people:{
    name: string;
    surname: string;
    age: number;
    photoUrl?: string;
    note?:string;
  }[];
}

const App: React.FC = () =>{

  const [guests,setGuests] = useState<Guests[]>([]);
  return (
    <Container>
      <Form/>
      <GuestList/>
    </Container>
  );
}

export default App;
