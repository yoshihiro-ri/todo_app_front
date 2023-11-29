import React from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
    const postTaskCard = async (title, taskCardId) => {
        const url = 'http://127.0.0.1:5000/task_card/';
        const data = {
            title: title,
            card_id: taskCardId,
        };

        try {
            const response = await axios.post(url, data, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error(`Error in postTaskCard: ${error}`);
        }
    };
    const addTaskCard = async () => {
        const taskCardId = uuid();
        const title = `untitled -${taskCardsList.length}`;

        await postTaskCard(title, taskCardId);

        setTaskCardsList([
            ...taskCardsList,
            {
                card_id: taskCardId,
                draggableId: `item${taskCardId}`,
                title: title,
            },
        ]);
    };

    return (
        <div className="addTaskCardButtonArea">
            <button className="addTaskCardButton" onClick={addTaskCard}>
                ＋
            </button>
        </div>
    );
};
