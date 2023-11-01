import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useTestTaskStore from '../../store/todoStore';
export const Task = ({ task, index }) => {
    const { deleteTestTask } = useTestTaskStore((state) => ({
        testTaskList: state.testTaskList,
        deleteTestTask: state.deleteTestTask,
    }));

    return (
        <Draggable index={index} draggableId={task.draggableId}>
            {(provided) => (
                <div
                    className="taskBox"
                    key={index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p className="taskText">{task.text}</p>
                    <button
                        className="taskTrashButton"
                        onClick={() => deleteTestTask(task.id)}
                    >
                        <i>🚮</i>
                    </button>
                </div>
            )}
        </Draggable>
    );
};
