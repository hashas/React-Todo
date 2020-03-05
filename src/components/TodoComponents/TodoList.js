// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    console.log(props.data)
    return (
        <div>
            {props.data.map( todo => {
                return(
                    <Todo task={todo.task}/>
                )
            })}
        </div>
    )
}

export default TodoList;