import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <form onSubmit={event => {props.submitHandler(event)}}>
                <input 
                    input="text"
                    value={props.value}
                    onChange={event => {props.changeHandler(event)}} 
                    placeholder="Enter task..."
                />
                <button >Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;
