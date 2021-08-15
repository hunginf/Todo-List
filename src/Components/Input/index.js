import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputStyled, TextareaStyled } from './styles';

export default function Input({
    block = false,
    spacing = '5px',
    ...props
}) {
    return <InputContainer spacing={spacing} block={block}>
        {props.type && props.type === 'textarea' ? <TextareaStyled {...props} /> : <InputStyled {...props} />}
    </InputContainer>;
}

Input.propTypes = {
    block: PropTypes.bool,
    spacing: PropTypes.string,
    type: PropTypes.string,
}