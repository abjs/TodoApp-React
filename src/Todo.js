import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export default function Todo({ todo,num, toggleTodo }) {
  const handleTodoCompleted = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <label>
          <h1>
            <Card.Header>Task {todo.number} </Card.Header>
          </h1>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                {todo.name + "      "}

                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={handleTodoCompleted}
                />
                {"     "}
              </h2>
            </ListGroup.Item>
          </ListGroup>
        </label>
      </Card>
    </div>
  );
}
