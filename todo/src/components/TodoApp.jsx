// Here we would keep the logic of the app
// What we need:
// addTodo(text)
// deleteTodo(id)

// toggleComplete(id)
//Renders:
//<TodoForm onAdd={addTodo} />
//<DisplayTodo todos={todos} onDelete={deleteTodo} onToggle={toggleComplete} />

import { useState } from "react";

export const TodoApp = () => {
    const [tasks, setTasks] = useState([""]);
    const [newTask, setNewTask] = useState("");

    // This is the text box to type in
    function handleInputChange(e) {
        setNewTask(e.target.value)

    }

    function addTask() {
        if (newTask.trim !== "") {
        setTasks (prevTask => [...prevTask, newTask])
        setNewTask (""); //Return the placeholder into nothing after newtask activated
        };

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, val) => val !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            
            setTasks(updatedTasks) 
        }

    } 

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            
            setTasks(updatedTasks) 
        };
    } 
    
    
    return(
        <div className = "flex flex-col min-h-screen items-center justify-center">
            <h1 className = "bg-blue-600 font-bold font-times text-5xl" >
                TO DO LIST
            </h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className = "Make a round button"
                    onClick={addTask}
                >
                    Submit
                </button>
                
                {/* 
                ol is an ordered list
                we also need each keys for each task elements
                */}
                <ol> 
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">
                                {task}
                            </span>
                            <button className = "delete-but"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button className = "move-u-but"
                                onClick={() => moveTaskUp(index)}>
                                ⬆️ 
                            </button>
                            <button className = "move-d-but"
                                onClick={() => moveTaskDown(index)}>
                                ⬇️
                            </button>
                        </li>
                    )}
                </ol>
            </div>

        </div>

    );
}