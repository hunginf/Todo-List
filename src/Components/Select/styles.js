import styled from "styled-components";

export const SelectContainer = styled.span`
    margin: 5px;
    min-width: 120px;
    display: ${props => props.block ? 'block' : 'inline-block'};
`;

export const SelectStyled = styled.select`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid gray;
    padding: 5px 10px;
    background-color: #FFF;
    border-radius: 3px;
    height: 32px;
`;

export const OptionStyled = styled.option`
`;