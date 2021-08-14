import React from 'react';
import TodoList from '../../Containers/TodoList';
import * as S from './styles';

export default function Overview() {
    return <S.Container>
        <TodoList />
    </S.Container>
}