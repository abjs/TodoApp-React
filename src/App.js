import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import Main from "./Main";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import ListGroup from 'react-bootstrap/ListGroup';

const Local_Storage_KEY = "todoApp.todos";
export default function App() {
  const [todos, setTodos] = useState([]); // {id:1,name:'Todo 1',completed:true}
  const todoNameRef = useRef();
  const AddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name !== "") {
      todoNameRef.current.value = null;
      setTodos((e) => {
        return [
          ...e,
          {
            id: uuidv4(),
            name: name,
            number: todos.length+1,
            completed: false,
          },
        ];
      });
    }
  };
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storage_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodo);
  };
  const RemoveComplitedTodo = () => {
    const newTodo = todos.filter((todo) => !todo.completed);
    setTodos(newTodo);
  };

  const numberOfTodo = todos.filter((todo) => !todo.completed).length;
  const variant = "Dark";

  return (
    <>
      <NavBar />

      <Main />
      <br />
      <Container fluid>
        <Row>
          <Col>
            <input ref={todoNameRef} type="text" />

            <Button variant="secondary" onClick={AddTodo}>
              Add Todo
            </Button>
          </Col>

          <Col>
            <TodoList
              todos={todos}
              number={numberOfTodo}
              toggleTodo={toggleTodo}
            />

            <Button variant="secondary" onClick={RemoveComplitedTodo}>
              Clear Completed
            </Button>
          </Col>
          <Col>
            <Card
              bg={variant.toLowerCase()}
              //key={idx}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              //style={{ width: '18rem' }}
              //className="mb-2"
            >
              <Card.Header className="Dark d-flex justify-content-center">
                <h1>Status of TodoList</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>You have {numberOfTodo} task to do </h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
