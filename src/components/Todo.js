export default function Todo({todo}){
    return(
        <>  
            <div className="todo">
                <input type='checkbox'/>
                {todo.name}
            </div> 
        </>
    );
}