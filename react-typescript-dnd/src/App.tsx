import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");

  //This is how we are going to create an array of type or interface
  const [todos, setTodos] = useState<Todo[]>([]);

  //console.log(todo);
  return (
    <div className='App'>
      <span className='heading'>Taksify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
