import React from 'react';
import { SelectContainer, SelectStyled, OptionStyled } from './styles';

export default function Select({
    block = false,
    styles,
    children,
    values = [],
    ...props
}) {
    return <SelectContainer block={block}>
        <SelectStyled {...props}>
            {values.map((v, i) => <OptionStyled key={i} value={v.value}>{v.name}</OptionStyled>)}
        </SelectStyled>
    </SelectContainer>;
}