import './App.css';
import './components/Button.css'
import TodoList from './components/TodoList';
import Image from './components/Image';
import {useState, useRef, useEffect} from 'react';

function App() {
  const LOCAL_STORAGE_KEY = 'Todo-Storage';
  const [todos, setTodos] = useState([]);
  const inputTodo = useRef();

  useEffect(() => {
    const storagedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storagedTodos){
      setTodos(storagedTodos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

  function clearTodos(){
    const notCompletedTodos = todos.filter(todo => !todo.complete);
    setTodos(notCompletedTodos);
  }

  function toggleTodo(id){
    const copyTodos = [...todos];
    const todo = copyTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(copyTodos);
  }

  return (
    <>
      <div className='container'>
        <h1>Todo List</h1>
        <input ref={inputTodo} className='input' type='text'/>
        <button className='btn btn-add' onClick={addTodo}>Add todo</button>
        <button className='btn btn-clear' onClick={clearTodos}>Clear todos</button>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        {todos.length === 0 && <Image/>}
      </div>
    </>
  );
}

export default App;
