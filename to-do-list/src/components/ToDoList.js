import react from 'react';

//import compoenents
import Todo from './ToDo'
function ToDoList({todos, setTodos, filteredTodos, inputText, setEditTodo, setEditStatus}){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) =>(
                    <Todo setTodos={setTodos}
                          key={todo.id}
                          todos={todos}
                          todo={todo}
                          text={todo.text}
                          inputText={inputText}
                          setEditTodo = {setEditTodo}
                          setEditStatus = {setEditStatus}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
