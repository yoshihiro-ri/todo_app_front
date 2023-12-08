import React from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const AddTaskInput = ({
    id,
    inputText,
    setInputText,
    setTaskList,
    taskList,
}) => {
    const createTask = async (task_id, text, cardId) => {
        const url = `${process.env.REACT_APP_API_URL}/task/`;
        const data = {
            task_id: task_id,
            content: text,
            task_card_id: cardId,
        };

        try {
            const response = await axios.post(url, data, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error(`Error in createTask: ${error}`);
        }
    };
    const handleSubmit = async (e) => {
        const task_id = uuid();
        e.preventDefault();
        if (inputText === '') {
            return;
        }
        await createTask(task_id, inputText, id);
        setTaskList([
            ...taskList,
            {
                task_id: task_id,
                content: inputText,
                cardId: id,
            },
        ]);
        setInputText('');
    };
    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add a task"
                    className="taskAddInput"
                    onChange={handleChange}
                    value={inputText}
                />
            </form>
        </div>
    );
};
