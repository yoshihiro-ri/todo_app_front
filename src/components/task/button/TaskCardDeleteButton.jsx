import React from 'react';
import axios from 'axios';

export const TaskCardDeleteButton = ({
    id,
    taskCardsList,
    setTaskCardsList,
}) => {
    const deleteTaskCard = async (id) => {
        const url = `http://127.0.0.1:5000/task_card/${id}`;

        try {
            const response = await axios.delete(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(`Error in deleteTaskCard: ${error}`);
        }
    };
    const deleteTaskCardButton = async (id) => {
        await deleteTaskCard(id);

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
