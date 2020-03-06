import React from 'react';

const Todo = props => {
    return(
        <div
            style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
            onClick={() => {props.clickHandler(props.id)}}
        >
            {props.task}
        </div>
    )
}

export default Todo;