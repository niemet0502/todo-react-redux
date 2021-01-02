import React from "react"
import {connect} from "react-redux"

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
        todos: state.todos
    })
)(TodoList)