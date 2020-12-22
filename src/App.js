import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import Main from './Main'
import NavBar from './NavBar';
import { v4 as uuidv4 } from 'uuid';
const Local_Storage_KEY = 'todoApp.todos'
export default function App() {
    const [todos, setTodos] = useState([]) // {id:1,name:'Todo 1',completed:true}
    const todoNameRef = useRef()
    const AddTodo = (e) => {
        const name = todoNameRef.current.value
        if (name !== '') {
            todoNameRef.current.value = null
            setTodos(e => {
                return [...e, {
                    id: uuidv4(),
                    name: name,
                    completed: false
                }
                ]
            })
        }
    }
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_KEY))
        if (storedTodos)
            setTodos(storedTodos)

    }, [])
    useEffect(() => {
        localStorage.setItem(Local_Storage_KEY, JSON.stringify(todos))
    }, [todos])

    const toggleTodo = (id) => {
        const newTodo = [...todos]
        const todo = newTodo.find(todo => todo.id === id)
        todo.completed = !todo.completed
        setTodos(newTodo)
    }
    const RemoveComplitedTodo = () => {
        const newTodo = todos.filter(todo => !todo.completed)
        setTodos(newTodo)
    }

    const numberOfTodo = todos.filter(todo => !todo.completed).length

    return (
        <>
     <NavBar />

            <Main />
            <input ref={todoNameRef} type="text" />
            <button onClick={AddTodo}>Add Todo</button>
            <br />
            <br />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <button onClick={RemoveComplitedTodo}>Clear Completed</button>
            <h3>You have {numberOfTodo} this remining to do </h3>
        </>
    )
}
