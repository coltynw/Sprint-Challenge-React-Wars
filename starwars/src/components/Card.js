import React from "react";
import styled from "styled-components";


const BoxTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    margin: 3%;
    font-style: italic;
    opacity: 100%;
`;


const TheCard = props => {
    return (
        <div className="card">
                <BoxTitle> {props.name}</BoxTitle>
                <p> Birth Year: {props.birthYear}</p>
                <p> Gender: {props.gender}</p>
                <p> Hair Color: {props.hairColor}</p>
                <p> Height: {props.height}</p>  
        </div>  
    )
}

export default TheCard; 