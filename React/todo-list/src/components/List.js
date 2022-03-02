import React, { useState } from 'react';

const List = (props) => {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])
    const handleClick = (e) => {
        e.preventDefault();
        if (newTodo.length === 0) {
            return;
        }
        const todoItem = {
            text: newTodo,
            complete: false
        };
        setTodos([...todos, todoItem]);
        setNewTodo("");
    };
    const handleDelete = (deleteI) => {
        const filteredTodos = todos.filter((todo, index) => {
            return index !== deleteI;
        });
        setTodos(filteredTodos);
    }

    const checkedTodo = (idx) => {
        const updatedTodos = todos.map((todo, index) => {
            if (idx === index) {
                const updatedTodo = { ...todo, complete: !todo.complete};
                return updatedTodo
            }
        })
        setTodos(updatedTodos);
    }
    return (
        <div>
            <form onSubmit={(e) => { handleClick(e) }}>
                <input
                type='text'
                onChange={(e) => { setNewTodo(e.target.value)}}
                value={newTodo} />
                <div>
                    <button>Add</button>
                </div>
            </form>
            <hr />
            {
                todos.map((todo, index) => {
                    const todoClasses = [];
                    if (todo.complete) {
                        todoClasses.push("line-through");
                    }
                    return (
                    <div key={index}>
                        
                        <input
                        onChange={(e) => {
                            checkedTodo(index)
                        }} 
                        checked={todo.complete} 
                        type='checkbox' />

                        <span className={todoClasses.join(" ")}>{ todo.text }</span>

                        <button 
                        style={{marginLeft: '15px'}}
                        onClick={(e) => {
                            handleDelete(index);
                            } }>Delete</button>
                    </div>
                    );
                })
            }
        </div>
    )
}


export default List;