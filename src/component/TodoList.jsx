import React from "react"
import {connect} from "react-redux"
import { toggleTodoAction } from "../store/todosAction"
import { todosReducer } from "../store/todosReducer"

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

export const TodoListStore = connect(
    (state) => ({
        todos: todosReducer(state)
    }),
    (dispatch) => ({
        onToggle: todo => dispatch(toggleTodoAction(todo))
    })
)(TodoList)