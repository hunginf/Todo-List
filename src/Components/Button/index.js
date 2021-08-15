import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonStyled } from './styles';

export default function Button({
    block = false,
    children,
    ...props
}) {
    return <ButtonContainer block={block}>
        <ButtonStyled {...props}>{children}</ButtonStyled>
    </ButtonContainer>;
}

Button.propTypes = {
    block: PropTypes.bool,
    children: PropTypes.node
}