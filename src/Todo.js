import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    const handleTodoCompleted = () => {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handleTodoCompleted} />
                {todo.name}
            </label>
        </div>
    )
}
