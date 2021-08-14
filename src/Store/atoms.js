import { atom, selector } from "recoil";
import { getStore, setStore } from "../Utils";

// Showing to do list
export const todoListState = atom({
    key: 'todo_list_state',
    default: getStore('todoList') || [] // local storage
  });

export const setTodoList = selector({
    key: 'set_todo_list',
    get: ({get}) => get(todoListState),
    set: ({set}, newValue) => {
        setStore('todoList', newValue); // save to local storage
        set(todoListState, newValue);
    }
});

// Selection to do item
export const todoListSelectedState = atom({
    key: 'todo_list_selected_state',
    default: []
});

export const setTodoListSelectedState = selector({
    key: 'set_todo_list_selected_state',
    get: ({get}) => get(todoListSelectedState),
    set: ({set}, newValue) => set(todoListSelectedState, newValue)
});

// Search by key
export const todoListSearchState = atom({
    key: 'todo_list_search_state',
    default: []
});

export const setTodoListSearchState = selector({
    key: 'set_todo_list_search_state',
    get: ({get}) => get(todoListSearchState),
    set: ({set}, newValue) => set(todoListSearchState, newValue)
});