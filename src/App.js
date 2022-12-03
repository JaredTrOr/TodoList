import './App.css';
import './components/Button.css'
import TodoList from './components/TodoList';
import {useState, useRef} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const inputTodo = useRef();

  function addTodo(){
    const name = inputTodo.current.value;
    if(name === ''){
      alert('Insert a todo');
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: Math.floor(Math.random() * 100000000),
        name: name,
        complete: false
      }]
    });
    inputTodo.current.value = null;
  }

  return (
    <>
      <div className='container'>
        <h2>Todo List</h2>
        <input ref={inputTodo} className='input' type="text"/>
        <button className='btn btn-add' onClick={addTodo}>Add todo</button>
        <TodoList todos={todos}/>
        <button className='btn btn-clear'>Clear todos</button>
      </div>
    </>
  );
}

export default App;
