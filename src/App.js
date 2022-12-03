import './App.css';
import './components/Button.css'
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className='container'>
        <h2>Todo List</h2>
        <input className='input' type="text"/>
        <button className='btn btn-add'>Add todo</button>
        <TodoList/>
        <button className='btn btn-clear'>Clear todos</button>
      </div>
    </>
  );
}

export default App;
