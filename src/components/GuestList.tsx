import React from 'react'
import styled from 'styled-components'

const GuestsSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 50%;
    & > div{
        width: 100%;
        min-height: 120px;
        border: 1px solid blueviolet;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        & img {
            border-radius: 50%;
            width: 100px;
            height: 100px;

        }
    }
`; 
 const GuestList: React.FC = () => {
    return (
        <GuestsSection>
            <div>
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/8/82/Kobe_Bryant_2015.jpg'/>
                <div>
                <h2>Name</h2>
                <h2>Surname</h2>
                </div>
                <p>Age</p>
                <p>note</p>
            </div>
        </GuestsSection>
    );
};
export default GuestList