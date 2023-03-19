import React from 'react';
import { Todo } from './model';
import "./styles.css";
import SingleTodo from './SingleTodo';


interface Props {
    todos : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTask : Todo[];
    setCompletedTask : React.Dispatch<React.SetStateAction<Todo[]>>;
}


const  TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
      <div className='container'>
        <Droppable droppableId='TodosList'>
        {(provided) => (
          <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
          <span className='todos__heading'>
            Active Tasks
          </span>
          {
            todos.map((todo) =>(
              <SingleTodo
                todo={todo}
                todos ={todos}
                key={todo.id}
                setTodos={setTodos}
              />
          ))}
        </div>
        )}
        </Droppable>
        <Droppable droppableId='TodosRemove'>
          {(provided) =>(
            <div className='todos remove' 
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
            <span className='todos__heading'>
                Completed Tasks
            </span>
              {
                todos.map((todo) =>(
                  <SingleTodo
                    todo={todo}
                    todos ={todos}
                    key={todo.id}
                    setTodos={setTodos}
                  />
              ))}
            </div>
          )}
        </Droppable>
      </div>
  )
}

export default TodoList 
