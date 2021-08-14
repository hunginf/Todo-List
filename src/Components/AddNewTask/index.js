import React, { useState } from 'react';
import * as S from './styles';
import moment from 'moment';
import Button from '../../Components/Button/index.js';
import Input from '../../Components/Input/index.js';
import Select from '../Select';
import { UUIDGeneratorBrowser } from '../../Utils/index.js';
import { useRecoilState } from 'recoil';
import { setTodoList } from '../../Store/atoms';

export default function AddNewTask({
    ...props
}) {
    // Global
    const [items, setItems] = useRecoilState(setTodoList);
    // Local
    const [item, setItem] = useState({});
    const [open, setOpen] = useState(false);
    const priorityOptions = [
        {name: 'Low', value: 'low'},
        {name: 'Normal', value: 'normal'},
        {name: 'High', value: 'high'},
    ];
    // validate
    const isValide = item.title && item.description;

    const onAdd = (item) => {
        const newItem = {
            _id: UUIDGeneratorBrowser(),
            _created: new Date().getTime(),
            title: item.title,
            due: item.due || moment().format('YYYY-MM-DD'),
            priority: item.priority,
            description: item.description
        };
        setItems(items.concat(newItem));
        // close form
        setOpen(false);
        // clear form
        setItem({});
    };

    const onChange = (e) => {
        const {target: {name, value}} = e;
        const itemUpdated = {...item, ...{[name]: value}};
        setItem(itemUpdated);
    };

    const onClose = () => {
        setOpen(false);
        // clear form
        setItem({});
    }

    return <div>
        {React.cloneElement(props.trigger, {onClick: () => setOpen(!open)})}
        {open && <S.Container>
            <S.BackDrop onClick={onClose} />
            <S.Inner>
                <S.Title>New Task</S.Title>
                <S.Bottom>
                    <S.FormControl>
                        <Input name="title" type="text" block value={item.title || ''} onChange={onChange} placeholder="Add new task..." />
                    </S.FormControl>
                    <S.FormControl>
                        <div>
                            <S.Label>Description</S.Label>
                        </div>
                        <Input type="textarea" name="description" block value={item.description} onChange={onChange} />
                    </S.FormControl>
                    <S.Row center responsive={375}>
                        <S.Flex>
                            <S.Label>Due Date</S.Label>
                            <S.FormControl>
                                <Input type="date" name="due" block value={moment(item.due).format('YYYY-MM-DD')} onChange={onChange} />
                            </S.FormControl>
                        </S.Flex>
                        <S.Flex>
                            <S.Label>Priority</S.Label>
                            <S.FormControl>
                                <Select name="priority" block values={priorityOptions} defaultValue={item.priority} onChange={onChange} />
                            </S.FormControl>
                        </S.Flex>
                    </S.Row>
                    <S.FormControl>
                            <Button primary block onClick={() => onAdd(item)} disabled={!isValide}>Add</Button>
                        </S.FormControl>
                </S.Bottom>
            </S.Inner>
        </S.Container>}
    </div>
}