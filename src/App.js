import React, {useState, useRef, useEffect} from 'react'
import TodoList from './TodoList'
import Main from './Main'
import NavBar from './NavBar';
import {v4 as uuidv4} from 'uuid';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Local_Storage_KEY = 'todoApp.todos'
export default function App() {
    const [todos, setTodos] = useState([]) // {id:1,name:'Todo 1',completed:true}
    const todoNameRef = useRef()
    const AddTodo = (e) => {
        const name = todoNameRef.current.value
        if (name !== '') {
            todoNameRef.current.value = null
            setTodos(e => {
                return [
                    ...e, {
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
        todo.completed = ! todo.completed
        setTodos(newTodo)
    }
    const RemoveComplitedTodo = () => {
        const newTodo = todos.filter(todo => !todo.completed)
        setTodos(newTodo)
    }

    const numberOfTodo = todos.filter(todo => !todo.completed).length

    return (
        <>
            <NavBar/>

            <Main/>
            <br/>
            <Container fluid>
                <Row>
                    <Col>
                        <input ref={todoNameRef}
                            type="text"/>
                        <Button variant="secondary"
                            onClick={AddTodo}>Add Todo</Button>
                    </Col>

                    <Col>

                        <TodoList todos={todos}
                            toggleTodo={toggleTodo}/>
                        <Button variant="secondary"
                            onClick={RemoveComplitedTodo}>Clear Completed</Button>

                    </Col>
                    <Col>
                        <Card variant='Dark'>
                            <Card.Header  className="d-flex justify-content-center">Status of TodoList</Card.Header>
                            <Card.Body>
                                <Card.Title >
                                    <h1>You have {numberOfTodo} this remining to do </h1>
                                    </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </>
    )
}
