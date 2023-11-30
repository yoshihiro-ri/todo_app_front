import React from 'react';
import { useState } from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { DeleteTaskCardButton } from './button/DeleteTaskCardButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

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
    return (
        <Draggable index={index} draggableId={String(card_id)}>
            {(provided) => (
                <div
                    className="taskCard"
                    key={card_id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="taskCardTitleAndTaskCardDeleteButtonArea">
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
                    <TaskAddInput
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
