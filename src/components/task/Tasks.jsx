import React from 'react';
import { useEffect } from 'react';
import { Task } from './Task.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';
export const Tasks = ({ id, taskList, setTaskList }) => {
    const handleDragEnd = async (result) => {
        reorder(taskList, result.source.index, result.destination.index);
    };
    const reorder = async (taskList, startIndex, endIndex) => {
        const newArray = [...taskList];
        const remove = newArray.splice(startIndex, 1);
        newArray.splice(endIndex, 0, remove[0]);
        setTaskList(newArray);
        for (let i = 0; i < newArray.length; i++) {
            await updateTaskCardIndex(newArray[i].task_id, i);
        }
    };
    const updateTaskCardIndex = async (task_id, index) => {
        const url = `${process.env.REACT_APP_API_URL}/task/${task_id}`;
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
    // const handleTaskListChange = () => {
    //     console.log('TaskListが変更されました:', taskList);
    // };
    // useEffect(() => {
    //     handleTaskListChange();
    // }, [taskList]);
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
