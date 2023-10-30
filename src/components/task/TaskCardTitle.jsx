import React from 'react';
import { useState } from 'react';
export default function TaskCardTitle() {
    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState('Today');

    const handleClick = () => {
        setIsClick(true);
        console.log('clicked');
    };
    const handleChange = (e) => {
        setInputCardTitle(e.target.value);
        console.log(inputCardTitle);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClick(false);
    };
    const handleBlur = () => {
        setIsClick(false);
    };
    return (
        <div className="taskCardTitleInputArea" onClick={handleClick}>
            {isClick ? (
                <form onSubmit={handleSubmit}>
                    <input
                        className="taskCardTitleInput"
                        autoFocus
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={inputCardTitle}
                        maxLength={15}
                    ></input>
                </form>
            ) : (
                <h3>{inputCardTitle}</h3>
            )}
        </div>
    );
}
