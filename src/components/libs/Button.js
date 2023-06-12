import React from 'react';
import styled from 'styled-components';

function Button(props) {
    return (
        <ButtonStyle onClick={props.function}>{props.title}</ButtonStyle>
    );
}


const ButtonStyle = styled.button`
    border: none;
    font-family: inherit;
    color: white;
    background: #FFD700;
    font-weight: 700;
    border-radius: 34px;
    padding:.5rem 1rem;
    font-family: 'SF Pro Display', sans-serif;
    font-size: 1rem;
    margin-top: 0.75rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        transform: translateY(-2px);
    }

`
export default Button;