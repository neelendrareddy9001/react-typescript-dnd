import React, {useState} from 'react';
import './App.css';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import InputField from './components/InputField';


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");

  //This is how we are going to create an array of type or interface
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTask, setCompletedTask] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  }
  
  //console.log(todos);
  //console.log(todo);
  return (
    <>
    <div className='App'>
      <span className='heading'>Taksify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} completedTask={completedTask}
          setCompletedTask={setCompletedTask}/>
    </div>
    </>
  )
}

export default App;
