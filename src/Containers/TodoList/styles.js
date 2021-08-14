import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
`;
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh);
    box-sizing: border-box;
`;
export const Top = styled.div`
    flex: 1;
    padding: 0 10px 50px;
`;
export const SearchContainer = styled.div`
    margin: 15px 0;
`;
export const Text = styled.div``;
export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;
export const Text_1 = styled(Text)``;
export const Text_2 = styled(Text)``;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.center ? 'center' : 'flex-start'};
`;
export const Flex = styled.div`
    flex: 1;
`;
export const Controller = styled.div`
    padding: 20px;
    border-top: 1px solid #000;
    background-color: #dad9d9;
`;