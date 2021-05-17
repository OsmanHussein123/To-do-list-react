import React, {useState, useEffect} from "react";
import "./App.css";
//importing components
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"

function App() {
    //states
    const [inputText, setInputText] = useState("");
    const[todos, setTodos] = useState([])
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([])
    const [editTodo, setEditTodo] = useState("");
    const [editStatus, setEditStatus] = useState(false);

    //useEffect
    useEffect(() => {
        filteredHandler()
    }, [todos,status]);
    useEffect(() => {
        editHandler()
    },[editTodo])
    //Functions
    const editHandler = () => {
        setInputText(editTodo.text);
    }
    const filteredHandler = () => {
        switch (status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
        }
    }
    return (
      <div className="App">
          <header>
              <h1>Todo List</h1>
          </header>
        <Form  todos={todos}
               setTodos={setTodos}
               inputText={inputText}
               setInputText={setInputText}
               editStatus={editStatus}
               setStatus={setStatus}
               setEditStatus={setEditStatus}
               editTodo={editTodo}
        />
        <ToDoList inputText={inputText}
                  setTodos={setTodos}
                  todos={todos}
                  filteredTodos={filteredTodos}
                  setEditTodo = {setEditTodo}
                  setEditStatus={setEditStatus}
        />
      </div>
    );
}

export default App;
