import React from 'react';
import { Task } from './Task.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useTestTaskStore from '../../store/todoStore.js';
export const Tasks = () => {
    const { testTasksList } = useTestTaskStore();
    const { reorderTestTask } = useTestTaskStore((state) => ({
        reorderTestTask: state.reorderTestTask,
    }));
    const handleDragEnd = (result) => {
        reorderTestTask(
            testTasksList,
            result.source.index,
            result.destination.index
        );
    };
    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {testTasksList.map((task, index) => (
                                <div key={task.id}>
                                    <Task index={index} task={task} />
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
