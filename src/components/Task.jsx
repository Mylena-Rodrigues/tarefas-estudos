import React from 'react';
import "./Task.css";
import { CgClose, CgInfo } from 'react-icons/cg';
import {BrowserRouter as Router} from 'react-router'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div 
            className = 'task-container'
            style={(task.completed) ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className= 'task-title' onClick = {() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className= 'buttons-container' onClick = {() => handleTaskDeletion(task.id)}>
                <button className='remove-task-button'>
                    <CgClose/>
                </button>
            </div>

            <div className= 'buttons-container'>
                <button className='see-task-details-button' /*onClice={}*/>
                    <CgInfo/>
                </button>
            </div>
        </div>
    );
    //return <div className = "task-container">{task.title}</div>
}

export default Task;