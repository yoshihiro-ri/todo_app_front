import React from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';
export const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([]);
    const handleDragEnd = async (result) => {
        reorder(taskCardsList, result.source.index, result.destination.index);
        console.log(taskCardsList);
    };
    const reorder = async (taskCardsList, startIndex, endIndex) => {
        const newArray = [...taskCardsList];
        const remove = newArray.splice(startIndex, 1);
        newArray.splice(endIndex, 0, remove[0]);
        setTaskCardsList(newArray);
        for (let i = 0; i < newArray.length; i++) {
            await updateTaskCardIndex(newArray[i].card_id, i);
        }
    };
    const updateTaskCardIndex = async (card_id, index) => {
        const url = `${process.env.REACT_APP_API_URL}/task_card/${card_id}`;
        const data = {
            order_index: index,
        };

        try {
            const response = await axios.put(url, data, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error(`Error in updateTaskCardIndex: ${error}`);
        }
    };
    const handleTaskCardsListChange = () => {
        console.log('TaskCardsListが変更されました:', taskCardsList);
    };

    const getTaskCards = async () => {
        const url = `${process.env.REACT_APP_API_URL}/task_card`;

        try {
            const response = await axios.get(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(`Error in getTaskCards: ${error}`);
        }
    };

    useEffect(() => {
        handleTaskCardsListChange();
    }, [taskCardsList]);

    useEffect(() => {
        const fetchTaskCards = async () => {
            const taskCards = await getTaskCards();
            setTaskCardsList(taskCards);
        };

        fetchTaskCards();
    }, []);

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppableId">
                {(provided) => (
                    <div
                        className="taskCardsArea"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {taskCardsList.map((taskCardList, index) => (
                            <TaskCard
                                key={String(taskCardList.card_id)}
                                id={String(taskCardList.card_id)}
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
