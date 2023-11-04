import React from 'react';
import { useState } from 'react';
export const TaskCardTitle = ({
    id,
    title,
    taskCardsList,
    setTaskCardsList,
}) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(true);
    };
    const handleChange = (e) => {
        const newTitle = e.target.value;
        const newTaskCardsList = taskCardsList.map((taskCard) => {
            if (taskCard.id === id) {
                return { ...taskCard, title: newTitle };
            }
            return taskCard;
        });
        setTaskCardsList(newTaskCardsList);
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
