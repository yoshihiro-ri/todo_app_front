import React from 'react';
import { Task } from './Task.jsx';
export const Tasks = ({ inputText, taskList, setTaskList }) => {
    return (
        <div>
            {taskList.map((task) => (
                <div>
                    <Task
                        task={task}
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                </div>
            ))}
        </div>
    );
};
