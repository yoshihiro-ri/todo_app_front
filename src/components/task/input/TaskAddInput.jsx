import React from 'react';
import { v4 as uuid } from 'uuid';
import useTestTaskStore from '../../../store/todoStore';
export const TaskAddInput = ({ inputText, setInputText }) => {
    const { addTestTask } = useTestTaskStore((state) => ({
        addTestTask: state.addTestTask,
    }));
    const handleSubmit = (e) => {
        const taskId = uuid();
        e.preventDefault();
        if (inputText === '') {
            return;
        }
        addTestTask(inputText, taskId);
        setInputText('');
    };
    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add a task"
                    className="taskAddInput"
                    onChange={handleChange}
                    value={inputText}
                />
            </form>
        </div>
    );
};
