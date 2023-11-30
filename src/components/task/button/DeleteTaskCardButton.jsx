import React from 'react';
import axios from 'axios';

export const DeleteTaskCardButton = ({
    card_id,
    taskCardsList,
    setTaskCardsList,
}) => {
    const deleteTaskCard = async (card_id) => {
        const url = `http://127.0.0.1:5000/task_card/${card_id}`;

        try {
            const response = await axios.delete(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(`Error in deleteTaskCard: ${error}`);
        }
    };
    const deleteTaskCardButton = async (card_id) => {
        await deleteTaskCard(card_id);

        setTaskCardsList(
            taskCardsList.filter((taskCard) => taskCard.card_id !== card_id)
        );
    };

    return (
        <button
            className="taskCardDeleteButton"
            onClick={() => deleteTaskCardButton(card_id)}
        >
            ✖️
        </button>
    );
};
