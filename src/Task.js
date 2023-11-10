import React from 'react';

const Task = (props)=>{
    return(
        <div className='task'
        style={{ backgroundColor: props.completed? '#b9f8f4ff': '#eee'}}>
            <h1 id='h1task'>{props.taskName}</h1>
            <div className="buttons">
                <button id='bcom' onClick={()=>props.completeTask(props.id)}>Completed</button>
                <button id='bx' onClick={()=>props.deleteTask(props.id)}>X</button>
            </div>
        </div>
    )
}



export default Task;