import React from 'react';
import styled from 'styled-components';
import { Guests as Iprops } from '../App';

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


 const GuestList: React.FC<Iprops> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map( person => {
            return(
                <GuestsSection>
                <div>
                    <img alt='list-img' src={person.photoUrl}/>
                    <div>
                    <h2>{person.name}</h2>
                    </div>
                    <p>{person.age}</p>
                    <p>{person.note}</p>
                </div>
            </GuestsSection>
            );
        });
    };

    return (
        <React.Fragment>
            {renderList()}
        </React.Fragment>
    );
};
export default GuestList