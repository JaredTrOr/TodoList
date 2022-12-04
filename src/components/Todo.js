import './Todo.css';

export default function Todo({todo, toggleTodo}){
    
    function todoClick(){
        toggleTodo(todo.id);
    }

    return(
        <>  
            <div className="todo">
                <input className='check' type='checkbox' onChange={todoClick}/>
                {todo.name}
            </div> 
        </>
    );
}