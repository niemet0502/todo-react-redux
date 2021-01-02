import React, { useCallback } from "react"
import {connect, useDispatch, useSelector} from "react-redux"
import { deleteTodoAction, toggleTodoAction } from "../store/todosAction"
import { todosReducer } from "../store/todosReducer"
import { todosSelector } from "../store/todosSelector"

function TodoItem({todo,onToggle}){
    return <li>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
            {todo.title}
        </label>
    </li>
}


export default function TodoList({todos, onToggle}){
    return <ul>
        {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} />)}
    </ul>
}


export function TodoListStore (){
    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()
    const onToggle = useCallback(todo => {
        dispatch(toggleTodoAction(todo))
    }, [])

    const onDelete = useCallback(todo => {
        dispatch(deleteTodoAction(todo))
    }, [])
    
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}

/*
export const TodoListStore = connect(
    (state) => ({
        todos: todosReducer(state)
    }),
    (dispatch) => ({
        onToggle: todo => dispatch(toggleTodoAction(todo))
    })
)(TodoList) */