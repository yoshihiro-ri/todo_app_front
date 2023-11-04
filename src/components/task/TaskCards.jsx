import React from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([
        {
            id: 'unset',
            draggableId: 'item0',
            title: 'untitled',
        },
    ]);
    const handleDragEnd = (result) => {
        const reorder = (taskCardsList, startIndex, endIndex) => {
            const newArray = [...taskCardsList];
            const remove = newArray.splice(startIndex, 1);
            newArray.splice(endIndex, 0, remove[0]);
            setTaskCardsList(newArray);
        };
        reorder(taskCardsList, result.source.index, result.destination.index);
    };

    const handleTaskCardsListChange = () => {
        console.log('TaskCardsListが変更されました:', taskCardsList);
    };
    useEffect(() => {
        handleTaskCardsListChange();
    }, [taskCardsList]);

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppableId" direction="horizontal">
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
                                title={taskCardList.title}
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
