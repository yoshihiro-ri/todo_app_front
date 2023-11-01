import React from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([
        {
            id: 0,
            draggableId: 'item0',
        },
    ]);
    const handleDragEnd = (result) => {
        const reorder = (taskList, startIndex, endIndex) => {
            const remove = taskList.splice(startIndex, 1);
            taskList.splice(endIndex, 0, remove[0]);
        };
        reorder(taskCardsList, result.source.index, result.destination.index);

        setTaskCardsList(taskCardsList);
    };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div
                        className="taskCardsArea"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {taskCardsList.map((taskCardList, index) => (
                            <TaskCard
                                key={taskCardList.id}
                                id={taskCardList.id}
                                taskCardsList={taskCardsList}
                                setTaskCardsList={setTaskCardsList}
                                index={index}
                            />
                        ))}
                        <AddTaskCardButton
                            taskCardsList={taskCardsList}
                            setTaskCardsList={setTaskCardsList}
                        />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
