import React from 'react';
import PropTypes from 'prop-types';
import { SelectContainer, SelectStyled, OptionStyled } from './styles';

export default function Select({
    block = false,
    values = [],
    ...props
}) {
    return <SelectContainer block={block}>
        <SelectStyled {...props}>
            {values.map((v, i) => <OptionStyled key={i} value={v.value}>{v.name}</OptionStyled>)}
        </SelectStyled>
    </SelectContainer>;
}

Select.propTypes = {
    block: PropTypes.bool,
    values: PropTypes.array
}