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


const  TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="container">
          <div className="todos">
              <span className="todos__heading">Active Taks</span>
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
          <div className='todos remove'>
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
    </div>
  )
}

export default TodoList 
