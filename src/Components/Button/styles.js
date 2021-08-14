import styled from "styled-components";

export const ButtonContainer = styled.span`
    margin: 5px;
    min-width: 75px;
    display: ${props => props.block ? 'block' : 'inline-block'};
`;

export const ButtonStyled = styled.button`
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    display: inline-block;
    border-radius: 3px;
    width: 100%;
    border: none;
    padding: 5px 10px;
    color: white;
    transition: all 0.3s ease-out;
    background-color: ${props => props.disabled ? '#aeadad' : props.primary ? '#4cae4f' : props.secondary ? '#00bcd4' : props.error ? '#d9534f' : props.done ? '#2196f3' : 'gray'};
    &:hover {
        opacity: 0.6;
    }
`;