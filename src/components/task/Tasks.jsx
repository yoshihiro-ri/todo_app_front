import React from 'react';
import { useEffect } from 'react';
import { Task } from './Task.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const Tasks = ({ id, taskList, setTaskList }) => {
    const handleDragEnd = (result) => {
        const reorder = (taskList, startIndex, endIndex) => {
            const remove = taskList.splice(startIndex, 1);
            taskList.splice(endIndex, 0, remove[0]);
        };
        reorder(taskList, result.source.index, result.destination.index);

        setTaskList(taskList);
    };

    const handleTaskListChange = () => {
        console.log('TaskListが変更されました:', taskList);
    };
    useEffect(() => {
        handleTaskListChange();
    }, [taskList]);
    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId={id}>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {taskList.map((task, index) => (
                                <div key={task.id}>
                                    <Task
                                        index={index}
                                        task={task}
                                        taskList={taskList}
                                        setTaskList={setTaskList}
                                    />
                                </div>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};
