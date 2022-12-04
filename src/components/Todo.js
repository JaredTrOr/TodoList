import './Todo.css';

export default function Todo({todo}){
    return(
        <>  
            <div className="todo">
                <input className='check' type='checkbox'/>
                {todo.name}
            </div> 
        </>
    );
}