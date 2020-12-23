import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Todo({ todo, toggleTodo }) {
    const handleTodoCompleted = () => {
        toggleTodo(todo.id)
    }
    return (
        <div>

                
<Card style={{ width: '18rem' }}>
            <label>
                                <Card.Header>Featured</Card.Header>

              <h2>  {todo.name}

                                <ListGroup variant="flush">
                                <ListGroup.Item>

    					 <input type="checkbox" checked={todo.completed} onChange={handleTodoCompleted} />

                            toggleTodo={toggleTodo}/>                          </ListGroup.Item>
            </label>
                        </ListGroup>
                        </Card>


              </h2>


        </div>
    )
}
