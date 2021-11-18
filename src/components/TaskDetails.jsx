import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Button from './Button'
import './TaskDetails.css'

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (
        <>

        <div className="task-details-container">
            <h3>{params.taskTitle}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed imperdiet, mauris eget congue scelerisque, diam sapien lobortis augue, non vestibulum odio lectus ac ante. 
                Duis at tempor ex. Fusce et congue elit. 
            </p>
        </div>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>
                Voltar
            </Button>
        </div>
        </>
    );
}

export default TaskDetails;