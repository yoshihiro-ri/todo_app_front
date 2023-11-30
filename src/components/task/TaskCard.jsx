import React from 'react';
import { useState, useEffect } from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { DeleteTaskCardButton } from './button/DeleteTaskCardButton';
import { AddTaskInput } from './input/AddTaskInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

export const TaskCard = ({
    id,
    taskCardsList,
    setTaskCardsList,
    index,
    title,
}) => {
    const card_id = taskCardsList[index].card_id;
    const [inputText, setInputText] = useState('');
    const [taskList, setTaskList] = useState([]);
    const getTasks = async (cardId) => {
        const url = `http://127.0.0.1:5000/task/${cardId}`;

        try {
            const response = await axios.get(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(`Error in getTasks: ${error}`);
        }
    };
    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks(card_id);
            setTaskList(tasks);
        };

        fetchTasks();
    }, []);
    return (
        <Draggable index={index} draggableId={String(card_id)}>
            {(provided) => (
                <div
                    className="taskCard"
                    key={card_id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div
                        className="taskCardTitleAndTaskCardDeleteButtonArea"
                        {...provided.dragHandleProps}
                    >
                        <TaskCardTitle
                            card_id={card_id}
                            taskCardsList={taskCardsList}
                            setTaskCardsList={setTaskCardsList}
                            title={title}
                        />
                        <DeleteTaskCardButton
                            card_id={card_id}
                            taskCardsList={taskCardsList}
                            setTaskCardsList={setTaskCardsList}
                        />
                    </div>
                    <AddTaskInput
                        id={card_id}
                        inputText={inputText}
                        setInputText={setInputText}
                        setTaskList={setTaskList}
                        taskList={taskList}
                    />
                    <Tasks
                        id={card_id}
                        inputText={inputText}
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                </div>
            )}
        </Draggable>
    );
};
