import styled from "styled-components";

export const BoxWrapper = styled.div`
    padding: 5px 0;
`;

export const Box = styled.div`
    border: 1px solid #000;
    padding: 10px 0;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    @media (max-width: ${props => props.responsive || '0'}px) {
        display: block;
    }
`;
export const Flex = styled.div`
    flex: 1;
`;
export const Top = styled.div`
    padding: 0 10px;
`;
export const Bottom = styled.div`
    border-top: 1px solid #000;
    margin-top: 10px;
    padding: 10px 10px 0;
`;
export const FormControl = styled.div`
    margin-bottom: 10px;
`;
export const FormLabel = styled.div`
    margin-bottom: 5px;
`;