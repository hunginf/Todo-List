import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import * as S from './styles';
import {setTodoList, setTodoListSelectedState} from '../../Store/atoms';
import {useRecoilState, useRecoilValue} from 'recoil';

export default function TodoItem({
    onRemove = () => {},
    onHandler = () => {},
    item = {}
}) {
    // Global
    const [items, setItems] = useRecoilState(setTodoList);
    const selectedItems = useRecoilValue(setTodoListSelectedState);
    // Local
    const [todoItem, setTodoItem] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTodoItem(item);
    }, [item]);


    const priorityOptions = [
        {name: 'Low', value: 'low'},
        {name: 'Normal', value: 'normal'},
        {name: 'High', value: 'high'},
    ];

    const onChange = (e) => {
        const {target: {name, value}} = e;
        const itemUpdated = {...todoItem, ...{[name]: value}};
        setTodoItem(itemUpdated);
    };

    const onSave = (item) => {
        const updatedItems = items.map(_item => {
            if (_item._id === item._id) {
                return item;
            }

            return _item;
        });

        setItems(updatedItems);
        setOpen(false);
    }

    return <S.BoxWrapper>
        <S.Box>
            <S.Top>
                <S.Row center>
                    <S.Flex>
                        <label><input type='checkbox' checked={selectedItems.filter(i => i._id === todoItem._id).length} onChange={(e) => onHandler(e, todoItem)} /> {todoItem.title}</label>
                    </S.Flex>
                    <div>
                        <Button secondary onClick={() => setOpen(!open)}>Detail</Button>
                        <Button error onClick={onRemove}>Remove</Button>
                    </div>
                </S.Row>
            </S.Top>
            {open && <S.Bottom>
                <S.FormControl>
                    <Input name="title" type="text" block value={todoItem.title} onChange={onChange} />
                </S.FormControl>
                <S.FormControl>
                    <div>
                        <label>Description</label>
                    </div>
                    <Input type="textarea" name="description" block value={todoItem.description} onChange={onChange} />
                </S.FormControl>
                <S.Row center responsive={375}>
                    <S.Flex>
                        <label>Due Date</label>
                        <S.FormControl>
                            <Input type="date" name="due" block value={moment(todoItem.due).format('YYYY-MM-DD')} onChange={onChange} />
                        </S.FormControl>
                    </S.Flex>
                    <S.Flex>
                        <label>Priority</label>
                        <S.FormControl>
                            <Select name="priority" block values={priorityOptions} defaultValue={todoItem.priority} onChange={onChange} />
                        </S.FormControl>
                    </S.Flex>
                </S.Row>
                <S.FormControl>
                    <Button primary block onClick={() => onSave(todoItem)}>Update</Button>
                </S.FormControl>
            </S.Bottom>}
        </S.Box>
    </S.BoxWrapper>;
}

TodoItem.propTypes = {
    onRemove: PropTypes.func,
    onHandler: PropTypes.func,
    item: PropTypes.object,
}