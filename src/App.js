import './App.css';
import './components/Button.css'
import TodoList from './components/TodoList';
import Image from './components/Image';
import {useState, useRef} from 'react';
import empty from './img/empty.png';

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
        <h1>Todo List</h1>
        <input ref={inputTodo} className='input' type="text"/>
        <button className='btn btn-add' onClick={addTodo}>Add todo</button>
        <TodoList todos={todos} className={todos ? 'visible' : 'noVisible'}/>
        {todos.length === 0 && <Image/>}
        <button className='btn btn-clear'>Clear todos</button>
      </div>
    </>
  );
}

export default App;
