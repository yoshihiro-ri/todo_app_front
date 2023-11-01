import React from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { useState } from 'react';
export const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([
        {
            id: 0,
            draggableId: 'item0',
        },
    ]);
    return (
        <div className="taskCardsArea">
            {taskCardsList.map((taskCardList) => (
                <TaskCard
                    key={taskCardList.id}
                    id={taskCardList.id}
                    taskCardsList={taskCardsList}
                    setTaskCardsList={setTaskCardsList}
                />
            ))}
            <AddTaskCardButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
            />
        </div>
    );
};
