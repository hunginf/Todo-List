import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
`;

export const Inner = styled.div`
    width: 600px;
    margin: 0 auto;
    background: #FFF;
    padding: 10px;
    z-index: 1;
    position: relative;
`;
export const BackDrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #00000075;
`;

export const BoxWrapper = styled.div`
    width: 600px;
    padding: 5px 0;
`;

export const Box = styled.div`
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
    margin-top: 10px;
    padding: 10px 10px 0;
`;
export const FormControl = styled.div`
    margin-bottom: 10px;
`;
export const FormLabel = styled.div`
    margin-bottom: 5px;
`;
export const Text = styled.div``;
export const Title = styled(Text)`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;
export const Label = styled.label`
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 5px;
    display: inline-block;
`;