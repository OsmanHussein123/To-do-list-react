import react from 'react';

//import compoenents
import Todo from './ToDo'
function ToDoList({todos, setTodos, filteredTodos}){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) =>(
                    <Todo setTodos={setTodos} key={todo.id} todos={todos} todo={todo} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
