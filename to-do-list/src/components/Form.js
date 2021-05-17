import React from 'react'


 function Form({inputText, setInputText, todos, setTodos, setStatus,editStatus,setEditStatus,editTodo}){
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        if(editStatus === false){
            setTodos([
                ...todos,
                {text: inputText, completed: false, id: Math.random() * 1000}
            ]);
        }else if(editStatus === true){
            setEditStatus(false);
            setTodos(todos.map((item) => {
                if(item.id === editTodo.id){
                    return{
                        ...item, text: inputText
                    }
                }
                return item;
            }));
        }

        setInputText('');

    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
     return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className={`${editStatus ? "fas fa-edit" : "fas fa-plus-square"}`}></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="all">All</option>
                </select>
            </div>
        </form>
     );
 }

 export default Form;
