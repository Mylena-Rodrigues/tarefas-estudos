import React from 'react';
import Task from './Task';
const Tasks = ({ tasks, handleTaskClick,  handleTaskDeletion, description, setDescription}) => {
    
    //console.log (tasks);
    return (
        <>
            { tasks.map((task) => (
                <Task 
                key={task.id} 
                task = {task} 
                handleTaskClick = {handleTaskClick} 
                handleTaskDeletion = {handleTaskDeletion}
                description={description}
                setDescription={setDescription}/>
            ))}
        </>
    );
};
export default Tasks;