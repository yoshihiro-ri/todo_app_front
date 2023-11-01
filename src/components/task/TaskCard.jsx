import React from 'react';
import { useState } from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';

export const TaskCard = ({ id, taskCardsList, setTaskCardsList }) => {
    const [inputText, setInputText] = useState('');
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="taskCard">
            <div className="taskCardTitleAndTaskCardDeleteButtonArea">
                <TaskCardTitle />
                <TaskCardDeleteButton
                    id={id}
                    taskCardsList={taskCardsList}
                    setTaskCardsList={setTaskCardsList}
                />
            </div>
            <TaskAddInput
                inputText={inputText}
                setInputText={setInputText}
                setTaskList={setTaskList}
                taskList={taskList}
            />
            <Tasks
                inputText={inputText}
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </div>
    );
};
