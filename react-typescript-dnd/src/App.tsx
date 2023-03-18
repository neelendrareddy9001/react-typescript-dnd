import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoLIst from './components/TodoLIst';


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");

  //This is how we are going to create an array of type or interface
  const [todos, setTodos] = useState<Array<Todo[]>>([]);

  //Adding Task to body function
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id : Date.now(), todo, isDone : false}])
    }
  }
  console.log(todos);
  //console.log(todo);
  return (
    <div className='App'>
      <span className='heading'>Taksify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoLIst todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
