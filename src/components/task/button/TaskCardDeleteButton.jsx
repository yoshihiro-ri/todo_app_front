import React from 'react';

export const TaskCardDeleteButton = ({
    id,
    taskCardsList,
    setTaskCardsList,
}) => {
    const deleteTaskCardButton = (id) => {
        setTaskCardsList(
            taskCardsList.filter((taskCard) => taskCard.id !== id)
        );
    };

    return (
        <button
            className="taskCardDeleteButton"
            onClick={() => deleteTaskCardButton(id)}
        >
            ✖️
        </button>
    );
};
