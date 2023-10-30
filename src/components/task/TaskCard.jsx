import React from 'react';
import { useState } from 'react';
import TaskCardTitle from './TaskCardTitle';
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';

export default function TaskCard() {
    const [inputText, setInputText] = useState('');
    const [taskList, setTaskList] = useState([]);
    return (
        <div className="taskCard">
            <TaskCardTitle />
            <TaskCardDeleteButton />
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
}
