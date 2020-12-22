import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    const handleTodoCompleted = () => {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                
              <h2>  {todo.name}
              <input type="checkbox" checked={todo.completed} onChange={handleTodoCompleted} />
              </h2>
            </label>
        </div>
    )
}
