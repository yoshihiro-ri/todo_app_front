import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const TaskCardTitle = ({
    card_id,
    title,
    taskCardsList,
    setTaskCardsList,
}) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
    };
    const handleChange = async (e) => {
        const newTitle = e.target.value;
        const newTaskCardsList = taskCardsList.map((taskCard) => {
            if (taskCard.card_id === card_id) {
                return { ...taskCard, title: newTitle };
            }
            return taskCard;
        });
        setTaskCardsList(newTaskCardsList);

        const url = `${process.env.REACT_APP_API_URL}/task_card/${card_id}`;
        const data = {
            title: newTitle,
        };
        try {
            const response = await axios.put(url, data, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error(`Error in postTaskCard: ${error}`);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClick(false);
    };

    const handleBlur = () => {
        setIsClick(false);
    };
    return (
        <div className="taskCardTitleInputArea" onClick={handleClick}>
            {isClick ? (
                <form onSubmit={handleSubmit}>
                    <input
                        className="taskCardTitleInput"
                        autoFocus
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={title}
                        maxLength={15}
                    ></input>
                </form>
            ) : (
                <h3>{title}</h3>
            )}
        </div>
    );
};
