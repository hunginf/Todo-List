import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import AddNewTask from '../../Components/AddNewTask/index.js';
import Button from '../../Components/Button/index.js';
import Input from '../../Components/Input/index.js';
import TodoItem from '../../Components/TodoItem/index.js';
import { setTodoList } from '../../Store/atoms.js';
import * as S from './styles.js';
import {setTodoListSelectedState} from "../../Store/atoms";

export default function TodoList() {
    // Global
    const [selectedItems, setSelectedItems] = useRecoilState(setTodoListSelectedState);
    const [todoList, setTodoListItems] = useRecoilState(setTodoList);
    // Local
    const [items, setItems] = useState([]);
    const [keyword, setKeyword] = useState(null);

    useEffect(() => {
        todoNeedSort(todoList);
    }, [todoList]);

    const todoNeedSort = (values) => {
        const arrayNeedSorted = [...values];
        arrayNeedSorted.sort(function sortFunction(a,b){
            return new Date(a.due).getTime() > new Date(b.due).getTime() ? 1 : -1;
        });

        setItems(arrayNeedSorted);
    };

    const onCheckItem = (e, item) => {
        if (e.target.checked) {
            setSelectedItems(selectedItems.concat(item));
        } else {
            setSelectedItems(selectedItems.filter(i => i._id !== item._id));
        }
    };

    const onRemove = (item) => {
        const updatedItems = items.filter(_item => _item._id !== item._id);
        setTodoListItems(updatedItems);
    };

    const onRemoveItemSelected = () => {
        if (!selectedItems.length) {
            return;
        }

        const updatedItems = items.filter(_item => !selectedItems.filter(i => i._id === _item._id).length);
        setTodoListItems(updatedItems);
        // clear
        setSelectedItems([]);

    };

    const onChange = (e) => {
        const {target: {value}} = e;

        setKeyword(value);
    };

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            if (keyword) {
                setItems(todoList.filter(i => i.title.toLowerCase().includes(keyword.toLowerCase())));
            } else {
                setItems(todoList);
            }
        }
    };

    return <S.Container>
        <S.Wrap>
            <S.Top>
                <S.Title>To do List</S.Title>
                <S.SearchContainer>
                    <S.Row center>
                        <AddNewTask trigger={<Button primary>+ Create</Button>} />
                        <S.Flex>
                            <Input block spacing={0} type="text" placeholder={'Search ...'} onChange={onChange} onKeyDown={onSearch} />
                        </S.Flex>
                    </S.Row>
                </S.SearchContainer>
                <div>
                    {items.map((item, index) => <TodoItem key={index} item={item} onHandler={onCheckItem} onRemove={() => onRemove(item)} />)}
                </div>
            </S.Top>
            {!!selectedItems.length && <S.Controller>
                <S.Row center>
                    <S.Flex>Bulk Action:</S.Flex>
                    <div>
                        <Button done>Done</Button>
                        <Button error onClick={onRemoveItemSelected}>Remove</Button>
                    </div>
                </S.Row>
            </S.Controller>}
        </S.Wrap>
    </S.Container>
}