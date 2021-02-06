import React from 'react'
import Todo from './Todo'
export default function TodoList({ todos, number, toggleTodo }) {
    return (todos.map(todo => {
        return <Todo key={todo.id} todo={todo} num={number} toggleTodo={toggleTodo} />
    }))

}
