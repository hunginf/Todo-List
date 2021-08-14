import React from 'react';
import { InputContainer, InputStyled, TextareaStyled } from './styles';

export default function Input({
    block = false,
    spacing = '5px',
    styles,
    children,
    ...props
}) {
    return <InputContainer spacing={spacing} block={block}>
        {props.type && props.type === 'textarea' ? <TextareaStyled {...props} /> : <InputStyled {...props} />}
    </InputContainer>;
}