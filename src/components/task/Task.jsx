import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

export const Task = ({ task, taskList, setTaskList, index }) => {
    const deleteTask = async (taskId) => {
        const url = `${process.env.REACT_APP_API_URL}/task/${taskId}`;

        try {
            const response = await axios.delete(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(`Error in deleteTask: ${error}`);
        }
    };
    const handleDelete = async (id) => {
        await deleteTask(id);
        setTaskList(taskList.filter((task) => task.task_id !== id));
    };

    return (
        <Draggable key={task.task_id} index={index} draggableId={task.task_id}>
            {(provided) => (
                <div
                    className="taskBox"
                    key={index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p className="taskText">{task.content}</p>
                    <button
                        className="taskTrashButton"
                        onClick={() => handleDelete(task.task_id)}
                    ></button>
                </div>
            )}
        </Draggable>
    );
};
