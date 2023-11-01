import React from 'react';
import { useState } from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({ id, taskCardsList, setTaskCardsList, index }) => {
    const [inputText, setInputText] = useState('');
    const [taskList, setTaskList] = useState([]);
    return (
        <Draggable index={index} draggableId={taskCardsList[index].draggableId}>
            {(provided) => (
                <div
                    className="taskCard"
                    key={index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
            )}
        </Draggable>
    );
};
