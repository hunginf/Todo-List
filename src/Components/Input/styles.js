import styled from "styled-components";

export const InputContainer = styled.div`
    margin: ${props => props.spacing !== undefined ? props.spacing : "5px"};
    display: ${props => props.block ? 'block' : 'inline-block'};
`;

export const InputStyled = styled.input`
    display: inline-block;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid gray;
    padding: 5px 10px;
    background-color: #FFF;
`;

export const TextareaStyled = styled.textarea`
    display: inline-block;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid gray;
    padding: 5px 10px;
    background-color: #FFF;
    min-height: 120px;
    resize: vertical;
`;