import React from 'react';
import { ButtonContainer, ButtonStyled } from './styles';

export default function Button({
    block = false,
    styles,
    children,
    ...props
}) {
    return <ButtonContainer block={block}>
        <ButtonStyled {...props}>{children}</ButtonStyled>
    </ButtonContainer>;
}