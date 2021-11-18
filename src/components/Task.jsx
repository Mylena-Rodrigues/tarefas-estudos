import React, { useState } from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import {BiDownArrow} from 'react-icons/bi';
import { useHistory } from 'react-router-dom'

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion, description, setDescription}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    
    const [active, setActive] = useState(false);
    console.log(active);

    task.description = description;
    console.log(task.description);
    return (
        <div 
            className = 'task-container'
            style={(task.completed) ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className="task-content" >
                <div 
                    className= 'task-title' 
                    onClick = {() => handleTaskClick(task.id)}>
                    {task.title}
                </div>
                <div className= 'buttons-container'>
                    <button className="open-task-description-button" onClick = {() => setActive(!active)}>
                        <BiDownArrow />
                    </button>
                    <button className='see-task-details-button' onClick={handleTaskDetailsClick}>
                        <CgInfo/>
                    </button>

                    <button className='remove-task-button' onClick = {() => handleTaskDeletion(task.id)}>
                        <CgClose/>
                    </button>
                </div>
            </div>
            <div className="task-description" style={active ?  {display: 'flex'} : {display:'none'}}>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descreva sua tarefa"/>
            </div>
            
        </div>
    );
    //return <div className = "task-container">{task.title}</div>
}

export default Task;