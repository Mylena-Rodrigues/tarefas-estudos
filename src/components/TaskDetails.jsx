import React from 'react'
import { useParams } from 'react-router';
import Button from './Button'
import './TaskDetails.css'

const TaskDetails = () => {

    const params = useParams();
    
    return (
        <>
        <div className="back-button-container">
        <Button>
            Voltar
        </Button>
        </div>

        <div className="task-details-container">
            <h3>{params.taskTitle}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed imperdiet, mauris eget congue scelerisque, diam sapien lobortis augue, non vestibulum odio lectus ac ante. 
                Duis at tempor ex. Fusce et congue elit. 
            </p>
        </div>
        </>
    );
}

export default TaskDetails;